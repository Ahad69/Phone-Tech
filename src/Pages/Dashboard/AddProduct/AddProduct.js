import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

        const onSubmit = data => {
            fetch('http://localhost:5000/products' , {
                method : "POST",
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Product Added Successfully`,
                        showConfirmButton: false,
                        timer: 1500,
                      }); 
                }
            })
            reset()
        };

    return (
        <div className="addProduct">
        <h1 className="gradient-text">Add a Product</h1>
       
        

    
        

     
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
            type="text"
            placeholder="Name"
            className="input mt-3 input-bordered input-error"
            {...register("name" , { required: true })} 
            required
             />
            <input
            type="text"
            placeholder="Image Link"
            className="input mt-3 input-bordered input-error"
            {...register("img" , { required: true })} 
            required
             />
            <input
            type="number"
            placeholder="Price"
            className="input mt-3 input-bordered input-error"
            {...register("price" , { required: true })} 
            required
             />
            <input
            type="number"
            placeholder="Minimum Order Quantity"
            className="input mt-3 input-bordered input-error"
            {...register("minimum" , { required: true })} 
            required
             />
            <input
            type="number"
            placeholder="Quantity"
            className="input mt-3 input-bordered input-error"
            {...register("quantity" , { required: true })} 
            required
             />
            <input
            type="text"
            placeholder="Description"
            className="input mt-3 input-bordered input-error"
            {...register("description" , { required: true })} 
            required
             />
            
          
     
            {errors.exampleRequired && <span>This field is required</span>}
            
            <button
            id="addproduct-button"
            className="input mt-3  input-bordered input-error"
            type="submit"
          >
            Review
          </button>
            </form>
        
        
       
      </div>
    );
};

export default AddProduct;