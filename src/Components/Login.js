import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [IsSignInForm,setIsSignInForm] = useState(true);
    const toggleIsSignInForm =  () => {
      setIsSignInForm(!IsSignInForm);
    };
  return (
    <div >
      <Header/>
   <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_large.jpg' alt='logo'/>
   </div>
   <div >
   <form className='absolute top-1/4 bg-opacity-80 left-1/3 bg-black p-10 w-96 ml-10'>
   <h1 className='font-bold text-white text-3xl pb-3'>{IsSignInForm? "Sign In " : "Sign Up"}</h1>
    {
      !IsSignInForm && (<input type='text' placeholder='Full Name' className='w-full my-2 p-3 bg-zinc-800'/>
    )}
    <input type='text' placeholder='Username' className='w-full my-2 p-3 bg-zinc-800'/>
    <input type='password' placeholder='password' className='w-full my-4 p-3 bg-zinc-800'/>
    <button className='text-white bg-red-800 w-full p-2 my-4'> {IsSignInForm ? "Sign In" : "Sign Up"}</button>
    <p className='text-white text-sm cursor-pointer' onClick={toggleIsSignInForm}>
      {IsSignInForm ? "New to Netflix ? Sign up now !" : "Already registered ? Sign In now !"}
    </p>
   </form>
   </div>
    </div>
  )
}

export default Login