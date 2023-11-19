import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />{/* Constant */}
      <div className="content">{/* Can be changeable such as home to another page */}
        {children}
      </div>
      <Footer />{/* Constant */}
    </div>
  )
}

export default Layout