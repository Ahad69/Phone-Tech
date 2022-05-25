import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  const handleDelete = id =>{
    Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!",
   }).then((result) => {
     if (result.isConfirmed) {
       const url = `http://localhost:5000/products/${id}`;
       fetch(url, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount === 1) {
             const remaining = products.filter((item) => item._id !== id);
             setProducts(remaining);
           }
         });
       Swal.fire("Deleted!", "Your file has been deleted.", "success");
     }
   });

 }

  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Product</th>
              <th>Available Q.</th>
              <th>Order Quantity</th>
              <th>Price/item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={product.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.quantity}
                  <br />
                
                </td>
                <td>{product.minimum}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">${product.price}</button>
                  
                </th>
                <th>
                  <button onClick={()=>handleDelete(product._id)}  class="btn btn-ghost btn-xs">DELETE</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
