import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import {
  BookCard,
  BookCategoryContainer,
  BookCategoryContent,
  BookListContainer,
  ExploreContainer,
  MainContainer,
  SearchBookForm,
} from './styles'
import Image from 'next/image'

export default function Explore() {
  return (
    <ExploreContainer>
      <MainContainer>
        <SearchBookForm>
          <h1>
            <Binoculars size={32} /> Explorar
          </h1>

          <input placeholder="Buscar livro ou autor" />
          <button type="submit">{<MagnifyingGlass size={24} />}</button>
        </SearchBookForm>

        <BookCategoryContainer>
          <BookCategoryContent>Tudo</BookCategoryContent>
          <BookCategoryContent>Computação</BookCategoryContent>
          <BookCategoryContent>Educação</BookCategoryContent>
          <BookCategoryContent>Fantasia</BookCategoryContent>
          <BookCategoryContent>Ficção científica</BookCategoryContent>
          <BookCategoryContent>Horror</BookCategoryContent>
          <BookCategoryContent>HQs</BookCategoryContent>
          <BookCategoryContent>Suspense</BookCategoryContent>
        </BookCategoryContainer>

        <BookListContainer>
          <BookCard>
            <Image src="/book.png" height={152} width={108} alt="test" />

            <div>
              <div>
                <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                <p>Zeno Rocha</p>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </div>
          </BookCard>

          <BookCard>
            <Image src="/book.png" height={152} width={108} alt="test" />

            <div>
              <div>
                <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                <p>Zeno Rocha</p>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </div>
          </BookCard>

          <BookCard>
            <Image src="/book.png" height={152} width={108} alt="test" />

            <div>
              <div>
                <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                <p>Zeno Rocha</p>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </div>
          </BookCard>

          <BookCard>
            <Image src="/book.png" height={152} width={108} alt="test" />

            <div>
              <div>
                <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                <p>Zeno Rocha</p>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </div>
          </BookCard>
        </BookListContainer>
      </MainContainer>
    </ExploreContainer>
  )
}
