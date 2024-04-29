import { getBookAvgRating } from '@/utils/getBookAvgRating'

interface IFetchReadingsProps {
  id: string
}

interface IBook {
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: {
    rate: number
  }[]
}

interface IReadings {
  id: string
  user_id: string
  book_id: string
  created_at: Date
  book: IBook
}

interface IBookWithAvgRating extends IBook {
  avgRating: number
}

export interface IReadingsWithAvgRating extends IReadings {
  book: IBookWithAvgRating
}

export async function fetchReadings({ id }: IFetchReadingsProps) {
  const data = await fetch(`http://localhost:3000/api/readings/${id}`, {
    cache: 'no-cache',
  })

  const readingsListOrderByDate: IReadings[] = await data.json()

  const readingsListWithAvgRating: IReadingsWithAvgRating[] =
    readingsListOrderByDate.map(({ book, ...rest }) => {
      const avgRating = getBookAvgRating(book.ratings)

      return { ...rest, book: { ...book, avgRating } }
    })

  return { readings: readingsListWithAvgRating }
}
