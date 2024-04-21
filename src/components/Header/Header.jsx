import React from 'react'
import './Header.css'

import { Routes , Route , Link } from 'react-router-dom'

const Header = () => {
  return (    
      <>
      <header>
        <div className="container">
        <div className="navbar">
            <Link to={"/"}>
               <h1>Finsweet</h1>
            </Link>
       <div className="nav-link">
         <Link to={"/about"}>About Us</Link>
         <Link to={"/services"}>Services</Link>
         <Link to={"/carrers"}>Carrers</Link>
         <Link to={"/blog"}>Blog</Link>
         <Link to={"/"}>Contact Us</Link>
        <button>Clone project</button>
       </div>
    </div>
  
        </div>
      </header>
    </>
  )
}

export default Header