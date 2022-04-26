import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div>
        <main>
            <NavBar />
            {children}
        </main>
    </div>
  )
}

export default Layout