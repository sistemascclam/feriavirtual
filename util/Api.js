import axios from 'axios';

export default axios.create({
  baseURL: "https://cclam.org.pe/recursos.feriavirtual/public/api/",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});
