import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [noOrder , setNoOrder] = useState(false)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    
    useEffect(() => {
      fetch(`https://fast-sands-29069.herokuapp.com/orders?customerEmail=${user.email}` , {
            method: 'GET',
            headers : {
              'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => {
    
          if(res.status == 401 || res.status == 403){
            navigate('/')
          }
          return res.json()
        })
        .then(data => {
         
          setOrders(data)
        });
    }, [orders]);




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
          const url = `https://fast-sands-29069.herokuapp.com/orders/${id}`;
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
    useEffect(()=>{
      if(orders == 0){
        setNoOrder(true)
    }
    else{
      setNoOrder(false)
    }
    })
 
    return (
      <div className='pt-10'>
       
        <div className="overflow-x-auto w-full">
        {
                noOrder ?  <p>You have no Order</p> : <table className="table w-full">
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Product</th>
                    <th>Customer</th>
                   {
                     orders[0]?.transactionId ? <th>Order transactionId</th> : <th>Order Quantity</th>
                   }
                    
                    <th>Status</th>
                    <th>Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                
                 {
                     orders.map(order =>  <tr key={order._id}>
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

                      {
                        order.transactionId ? <td>{order.transactionId}</td> : <td>{order.orderQuantity}</td>
                      }

                      <th>
                        <small className="text-red-600">{order.status}</small>
                        
                      </th>
                      <th>
                        {
                          order.payment == 'unpaid' ? <button className="btn btn-ghost btn-xs"><Link to={`/dashboard/payment/${order._id}`}>Pay</Link></button> : "Paid"
                        }
                        
                        
                        </th>
                      <th>
                        {
                          order?.payment == 'paid' ? <button disabled className="btn btn-ghost btn-xs">Cancel</button> : <button onClick={()=>handleDelete(order._id)} className="btn btn-ghost btn-xs">Cancel</button>
                        }
                      </th>
                    </tr>)
                 }
                </tbody>
              </table>
          }
          
        </div>
      </div>
    );
  
};

export default MyOrders;