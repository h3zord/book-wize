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
                  <h4>Entendendo Algoritmos</h4>
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
                  <h4>Entendendo Algoritmos</h4>
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

          <h5>
            Cristofer Rosser
            <span>membro desde 2019</span>
          </h5>
        </AvatarContainer>

        <LineSeparation />

        <ProfileInformation>
          <div>
            <BookOpen size={32} />
            <h5>
              3853
              <span>Páginas lidas</span>
            </h5>
          </div>

          <div>
            <Books size={32} />
            <h5>
              10
              <span>Livros avaliados</span>
            </h5>
          </div>

          <div>
            <UserList size={32} />
            <h5>
              8<span>Autores lidos</span>
            </h5>
          </div>

          <div>
            <BookmarkSimple size={32} />
            <h5>
              Computação
              <span>Categoria mais lida</span>
            </h5>
          </div>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
