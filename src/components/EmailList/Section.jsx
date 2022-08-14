import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Section.css'

function Section({ Icon, title, color }) {
  const [selected, setSelected] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes(title)) {
      setSelected(true)
    } else if(pathname === '/' && title === 'primary') {
      setSelected(true)
    } else {  
      setSelected(false)
    }
  }, [pathname])

  return (
    <Link to={`/${title}`}>
      <div
        className={`section ${selected && 'section_selected'}`}
        style={{
          borderBottom: `3px solid ${color}`,
          color: `${selected ? color : 'gray'}`,
        }}
      >
        <Icon />
        <h4>{title.toUpperCase()}</h4>
      </div>
    </Link>
  )
}

export default Section
