import axios from 'axios';

const api = axios.create({
   baseURL: process.env.URL_ID_FLEX_PRO,
})

export default api;