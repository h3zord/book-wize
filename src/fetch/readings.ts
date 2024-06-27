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

function readingListMap(readingList: IReadings[]): IReadingsWithAvgRating[] {
  const readingListWithAvgRating = readingList.map(({ book, ...rest }) => {
    const avgRating = getBookAvgRating(book.ratings)

    return { ...rest, book: { ...book, avgRating } }
  })

  return readingListWithAvgRating
}

export async function fetchReadings(userId?: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/readings/${userId}` as string

  try {
    if (!userId) {
      throw new Error('UserID not found!')
    }

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch readings: ${response.status} ${response.statusText}`,
      )
    }

    const readingListOrderByDate: IReadings[] = await response.json()

    const readingListWithAvgRating = readingListMap(readingListOrderByDate)

    return readingListWithAvgRating
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
  userId?: string
  bookId: string
}

export async function createReading({ userId, bookId }: ICreateReading) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/readings/` as string

  try {
    if (!userId) {
      throw new Error('UserID not found!')
    }

    const response = await fetch(url, {
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
  userId?: string
  bookId: string
}

export async function deleteReading({ userId, bookId }: IDeleteReading) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/readings/` as string

  if (!userId) {
    throw new Error('UserID not found!')
  }

  try {
    const response = await fetch(url, {
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
