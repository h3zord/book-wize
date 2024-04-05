'use client'

import { CaretRight, ChartLineUp } from 'phosphor-react'
import {
  HomeContainer,
  LastReadingCard,
  LastReadingContainer,
  LastReadingInformation,
  PopularBookCard,
  PopularBookContainer,
  PopularBookInformation,
  RecentRatingCard,
  RecentRatingContainer,
  RecentRatingInformation,
} from './styles'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeContainer>
        <h1>
          <ChartLineUp size={32} /> Início
        </h1>

        <LastReadingContainer>
          <div>
            <p>Sua última leitura</p>
            <span>
              Ver todas <CaretRight size={16} />
            </span>
          </div>

          <LastReadingCard>
            <Image src="/book.png" height={152} width={108} alt="test" />

            <LastReadingInformation>
              <div>
                <p>Há 2 dias</p>
                <Image src="/rating.png" width={96} height={16} alt="test" />
              </div>

              <div>
                <h4>Entendendo Algoritmos</h4>
                <p>Aditya Bhargava</p>
              </div>

              <div>
                <p>
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test testtest test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test
                </p>
              </div>
            </LastReadingInformation>
          </LastReadingCard>
        </LastReadingContainer>

        <RecentRatingContainer>
          <p>Avaliações mais recentes</p>

          <RecentRatingCard>
            <div>
              <div>
                <Image src="/avatar.png" height={40} width={40} alt="test" />

                <h5>
                  Jaxson Dias
                  <span>Hoje</span>
                </h5>
              </div>

              <Image src="/rating.png" width={96} height={16} alt="test" />
            </div>

            <RecentRatingInformation>
              <Image src="/book.png" height={152} width={108} alt="test" />

              <div>
                <div>
                  <h4>O Hobbit</h4>
                  <p>J.R.R Tolkien</p>
                </div>

                <div>
                  <p>
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test test test test test
                    test test test test test testtest test test test test test
                    test test test test test test test test test test test test
                    test test test test test test test test
                  </p>
                </div>
              </div>
            </RecentRatingInformation>
          </RecentRatingCard>
        </RecentRatingContainer>
      </HomeContainer>

      <PopularBookContainer>
        <div>
          <p>Livros populares</p>
          <span>
            Ver todas <CaretRight size={16} />
          </span>
        </div>

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
    </>
  )
}
