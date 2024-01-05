import React from 'react'

const ProfileModal = () => {
  return (
      <div className='profileModel'>
              <div className="close" onClick={() => setprofilemenu(false)}>
                  <h1><i className="ri-close-line" ></i></h1>
              </div>
              <ul>
              <h1>username</h1>
              <div className="image">
                  <img src="../../public/profile-default.png" alt="" />
              </div>
              <h1>email</h1>
              </ul>
      </div>
  )
}

export default ProfileModal