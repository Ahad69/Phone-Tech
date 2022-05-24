import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import auth from "../../firebase.init";
import useProducts from "../../Hooks/useProducts";
import "./Purchase.css";

const Purchase = () => {
  const [user, loading, Autherror] = useAuthState(auth);

  const { id } = useParams();
  const [products] = useProducts();
  const selectedProducts = products.find((p) => p._id == id);

  const [quantity, setQuantity] = useState(selectedProducts?.minimum);
  const [error, setError] = useState(false);

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    if (
      quantity > selectedProducts?.quantity ||
      selectedProducts?.minimum > quantity
    ) {
      setError(true);
    } else {
      setError(false);
    }
  });

  console.log()
  const handleSubmit = (event) => {
    event.preventDefault();
    const customerName = event.target.displayName.value;
    const customerEmail = event.target.email.value;
    const custmerAddress = event.target.address.value;
    const orderQuantity = event.target.quantity.value;
    const cost = selectedProducts?.price * orderQuantity
    const productName = selectedProducts?.name;
    const productImage = selectedProducts?.img;
    const status = 'pending'
    const payment = 'unpaid'

    const orderDetails = ({customerEmail,customerName,orderQuantity , custmerAddress ,productName ,productImage , status  , payment , cost} )

    fetch('http://localhost:5000/orders', {
      method:"POST",
      headers:{
        'content-type' : 'application/json'
      },
      body : JSON.stringify(orderDetails)

    })
    .then(res=>res.json())
    .then(data=> {
      if(data.insertedId){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `You have successfully ordered ${selectedProducts.name}`,
          showConfirmButton: false,
          timer: 1500
        })
        
      }
      
    })
    event.target.reset()
  };

  return (
    <div className="purchase">
      <div className="selectedProducts">
        <img src={selectedProducts?.img} alt="" />
        <h1 className="gradient-text">{selectedProducts?.name}</h1>
        <h5 className="text-xl">
          Price per Item : ${" "}
          <span className="text-red-600">{selectedProducts?.price}</span>
        </h5>
        <h5>Available Quantity : {selectedProducts?.quantity}</h5>
        <h5>Minimum Order Quantity : {selectedProducts?.minimum}</h5>

        <hr className="hr" />
        <p className="text-xl">{selectedProducts?.description}</p>
      </div>

      <div className="purchase-form">
        <h1 className="text-2xl mb-10 text-white">
          {" "}
          Fill this form to make an order!
        </h1>
        <form onSubmit={handleSubmit}>
        <p className="text-white text-lg">Name</p>
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="input mb-5 input-bordered input-error"
            name="displayName"
          />
           <br />
          <p className="text-white text-lg">Email</p>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            placeholder="Type here"
            className="input mt-1 mb-2 input-bordered input-error"
            name="email"
          />
         

       <br />
       <p className="text-white text-lg">Quantity</p>
            <div>
            <input
              type="number"
              id="quantity"
              defaultValue={selectedProducts?.minimum}
              onChange={handleQuantity}
              className="input input-bordered mt-1 mb-2 input-error"
              name="quantity"
            />
            <span className="text-white">
              Available {selectedProducts?.quantity}
            </span>
          </div>
           
          {error ? <span className="text-red-600 w-5 text-left">You can't order less than minimum quantity <br /> Or more than available quantity</span> : ""}
          <br />
          <p className="text-white text-lg">Address</p>
          <input
            type="text"
            placeholder="Address"
            className="input  input-bordered input-error"
            name="address"
            required
          />

          <button disabled={error} type="submit" className="login-btn mt-4">
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
