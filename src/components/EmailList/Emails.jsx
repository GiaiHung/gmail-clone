import React, { useState, useEffect } from 'react'
import EmailRow from './EmailRow'
import { db } from '../../firebase'
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore'
import FlipMove from 'react-flip-move'

function Emails() {
  const [emails, setEmails] = useState([])
  const emailsCollection = collection(db, 'emails')
  const q = query(emailsCollection, orderBy('timestamp', 'desc'))

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    })
  }, [])

  return (
    <FlipMove>
      {emails.map(({ id, to, message, subject, timestamp }) => (
        <EmailRow
          key={id}
          id={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
        />
      ))}
    </FlipMove>
  )
}

export default Emails
