import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const categoryQuery = searchParams.get('category')

  let books

  const bookQuery = {
    include: {
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  }

  if (categoryQuery) {
    books = await prisma.book.findMany({
      ...bookQuery,
      where: {
        categories: {
          some: {
            category: {
              name: categoryQuery,
            },
          },
        },
      },
    })
  } else {
    books = await prisma.book.findMany(bookQuery)
  }

  return Response.json(books)
}
