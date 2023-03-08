import { PrismaClient } from '@prisma/client'

export default async function Post(req, res) { 

  const prisma = new PrismaClient()

  const post = await prisma.post.create({
    data: {
      user: req.body.user,
      userImage: req.body.userImage,
      content: req.body.content
    }
  })

  res.status(201).json(post)
}