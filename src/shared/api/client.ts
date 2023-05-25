import axios from 'axios';

const baseURL = '/api/v1';

export const client = axios.create({
  baseURL,
  withCredentials: true,
});
