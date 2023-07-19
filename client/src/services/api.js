import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'  // Asegúrate de que este es el puerto correcto en el que tu back-end está escuchando
});

export default api;

