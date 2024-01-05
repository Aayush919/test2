import React, { useContext, useState } from 'react'
import { ProfileContext } from '../Context/ProfileProvider';
import { toast } from 'react-toastify';
import Chatprovider, { ChatContext } from '../Context/Chatprovider';
import axios from '../utills/axios';
import ChatLoading from '../Loading/ChatLoading';
import SearchList from '../components/Chatcomponents/SearchList';



const SideBar = () => {
  const { user, setUser } = useContext(ChatContext);
  const [Sidebar, setSidebar] = useContext(ProfileContext);
  const [search, setsearch] = useState("");
  const [serachresult, setsearchresult] = useState([]);
  const [loading, setloading] = useState(false);
  const [chatloading, setchatloading] = useState();



  const handleSearch = async (e) => {

    e.preventDefault();
    if (!search) {
      toast('Please Enter Something in the SearchBar', {
        autoClose: 1000,
        theme: 'colored',
        type: 'warning',
        position: 'top-left',
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      })
      return
    }

    try {

      setloading(true);
      const response = await axios.get(`/user/?search=${search}`, {
        headers: {
          Authorization: `Bearer ${user.token}`, // Replace with your actual access token
        },
      });


      setloading(false);
      setsearchresult(response.data);
    
    }
    catch (error) {
      toast('SOmething Wrong', {
        autoClose: 1000,
        theme: 'colored',
        type: 'warning',
        position: 'top-left',
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      })
    }

  }



  const accessChat = () => {
    console.log("click kiya re")
  }
  return (

    <>
      <div className={Sidebar ? 'SideBar-Open' : 'SideBar'}>
        <i className="ri-close-line closeside" onClick={() => setSidebar(false)}></i>
      
        <form action="" className='searchside'>
          <input type="text" placeholder='serach user to chat' onChange={(e) => setsearch(e.target.value)} value={search} />
          <button className='Go' onClick={handleSearch}>Go</button>
        </form>
      
     
        {loading ? <ChatLoading /> : serachresult?.map((u) => 
          <SearchList key={u._id} u={u} handleClick={() => accessChat()} />
          
        )}
      </div>
    </>
  )
}

export default SideBar
