import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from '@phosphor-icons/react/dist/ssr/X'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import { Check } from '@phosphor-icons/react/dist/ssr/Check'
import { BookOpen } from '@phosphor-icons/react/dist/ssr/BookOpen'
import { AvatarAndRating } from '../avatar-and-rating/styles'
import {
  BookInformationContainer,
  BookInformationContent,
  BookRatingForm,
  CategoryAndPageNumber,
  CloseButton,
  Content,
  Overlay,
  RateButtonContainer,
  RatingCard,
  RatingContainer,
  RatingContent,
} from './styles'

export function BookDetailsModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <BookInformationContainer>
          <BookInformationContent>
            <Image src="/book.png" width={172} height={242} alt="test" />

            <div>
              <div>
                <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                <p>Aditya Bhargava</p>
              </div>

              <div>
                <Image src="/rating.png" width={116} height={20} alt="test" />

                <p>3 avaliações</p>
              </div>
            </div>
          </BookInformationContent>

          <CategoryAndPageNumber>
            <div>
              <BookmarkSimple size={24} />

              <h4>
                <span>Categoria</span>
                Computação, educação
              </h4>
            </div>

            <div>
              <BookOpen size={24} />

              <h4>
                <span>Páginas</span>
                160
              </h4>
            </div>
          </CategoryAndPageNumber>
        </BookInformationContainer>

        <RatingContainer>
          <RateButtonContainer>
            <span>Avaliações</span>

            <button>Avaliar</button>
          </RateButtonContainer>

          <RatingContent>
            <RatingCard>
              <AvatarAndRating>
                <div>
                  <Image src="/avatar.png" height={40} width={40} alt="test" />
                  <h4>Brandon Botosh</h4>
                </div>

                <Image src="/rating.png" width={96} height={16} alt="test" />
              </AvatarAndRating>

              <BookRatingForm>
                <textarea
                  placeholder="Escreva sua avaliação"
                  maxLength={450}
                  required
                />

                <div>
                  <button type="reset">
                    <X size={24} />
                  </button>

                  <button type="submit">
                    <Check size={24} />
                  </button>
                </div>
              </BookRatingForm>
            </RatingCard>

            <RatingCard>
              <AvatarAndRating>
                <div>
                  <Image src="/avatar.png" height={40} width={40} alt="test" />

                  <h4>
                    Brandon Botosh
                    <span>Há 2 dias</span>
                  </h4>
                </div>

                <Image src="/rating.png" width={96} height={16} alt="test" />
              </AvatarAndRating>

              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis.
              </p>
            </RatingCard>

            <RatingCard>
              <AvatarAndRating>
                <div>
                  <Image src="/avatar.png" height={40} width={40} alt="test" />

                  <h4>
                    Brandon Botosh
                    <span>Há 2 dias</span>
                  </h4>
                </div>

                <Image src="/rating.png" width={96} height={16} alt="test" />
              </AvatarAndRating>

              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </RatingCard>

            <RatingCard>
              <AvatarAndRating>
                <div>
                  <Image src="/avatar.png" height={40} width={40} alt="test" />

                  <h4>
                    Brandon Botosh
                    <span>Há 2 dias</span>
                  </h4>
                </div>

                <Image src="/rating.png" width={96} height={16} alt="test" />
              </AvatarAndRating>

              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </RatingCard>
          </RatingContent>
        </RatingContainer>
      </Content>
    </Dialog.Portal>
  )
}
