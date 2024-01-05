import React, { createContext, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';

export const ChatContext = createContext('');


const Chatprovider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState()
 
  useEffect(() => {
   const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) {
      navigate("/")
    }
  },[navigate])
  return (  
      
    <ChatContext.Provider value={{ user, setUser }} >
          {props.children}
      </ChatContext.Provider>
    
  )
}

export default Chatprovider