import { defineNuxtConfig } from 'nuxt3'
import TypedRouter from 'nuxt-typed-router'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [TypedRouter],
  nuxtTypedRouter: {
    outDir: './models'
  }
})
