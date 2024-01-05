import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Chatprovider from './Context/Chatprovider.jsx'
import ProfileProvider from './Context/ProfileProvider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Chatprovider>
            <ProfileProvider>
                <App />
            </ProfileProvider>
            <ToastContainer />
        </Chatprovider>
    </BrowserRouter >
)
