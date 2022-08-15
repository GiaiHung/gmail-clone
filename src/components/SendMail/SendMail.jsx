import React from 'react'
import './SendMail.css'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useForm } from 'react-hook-form'
import { closeSendMessage } from '../../features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const emailsCollection = collection(db, 'emails')

  const onSubmit = (data) => {
    console.log(data)
    addDoc(emailsCollection, {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: serverTimestamp()
    })
    
    dispatch(closeSendMessage())
  }

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New message</h3>
        <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="to" {...register('to', { required: true })} />
        {errors.to && <p className="sendMail_error">To is required!</p>}
        <input type="text" placeholder="subject" {...register('subject', { required: true })} />
        <div className="sendMail_message">
          <input
            type="text"
            placeholder="message..."
            {...register('message', { required: true })}
          />
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
