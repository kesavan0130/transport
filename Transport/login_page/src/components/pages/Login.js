import React from "react";
import '../StyleSheet/Login.css';
import { RiAdminFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";


const Login = () => {
    return (
      <div className="main-body">
      
        <div className="login-container"  >
          
         <form>
  <h1>Login</h1>
  <div className='input-box'>
    <input type='text' placeholder='username' required>
    </input>
    <RiAdminFill className="icon" />
  </div>
  <div className='input-box'>
    <input type='password' placeholder='Password' required>
    </input>
    <RiLockPasswordFill className="icon" />
    
  </div>
  <div className='check-box'>
<label><input type='checkbox'></input>Remember me</label>
<a href='#'>Forget Password</a>
  </div>
  <div className="log-button">
  <button > <RiLoginBoxFill />Login </button>
  </div>

</form>
        </div>
        </div>
        
    )
}       
export default Login;