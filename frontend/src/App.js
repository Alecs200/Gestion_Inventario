import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
    return (
        <div className="App">
            <h1>Gestión de Inventario</h1>
            <ProductForm refreshProducts={() => {/* Lógica para refrescar productos */}} />
            <ProductList />
        </div>
    );
}

export default App;
