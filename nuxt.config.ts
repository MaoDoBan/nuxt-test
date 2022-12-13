// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Ban Shop",
      meta: [
        {name: "description", content: "Aprendendo Nuxt 3"}
      ],
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  },
  runtimeConfig: {
    apiKey: process.env.CURRENCY_API_KEY
  }
});
