import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpForm = ({setIsLoggedIn}) => {
    
  const navigate = useNavigate();
  const [accountType, setAccounttype] = useState("student")
  const [showpswd , setShowpswd] = useState(false);
  const [createpswd , setCreatepswd] = useState(false);

    const[formData, setFormData] = useState(
        {email:"" , firstName:"" , lastName: "" , createPassword: "", confirmpassword:"" }
    )

    function changeHandler(event){
          setFormData( (prevData) => (
            {
            ...prevData,
             [event.target.name] : event.target.value
          }
        ))
    }

    function submitHandler(event){
      event.preventDefault();
      if(formData.createPassword !== formData.confirmpassword){
        toast.error("Password does not match");
        return;
      }

      setIsLoggedIn(true);
      toast.success("Account Created ");

      const accountData = {
        ... formData
      }

      const finalData = {
        ...accountData ,
        accountType
      }

      navigate("/Dashboard");

    }

  return (
    <div>

        <div>
            <button 
            onClick={
              ()=> setAccounttype("student")}
              > Student</button>
            <button
             onClick={
              ()=> setAccounttype("instructor")}
            > Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
          <div>
            <label>First Name <sup>*</sup>
            <input
             required
             placeholder='Enter First Name'
             type='text'
             name='firstName'
             onChange={changeHandler}
             value={formData.firstName}
             ></input>
            </label>

            <label>Last Name <sup>*</sup>
            <input
             required
             placeholder='Enter Last Name'
             type='text'
             name='lastName'
             onChange={changeHandler}
             value={formData.lastName}
             ></input>
            </label>
          </div>
          
        <div>  
          <label> Email Address <sup>*</sup>
            <input
            type='text'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            required
            placeholder='Enter Email Address'
            ></input>
          </label>
        </div>
         
         <div>
            <label>Create Password<sup>*</sup>
            <input
             required
             placeholder='Enter password'
             type={showpswd ? ("text"): ("password")}
             name='createPassword'
             onChange={changeHandler}
             value={formData.createPassword}
             ></input>

             <span onClick={()=> setShowpswd ( (prev) => !prev)}> {
            showpswd ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>) } 
            </span>

          </label>


            <label > Confirm Password<sup>*</sup>
            <input
            name='confirmpassword'
            value={formData.confirmpassword}
            onChange={changeHandler}
            type= {createpswd ? ('text'):('password')}
            required
            placeholder='Confirm Password'
            ></input>
            <span onClick={()=> setCreatepswd((prev) => !prev)}>{
            createpswd ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
        </label>
        </div>

        <button> Create Account</button>
        </form>
    </div>
  )
}

export default SignUpForm