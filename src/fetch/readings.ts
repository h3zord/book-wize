import { getBookAvgRating } from '@/utils/getBookAvgRating'

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
  created_at: string
  book: IBook
}

interface IBookWithAvgRating extends IBook {
  avgRating: number
}

export interface IReadingsWithAvgRating extends IReadings {
  book: IBookWithAvgRating
}

export async function fetchReadings(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/readings/${id}`)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch readings: ${response.status} ${response.statusText}`,
      )
    }

    const readingsListOrderByDate: IReadings[] = await response.json()

    const readingsListWithAvgRating: IReadingsWithAvgRating[] =
      readingsListOrderByDate.map(({ book, ...rest }) => {
        const avgRating = getBookAvgRating(book.ratings)

        return { ...rest, book: { ...book, avgRating } }
      })

    return readingsListWithAvgRating
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to fetch readings:', error)
    }

    return []
  }
}

interface ICreateReading {
  userId: string
  bookId: string
}

export async function createReading({ userId, bookId }: ICreateReading) {
  try {
    const response = await fetch('http://localhost:3000/api/readings', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        bookId,
      }),
    })

    if (!response.ok) {
      throw new Error(
        `Failed to create reading: ${response.status} ${response.statusText}`,
      )
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to create reading:', error)
    }
  }
}

interface IDeleteReading {
  userId: string
  bookId: string
}

export async function deleteReading({ userId, bookId }: IDeleteReading) {
  try {
    const response = await fetch('http://localhost:3000/api/readings', {
      method: 'DELETE',
      body: JSON.stringify({
        userId,
        bookId,
      }),
    })

    if (!response.ok) {
      throw new Error(
        `Failed to delete reading: ${response.status} ${response.statusText}`,
      )
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to delete reading:', error)
    }
  }
}
