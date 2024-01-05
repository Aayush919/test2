import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utills/axios';

const Login = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast("please add all the fields,", {
                autoClose: 500,
                theme: 'light',
                position: 'top-center',
                type: 'warning'
            })
            return;
        }
        try {
            const { data } = await axios.post("/user/auth", { email, password }, { headers: { "Content-Type": 'application/json' } })
            console.log(data);
            toast('Login succesfully', {
                theme: 'light',
                type: "success",
                autoClose: 1000,
                position: "top-center",
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/Chats")
            return

        }
        catch (error) {
        
              console.log(error.response.status===404)
            if (error.response.status === 404) {
                toast('User Not Found Whith This Email', {
                    theme: 'light',
                    type: "error",
                    autoClose: 1000,
                    position: "top-center",
                });
            }
            else if (error.response && error.response.status === 401) {
                // Invalid password
                toast.error('Invalid password', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                });
            } else {
                // Other errors
                console.error('Login error:', error);
                toast.error('An error occurred during login', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                });
            }
        }

      
    }


    return (
        <div><form onSubmit={submitHandler}>
            <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} value={email} />
            <input type={showPassword ? 'text' : 'password'} placeholder='password' onChange={(e) => setpassword(e.target.value)} value={password} />
            <h1 onClick={() => setshowPassword(!showPassword)} className="showPassword">{showPassword ? 'Hide' : 'Show'}</h1>
            <button>Log In</button>
            <button onClick={() => {
                setemail("v@gmail.com")
                setpassword("v")
            }} className='red'>Get Guest User Credentials..</button>
        </form></div>
    )
}

export default Login