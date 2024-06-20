import { prisma } from '@/lib/prisma'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function GET(_request: Request, { params }: IParamsProps) {
  const id = params.id

  const readings = await prisma.reading.findMany({
    where: { user_id: id },

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
          ratings: {
            select: {
              rate: true,
            },
          },
        },
      },
    },
  })

  await prisma.$disconnect()

  return Response.json(readings)
}
