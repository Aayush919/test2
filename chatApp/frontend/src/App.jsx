import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Routess from './utills/routes'
import './App.css'
import { toast } from 'react-toastify'
import Signup from './components/Signup'
import NotFound from './pages/NotFound'

const App = () => {
 

  return (

    <div className='App'>
   <Routess/>
    </div>
  )
}

export default App