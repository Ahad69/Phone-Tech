import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
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
              <th>Customer</th>
              <th>Order Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
               orders.map(order =>  <tr>
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
                          src={order.productImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{order.productName}</div>
                     
                    </div>
                  </div>
                </td>
                <td>
                  {order.customerName}
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    {order.customerEmail}
                  </span>
                </td>
                <td>{order.orderQuantity}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
