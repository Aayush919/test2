import React, { useContext, useEffect } from 'react'
import { ChatContext } from '../Context/Chatprovider'
import ChatBox from '../components/Chatcomponents/ChatBox';
import MyChats from '../components/Chatcomponents/MyChats';
import SideDrawer from '../components/Chatcomponents/SideDrawer';
import '../assets/Chat.css'
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../miscellaneous/ProfileModal';
import SideBar from '../miscellaneous/SideBar';
import { ProfileContext } from '../Context/ProfileProvider';

const Chat = () => {
  const { user, setUser } = useContext(ChatContext);
  const [Sidebar, setSidebar] = useContext(ProfileContext);
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) {
      navigate("/")
    }
  }, [navigate])


  return (
    <div className='ChatHome'>
      <SideDrawer />
      <SideBar />
      <div className='Chats'>
        <MyChats />
        <ChatBox />
      </div>
    </div>
  )
}

export default Chat


//navbar make that contain the
//sidedrawer and talk a live heading and notification and the other thing is profile
//tooltip
//serach icon and tooltip
//navbar then usme search h bhai
//tooltip most needed
//in navbar the other think is menu list
//menu to one for notification second one is for profile
//if user have profile then show profile otherWise so the userName first later 