export default {
	srcDir: 'src',
	target: 'static',
	components: true,
	buildModules: [
		'@nuxtjs/pwa',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
	],
	modules: ['@nuxtjs/axios'],
	pwa: {
		manifest: {
			name: 'USD2ARS',
			short_name: 'USD2ARS',
			theme_color: '#10B981',
		},
	},
	colorMode: {
		classSuffix: '',
	},
	googleFonts: {
		families: {
			Roboto: [400, 700],
		},
		display: 'swap',
	},
	plugins: ['~/plugins/octicons'],
	server: {
		host: '0.0.0.0',
	},
}
