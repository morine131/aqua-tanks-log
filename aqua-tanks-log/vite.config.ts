import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {

  const baseConfig = {
    resolve: {
      alias: {
        '@': '/app',
      }
    },
    ssr: {
      external: [
        '@prisma/client',
        '@prisma/adapter-d1',
      ]
    },
  }
  
  if (mode === 'client') {
    return {
      ...baseConfig,
      plugins: [client()]
    }
  } else {
    return {
      ...baseConfig,
      plugins: [honox(), pages()]
    }
  }
})
