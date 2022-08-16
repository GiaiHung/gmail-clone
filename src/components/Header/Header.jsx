import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'

function Header({ sidebarActive, setSidebarActive }) {
  const dispatch = useDispatch()
  const signout = () => {
    signOut(auth).then(() => dispatch(logout()))
  }

  const user = useSelector(selectUser)

  const handleSidebarActive = () => {
    setSidebarActive(!sidebarActive)
  }

  return (
    <div className="header">
      <div className="header_left">
        <IconButton onClick={handleSidebarActive}>
          <MenuIcon />
        </IconButton>
        <img src="/images/logo-gmail.png" alt="header-image" />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mails..." spellCheck={false} />
        <ArrowDropDownIcon />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon onClick={handleSidebarActive} />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user.photoURL} alt="user-avatar" onClick={signout} />
      </div>
    </div>
  )
}

export default Header
