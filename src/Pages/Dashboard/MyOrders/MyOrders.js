import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from "sweetalert2";

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

      fetch(`http://localhost:5000/orders?customerEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
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
          const url = `http://localhost:5000/orders/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount === 1) {
                const remaining = orders.filter((item) => item._id !== id);
                setOrders(remaining);
              }
            });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });

    }
    return (
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Product</th>
                <th>Customer</th>
                <th>Order Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
                 orders.map(order =>  <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order.productImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.productName}</div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                    {order.customerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {order.customerEmail}
                    </span>
                  </td>
                  <td>{order.orderQuantity}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{order.status}</button>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                  </th>
                  <th>
                    <button onClick={()=>handleDelete(order._id)} className="btn btn-ghost btn-xs">Cancel</button>
                  </th>
                </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    );
  
};

export default MyOrders;