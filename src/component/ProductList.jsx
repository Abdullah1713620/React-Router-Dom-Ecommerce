import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="product-list-container">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`} className="product-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
