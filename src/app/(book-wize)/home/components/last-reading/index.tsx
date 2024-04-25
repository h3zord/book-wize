import Image from 'next/image'
import { fetchReadings } from '@/fetch/readings'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import { SeeAllContainer } from '../../styles'
import { SummaryBook } from '@/app/components/summary-book/styles'
import { LastReadingModal } from './last-reading-modal'
import {
  LastReadingContainer,
  LastReadingContent,
  LastReadingCard,
  LastReadingInformation,
} from './styles'

export async function LastReading() {
  const { value: userID } = cookies().get('userID') as RequestCookie

  const { readings: readingsOderByDate } = await fetchReadings({ id: userID })

  const lastReading = readingsOderByDate[0]

  return (
    <LastReadingContainer>
      <SeeAllContainer>
        <p>Sua última leitura</p>

        <LastReadingModal readings={readingsOderByDate} />
      </SeeAllContainer>

      <LastReadingContent>
        <LastReadingCard>
          <LastReadingInformation>
            <Image
              src={lastReading.book.cover_url}
              height={152}
              width={108}
              alt="Most recent reading book cover"
            />

            <div>
              <div>
                <p>Há 2 dias</p>
                <Image src="/rating.png" width={96} height={16} alt="test" />
              </div>

              <div>
                <h4>{lastReading.book.name}</h4>
                <p>{lastReading.book.author}</p>
              </div>

              <SummaryBook $lineClamp={2}>
                <p>{lastReading.book.summary}</p>
              </SummaryBook>
            </div>
          </LastReadingInformation>
        </LastReadingCard>
      </LastReadingContent>
    </LastReadingContainer>
  )
}
