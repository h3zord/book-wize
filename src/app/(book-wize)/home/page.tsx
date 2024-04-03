'use client'

import { CaretRight, ChartLineUp } from 'phosphor-react'
import {
  HomeContainer,
  LastReadingCard,
  LastReadingContainer,
  LastReadingInformation,
} from './styles'
import Image from 'next/image'

export default function Home() {
  return (
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
                test test test test test test test test test test test test test
                test test test test test test test test test test test test test
                test test test test test test test test test test test test test
                test test testtest test test test test test test test test test
                test test test test test test test test test test test test test
                test test test
              </p>
            </div>
          </LastReadingInformation>
        </LastReadingCard>
      </LastReadingContainer>
    </HomeContainer>
  )
}
