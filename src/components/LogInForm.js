import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";


const LogInForm = ({setIsLoggedIn}) => {

    const navigate =useNavigate();
    const[showpswd, setShowpswd] = useState(false);

    const[formData, setFormData] = useState(
       { email:"", password:"" }
    );

    function changeHandler(event){    

        setFormData( (prevData) => (
        {
            ...prevData ,
            [event.target.name] : event.target.value
         }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/Dashboard")
    }

  return (
    <form onSubmit={submitHandler}>
        <label> Email Address <sup>*</sup>
            <input
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Address'
            ></input>
        </label>
        <br/>
        <label> Password<sup>*</sup>
            <input
            required
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type= {showpswd ? ('text'):('password')}
            placeholder='Enter Password'
            ></input>

            <span onClick={()=>setShowpswd((prev) => !prev)}>
            { showpswd ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>) }
            </span>
        </label>

        <Link to="#">
            <p>Forgot Password</p>
        </Link>
        <button>Log In</button>
    </form>
  )
}

export default LogInForm