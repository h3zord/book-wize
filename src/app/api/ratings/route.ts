import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET() {
  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: {
        select: {
          name: true,
          author: true,
          summary: true,
          cover_url: true,
        },
      },
      user: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  })

  return Response.json(ratings)
}

export async function POST(request: NextRequest) {
  const ratingData = await request.json()

  const rating = await prisma.rating.create({
    data: {
      user_id: ratingData.user_id,
      book_id: ratingData.book_id,
      description: ratingData.description,
      rate: ratingData.rate,
    },
  })

  return Response.json(rating)
}
