import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './Purchase.css'

const Purchase = () => {
    const {id} = useParams()
    const [products] = useProducts()
    const selectedProducts = products.find(p => p._id == id)
   
    return (
        <div className='purchase'>

            <div className='selectedProducts'>
                    <img src={selectedProducts?.img} alt="" />
                    <h1 className='gradient-text'>{selectedProducts?.name}</h1>
                    <h5  className='text-xl'>Price per Item : $ <span className='text-red-600'>{selectedProducts?.price}</span></h5>
                    <h5>Available Quantity : {selectedProducts?.quantity}</h5>
                    <h5>Minimum Order Quantity : {selectedProducts?.minimum}</h5>

                    <hr className='hr'/>
                    <p className='text-xl'>{selectedProducts?.description}</p>
            </div>
            <div className="purchase-form">

            </div>
        </div>
    );
};

export default Purchase;