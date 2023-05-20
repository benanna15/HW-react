import React, { useState } from 'react';

const object = [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
    { id: 3, name: 'Produit 3', price: 30 },
    { id: 4, name: 'Produit 4', price: 40 },
    { id: 5, name: 'Produit 5', price: 50 }
]

const ProductList = () => {
  const [products, setProducts] = useState(object);
  const [inputNumber, setInputNumber] = useState(10);

  const filterProducts = () => {
    const filteredProducts = products.filter(product => product.price <= inputNumber);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      <input type="number" value={inputNumber} onChange={(e)=> setInputNumber(e.target.value)}   />
      <button onClick={() => filterProducts()}>Filtrer les produits</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}€</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;