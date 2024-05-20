import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { fetchUser } from '@/fetch/user'
import { ProfileDetails } from './components/profile-details'
import { MainContainer, ProfileContainer } from './styles'
import { ReviewedBookForm } from './components/reviewed-book-form'
import { User } from '@phosphor-icons/react/dist/ssr/User'

interface IProfileProps {
  params: {
    id: string
  }
}

export default async function Profile({ params }: IProfileProps) {
  const { id } = params

  const userDetails = await fetchUser(id)

  return (
    userDetails && (
      <ProfileContainer>
        <MainContainer>
          <NavegationRouteTitle>
            <h1>
              <User size={32} /> Perfil
            </h1>
          </NavegationRouteTitle>

          <ReviewedBookForm userRatings={userDetails.ratings} />
        </MainContainer>

        <ProfileDetails userDetails={userDetails} />
      </ProfileContainer>
    )
  )
}
