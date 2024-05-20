import { prisma } from '@/lib/prisma'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function GET(_request: Request, { params }: IParamsProps) {
  const id = params.id

  const ratings = await prisma.rating.findMany({
    where: {
      book_id: id,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })

  return Response.json(ratings)
}
