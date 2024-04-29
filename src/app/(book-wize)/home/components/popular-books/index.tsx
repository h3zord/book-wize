import { fetchBooks } from '@/fetch/books'
import { SeeAllContainer } from '../../styles'
import { PopularBooksModal } from './popular-books-modal'
import { PopularBookContainer, PopularBookContent } from './styles'
import { PopularBooksCard } from './popular-books-card'

export async function PopularBooks() {
  const { books } = await fetchBooks()

  const bestRatedBooks = books.filter((book) => book.avgRating >= 4)

  const sortedBooks = bestRatedBooks.sort((a, b) => b.avgRating - a.avgRating)

  const topFiveRatedBooks = sortedBooks.slice(0, 5)

  return (
    <PopularBookContainer>
      <SeeAllContainer>
        <p>Livros populares</p>

        <PopularBooksModal books={sortedBooks} />
      </SeeAllContainer>

      <PopularBookContent>
        {topFiveRatedBooks?.map((book) => (
          <PopularBooksCard key={book.id} book={book} />
        ))}
      </PopularBookContent>
    </PopularBookContainer>
  )
}
