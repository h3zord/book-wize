import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const { userId, bookId } = await request.json()

  const reading = await prisma.reading.create({
    data: {
      user_id: userId,
      book_id: bookId,
    },
  })

  return Response.json({ reading })
}

export async function DELETE(request: Request) {
  const { userId, bookId } = await request.json()

  const reading = await prisma.reading.delete({
    where: {
      user_id_book_id: {
        user_id: userId,
        book_id: bookId,
      },
    },
  })

  return Response.json(reading)
}
