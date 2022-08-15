import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import EmailList from './components/EmailList/EmailList'
import Email from './components/Email/Email'

import './App.css'
import Emails from './components/EmailList/Emails'
import SendMail from './components/SendMail/SendMail'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
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
      <SendMail />
    </div>
  )
}

export default App
