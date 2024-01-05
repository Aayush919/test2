import React, { createContext, useState } from 'react'
export const ProfileContext = createContext()

const ProfileProvider = (props) => {
const [Sidebar, setSidebar] = useState(false)
  return (
    <ProfileContext.Provider value={[Sidebar, setSidebar ]}>
      {props.children}
   </ProfileContext.Provider>
  )
}

export default ProfileProvider