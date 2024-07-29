// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
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
	plugins: ["./app/plugins/api.ts", "./app/plugins/maska.ts"],
	googleFonts: {
		families: {
			Montserrat: {
				wght: "100..900",
			},
		},
	},
	css: ["vue3-toastify/dist/index.css", "assets/css/tailwind.css"],
});
