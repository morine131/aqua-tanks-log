import { PrismaClient } from '@prisma/client'
import {} from 'hono'

type Head = {
  title?: string
}

declare module 'hono' {
  interface Env {
    Variables: {
      prisma: PrismaClient
    }
    Bindings: {}
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
