import React from 'react'
import { Button } from '@mui/material'
import './Login.css'

import { auth, provider } from '../../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function Login() {
  const dispatch = useDispatch()

  const signin = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      })
      .catch((error) => alert(error))
  }

  return (
    <div className="login">
      <div className="login_container">
        <img src="/images/login_logo.png" alt="login_logo" />
        <Button variant="contained" color="primary" onClick={signin}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
