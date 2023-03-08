import { PrismaClient } from '@prisma/client'

export default async function Post(req, res) { 

  const { user } = req.query

  const prisma = new PrismaClient()

  const userPosts = await prisma.post.findMany({
    where: {
        user: user
    }
  })

  res.status(200).json(userPosts)
}