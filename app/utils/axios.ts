import Axios from 'axios';

export const client = Axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
});
