import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server-api-guke.onrender.com/',
  responseType: 'json',
});

export default instance;
