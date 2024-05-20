import { fetchReadings } from '@/fetch/readings'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import { SeeAllContainer } from '../../styles'
import { LastReadingModal } from './last-reading-modal'
import { LastReadingContainer, LastReadingContent } from './styles'
import { ReadingCard } from '@/app/(book-wize)/home/components/last-reading/reading-card'

export async function LastReading() {
  const { value: userId } = cookies().get('userId') as RequestCookie

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
