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
  };
    return (
        <div className="navbar bg-dark">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-accent  w-80">
     
      <li><ActiveRoute to='/'>Home</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
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
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Products</ActiveRoute></li>
      <li className='after'><ActiveRoute to='/products'>Prod</ActiveRoute></li>
 
      
    </ul>
  </div>
  <div className="navbar-end  hidden lg:flex mr-3">
    {
      user?.email ? <ul className='flex'> <li className='list-none mr-3'><div className="avatar online">
      <div className="w-10 rounded-full">
        <img src={user?.photoURL} />
      </div>
    </div></li> <button className=' text-red-600' onClick={logout}>Log Out</button> </ul> :   <li className='list-none '><ActiveRoute to='/login'>Login</ActiveRoute></li>
    }

  
  </div>
</div>
    );
};

export default Navber;