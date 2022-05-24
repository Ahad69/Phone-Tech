import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/users` , {
      method: 'GET',
      headers : {
        'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => {
      if(res.status == 401 || res.status == 403){
        navigate('/dashboard')
      }
      return res.json()
    })
      .then((data) => setUsers(data));
  }, [users]);

  const adminFind = users.filter(role => role.role == "admin")
  

  const makeAdmin = (email) =>{ 
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Wnat to Make Him Admin ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${email}` , {
          method : 'PUT',
          headers : {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
          },
    
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount === 1) {
              Swal.fire("Congrars!", "Your made him an admin.", "success");
            }
          });
        
      }
    });
  }
  const handleDelete = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes! , Delete It",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}` , {
          method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        
      }
    });
  }

  return (
    <div>
      <div className="overflow-x-auto flex">
        <div>
        <h1 className="gradient-text">All Users</h1>
        <table className="table w-80 mr-10 ">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>

                <td>
                  {
                    user.role ? ''  : <> <button onClick={()=>makeAdmin(user.email)} className=" btn bg-black btn-xs">Make Admin</button> <button onClick={()=>handleDelete(user._id)} className="ml-5 btn bg-red-600 btn-xs">Remove User</button></>
                  }
                  
                </td>
                <td>
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      
        <div>
          <h1 className="gradient-text">Admin</h1>
        <table className="table w-50 ml-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminFind.map((user, index) => (
              <tr key={user._id}>
               
                <td>{user.email}</td>
                
                <td>
                  <button onClick={()=>handleDelete(user._id)} className="ml-5 btn bg-red-600 btn-xs">Remove Admin</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
