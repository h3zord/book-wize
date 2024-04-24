interface IFetchReadings {
  id?: string
}

interface IReadings {
  id: string
  created_at: Date
  user_id: string
  book_id: string
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

export async function fetchReadings({ id }: IFetchReadings) {
  const data = await fetch(`http://localhost:3000/api/readings/${id}`, {
    cache: 'no-cache',
  })

  const readingsList: IReadings[] = await data.json()

  return { readings: readingsList }
}
