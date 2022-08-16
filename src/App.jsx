import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import EmailList from './components/EmailList/EmailList'
import Email from './components/Email/Email'
import Login from './components/Login/Login'

import './App.css'
import Emails from './components/EmailList/Emails'
import SendMail from './components/SendMail/SendMail'

import { useSelector, useDispatch } from 'react-redux'
import { setSendMailActive } from './features/mailSlice'
import { selectUser, login, logout } from './features/userSlice'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const isSendMailActive = useSelector(setSendMailActive)
  const user = useSelector(selectUser)
  const [sidebarActive, setSidebarActive] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
          <div className="app_body">
            <Sidebar sidebarActive={sidebarActive} />
            <Routes>
              <Route path="/" element={<EmailList />}>
                <Route index element={<Emails />} />
                <Route path="primary" element={<Emails />} />
                <Route path="social" element={<Emails />} />
                <Route path="promotions" element={<Emails />} />
              </Route>
              <Route path="/email/:id" element={<Email />} />
            </Routes>
          </div>
          {isSendMailActive && <SendMail />}
        </div>
      )}
    </>
  )
}

export default App
