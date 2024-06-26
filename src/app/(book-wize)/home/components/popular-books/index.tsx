import { SeeAllContainer } from '../../styles'
import { PopularBooksModal } from './popular-books-modal'
import { PopularBookContainer, PopularBookContent } from './styles'
import { PopularCard } from './popular-card'
import { fetchBooks } from '@/fetch/books'

export async function PopularBooks() {
  const bookList = await fetchBooks()

  const bestRatedBooks = bookList.filter((book) => book.avgRating >= 4)

  const sortedBestRatedBooks = bestRatedBooks.sort(
    (a, b) => b.avgRating - a.avgRating,
  )

  const topFiveRatedBooks = sortedBestRatedBooks.slice(0, 5)

  return (
    <PopularBookContainer>
      <SeeAllContainer>
        <p>Livros populares</p>

        <PopularBooksModal books={sortedBestRatedBooks} />
      </SeeAllContainer>

      <PopularBookContent>
        {topFiveRatedBooks?.map((book) => (
          <PopularCard key={book.id} book={book} />
        ))}
      </PopularBookContent>
    </PopularBookContainer>
  )
}
