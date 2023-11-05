import { defineConfig } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  server: {
    port: 5175
  },
  plugins: [sveltekit()]
})
