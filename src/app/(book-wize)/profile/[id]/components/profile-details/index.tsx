import Image from 'next/image'
import { BookOpen } from '@phosphor-icons/react/dist/ssr/BookOpen'
import { Books } from '@phosphor-icons/react/dist/ssr/Books'
import { UserList } from '@phosphor-icons/react/dist/ssr/UserList'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import { IReading, IUser } from '@/fetch/user'
import {
  AvatarContainer,
  LineSeparation,
  ProfileContent,
  ProfileInformation,
  UserStatistics,
} from './styles'

interface IProfileDetailsProps {
  userDetails: IUser
}

interface IGetMostReadCategoryParams {
  readings: IReading[]
}

export function ProfileDetails({ userDetails }: IProfileDetailsProps) {
  function getMostReadCategory({ readings }: IGetMostReadCategoryParams) {
    const categoryCounts: { [key: string]: number } = {}

    readings.forEach((reading) => {
      reading.book.categories.forEach((categoryObj) => {
        const categoryName = categoryObj.category.name
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1
      })
    })

    let mostFrequentCategory = null
    let maxCount = 0

    for (const category in categoryCounts) {
      if (categoryCounts[category] > maxCount) {
        maxCount = categoryCounts[category]
        mostFrequentCategory = category
      }
    }

    return mostFrequentCategory
  }

  const registrationYear = new Date(userDetails.created_at).getFullYear()

  const pagesRead = userDetails.readings.reduce((totalPages, reading) => {
    totalPages += reading.book.total_pages

    return totalPages
  }, 0)

  const reviewedBooks = userDetails.ratings.length

  const readAuthors = userDetails.readings.length

  const mostReadCategory = getMostReadCategory({
    readings: userDetails.readings,
  })

  return (
    <ProfileContent>
      <AvatarContainer>
        <Image
          src={userDetails.image}
          width={72}
          height={72}
          alt="User image"
        />

        <h2>
          {userDetails.name}
          <span>{`membro desde ${registrationYear}`}</span>
        </h2>
      </AvatarContainer>

      <LineSeparation />

      <ProfileInformation>
        <UserStatistics>
          <BookOpen size={32} />
          <h4>
            {pagesRead}
            <span>Páginas lidas</span>
          </h4>
        </UserStatistics>

        <UserStatistics>
          <Books size={32} />
          <h4>
            {reviewedBooks}
            <span>Livros avaliados</span>
          </h4>
        </UserStatistics>

        <UserStatistics>
          <UserList size={32} />
          <h4>
            {readAuthors}
            <span>Autores lidos</span>
          </h4>
        </UserStatistics>

        <UserStatistics>
          <BookmarkSimple size={32} />
          <h4>
            {mostReadCategory}
            <span>Categoria mais lida</span>
          </h4>
        </UserStatistics>
      </ProfileInformation>
    </ProfileContent>
  )
}
