import React from 'react'
import './Footer.scss'

const AppFooter= () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <strong>Tom Caiger</strong> @ { new Date().getFullYear() }
      </div>
    </div>
  )
}

export default AppFooter