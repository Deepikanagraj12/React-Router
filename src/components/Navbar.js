import React from 'react'
import logo from '../assets/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';

 const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link>
            <img src={logo} alt='Study Notion'
            ></img>
          </Link>
   
        <nav className='bg-richblack-900 text-richblack-5 flex flex-row justify-center items-center' >
          <ul className='flex gap-5'>
             <li> <NavLink to="/"/>Home </li>
             <li> <NavLink to="/"/>About </li>
             <li> <NavLink to="/"/>Contact </li>
          </ul>
        </nav>

        <div className=''>
          { !isLoggedIn && <NavLink to="/Login"> <button >Log In</button> </NavLink> }
          { !isLoggedIn && <NavLink to="/Signup"> <button>Sign Up</button> </NavLink>}
          { isLoggedIn && <NavLink to="/">
             <button onClick={ () => {
              setIsLoggedIn(false);
              toast.success("logged out")
             }}
             >Log Out</button> </NavLink> }
          {isLoggedIn && <NavLink to="/Dashboard"> <button>DashBoard</button> </NavLink>}
        </div>
        
    </div>
  )
}

export default Navbar;
