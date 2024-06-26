'use client'

import Image from 'next/image'
import { LoginModal } from '@/app/components/login-modal'
import { useContext, useEffect, useState } from 'react'
import { AvatarAndRating } from '@/app/components/avatar-and-rating/styles'
import { Controller, useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { Rating } from '@/app/components/rating'
import { distanceToNow } from '@/utils/distanceToNow'
import { ExploreBooksContext } from '@/context/explore-books'
import { IRatingFindByBookId, createRating } from '@/fetch/ratings'
import { Check, X } from '@phosphor-icons/react'
import { Loader } from '@/app/components/loader'
import {
  BookRatingForm,
  RateButtonContainer,
  RatingCard,
  RatingContent,
  RatingsContainer,
} from './styles'

interface IRatingsProps {
  bookId: string
}

interface IFormInputs {
  rate: number
  description: string
}

export function Ratings({ bookId }: IRatingsProps) {
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [isCommented, setIsCommented] = useState(false)

  const { getAllRatings, ratings } = useContext(ExploreBooksContext)

  const { register, handleSubmit, reset, control } = useForm<IFormInputs>({
    defaultValues: {
      rate: 0,
    },
  })

  const { data: session, status } = useSession()

  const userId = session?.user.id

  const isAuthenticated = status === 'authenticated'

  useEffect(() => {
    if (userId) {
      const alreadyCommented = ratings.some(
        (rating) => rating.user_id === userId,
      )

      setIsCommented(alreadyCommented)
    }
  }, [ratings, isCommented, userId])

  async function createNewRating(formInputs: IFormInputs) {
    const { rate, description } = formInputs

    const userId = session?.user.id

    await createRating({
      userId,
      bookId,
      description,
      rate: Number(rate),
    })

    reset()

    setShowCommentBox(false)

    await getAllRatings(bookId)
  }

  function handleCLickResetForm() {
    setShowCommentBox(false)
  }

  function commentBox() {
    return (
      <RatingCard>
        <AvatarAndRating>
          <div>
            <Image
              src={session?.user?.image ?? ''}
              height={40}
              width={40}
              alt="User avatar"
            />
            <h4>{session?.user?.name}</h4>
          </div>

          <Controller
            control={control}
            name="rate"
            render={({ field }) => (
              <Rating
                size="large"
                value={Number(field.value) ?? 0}
                onChange={field.onChange}
              />
            )}
          />
        </AvatarAndRating>

        <BookRatingForm onSubmit={handleSubmit(createNewRating)}>
          <textarea
            placeholder="Escreva sua avaliação"
            maxLength={450}
            required
            {...register('description')}
          />

          <div>
            <button type="reset" onClick={handleCLickResetForm}>
              <X size={24} />
            </button>

            <button type="submit">
              <Check size={24} />
            </button>
          </div>
        </BookRatingForm>
      </RatingCard>
    )
  }

  function mapRatings(ratings: IRatingFindByBookId[]) {
    const sortedRatingsByDate = ratings?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )

    return sortedRatingsByDate?.map((rating) => (
      <RatingCard key={rating.id}>
        <AvatarAndRating>
          <div>
            <Image src={rating.user.image} height={40} width={40} alt="test" />

            <h4>
              {rating.user.name}
              <span>{distanceToNow(rating.created_at)}</span>
            </h4>
          </div>

          <Rating value={rating.rate} readOnly />
        </AvatarAndRating>

        <p>{rating.description}</p>
      </RatingCard>
    ))
  }

  function handleCLickRateButton() {
    setShowCommentBox(true)
  }

  return (
    <RatingsContainer>
      <RateButtonContainer>
        <span>Avaliações</span>

        {isAuthenticated ? (
          <button onClick={handleCLickRateButton} disabled={isCommented}>
            {isCommented ? 'Avaliado' : 'Avaliar'}
          </button>
        ) : (
          <LoginModal>
            <button>Avaliar</button>
          </LoginModal>
        )}
      </RateButtonContainer>

      <RatingContent>
        {showCommentBox && commentBox()}

        {ratings.length ? (
          mapRatings(ratings)
        ) : (
          <Loader width="200px" height="5px" />
        )}
      </RatingContent>
    </RatingsContainer>
  )
}
