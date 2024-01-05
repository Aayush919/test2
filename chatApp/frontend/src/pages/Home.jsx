import React, { useEffect, useState } from 'react'
import '../assets/Home.css'
import Signup from '../components/Signup';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';



const Home = () => {
 const navigate =useNavigate()
  const [Activetab, setActivetab] = useState('LogIn');
  const [showPassword, setshowPassword] = useState(false);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [email, setemail] = useState('');
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/")
    } 
  }, [navigate])


  return (


    

    <>
      <img src="" alt="" name='aayush' />
      <div className="container">
        <div className="box">
          <h1 >Chat-App</h1>
        </div>

        <div className="registerBox">
          <div className="headerTab">
            <button className="buttonTab" style={{ backgroundColor: Activetab === 'LogIn' && '#82deffc4' }} onClick={() => { setActivetab('LogIn') }}>Log In</button>
            <button className="buttonTab" style={{ backgroundColor: Activetab === 'SignUp' && '#82deffc4' }} onClick={() => setActivetab('SignUp')}>Register</button>
          </div>

          {Activetab === 'LogIn' && <Login/>}
          {Activetab === 'SignUp' && <Signup/> }
        </div>
      </div>


    </>
  )
}

export default Home