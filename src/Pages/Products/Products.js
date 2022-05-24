import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import "./Products.css";

const Products = () => {
  const [products , isLoading] = useProducts();

  if(isLoading){
    return <div className="bg-black pt-80 pb-80">
    <svg style={{borderRadius:"50%"  , borderTop:"15px solid red" ,borderBottom:"15px solid red" , margin: 'auto'}} className="animate-spin h-20 w-20  bg-transparent  border-orange-600 ..."> </svg>
</div>
  }

  return (
    <div className="products-container">
      <h1 className="gradient-text mb-5">Our Tools and Parts </h1>
      <div className="cards">
        {products.map((product) => (
          <div className="product-container" data-aos="fade-up" key={product._id}>
            <div className="image">
              <img
                src={product.img}
                alt=""
              />
            </div>
            <div className="card-content">
              <div className="wrapper">
                <div className="title ">{product.name}</div>
                <p className="price">${product.price} <small>per/item</small></p>
                <small>Qunatity : {product.quantity}</small>
              <small className="ml-4">Minumum Order : {product.minimum}</small>
              <hr className="hr"/>
              <div className="text">
               {`${product.description.slice(0,100)} .....`}
              </div>
                <div className="btns">
                  <button><Link to={`/products/${product._id}`}>Buy now</Link></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
