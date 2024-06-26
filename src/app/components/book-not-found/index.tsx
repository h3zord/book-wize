import { X } from '@phosphor-icons/react'
import { NotFoundText } from './styles'

export default function BookNotFound() {
  return (
    <NotFoundText>
      Nenhum livro encontrado! <X size={28} weight="bold" fill="red" />
    </NotFoundText>
  )
}
