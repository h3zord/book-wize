import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { BookCategories } from './components/book-categories'
import { BooksList } from './components/book-list'
import { ExploreContainer, MainContainer } from './styles'
import { SearchBookForm } from './components/search-book-form'

export default function Explore() {
  return (
    <ExploreContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <h1>
            <Binoculars size={32} /> Explorar
          </h1>

          <SearchBookForm />
        </NavegationRouteTitle>

        <BookCategories />

        <BooksList />
      </MainContainer>
    </ExploreContainer>
  )
}
