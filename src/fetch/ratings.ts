interface IBook {
  name: string
  author: string
  summary: string
  cover_url: string
}

interface IUser {
  name: string
  image: string
}

export interface IRatings {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: IBook
  user: IUser
}

function selectRecentUniqueBookRatings(ratingList: IRatings[]) {
  const uniqueBooks: { [key: string]: boolean } = {}

  const recentUniqueBookRatings: IRatings[] = []

  for (const rating of ratingList) {
    if (!uniqueBooks[rating.book_id]) {
      recentUniqueBookRatings.push(rating)

      uniqueBooks[rating.book_id] = true
    }

    if (recentUniqueBookRatings.length === 3) {
      break
    }
  }

  return recentUniqueBookRatings
}

export async function fetchRatings() {
  try {
    const url = `${process.env.NEXT_PUBLIC_RAILWAY_URL}/ratings` as string

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ratings: ${response.status} ${response.statusText}`,
      )
    }

    const ratingListOrderByDate: IRatings[] = await response.json()

    const recentUniqueBookRatings = selectRecentUniqueBookRatings(
      ratingListOrderByDate,
    )

    return recentUniqueBookRatings
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to fetch ratings:', error)
    }

    return []
  }
}

interface IUserFindByBookId {
  name: string
  image: string
}

export interface IRatingFindByBookId {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  user: IUserFindByBookId
}

export async function fetchRatingsByBookId(bookId: string) {
  try {
    if (!bookId) {
      throw new Error('Book ID not found!')
    }

    const url =
      `${process.env.NEXT_PUBLIC_RAILWAY_URL}/ratings/${bookId}` as string

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ratings by id: ${response.status} ${response.statusText}`,
      )
    }

    const ratings: IRatingFindByBookId[] = await response.json()

    return ratings
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to fetch ratings by id:', error)
    }

    return []
  }
}

interface IRatingData {
  userId?: string
  bookId: string
  description: string
  rate: number
}

export async function createRating({
  userId,
  bookId,
  description,
  rate,
}: IRatingData) {
  try {
    const url = `${process.env.NEXT_PUBLIC_RAILWAY_URL}/ratings` as string

    if (!userId) {
      throw new Error('UserID not found!')
    }

    if (!description) {
      throw new Error('Description not found!')
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        book_id: bookId,
        description,
        rate,
      }),
    })

    if (!response.ok) {
      throw new Error(
        `Failed to create rating: ${response.status} ${response.statusText}`,
      )
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to create rating:', error)
    }
  }
}
