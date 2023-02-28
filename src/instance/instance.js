import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vt-coffee-api.onrender.com/',
  responseType: 'json',
});

export default instance;
