import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function distanceToNow(date: string) {
  const distanceToNow = formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: ptBR,
  })

  const formattedDistanceToNow =
    distanceToNow[0].toUpperCase() + distanceToNow.slice(1)

  return formattedDistanceToNow
}
