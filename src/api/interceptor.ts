import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com'
});

// An interceptor can be used to push default headers.
// api.interceptors.request.use()

// A response interceptor can be created to handle error codes efficiently.
// api.interceptors.response.use()

export default api;
