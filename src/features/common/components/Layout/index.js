import React from 'react'

import NavBar from '../NavBar'

import './Layout.css'

const Layout = ({children}) => (
  <div className="Layout">
    <NavBar />
    <div className="section">
      <div className="container">
        <div className="box">
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default Layout
