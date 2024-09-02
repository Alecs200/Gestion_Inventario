import React, { useState } from 'react';
import { createProduct } from '../services/api';

const ProductForm = ({ refreshProducts }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        cantidad: 0,
        precio: 0.0
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(formData);
            refreshProducts(); // Refresca la lista de productos después de crear uno nuevo
            setFormData({ nombre: '', descripcion: '', cantidad: 0, precio: 0.0 }); // Resetea el formulario
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
            <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
            <input type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} placeholder="Cantidad" required />
            <input type="number" name="precio" value={formData.precio} onChange={handleChange} placeholder="Precio" required />
            <button type="submit">Crear Producto</button>
        </form>
    );
};

export default ProductForm;
