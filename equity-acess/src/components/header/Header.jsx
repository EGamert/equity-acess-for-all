import React from 'react'
import {LogoutBtn} from './LogoutBtn.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Header.css'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate=useNavigate()
  const navItems=[
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    }
  ]
  return (
    <div className='container'>
    <header className='header'>
      <nav className='nav'>
        <div className='logo'>
          <img src="https://collegereadiness.uworld.com/wp-content/uploads/2022/11/Equity-Blog-Image-1024x675.webp" className='img'></img>
        </div>
        <ul className='nav-items'>
          {navItems.map((item) => (
            item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)} className='nav-button'>
                  {item.name}
                </button>
              </li>
            ) : null
          ))}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
      <div className="image">    
    </div>
    </header>
    </div>
  )
}

export default Header