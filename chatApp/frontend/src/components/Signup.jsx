import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from '../utills/axios';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [email, setemail] = useState('');
  const [match, setmatch] = useState('false');
  const navigate = useNavigate();



  const submitHandler =async (e) => {
    e.preventDefault();
    console.log("hello")
    if (!email || !password || !username) {
      toast("please add all the fields,", {
        autoClose: 500,
        theme: 'light',
        position: 'top-center',
        type: 'warning'
      })
      return;
    }

    if (password !== confirmPassword) {
      toast("password do not match", {
        autoClose: 500,
        theme: 'light',
        position: 'top-center',
        type: 'error'
      })
      return;
    }
    try {
      const { data }  = await axios.post("/user/signup",{email,password,username},{ headers: { "Content-Type": 'application/json' } })
      console.log(data.error);
      
      toast('register succesfully', {
        theme:'colred',
        type: "success",
        autoClose:1000,
        position: "top-center",
      });


      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/Chats")
    }
    catch (error) {
   console.log(error)
    }
}


  return (
    <div>

      <form onSubmit={submitHandler}  >
        <input type="text" placeholder='username' onChange={(e) => setusername(e.target.value)} value={username} />
        <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} value={email} />
        <input type={showPassword ? 'text' : 'password'} placeholder='password' onChange={(e) => setpassword(e.target.value)} value={password} />
        <input type={showPassword ? 'text' : 'password'} placeholder='confirm password' onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} />
        <h1 onClick={() => setshowPassword(!showPassword)} className="showPassword">{showPassword ? 'Hide' : 'Show'}</h1>
        <button>Register</button>
       
      </form>
    </div>
  )
}

export default Signup