import frameImage from '../assets/frame.png'
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import {FcGoogle} from "react-icons/fc"

function Template({title, desc1, desc2, image, setIsLoggedIn, formtype}){
    return(
    <div className='flex justify-center items-center gap-5'>
   
      <div className=''>
       <div>
          <h1>{title}</h1>
          <p>
            <span>{desc1}</span>
            <br/>
            <span>{desc2}</span>
          </p> 
       </div>

         {formtype === "signup"? 
         (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
         (<LogInForm setIsLoggedIn={setIsLoggedIn}/>)}
        
        <div>
          <div></div>
          <p>Or</p>
          <div></div>
        </div>

          <button> <FcGoogle/> Sign Up with Google</button>
       </div>


        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage}
                alt="Pattern"
                loading="lazy"/>

            <img src={image}
                alt="Students"
                loading="lazy"
                className='absolute -top-4 right-4'
                />    
        </div>
          
    </div>
  )
}

export default Template;