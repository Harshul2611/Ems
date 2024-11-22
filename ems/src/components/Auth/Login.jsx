import React,{useState} from 'react'

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submitHandler = (e)=>{
    console.log("Form Submitted");
    console.log("Email is: " + email + ", Password is: " + password);
    e.preventDefault();
    setEmail('');
    setPassword('');
  }

  const emailHandler = (e)=>{
    setEmail(e.target.value);
  }

  const passwordHandler = (e)=>{
    setPassword(e.target.value);
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='border-2 border-emerald-600 rounded-xl'>
        <form onSubmit={submitHandler} className='flex flex-col p-20 items-center justify-center'>
          <input onChange={emailHandler} value={email} required type="email" placeholder='Enter your Email' className='px-5 py-3 rounded-full border border-emerald-400 outline-none bg-transparent text-xl text-white placeholder-gray-400' />
          <input onChange={passwordHandler} value={password} required type="password" placeholder='Enter your Password' className='px-5 py-3 rounded-full border border-emerald-400 outline-none bg-transparent text-xl text-white mt-4 placeholder-gray-400' />
          <button type='submit' className='bg-emerald-500 text-white rounded-full w-28 px-5 py-4 border-none border-emerald-600 mt-5'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login