'use client'

import { MouseEvent, useContext, useEffect, useState } from 'react'
import { BookCategoryContainer, BookCategoryButton } from './styles'
import { ICategories, fetchCategories } from '@/fetch/categories'
import { ExploreBooksContext } from '@/context/explore-books'
import { fetchBooks } from '@/fetch/books'

export function BookCategories() {
  const [categories, setCategories] = useState([] as ICategories[])

  const { selectedCategory, setSelectedCategory, setBooks, resetBooks } =
    useContext(ExploreBooksContext)

  async function getCategories() {
    const categoryList = await fetchCategories()

    setCategories(categoryList)
  }

  useEffect(() => {
    getCategories()
  }, [])

  async function filterBookByCategory(categoryQuery: string) {
    if (selectedCategory === categoryQuery) {
      resetBooks()
    } else {
      const bookList = await fetchBooks(categoryQuery)

      setSelectedCategory(categoryQuery)

      setBooks(bookList)
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
