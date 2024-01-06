import CreateIcon from "@mui/icons-material/Create";
import EventIcon from '@mui/icons-material/Event';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React, { useState } from 'react';
import myPic from './202114010_Arr Rafi.png';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      photUrl: myPic,
      name: "Arr-Rafi",
      description: "Here is the first post",
      message: "This is a sample post.",
      timestamp: new Date(),
    },
    {
        id: 1,
        photUrl: myPic,
        name: "Arr-Rafi",
        description: "Here is the second post",
        message: "This is a sample post.",
        timestamp: new Date(),
      },
      {
        id: 1,
        photUrl: myPic,
        name: "Arr-Rafi",
        description: "Here is the third post",
        message: "This is a sample post.",
        timestamp: new Date(),
      },
      {
        id: 1,
        photUrl: myPic,
        name: "Arr-Rafi",
        description: "Here is the fourth post",
        message: "This is a sample post.",
        timestamp: new Date(),
      },
   
  ]);

  
  const sendPost = (e) => {
    e.preventDefault();

   
    const inputText = e.target.elements.postInput.value;


    if (inputText.trim() !== '') {
      
      const newPost = {
        id: Date.now(),
        photUrl: myPic,
        name: "Arr-Rafi",
        description: "Here is the post",
        message: inputText,
        timestamp: new Date(),
      };

      
      setPosts((prevPosts) => [newPost, ...prevPosts]);

    
      e.target.elements.postInput.value = '';
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input type="text" name="postInput" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption className="A" Icon={ImageIcon} title="Image" color="#70B5F9" />
          <InputOption className="B" Icon={VideoLibraryIcon} title="Video" color="#E7A33E" />
          <InputOption className="C" Icon={EventIcon} title="Event" color="C0CBCD" />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          photUrl={post.photUrl}
          name={post.name}
          description={post.description}
          message={post.message}
          timestamp={post.timestamp} 
        />
      ))}
    </div>
  );
}

export default Feed;
