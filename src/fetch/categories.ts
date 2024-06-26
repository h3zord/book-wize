export interface ICategories {
  id: string
  name: string
}

export async function fetchCategories() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories` as string

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories: ${response.status} ${response.statusText}`,
      )
    }

    const categoryList: ICategories[] = await response.json()

    return categoryList
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to fetch categories:', error)
    }

    return []
  }
}
