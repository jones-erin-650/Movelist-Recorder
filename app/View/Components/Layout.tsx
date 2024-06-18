import React from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
  return <div>
    
    <p>This is our layout</p>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/Recorder">Recorder</a>
      </li>
    </ul>
    {/* any component that we tell it to render for any particular route goes through here */}
    <Outlet />
  </div>
}