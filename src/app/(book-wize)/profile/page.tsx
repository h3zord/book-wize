import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { User } from '@phosphor-icons/react/dist/ssr/User'
import {
  MainContainer,
  ProfileContainer,
  ProfileContent,
  ReviewedBookCard,
  ReviewedBookContainer,
  ReviewedBookInformation,
  SearchReviewedBookForm,
} from './styles'
import Image from 'next/image'

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

      <ProfileContent>a</ProfileContent>
    </ProfileContainer>
  )
}
