interface IBook {
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: {
    rate: number
  }[]
}

interface IUser {
  name: string
  image: string
}

export interface IRatings {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
  book: IBook
  user: IUser
}

function selectRecentUniqueBookRatings(ratingsList: IRatings[]) {
  const uniqueBooks: { [key: string]: boolean } = {}

  const recentUniqueBookRatings: IRatings[] = []

  for (const rating of ratingsList) {
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
  const data = await fetch('http://localhost:3000/api/ratings', {
    cache: 'no-cache',
  })

  const ratingsListOrderByDate: IRatings[] = await data.json()

  const recentUniqueBookRatings = selectRecentUniqueBookRatings(
    ratingsListOrderByDate,
  )

  return { ratings: recentUniqueBookRatings }
}
