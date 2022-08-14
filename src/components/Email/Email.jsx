import React from 'react'
import { Link } from 'react-router-dom'
import './Email.css'

import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ErrorIcon from '@mui/icons-material/Error'
import DeleteIcon from '@mui/icons-material/Delete'
import EmailIcon from '@mui/icons-material/Email'
import WatchlaterIcon from '@mui/icons-material/WatchLater'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Email() {
  return (
    <div className="email">
      <div className="email_tools">
        <div className="email_tools_left">
          <Link to="/">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchlaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="email_tools_right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="email_body">
        <div className="email_body_header">
          <h2>This is title</h2>
          <LabelImportantIcon className="mail__important"/>
          <p>body</p>
          <p className='email_time'>10pm</p>
        </div>

        <div className="email_body_message">This is the message from user</div>
      </div>
    </div>
  )
}

export default Email
