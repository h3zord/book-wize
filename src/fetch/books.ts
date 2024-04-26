interface IBooks {
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

function getBookAvgRating(booksList: IBooks[]) {
  const booksWithAvgRating = booksList.map((book) => {
    const totalRatings = book.ratings.length

    const sumRatings = book.ratings.reduce(
      (sum, rating) => sum + rating.rate,
      0,
    )

    const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0

    return {
      ...book,
      avgRating,
    }
  })

  return booksWithAvgRating
}

export async function fetchBooks() {
  const data = await fetch('http://localhost:3000/api/books')

  const booksList: IBooks[] = await data.json()

  const booksWithAvgRating: IBooksWithAvgRating[] = getBookAvgRating(booksList)

  return { books: booksWithAvgRating }
}
