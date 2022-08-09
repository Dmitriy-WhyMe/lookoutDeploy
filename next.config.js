module.exports = {
    reactStrictMode: false,
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/bitrix/',
                destination: 'https://#SITE_URL#/bitrix/',
                statusCode: 301
            }
        ]
    }
}
