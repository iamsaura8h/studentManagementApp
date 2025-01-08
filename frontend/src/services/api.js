import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/students', // Base URL for the backend route
});

export default API;
