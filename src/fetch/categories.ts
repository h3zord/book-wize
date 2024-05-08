export interface ICategories {
  id: string
  name: string
}

export async function fetchCategories() {
  const data = await fetch('http://localhost:3000/api/categories')

  const categoriesList: ICategories[] = await data.json()

  return { categoriesList }
}
