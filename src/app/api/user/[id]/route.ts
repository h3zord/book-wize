import { prisma } from '@/lib/prisma'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function GET(_request: Request, { params }: IParamsProps) {
  const id = params.id

  const readings = await prisma.user.findUnique({
    where: { id },

    include: {
      ratings: {
        select: {
          id: true,
          rate: true,
          created_at: true,
          book: {
            select: {
              name: true,
              author: true,
              cover_url: true,
              summary: true,
            },
          },
        },
      },
      readings: {
        select: {
          book: {
            select: {
              total_pages: true,
              categories: {
                select: {
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

  return Response.json(readings)
}
