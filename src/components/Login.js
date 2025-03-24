import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setISignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {


    // Validate input
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/140586166?s=400&u=d62363e1c0816a269d7883993a40a25cf665c0d2&v=4"
        }).then(() => {
          // Profile updated!
          // ...
          const {uid, email, displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
          navigate("/browse")

        }).catch((error) => {
          // An error occurred
          // ...
        });
        
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage);
        // ..
      });


    }else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-"+ errorMessage);
      });
    

    }

  };

  const toggleSignInForm = () => {
    setISignInForm(!isSignInForm);
    setErrorMessage(null); // Clear errors when switching forms
  };

  return (
    <div>
      <Header />
      <div className='Background'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/IN-en-20250317-TRIFECTA-perspective_d3bd14de-3c51-4227-9244-f14c89469189_large.jpg' alt='logo' />
      </div>
      
      <form onSubmit={(e) => e.preventDefault()} className='Login-Form'>
        <h1 className='Sign-in'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='login-text' />}
        
        <input ref={email} type='text' placeholder='Email Address' className='login-text' />
        <input ref={password} type='password' placeholder='Password' className='login-text' />
        
        <p className='error-message'>{errorMessage}</p>
        
        <button className='login-btn' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p className='signup-text' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
