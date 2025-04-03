import {  onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =  useSelector(store => store.user);
  

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    })
    
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
        navigate("/browse") ;
   } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return ()=> unsubscribe();

  },[]);
  return (
    <div className='Absolute'>
      <img className='Logo'
      src= {LOGO}
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
