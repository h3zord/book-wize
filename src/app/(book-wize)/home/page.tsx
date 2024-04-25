import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LastReading } from './components/last-reading'
import { RecentBookReviews } from './components/recent-book-reviews'
import { HomeContainer, MainContainer } from './styles'
import { PopularBooks } from './components/popular-books'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <HomeContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <ChartLineUp size={32} /> Início
        </NavegationRouteTitle>

        {session && <LastReading />}

        <RecentBookReviews />
      </MainContainer>

      <PopularBooks />
    </HomeContainer>
  )
}
