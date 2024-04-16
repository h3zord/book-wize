import Image from 'next/image'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { User } from '@phosphor-icons/react/dist/ssr/User'
import { BookOpen } from '@phosphor-icons/react/dist/ssr/BookOpen'
import { Books } from '@phosphor-icons/react/dist/ssr/Books'
import { UserList } from '@phosphor-icons/react/dist/ssr/UserList'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { SummaryBook } from '@/app/components/summary-book/styles'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'
import {
  AvatarContainer,
  LineSeparation,
  MainContainer,
  ProfileContainer,
  ProfileContent,
  ProfileInformation,
  ReviewedBookCard,
  ReviewedBookContainer,
  ReviewedBookContent,
  ReviewedBookInformation,
  SearchReviewedBookForm,
} from './styles'

export default function Profile() {
  return (
    <ProfileContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <User size={32} /> Perfil
        </NavegationRouteTitle>

        <SearchReviewedBookForm>
          <SearchInput type="text" placeholder="Buscar livro avaliado" />
          <SearchInputSubmit type="submit">
            <MagnifyingGlass size={24} />
          </SearchInputSubmit>
        </SearchReviewedBookForm>

        <ReviewedBookContainer>
          <ReviewedBookContent>
            <span>Há 2 dias</span>

            <ReviewedBookCard>
              <ReviewedBookInformation>
                <Image src="/book.png" width={98} height={134} alt="test" />

                <div>
                  <div>
                    <h3>14 Hábitos de Desenvolvedores Altamente Produtivos</h3>
                    <p>Aditya Bhargava</p>
                  </div>

                  <Image src="/rating.png" width={96} height={16} alt="test" />
                </div>
              </ReviewedBookInformation>

              <SummaryBook $lineClamp={7}>
                <p>
                  aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
                  aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
                  aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
                  aaa aaa aaa aaa aaa aaa aaa
                </p>
              </SummaryBook>
            </ReviewedBookCard>
          </ReviewedBookContent>

          <ReviewedBookContent>
            <span>Há 2 dias</span>

            <ReviewedBookCard>
              <ReviewedBookInformation>
                <Image src="/book.png" width={98} height={134} alt="test" />

                <div>
                  <div>
                    <h3>14 Hábitos de Desenvolvedores Altamente Produtivos</h3>
                    <p>Aditya Bhargava</p>
                  </div>

                  <Image src="/rating.png" width={96} height={16} alt="test" />
                </div>
              </ReviewedBookInformation>

              <SummaryBook $lineClamp={7}>
                <p>
                  aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
                  aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
                  aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
                  aaa aaa aaa aaa aaa aaa aaa
                </p>
              </SummaryBook>
            </ReviewedBookCard>
          </ReviewedBookContent>
        </ReviewedBookContainer>
      </MainContainer>

      <ProfileContent>
        <AvatarContainer>
          <Image src="/avatar.png" width={72} height={72} alt="test" />

          <h2>
            Cristofer Rosser
            <span>membro desde 2019</span>
          </h2>
        </AvatarContainer>

        <LineSeparation />

        <ProfileInformation>
          <div>
            <BookOpen size={32} />
            <h4>
              3853
              <span>Páginas lidas</span>
            </h4>
          </div>

          <div>
            <Books size={32} />
            <h4>
              10
              <span>Livros avaliados</span>
            </h4>
          </div>

          <div>
            <UserList size={32} />
            <h4>
              8<span>Autores lidos</span>
            </h4>
          </div>

          <div>
            <BookmarkSimple size={32} />
            <h4>
              Computação
              <span>Categoria mais lida</span>
            </h4>
          </div>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
