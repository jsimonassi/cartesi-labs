/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import palette from "./palette.js";
// eslint-disable-next-line no-undef
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {

			"xlsm": "540px",
			"xsm": "320px",

			"sm": "640px",
			// => @media (min-width: 640px) { ... }

			"md": "768px",
			// => @media (min-width: 768px) { ... }

			"lg": "1024px",
			// => @media (min-width: 1024px) { ... }

			"xl": "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			"nav": "1780px",  
		},
		fontFamily: {
			sans: ["M PLUS Rounded 1c", "Roboto", "sans-serif"],
			rounded: ["M PLUS Rounded 1c", "sans-serif"]
		},
		fontSize: {
			"h1": "56px",
			"h2": "48px",
			"h3": "40px",
			"h4": "32px",
			"h5": "24px",
			"h6": "20px",
			"label-lg": "14px",
			"label-md": "12px",
			"label-sm": "10px",
			"body-lg": "16px",
			"body-md": "14px",
			"body-sm": "12px",
			"subtitle": "16px",
			"caption": "10px"
		},
		extend: {
			fontWeight: {
				300: 300,
				400: 400,
				500: 500,
				600: 600,
				700: 700,
				800: 800
			},
			fontSize: {
				xs: "0.65rem"
			},
			colors: palette
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink,
			success: colors.success
		}
	},
	plugins: [],
	safelist: ["bg-secondary", "bg-success", "border-success"]
};
