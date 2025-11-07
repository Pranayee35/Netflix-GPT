import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, supported_lang, user_avtar } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
}).catch((error) => {
  navigate("/error");
});

  }
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    navigate("/browse");

  } else {
    dispatch(removeUser());
    navigate("/");
  }
});
 return () => {
  unsubscribe();
 }
    },[]);
    const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView());
    }
    const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between '>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='logo'/>
      {user && (<div className='flex justify-between'>
        {showGptSearch && (<select className='bg-gray-700 text-white p-2 m-3' onChange={handleLanguageChange}>
        {
          supported_lang.map((lan)=>(
            <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>
          ))
        }
        </select>)}
        <button className='px-4 m-4 py-1 md:py-0 rounded-lg text-white bg-blue-600 text-sm hover:bg-blue-400 hover:scale-105' onClick={handleGptSearchClick}>
          {showGptSearch?"Home":"GPT Search"}
        </button>
        <img className='w-5 h-5 mt-5 md:mt-7 mr-3 ml-24 md:ml-0' alt='usericon' src={user_avtar}/>
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header