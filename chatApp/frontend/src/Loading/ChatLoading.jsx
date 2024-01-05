import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ChatLoading = () => {
    return (
      <>
      <div className="chat-loading-skeleton">
          <div className="content-skeleton">
              <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div>
                    <div className="line-skeleton"></div> 
          </div>
            </div>
        </>
  )
}

export default ChatLoading