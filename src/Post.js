// Post.js
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Post.css';

function Post({ name, description, message, photUrl, timestamp }) {
  const buttonStyle = { color: 'gray' };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="sidebar__avater" src={photUrl} alt="User Avatar" />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <small>{new Date(timestamp).toLocaleString()}</small>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <Button startIcon={<ThumbUpIcon />} style={buttonStyle} size="small">
          Like
        </Button>
        <Button startIcon={<ChatBubbleOutlineIcon />} style={buttonStyle} size="small">
          Comment
        </Button>
        <Button startIcon={<SendIcon />} style={buttonStyle} size="small">
          Send
        </Button>
        <Button startIcon={<ShareIcon />} style={buttonStyle} size="small">
          Share
        </Button>
      </div>
    </div>
  );
}

export default Post;
