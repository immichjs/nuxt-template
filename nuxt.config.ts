// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	ssr: false,
	devtools: { enabled: true },
	srcDir: "app",
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
		{
			path: "~/components/atoms",
			pathPrefix: false,
		},
		{
			path: "~/components/organisms",
			pathPrefix: false,
		},
		{
			path: "~/components/molecules",
			pathPrefix: false,
		},
		{
			path: "~/components/templates",
			pathPrefix: false,
		},
		{
			path: "~/components/pages",
			pathPrefix: false,
		},
	],
	runtimeConfig: {
		public: {
			baseURL: process.env.API || "http://localhost:4000/api",
		},
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@nuxt/icon",
		"@vueuse/nuxt",
	],
	pinia: {
		storesDirs: ["./app/stores/**"],
		disableVuex: true,
	},
	plugins: ["./app/plugins/api.ts"],
	googleFonts: {
		families: {
			Roboto: {
				wght: "100..900",
			},
			Montserrat: {
				wght: "100..900",
			},
			Raleway: {
				wght: "100..900",
			},
		},
	},
});
