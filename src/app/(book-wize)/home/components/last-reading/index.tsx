import { fetchReadings } from '@/fetch/readings'
import { SeeAllContainer } from '../../styles'
import { LastReadingModal } from './last-reading-modal'
import { LastReadingContainer, LastReadingContent } from './styles'
import { ReadingCard } from '@/app/(book-wize)/home/components/last-reading/reading-card'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

export async function LastReading() {
  const session = await getServerSession(authOptions)

  const userId = session?.user.id

  const readingsOderByDate = await fetchReadings(userId)

  const lastReading = readingsOderByDate[0]

  return (
    !!readingsOderByDate.length && (
      <LastReadingContainer>
        <SeeAllContainer>
          <p>Sua última leitura</p>

          <LastReadingModal readings={readingsOderByDate} />
        </SeeAllContainer>

        <LastReadingContent>
          <ReadingCard reading={lastReading} />
        </LastReadingContent>
      </LastReadingContainer>
    )
  )
}
