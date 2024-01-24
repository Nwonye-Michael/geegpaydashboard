import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex ">
      <Header />

      {children}
    </div>
  )
}

export default Layout
