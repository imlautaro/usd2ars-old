export default {
    srcDir: 'src',
    target: 'static',
    components: true,
    buildModules: ['@nuxtjs/pwa', '@nuxtjs/tailwindcss'],
    modules: ['@nuxtjs/axios'],
    pwa: {
        manifest: {
            name: 'USD2ARS',
            short_name: 'USD2ARS',
            theme_color: '#10B981'
        }
    },
    plugins: [
        '~/plugins/octicons'
    ],
    server: {
        host: '0.0.0.0'
    }
}