import { defineConfig } from 'vitest/config'

export default defineConfig
  ({
    test: {
      name: 'ts-generic',
      include: ['./tests/**/*'],
      globals: true,
      includeSource: ['./src/**/*'],
      environment: 'node'
    },
  })