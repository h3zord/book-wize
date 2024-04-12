import Image from 'next/image'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { User } from '@phosphor-icons/react/dist/ssr/User'
import { BookOpen } from '@phosphor-icons/react/dist/ssr/BookOpen'
import { Books } from '@phosphor-icons/react/dist/ssr/Books'
import { UserList } from '@phosphor-icons/react/dist/ssr/UserList'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import {
  AvatarContainer,
  LineSeparation,
  MainContainer,
  ProfileContainer,
  ProfileContent,
  ProfileInformation,
  ReviewedBookCard,
  ReviewedBookContainer,
  ReviewedBookInformation,
  SearchReviewedBookForm,
} from './styles'

export default function Profile() {
  return (
    <ProfileContainer>
      <MainContainer>
        <h1>
          <User size={32} /> Perfil
        </h1>

        <SearchReviewedBookForm>
          <input type="text" placeholder="Buscar livro avaliado" />
          <button type="submit">{<MagnifyingGlass size={24} />}</button>
        </SearchReviewedBookForm>

        <ReviewedBookContainer>
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

            <p>
              aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
              aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
              aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
              aaa aaa aaa aaa
            </p>
          </ReviewedBookCard>
        </ReviewedBookContainer>

        <ReviewedBookContainer>
          <span>Há 2 dias</span>

          <ReviewedBookCard>
            <ReviewedBookInformation>
              <Image src="/book.png" width={98} height={134} alt="test" />

              <div>
                <div>
                  <h3>Entendendo Algoritmos</h3>
                  <p>Aditya Bhargava</p>
                </div>

                <Image src="/rating.png" width={96} height={16} alt="test" />
              </div>
            </ReviewedBookInformation>

            <p>
              aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
              aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
              aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
              aaa aaa aaa aaa
            </p>
          </ReviewedBookCard>
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
