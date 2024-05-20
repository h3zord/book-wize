'use client'

import { MouseEvent, useContext, useEffect, useState } from 'react'
import { BookCategoryContainer, BookCategoryButton } from './styles'
import { ICategories, fetchCategories } from '@/fetch/categories'
import { ExploreBooksContext } from '@/context/explore-books'
import { fetchBooks } from '@/fetch/books'

export function BookCategories() {
  const [categories, setCategories] = useState([] as ICategories[])

  const { selectedCategory, setSelectedCategory, getAllBooks, setBooks } =
    useContext(ExploreBooksContext)

  useEffect(() => {
    async function getCategories() {
      const categoriesList = await fetchCategories()

      setCategories(categoriesList)
    }

    getCategories()
  }, [])

  async function filterBookByCategory(categoryQuery: string) {
    if (selectedCategory === categoryQuery) {
      setSelectedCategory('no category selected')

      getAllBooks()
    } else {
      const booksList = await fetchBooks(categoryQuery)

      setSelectedCategory(categoryQuery)

      setBooks(booksList)
    }
  }

  function handleCategoryClick(event: MouseEvent<HTMLButtonElement>) {
    filterBookByCategory(event.currentTarget.value)
  }

  return (
    <BookCategoryContainer>
      {categories?.map((category) => (
        <BookCategoryButton
          $isSelected={selectedCategory === category.name}
          key={category.id}
          value={category.name}
          onClick={handleCategoryClick}
        >
          {category.name}
        </BookCategoryButton>
      ))}
    </BookCategoryContainer>
  )
}
