import React, {useRef} from 'react'
import Logo from "../image/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {

  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_navbar")
  }

  return (
        <div className='navbar'>
            <img src={Logo} alt="" />
            <nav>
              <a href="/">Products</a>
              <a href="/">Industries</a>
              <a href="/">Successes</a>
              <a href="/">Resources</a>
              <a href="/">Company</a>
              <div className="btns">
                  <button className='login'>Login</button>
                  <button className='get'>Get Started</button>
              </div>
              <button className='navbar-btn'>
                  <FaTimes size="16px"/>
              </button>
            </nav>
            <button className='navbar-btn'>
              <FaBars size="16px" />
            </button>
        </div>
  )
}

export default Navbar