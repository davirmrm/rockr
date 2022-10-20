import axios from 'axios';
const process = { env:{REACT_APP_LEADING_API: 'https://stormy-shelf-93141.herokuapp.com/'}}
const api = axios.create({
  baseURL: `${process.env.REACT_APP_LEADING_API}`
});
api.interceptors.request.use(async (config) => {
  const token = '123456';
  
  if (token)
    config.headers.authorization = `Token ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  
  (err) => Promise.reject(err)
);

export default api;