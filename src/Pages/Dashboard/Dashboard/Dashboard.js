import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/userAdmin';
import "./Dashboard.css"

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user)
  
    return (
        <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   flex flex-col items-center ">
            <Outlet></Outlet>
          
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="dash-menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
           
           
            {
              admin ? <>
              <Link  to="add-products"><li  className='after2' >Add Products  </li></Link>
              <Link  to="manage-products"><li  className='after2' >Manage Products  </li></Link>
              <Link  to="make-admin"><li  className='after2' >Make Admin   </li></Link>
              <Link  to="all-orders"><li  className='after2' >All Orders    </li></Link></> : <> <Link  to="review"><li  className='after2' > Add Review   </li></Link>
            <Link  to="my-orders"><li  className='after2' > My Orders   </li></Link></>
            }
 <Link  to="profile"><li  className='after2' >My Profile   </li></Link>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;