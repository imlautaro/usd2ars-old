const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.gray,
			white: colors.white,
			black: colors.black,
			green: colors.emerald,
			red: colors.red,
			transparent: 'transparent',
			yellow: colors.amber
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
