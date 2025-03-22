import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setISignInForm] = useState(true);

  const toggleSignInForm = ()=>{
    setISignInForm(!isSignInForm);

  }



  return (
    <div>
      <Header/>
      <div className='Background'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/IN-en-20250317-TRIFECTA-perspective_d3bd14de-3c51-4227-9244-f14c89469189_large.jpg'
       alt='logo'></img>


      </div>
      <form className='Login-Form'>
        <h1 className='Sign-in'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='login-text'></input>}

        <input type='text' placeholder='Email Address' className='login-text'></input>
        <input type='Password' placeholder=' Password' className='login-text'></input>
        <button className='login-btn'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='signup-text' onClick={toggleSignInForm }>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>

    </div>
  )
}

export default Login
