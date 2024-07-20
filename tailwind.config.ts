import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	content: [
		"./pages/**/*.vue",
		"./pages/*.vue",
		"./components/**/*.vue",
		"./components/*.vue",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
};
