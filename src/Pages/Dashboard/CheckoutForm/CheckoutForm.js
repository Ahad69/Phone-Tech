import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const CheckoutForm = ({ orders }) => {
  const { customerName , productName , customerEmail ,_id } = orders;

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading , setIsLoading] = useState(false)

const cost = orders.cost

  const [clientSecret, setClientSecret] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({cost}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [cost]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess('')

    const { paymentIntent, error : intentError } = await stripe.confirmCardPayment(
        clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email : customerEmail
          },
        },
      }
     
    );
    if(intentError){
        setCardError(intentError.message);   
    }
    else{

    console.log(paymentIntent.id)
 
      setCardError('')
      setSuccess('Congratulations , Your Payment Has Recieved')
      const paymentBody = {
         customerName : customerName ,
          product : productName,
          payment : 'paid',
          transactionId : paymentIntent.id ,
      }

      fetch(`http://localhost:5000/order/${_id}` , {
          method : 'PATCH',
          headers: {
            "Content-Type": "application/json",
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(paymentBody),
      }).then(res=>res.json()).then(data => {
        setIsLoading(false)
        if(data.modifiedCount){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Your Payment Successfully Confirmed`,
                showConfirmButton: false,
                timer: 2000
              })
        }
      })
    }
  };


  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                width: "400px",
                fontSize: "26px",
                color: "#aa754",
                "::placeholder": {
                  color: "#aa754",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="login-btn mt-4"
          disabled={!stripe || !clientSecret}
        >
        {
            isLoading ?  <svg className="animate-spin h-5 w-5  bg-transparent border-x-4 rounded-xl  border-sky-600 ..."></svg> : 'PAY'
        }
        </button>
      </form>
      {cardError ? <p className="text-2xl text-red-600">{cardError}</p> : ""}
      {
        success ? <p className="text-2xl text-green-600">{success}</p> : ''
      }
    </div>
  );
};

export default CheckoutForm;
