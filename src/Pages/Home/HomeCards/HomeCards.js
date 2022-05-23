import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import "./HomeCards.css";

const HomeCards = () => {
  const colors = [
    "blue",
    "green",
    "#9b59b6",
    "#3498db",
    "#e67e22",
    "#16a085",
    "#95a5a6",
    "#fab1a0 ",
    "#6c5ce7",
    "#00cec9",
    "#D980FA",
    "#006266",
    "#A3CB38",
    "#833471",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor3 = colors[Math.floor(Math.random() * colors.length)];

  const [products] = useProducts();
  const firstTreeProducts = products.slice(1, 4);


//   const {name , img , quantity , minimum , description , price} = firstTreeProducts

  return (
    <div className="homeCards">
      <h1 className="gradient-text pt-10">Our Tools</h1>
      <div className="card-container ">
        {
           firstTreeProducts.map(product => 
           <div
           key={product._id}
           data-aos="fade-up"
            className="home-card"
          >
            <div className="card-img">
              <img src={product.img} />
            </div>
            <div className="top-text">
              <div className="name text-3xl font-bold">{product.name}</div>
              <p>Price : ${product.price}</p>
              <small>Qunatity : {product.quantity}</small>
              <small className="ml-4">Minumum Order : {product.minimum}</small>
            </div>
            <div className="bottom-text">
              <div className="text">
               
               {`${product.description.slice(0,100)} .....`}
              </div>
              <div className="button">
              <button><Link to={`/products/${product._id}`}>Buy now</Link></button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default HomeCards;
