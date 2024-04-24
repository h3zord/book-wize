import { prisma } from '@/lib/prisma'

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
