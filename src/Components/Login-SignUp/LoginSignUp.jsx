//JSX allows developers to write concise and readable code by combining JavaScript and HTML elements in the same file
import React, { useState } from 'react'
import './LoginSignUp.css'


import  passwd_icon from '../../Assets/password.png' 
import  email_icon from '../../Assets/email.png'
import  person_icon from '../../Assets/person.png'

const LoginSignUp = () => {
    
    const [action,setAction] =useState("Login");
  
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
            <div className='underLine'></div>        
            </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={person_icon} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>}
           
           
            <div className='input'>
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src={passwd_icon} alt=""/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
       
       {action==="Sign Up"?<div></div>: <div className='forgotPassword'>Lost Paswwrod?<span>Click here</span></div>}
      
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >SignUp </div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} >Login </div>
        </div>
        </div>
    )
}

export default LoginSignUp
