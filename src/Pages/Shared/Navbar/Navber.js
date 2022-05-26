import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ActiveRoute from '../../Auth/ActiveRoute/ActiveRoute';
import './Navbar.css'


const Navber = () => {
  const [user, loading, error] = useAuthState(auth);


  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
    
  };
    return (
        <div className="navbar bg-dark">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
      <p>≣</p>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-accent  w-80">
     
      <li><ActiveRoute to='/'>Home</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/portfolio'>Portfolio</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/blogs'>Blogs</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/about'>About</ActiveRoute></li>
      {
        user?.email &&  <li className='after'><ActiveRoute to='/dashboard'>Dashboard</ActiveRoute></li>
      }
     
      <div className="">
      {
        user?.email ? <ul className=''> <li className='list-none'><div className="avatar">
        <div className="w-10 rounded-full m-auto">
          <img src={user?.photoURL} />
        </div>
      </div></li> <button className=' text-red-600' onClick={logout}>Log Out</button> </ul> :   <li className='list-none '><ActiveRoute to='/login'>Login</ActiveRoute></li>
      }
  </div>
 
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-2xl gradient-text">Phone Tech</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li className='after'><ActiveRoute to='/'>Home</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/portfolio'>Portfolio</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/blogs'>Blogs</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/about'>About</ActiveRoute></li>
      {
        user?.email &&  <li className='after'><ActiveRoute to='/dashboard'>Dashboard</ActiveRoute></li>
      }
    </ul>
  </div>
  <div className="navbar-end  hidden lg:flex mr-3">
    {
      user?.email ? <ul className='flex'> <li className='list-none mr-3'>
        {user?.displayName}
      
    </li>
   <button className=' text-red-600' onClick={logout}>Log Out</button> </ul> :   <li className='list-none '><ActiveRoute to='/login'>Login</ActiveRoute></li>
    }

  
  </div>
  <div className="navbar-end lg:hidden">
      <label className='btn btn-ghost lg:hidden' for="my-drawer-2">
  
      <img width={20} src="https://i.ibb.co/SxWy7DG/menu.png" alt="" />
  
          </label>
      </div>
</div>
    );
};

export default Navber;