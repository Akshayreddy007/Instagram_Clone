import React, { useState } from 'react';
import "./Timeline.css";
import Suggestion from './Suggestion';
import Post from './Post';

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user:"Akshay_",
            postImage:"https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
            likes:12,
            timeStamp:"2d"
        },
        {
            user:"Madhan_",
            postImage:"https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            likes:56,
            timeStamp:"22h"
        },
        {
            user:"Karna_",
            postImage:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            likes:22,
            timeStamp:"21h"
        },
        {
            user:"Sampath_",
            postImage:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
            likes:2,
            timeStamp:"1d"
        }
    ]);
  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__posts'>
                {posts.map((post)=>{
                    return <Post user={post.user} img={post.postImage} likes={post.likes} time={post.timeStamp}/>
                })}
            </div>
        </div>
        <div className='timeline__right'>
            <Suggestion/>
        </div>
    </div>
  )
}

export default Timeline