import Image from 'next/image'
import { fetchBooks } from '@/fetch/books'
import { SeeAllContainer } from '../../styles'
import { PopularBooksModal } from './popular-books-modal'
import {
  PopularBookCard,
  PopularBookContainer,
  PopularBookContent,
  PopularBookInformation,
} from './styles'

export async function PopularBooks() {
  const { books: booksOrderByPopularity } = await fetchBooks()

  const topFivePopularBooks = booksOrderByPopularity.slice(0, 5)

  return (
    <PopularBookContainer>
      <SeeAllContainer>
        <p>Livros populares</p>

        <PopularBooksModal books={booksOrderByPopularity} />
      </SeeAllContainer>

      <PopularBookContent>
        {topFivePopularBooks?.map((book) => (
          <PopularBookCard key={book.id}>
            <PopularBookInformation>
              <Image
                src={book.cover_url}
                width={64}
                height={94}
                alt="Cover popular book"
              />

              <div>
                <div>
                  <h4>{book.name}</h4>
                  <p>{book.author}</p>
                </div>

                <Image src="/rating.png" width={96} height={16} alt="test" />
              </div>
            </PopularBookInformation>
          </PopularBookCard>
        ))}
      </PopularBookContent>
    </PopularBookContainer>
  )
}
