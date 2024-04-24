import Image from 'next/image'
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp'
import { AvatarAndRating } from '@/app/components/avatar-and-rating/styles'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { SummaryBook } from '@/app/components/summary-book/styles'
import { fetchRatings } from '@/fetch/ratings'
import { fetchReadings } from '@/fetch/readings'
import { cookies } from 'next/headers'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {
  HomeContainer,
  MainContainer,
  LastReadingCard,
  LastReadingContainer,
  LastReadingInformation,
  PopularBookCard,
  PopularBookContainer,
  PopularBookContent,
  PopularBookInformation,
  RecentReviewCard,
  RecentReviewContainer,
  RecentReviewContent,
  RecentReviewInformation,
  SeeAllContainer,
} from './styles'
import { fetchBooks } from '@/fetch/books'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const { ratings } = await fetchRatings()

  const { books } = await fetchBooks()

  async function mapLastReading() {
    const { value: userID } = cookies().get('userID') as RequestCookie

    const { readings } = await fetchReadings({ id: userID })

    const lastReading = readings[0]

    return (
      <LastReadingContainer>
        <SeeAllContainer>
          <p>Sua última leitura</p>
          <button>
            Ver todos <CaretRight size={16} />
          </button>
        </SeeAllContainer>

        <LastReadingCard>
          <LastReadingInformation>
            <Image
              src={lastReading.book.cover_url}
              height={152}
              width={108}
              alt="Most recent reading book cover"
            />

            <div>
              <div>
                <p>Há 2 dias</p>
                <Image src="/rating.png" width={96} height={16} alt="test" />
              </div>

              <div>
                <h4>{lastReading.book.name}</h4>
                <p>{lastReading.book.author}</p>
              </div>

              <SummaryBook $lineClamp={2}>
                <p>{lastReading.book.summary}</p>
              </SummaryBook>
            </div>
          </LastReadingInformation>
        </LastReadingCard>
      </LastReadingContainer>
    )
  }

  function mapRecentBookReviews() {
    return ratings?.map((rating) => (
      <RecentReviewCard key={rating.id}>
        <AvatarAndRating>
          <div>
            <Image
              src={rating.user.image}
              width={40}
              height={40}
              alt="User avatar"
            />

            <h4>
              {rating.user.name}
              <span>Hoje</span>
            </h4>
          </div>

          <Image src="/rating.png" width={96} height={16} alt="test" />
        </AvatarAndRating>

        <RecentReviewInformation>
          <Image
            src={rating.book.cover_url}
            height={152}
            width={108}
            alt="Book cover"
          />

          <div>
            <div>
              <h4>{rating.book.name}</h4>
              <p>{rating.book.author}</p>
            </div>

            <SummaryBook $lineClamp={4}>
              <p>{rating.book.summary}</p>
            </SummaryBook>
          </div>
        </RecentReviewInformation>
      </RecentReviewCard>
    ))
  }

  function mapPopularBooks() {
    return books?.map((book) => (
      <PopularBookCard key={book.id}>
        <PopularBookInformation>
          <Image
            src={book.cover_url}
            width={64}
            height={94}
            alt="Cover popular book"
          />

          <div>
            <div>
              <h4>{book.name}</h4>
              <p>{book.author}</p>
            </div>

            <Image src="/rating.png" width={96} height={16} alt="test" />
          </div>
        </PopularBookInformation>
      </PopularBookCard>
    ))
    // <PopularBookCard>
    //   <PopularBookInformation>
    //     <Image src="/book.png" width={64} height={94} alt="test" />
    //     <div>
    //       <div>
    //         <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
    //         <p>Aditya Bhargava</p>
    //       </div>
    //       <Image src="/rating.png" width={96} height={16} alt="test" />
    //     </div>
    //   </PopularBookInformation>
    // </PopularBookCard>
  }

  return (
    <HomeContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <ChartLineUp size={32} /> Início
        </NavegationRouteTitle>

        {session && (await mapLastReading())}

        <RecentReviewContainer>
          <p>Avaliações mais recentes</p>

          <RecentReviewContent>{mapRecentBookReviews()}</RecentReviewContent>
        </RecentReviewContainer>
      </MainContainer>

      <PopularBookContainer>
        <SeeAllContainer>
          <p>Livros populares</p>
          <button>
            Ver todos <CaretRight size={16} />
          </button>
        </SeeAllContainer>

        <PopularBookContent>{mapPopularBooks()}</PopularBookContent>
      </PopularBookContainer>
    </HomeContainer>
  )
}
