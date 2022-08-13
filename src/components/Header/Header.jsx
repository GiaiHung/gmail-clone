import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <IconButton>
            <MenuIcon />
        </IconButton>
        <img src="/images/logo-gmail.png" alt="header-image" />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder='Search mails...' spellCheck={false} />
        <ArrowDropDownIcon />
      </div>
      <div className="header_right">
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <Avatar alt='user-avatar'/>
      </div>
    </div>
  )
}

export default Header
