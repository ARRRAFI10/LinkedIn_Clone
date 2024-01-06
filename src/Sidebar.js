import React from 'react';
import myPic from './202114010_Arr Rafi.png';
import myPic2 from './cse.jpg';
import { Avatar } from '@mui/material';
import './Sidebar.css';

function Sidebar() {
  const recentItem=(topic)=> (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
          <img src={myPic2} alt="" />
          <Avatar className="sidebar__avater" src={myPic} alt="User Avatar" />
          <h2>Arr Rafi</h2>
          <h4>arrrafi2018@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <div className="sidebar__statNumber">
              100
            </div>
          </div>
          <div className="sidebar__stat">
          <p>Views on post</p>
            <div className="sidebar__statNumber">
              100
            </div>
          </div>
        </div>
        <div className="sidebar__button">
          <p>
            Recent
          </p>
          {recentItem('Reactjs')}
          {recentItem('ROS')}
          {recentItem('Arduino Coding')}
          {recentItem('Software Development')}
        </div>
    </div>
  )
}

export default Sidebar
