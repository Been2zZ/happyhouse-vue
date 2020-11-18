import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8297/vueboard/api',
  headers: {
    'Content-type': 'application/json',
  },
});
