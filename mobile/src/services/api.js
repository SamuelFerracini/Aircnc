import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.17.16.187:3333'
});

export default api;