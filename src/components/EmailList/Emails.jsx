import React from 'react'
import EmailRow from './EmailRow'
import './Emails'

function Emails() {
  return (
    <div>
      <EmailRow
        id="1"
        title="Hello"
        subject="This is a test"
        description="Welcome to my website!"
        time="10pm"
      />
      <EmailRow
        id="2"
        title="Hello"
        subject="This is a test"
        description="Welcome to my website!"
        time="10pm"
      />
    </div>
  )
}

export default Emails
