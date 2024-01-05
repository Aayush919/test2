import React from 'react'
import { Route,Routes} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Chat from '../pages/Chat'

const routes = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
   
  return (
      <>
          <Routes>
              {userInfo?<Route path="/" Component={Chat} />:<Route path="/" Component={Home}/>}
              <Route path="/Chats" Component={Chat} />
              <Route path="*" Component={NotFound} />
            </Routes> 
    </>
  )
}

export default routes