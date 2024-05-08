import { MouseEvent, useEffect, useState } from 'react'
import { BookCategoryContainer, BookCategoryButton } from './styles'
import { ICategories, fetchCategories } from '@/fetch/categories'

interface IBookCategoriesProps {
  selectedCategory: string
  filterBookByCategory: (searchCategory: string) => void
}

export function BookCategories({
  filterBookByCategory,
  selectedCategory,
}: IBookCategoriesProps) {
  const [categories, setCategories] = useState([] as ICategories[])

  useEffect(() => {
    async function getCategories() {
      const { categoriesList } = await fetchCategories()

      setCategories(categoriesList)
    }

    getCategories()
  }, [])

  function handleCategoryClick(event: MouseEvent<HTMLButtonElement>) {
    filterBookByCategory(event.currentTarget.value)
  }

  return (
    <BookCategoryContainer>
      {categories.map((category) => (
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
