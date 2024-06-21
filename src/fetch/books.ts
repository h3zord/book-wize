import { getBookAvgRating } from '@/utils/getBookAvgRating'

export interface ICategory {
  category: {
    name: string
  }
}

interface IBooks {
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

export async function fetchBooks(categoryQuery?: string) {
  let url = `${process.env.NEXT_PUBLIC_RAILWAY_URL}/books/` as string

  if (categoryQuery) {
    url += `?category=${encodeURIComponent(categoryQuery)}`
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(
        `Failed to fetch books: ${response.status} ${response.statusText}`,
      )
    }

    const booksList: IBooks[] = await response.json()

    const booksWithAvgRating: IBooksWithAvgRating[] = booksList.map(
      ({ ratings, ...rest }) => {
        const avgRating = getBookAvgRating(ratings)

        return { ...rest, ratings, avgRating }
      },
    )

    return booksWithAvgRating
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to fetch books:', error)
    }

    return []
  }
}
