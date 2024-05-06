import { User } from '@phosphor-icons/react/dist/ssr/User'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { fetchUser } from '@/fetch/user'
import { ProfileDetails } from './components/profile-details'
import { MainContainer, ProfileContainer } from './styles'
import { ReviewedBookFormAndFeed } from './components/reviewed-book-form-and-feed'

interface IProfileProps {
  params: {
    id: string
  }
}

export default async function Profile({ params }: IProfileProps) {
  const { userDetails } = await fetchUser({
    id: params.id,
  })

  return (
    <ProfileContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <User size={32} /> Perfil
        </NavegationRouteTitle>

        <ReviewedBookFormAndFeed userId={params.id} />
      </MainContainer>

      <ProfileDetails userDetails={userDetails} />
    </ProfileContainer>
  )
}
