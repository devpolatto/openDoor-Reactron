import axios from 'axios';

const settings = require('../config')

const api = axios.create({
   baseURL: settings.keys.host,
})

export default api;