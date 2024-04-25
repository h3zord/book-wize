'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from '@phosphor-icons/react'
import { IReadings } from '@/fetch/readings'
import { CloseButton, Content, Overlay, Title } from '../../../styles'
import { SummaryBook } from '@/app/components/summary-book/styles'
import {
  LastReadingContent,
  LastReadingCard,
  LastReadingInformation,
} from '../styles'

interface ILastReadingModalProps {
  readings: IReadings[]
}

export function LastReadingModal({ readings }: ILastReadingModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          Ver todos <CaretRight size={16} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <Title>Leituras recentes</Title>

          <LastReadingContent>
            {readings?.map((reading) => (
              <LastReadingCard key={reading.id}>
                <LastReadingInformation>
                  <Image
                    src={reading.book.cover_url}
                    height={152}
                    width={108}
                    alt="Most recent reading book cover"
                  />

                  <div>
                    <div>
                      <p>Há 2 dias</p>
                      <Image
                        src="/rating.png"
                        width={96}
                        height={16}
                        alt="test"
                      />
                    </div>

                    <div>
                      <h4>{reading.book.name}</h4>
                      <p>{reading.book.author}</p>
                    </div>

                    <SummaryBook $lineClamp={10}>
                      <p>{reading.book.summary}</p>
                    </SummaryBook>
                  </div>
                </LastReadingInformation>
              </LastReadingCard>
            ))}
          </LastReadingContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
