import React from 'react'
import './SendMail.css'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useForm } from 'react-hook-form'

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New message</h3>
        <CloseIcon className="sendMail_close" />
      </div>

      <form>
        <input type="text" placeholder="to" />
        <input type="text" placeholder="subject" />
        <div className="sendMail_message">
          <input type="text" placeholder="message..." />
        </div>

        <div className="sendMail_options">
          <Button className="sendMail_send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
