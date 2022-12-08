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
            <img src={Logo} alt="logo" />
            <nav ref={NavRef}>
              <a href="/">Products</a>
              <a href="/">Industries</a>
              <a href="/">Successes</a>
              <a href="/">Resources</a>
              <a href="/">Company</a>
              <div className="btns">
                  <button className='login'>Login</button>
                  <button className='get'>Get Started</button>
              </div>
              <button className='navbar-btn nav-close' onClick={showNavbar}>
                  <FaTimes size="20px"/>
              </button>
            </nav>
            <button className='navbar-btn' onClick={showNavbar}>
              <FaBars size="20px" />
            </button>
        </div>
  )
}

export default Navbar