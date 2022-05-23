import React from 'react';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className="addProduct">
        <h1 className="gradient-text">Add a Product</h1>
        <form onSubmit={1}>
         
          <input
            type="text"
            placeholder="Name"
            className="input mt-3 input-bordered input-error"
            name="name"
            required
          />
         
          <input
            type="text"
            placeholder="I"
            className="input mt-3 input-bordered input-error"
            name="name"
            required
          />
         
          <input
            type="text"
            placeholder="Name"
            className="input mt-3 input-bordered input-error"
            name="name"
            required
          />
         
          <input
            type="text"
            placeholder="Name"
            className="input mt-3 input-bordered input-error"
            name="name"
            required
          />
          <textarea
            type="text"
            placeholder="Review Text"
            className="input mt-3  input-bordered input-error"
            name="text"
            required
          />
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