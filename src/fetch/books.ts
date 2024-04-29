import { getBookAvgRating } from '@/utils/getBookAvgRating'

export interface IBooks {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  ratings: {
    rate: number
  }[]
}

export interface IBooksWithAvgRating extends IBooks {
  avgRating: number
}

export async function fetchBooks() {
  const data = await fetch('http://localhost:3000/api/books')

  const booksList: IBooks[] = await data.json()

  const booksWithAvgRating: IBooksWithAvgRating[] = booksList.map(
    ({ ratings, ...rest }) => {
      const avgRating = getBookAvgRating(ratings)

      return { ...rest, ratings, avgRating }
    },
  )

  return { books: booksWithAvgRating }
}
