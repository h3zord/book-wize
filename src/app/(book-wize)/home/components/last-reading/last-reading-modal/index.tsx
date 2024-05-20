'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from '@phosphor-icons/react'
import { LastReadingContent } from '../styles'
import { IReadingsWithAvgRating } from '@/fetch/readings'
import { ReadingCard } from '../reading-card'
import {
  CloseButton,
  Content,
  Overlay,
  SeeAllButton,
  Title,
} from '../../../styles'

interface ILastReadingModalProps {
  readings: IReadingsWithAvgRating[]
}

export function LastReadingModal({ readings }: ILastReadingModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <SeeAllButton>
          Ver todos <CaretRight size={16} />
        </SeeAllButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <Title>Suas leituras</Title>

          <LastReadingContent>
            {readings?.map((reading) => (
              <ReadingCard key={reading.id} reading={reading} />
            ))}
          </LastReadingContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
