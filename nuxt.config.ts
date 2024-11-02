// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  css: ["~/assets/css/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      title: "Patrick Diesta | Portfolio",
      meta: [
        { name: "description", content: "Patrick Diesta Portfolio Website." },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/profile.png" }],
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
