
/**
 * Matriarch Tech — Fastify backend (TypeScript)
 * - Provides endpoints: /api/projects, /api/testimonials, /api/contact
 * - Uses Prisma client (Postgres) for persistence
 * - Basic security: helmet, CORS, rate limit, input validation with zod
 */

import Fastify from 'fastify'
import cors from '@fastify/cors'
import rateLimit from '@fastify/rate-limit'
import helmet from '@fastify/helmet'
import { PrismaClient } from '@prisma/client'
import contactRoutes from './routes/contact'
import contentRoutes from './routes/content'

const prisma = new PrismaClient()
const server = Fastify({ logger: true })

server.register(helmet)
server.register(cors, { origin: true })
server.register(rateLimit, { max: 100, timeWindow: '1 minute' })

server.get('/healthz', async () => ({ status: 'ok', timestamp: new Date() }))

server.register(contentRoutes, { prefix: '/api' })
server.register(contactRoutes, { prefix: '/api' })

// Start server
const port = Number(process.env.PORT || 4000)
server.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server listening at ${address}`)
})
