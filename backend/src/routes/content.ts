
import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const routes: FastifyPluginAsync = async (server) => {
  server.get('/projects', async (req, reply) => {
    const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
    return { data: projects }
  })

  server.get('/testimonials', async (req, reply) => {
    const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } })
    return { data: testimonials }
  })
}

export default routes
