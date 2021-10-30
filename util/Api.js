import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_BK_WS,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});
