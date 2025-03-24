import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user =  useSelector(store => store.user);
  

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }
  return (
    <div className='Absolute'>
      <img className='Logo'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt='Logo'></img>
      {user && (    <div className='user-icon'>
        <img className='usericon' alt='usericon' src={user.photoURL}>
        </img>
        <button className='signOut-btn' onClick={handleSignOut}>(Sign Out)</button>
      </div>)}
  
    </div>
  )
}

export default Header
