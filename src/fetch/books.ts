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

function getTopRatedBooks(booksList: IBooks[]) {
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

  const sortedBooks = booksWithAvgRating.sort(
    (a, b) => b.avgRating - a.avgRating,
  )

  return sortedBooks.slice(0, 5)
}

export async function fetchBooks() {
  const data = await fetch('http://localhost:3000/api/books')

  const booksList: IBooks[] = await data.json()

  const topRatedBooks = getTopRatedBooks(booksList)

  return { books: topRatedBooks }
}
