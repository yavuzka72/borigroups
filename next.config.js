module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? `/react/molla/demo-7` : '',
    trailingSlash: true,
    env: {
        PUBLIC_URL: process.env.NODE_ENV === 'production' ? `/react/molla/demo-7/` : '/',
        APP_URL: process.env.NODE_ENV === 'production' ? 'https://d-themes.com/react/molla/' : 'http://localhost/'
    }
}