import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Padding } from '@mui/icons-material';

function Post(props) {
  const {user,img,likes,time}=props;
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} •<span style={{marginLeft:2+"px"}}>{time}</span>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='post__image'>
        <img src={img} alt="post"/>
      </div>
      <div className='post__footer'>
        <div className='post__footerIcons'>
          <div className='post__iconsMain'>
            <FavoriteBorderIcon className='postIcon'/>
            <ChatBubbleOutlineIcon className='postIcon'/>
            <TelegramIcon className='postIcon'/>
          </div>
          <div className='post__iconsSave'>
            <BookmarkBorderIcon className='postIcon'/>
          </div>
        </div>
        Liked by {time} people.
      </div>

    </div>
  )
}

export default Post