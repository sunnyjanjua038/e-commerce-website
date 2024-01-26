import React from 'react';
import MainProducts from '../Api/Products';
import { fetchProductsData } from '../Api/ProductsAxiosInstance'; 
const Galaxy = () => {
  const productss = MainProducts()
       const Galaxy = productss.filter(product => product.description.includes('Galaxy'));

  return (
    <div>
      <h1>Galaxy Phones</h1>
      <div>
      <h1>IPhone</h1>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Galaxy.map(product => (
          <div className="card" key={product.id} style={{ width: '250px', height: '300px', margin: '10px', border: '1px solid #ccc' }}>
            <img src={product.thumbnail} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={`Product ${product.id}`} />
            <div className="card-details" style={{ padding: '10px' }}>
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              {/* You can add more details to display */}
            </div>  
          </div>
        ))}
      </div>
    </div>

     </div>
  );
};

export default Galaxy;
