// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getProducts = () => axios.get(`${API_URL}/productos`);
export const createProduct = (product) => axios.post(`${API_URL}/productos`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/productos/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/productos/${id}`);

export const getMovements = () => axios.get(`${API_URL}/movimientos`);
export const createMovement = (movement) => axios.post(`${API_URL}/movimientos`, movement);
