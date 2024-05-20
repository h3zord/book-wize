import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react/dist/ssr/X'
import { IBooksWithAvgRating } from '@/fetch/books'
import { BookInformations } from './book-information'
import { CloseButton, Content, Overlay } from './styles'
import { Ratings } from './ratings'

interface BookDetailsModalProps {
  book: IBooksWithAvgRating
}

export function BookDetailsModal({ book }: BookDetailsModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <BookInformations book={book} />

        <Ratings bookId={book.id} />
      </Content>
    </Dialog.Portal>
  )
}
