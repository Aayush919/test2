import React, { useState } from 'react'
import ProfileModal from './ProfileModal'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Profilemenu = () => {
  const [profilemenu, setprofilemenu] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/")
    localStorage.removeItem('userInfo');
    toast('Log Out succesfully', {
      theme: 'light',
      type: "success",
      autoClose: 1000,
      position: "top-center",
    });
  }
  return (
    <>
    <div>
     <div className="image" onClick={() => profilemenu?setprofilemenu(false):setprofilemenu(true)}>
                    <img src="../../public/profile-default.png" alt="" />            
      </div>
      {profilemenu && <div className='Profilemenu'>
        <div className="close" onClick={()=>setprofilemenu(false)}>
          <h1><i className="ri-close-line" ></i></h1>
        </div> 
        <ul>
          <li>Profile</li>
          <li className='logout' onClick={logoutHandler}>Log Out</li>
        </ul>
      </div>}
      </div>
    </>
 
  )
}

export default Profilemenu