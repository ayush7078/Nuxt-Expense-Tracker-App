export default {
  head: {
    title: 'Expense Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  serverMiddleware: [
    { path: '/api', handler: '~/server/index.js' }, // Proxy backend server
  ],
  buildModules: ['@nuxtjs/axios'],
  css: ['ant-design-vue/dist/antd.css'],
  plugins: ['~/plugins/antd-ui.js'],
  axios: {
    baseURL: 'http://localhost:5000/', 
  },
};
