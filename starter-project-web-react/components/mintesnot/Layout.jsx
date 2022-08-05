import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <main>
        <NavBar />
        {children}
    </main>
  )
}

export default Layout