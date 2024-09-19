import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <h1>{product.title}</h1>
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <p>{product.description}</p>
          <p className="price">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};
