
import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(5)
})

const routes: FastifyPluginAsync = async (server) => {
  server.post('/contact', async (req, reply) => {
    try {
      const parsed = contactSchema.parse(req.body)
      const saved = await prisma.contactMessage.create({ 
        data: {
          name: parsed.name,
          email: parsed.email,
          message: parsed.company ? `Company: ${parsed.company}\n\n${parsed.message}` : parsed.message
        }
      })
      // In production: send transactional email or notify Slack
      server.log.info({ contact: saved }, 'Contact form received')
      return { success: true, message: 'Message received', data: { id: saved.id } }
    } catch (err: any) {
      server.log.error(err)
      return reply.status(400).send({ success: false, error: err?.message || 'Invalid input' })
    }
  })
}

export default routes
