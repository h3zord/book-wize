import { prisma } from '@/lib/prisma'

export async function GET() {
  const books = await prisma.book.findMany({
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })

  return Response.json(books)
}
