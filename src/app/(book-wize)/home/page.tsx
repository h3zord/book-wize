import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { getServerSession } from 'next-auth'
import { LastReading } from './components/last-reading'
import { HomeContainer, MainContainer } from './styles'
import { PopularBooks } from './components/popular-books'
import { RecentReviews } from './components/recent-reviews'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <HomeContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <ChartLineUp size={32} /> Início
        </NavegationRouteTitle>

        {session && <LastReading />}

        <RecentReviews />
      </MainContainer>

      <PopularBooks />
    </HomeContainer>
  )
}
