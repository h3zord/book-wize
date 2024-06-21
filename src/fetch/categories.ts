export interface ICategories {
  id: string
  name: string
}

export async function fetchCategories() {
  try {
    const url = `${process.env.NEXT_PUBLIC_RAILWAY_URL}/categories` as string

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories: ${response.status} ${response.statusText}`,
      )
    }

    const categoriesList: ICategories[] = await response.json()

    return categoriesList
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Failed to fetch categories:', error)
    }

    return []
  }
}
