import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8000/api/",
  // baseURL: "https://cclam.org.pe/recursos.feriavirtual/public/api/",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});
