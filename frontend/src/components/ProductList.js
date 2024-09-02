// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            fetchProducts(); // Refrescar la lista de productos después de eliminar
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.nombre} - {product.cantidad} unidades
                        <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
