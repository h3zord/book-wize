import { getBookAvgRating } from '@/utils/getBookAvgRating'

interface IFetchBookParams {
  categoryQuery?: string
}

interface ICategory {
  category: {
    name: string
  }
}

export interface IBooks {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  categories: ICategory[]
  ratings: {
    rate: number
  }[]
}

export interface IBooksWithAvgRating extends IBooks {
  avgRating: number
}

export async function fetchBooks({ categoryQuery }: IFetchBookParams = {}) {
  let url = 'http://localhost:3000/api/books'

  if (categoryQuery) {
    url += `?category=${encodeURIComponent(categoryQuery)}`
  }

  const data = await fetch(url)

  const booksList: IBooks[] = await data.json()

  const booksWithAvgRating: IBooksWithAvgRating[] = booksList.map(
    ({ ratings, ...rest }) => {
      const avgRating = getBookAvgRating(ratings)

      return { ...rest, ratings, avgRating }
    },
  )

  return { books: booksWithAvgRating }
}
