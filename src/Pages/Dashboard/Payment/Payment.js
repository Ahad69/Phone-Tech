import React , {useState , useEffect} from 'react';
import {useParams} from "react-router-dom"
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import './Payment.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Payment = () => {
    const {id} = useParams()
    const [orders , setOrders] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${id}` , {
            method : "GET",
            headers : {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    .then(res=> res.json())
    .then(data => setOrders(data))
    },[])

    const stripePromise = loadStripe('pk_test_51JwR7qKy44uGAkx3joKfH8LlOIzdguBWIzeB31KyoJSSm10TTOgsLR2mpGsgysXLg5aWdJwJ6y0zJb5a1YbrxRHF00XSDTUB3L');

    return (
        <div>
            <div className='payment-banner'>
                <div className="payment-image">
                    <img  src={orders.productImage} alt="" />
                </div>
                <div className="payment-details">
                    <h2>Product :<span className='text-red-600'> {orders.productName}</span></h2>
                    <h2>Order Quantity :<span className='text-red-600'> {orders.orderQuantity} piece.</span></h2>
                    <h4>Phone : <span className='text-red-600'> {orders?.custmerPhone}</span></h4>
                    <h4>Address : <span className='text-red-600'> {orders.custmerAddress}</span></h4>
                    <br />
                    <p className='text-2xl'>Cost of Your Order : <span className='text-red-600'>$ {orders?.cost}</span></p>
                </div>
            </div>
            <hr className='hr' />
        
            <div>
                <h3 className='text-3xl'>Hello , {orders.customerName} </h3>
                <h3 className='text-2xl'>Please Pay <span className='text-red-600'>${orders?.cost}</span> </h3>
                <br />
                <Elements stripe={stripePromise}>
                <CheckoutForm orders={orders} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;