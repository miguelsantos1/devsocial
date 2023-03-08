import { PrismaClient } from '@prisma/client'

export default async function Post(req, res) { 

  const prisma = new PrismaClient()

  const posts = await prisma.post.findMany()

  res.status(200).json(posts)
}