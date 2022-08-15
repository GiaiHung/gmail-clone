import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from '../../features/mailSlice'
import './EmailRow.css'

import { Checkbox, IconButton } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'

const EmailRow = forwardRef(({ id, title, subject, description, time }, ref) => {
  const dispatch = useDispatch()

  const handleSelectMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )
  }

  return (
    <Link to={`/email/${id}`} ref={ref}>
      <div className="emailRow" onClick={handleSelectMail}>
        <div className="emailRow_options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 className="emailRow_title">{title}</h3>
        <div className="emailRow_message">
          <h4>{subject}</h4>
          <span> </span>
          <span className="emailRow_description">- {description}</span>
        </div>
        <p className="emailRow_time">{time}</p>
      </div>
    </Link>
  )
})

export default EmailRow
