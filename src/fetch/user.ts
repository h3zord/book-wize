interface IFetchUserProps {
  id: string
}

interface IBook {
  name: string
  author: string
  cover_url: string
  summary: string
}

export interface IRating {
  id: string
  rate: number
  created_at: string
  book: IBook
}

interface ICategory {
  category: {
    name: string
  }
}

interface IBookDetails {
  total_pages: number
  categories: ICategory[]
}

export interface IReading {
  book: IBookDetails
}

export interface IUser {
  id: string
  name: string
  email: string | null
  emailVerified: boolean | null
  image: string
  created_at: string
  ratings: IRating[]
  readings: IReading[]
}

export async function fetchUser({ id }: IFetchUserProps) {
  const data = await fetch(`http://localhost:3000/api/user/${id}`, {
    cache: 'no-cache',
  })

  const userDetails: IUser = await data.json()

  return { userDetails }
}
