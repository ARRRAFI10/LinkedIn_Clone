import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import NetworkIcon from '@mui/icons-material/SupervisorAccount';
import myPic from './202114010_Arr Rafi.png';
import { Avatar } from '@mui/material';
import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import linkedinIcon from './linkedin.png';

function Header() {
  return (
    <div className="header"> 
      <div className="header__left">
        <img src={linkedinIcon} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={NetworkIcon} title='MyNetwork'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messenging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <div className="header__optionIcon">
            <Avatar src={myPic} alt="User Avatar" />
            </div>
      </div>
    </div>
  );
}

export default Header;

