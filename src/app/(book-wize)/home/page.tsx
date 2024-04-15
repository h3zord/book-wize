import Image from 'next/image'
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp'
import { AvatarAndRating } from '@/app/components/avatar-and-rating/styles'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import {
  HomeContainer,
  LastReadingCard,
  LastReadingContainer,
  LastReadingInformation,
  MainContainer,
  PopularBookCard,
  PopularBookContainer,
  PopularBookInformation,
  RecentReviewCard,
  RecentReviewContainer,
  RecentReviewInformation,
  SeeAllContainer,
} from './styles'
import { SummaryBook } from '@/app/components/summary-book/styles'

export default function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <ChartLineUp size={32} /> Início
        </NavegationRouteTitle>

        <LastReadingContainer>
          <SeeAllContainer>
            <p>Sua última leitura</p>
            <button>
              Ver todos <CaretRight size={16} />
            </button>
          </SeeAllContainer>

          <LastReadingCard>
            <LastReadingInformation>
              <Image src="/book.png" height={152} width={108} alt="test" />

              <div>
                <div>
                  <p>Há 2 dias</p>
                  <Image src="/rating.png" width={96} height={16} alt="test" />
                </div>

                <div>
                  <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
                  <p>Aditya Bhargava</p>
                </div>

                <SummaryBook $lineClamp={2}>
                  <p>
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test testtest test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test
                  </p>
                </SummaryBook>
              </div>
            </LastReadingInformation>
          </LastReadingCard>
        </LastReadingContainer>

        <RecentReviewContainer>
          <p>Avaliações mais recentes</p>

          <RecentReviewCard>
            <AvatarAndRating>
              <div>
                <Image src="/avatar.png" height={40} width={40} alt="test" />

                <h4>
                  Jaxson Dias
                  <span>Hoje</span>
                </h4>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </AvatarAndRating>

            <RecentReviewInformation>
              <Image src="/book.png" height={152} width={108} alt="test" />

              <div>
                <div>
                  <h4>O Hobbit</h4>
                  <p>J.R.R Tolkien</p>
                </div>

                <SummaryBook $lineClamp={4}>
                  <p>
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test testtest test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test
                  </p>
                </SummaryBook>
              </div>
            </RecentReviewInformation>
          </RecentReviewCard>

          <RecentReviewCard>
            <AvatarAndRating>
              <div>
                <Image src="/avatar.png" height={40} width={40} alt="test" />

                <h4>
                  Jaxson Dias
                  <span>Hoje</span>
                </h4>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </AvatarAndRating>

            <RecentReviewInformation>
              <Image src="/book.png" height={152} width={108} alt="test" />

              <div>
                <div>
                  <h4>O Hobbit</h4>
                  <p>J.R.R Tolkien</p>
                </div>

                <SummaryBook $lineClamp={4}>
                  <p>
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test testtest test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test
                  </p>
                </SummaryBook>
              </div>
            </RecentReviewInformation>
          </RecentReviewCard>
        </RecentReviewContainer>
      </MainContainer>

      <PopularBookContainer>
        <SeeAllContainer>
          <p>Livros populares</p>
          <button>
            Ver todos <CaretRight size={16} />
          </button>
        </SeeAllContainer>

        <PopularBookCard>
          <Image src="/book.png" width={64} height={94} alt="test" />

          <PopularBookInformation>
            <div>
              <h4>14 Hábitos de Desenvolvedores Altamente Produtivos</h4>
              <p>Aditya Bhargava</p>
            </div>

            <Image src="/rating.png" width={96} height={16} alt="test" />
          </PopularBookInformation>
        </PopularBookCard>

        <PopularBookCard>
          <Image src="/book.png" width={64} height={94} alt="test" />

          <PopularBookInformation>
            <div>
              <h4>Entendendo Algoritmos</h4>
              <p>Aditya Bhargava</p>
            </div>

            <Image src="/rating.png" width={96} height={16} alt="test" />
          </PopularBookInformation>
        </PopularBookCard>
      </PopularBookContainer>
    </HomeContainer>
  )
}
