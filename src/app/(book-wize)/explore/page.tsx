import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars'
import { ExploreContainer, MainContainer } from './styles'

export default function Explore() {
  return (
    <ExploreContainer>
      <MainContainer>
        <h1>
          <Binoculars size={32} /> Explorar
        </h1>
      </MainContainer>
    </ExploreContainer>
  )
}
