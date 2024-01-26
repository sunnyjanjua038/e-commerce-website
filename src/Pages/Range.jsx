import React from 'react';
import Button from 'react-bootstrap/Button';
import './RangeStyle.css'
import { useRangeLogic } from './RangeLogic';
const Range = () => {
  const { filteredProducts, send } = useRangeLogic();

  
  return (
    <div>
      <h1>This is Range</h1>
      {filteredProducts && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col mb-4">
                <div className="card">
                  <img
                    src={product.thumbnail}
                    className="card-img-top rangeimage"
                    alt={product.title}
                  />
                  <div className="card-body d-flex flex-column ">
                    <h4 className="card-title text-center ">{product.title}</h4>
                    <p className="card-text text-center ">Category: {product.category}</p>
                    <p className="card-text text-center prices">Price: {product.price}</p>
                    <Button
                      className="btn btn-primary  kanbutton"
                      onClick={() => send(product)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Range;
