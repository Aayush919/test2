import React from 'react'

const SearchList = (props) => {
     const {u,handleClick}=props
  return (
    <div>
          <div className="mainList" onClick={handleClick} >
              <div className="listimg">
                  <img src="../../public/profile-default.png" alt="" />
              </div>
              <div className="listname">
                  <h2>{ u.username}</h2>
                  <h1><span>email</span>{ u.email}</h1>
                  
              </div>
          </div> 
    </div>
  )
}

export default SearchList