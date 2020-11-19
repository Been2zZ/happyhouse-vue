import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8297/happyhouse/api',
  headers: {
    'Content-type': 'application/json',
  },
});
