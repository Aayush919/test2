import React, { useContext, useState } from 'react'
import Profilemenu from '../../miscellaneous/Profilemenu';
import { ProfileContext } from '../../Context/ProfileProvider';

const SideDrawer = () => {
  const [Sidebar, setSidebar] = useContext(ProfileContext);
  const [profilemenu, setprofilemenu] = useState(true);

  return (

    <div className='nav'>
      <div className="search" onClick={() => setSidebar(true)}>
        <h1 >Search Users<i className="ri-search-line navsearch"></i></h1>
        <div className="toolkit">
          <h2>Search Users To Chat</h2>
        </div>
      </div>

      <h1>Chat-App</h1>
      <div className="navprofile">
        <i className="ri-notification-4-fill"></i>
        <div className="toolkit">
          <h2>Check notifications</h2>
        </div>
        <Profilemenu />

      </div>
    </div>


  )
}

export default SideDrawer