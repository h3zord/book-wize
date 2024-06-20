import { prisma } from '@/lib/prisma'

export async function GET() {
  const categories = await prisma.category.findMany()

  await prisma.$disconnect()

  return Response.json(categories)
}
