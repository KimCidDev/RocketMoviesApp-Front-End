import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mindot-api.onrender.com'
});
