interface IFetchReadingsProps {
  id: string
}

export interface IReadings {
  id: string
  user_id: string
  book_id: string
  created_at: Date
  book: {
    name: string
    author: string
    summary: string
    cover_url: string
  }
}

export async function fetchReadings({ id }: IFetchReadingsProps) {
  const data = await fetch(`http://localhost:3000/api/readings/${id}`, {
    cache: 'no-cache',
  })

  const readingsListOrderByDate: IReadings[] = await data.json()

  return { readings: readingsListOrderByDate }
}
