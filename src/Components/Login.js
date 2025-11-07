import {useRef, useState } from 'react'
import Header from './Header'
import checkvaliddata from "../utils/validate"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { background } from '../utils/constants'

const Login = () => {

  const [IsSignInForm,setIsSignInForm] = useState(true);
  const [errormessage,seterrormessage] = useState(null);
  const nam = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () =>{
 
    
    // validate the form data
    const message = checkvaliddata(email.current.value,password.current.value);
    seterrormessage(message);
    if(message) return;
    if(!IsSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: "nam.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  
}).catch((error) => {
  seterrormessage(error.message);
});

   
 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });
    }else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" - "+errorMessage);
  });
    }
  }
    const toggleIsSignInForm =  () => {
      setIsSignInForm(!IsSignInForm);
    };
  return (
    <div >
      <Header/>
   <div className='absolute'>
     <img className='md:h-full h-screen object-cover' src={background} alt='logo'/>
   </div>
   <div >
   <form onSubmit={(e)=>e.preventDefault()} className='absolute top-1/4 bg-opacity-80 md:left-1/3 bg-black p-10 w-96 ml-4 md:ml-10'>
   <h1 className='font-bold text-white text-3xl pb-3'>{IsSignInForm? "Sign In " : "Sign Up"}</h1>
    {
      !IsSignInForm && (<input ref={nam} type='text' placeholder='Full Name' className='text-white w-full my-2 p-3 bg-zinc-800'/>
    )}
    <input ref={email} type='text' placeholder='Email Address' className='w-full my-2 p-3 bg-zinc-800 text-white'/>
    <input ref={password} type='password' placeholder='password' className='w-full my-4 p-3 bg-zinc-800 text-white'/>
    <p className='text-red-800 font-bold text-lg'>{errormessage}</p>
    <button type='button' className='text-white bg-red-800 w-full p-2 my-4' onClick={handleButtonClick}> {IsSignInForm ? "Sign In" : "Sign Up"}</button>
    <p className='text-white text-sm cursor-pointer' onClick={toggleIsSignInForm}>
      {IsSignInForm ? "New to Netflix ? Sign up now !" : "Already registered ? Sign In now !"}
    </p>
   </form>
   </div>
    </div>
  )
}

export default Login