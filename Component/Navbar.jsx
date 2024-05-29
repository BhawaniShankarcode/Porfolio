import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  let [menu,setMenu] = useState(false);
  return (
    <>
      <nav className='nav'>
        <div className='navDiv'>
            <h2>Bhawani</h2>
        </div>
        <ul className='fristUl'>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/about">About</Link></li>
            <li><Link className='link' to="/project">Project</Link></li>
            <li><Link className='link' to="/contact">Contact</Link></li>
        </ul>
        <div className="hamburger"  onClick={()=>setMenu(!menu)}><GiHamburgerMenu/></div>
      </nav>
      <div  className={menu ? "menu" : "menuLg"}>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/about">About</Link></li>
            <li><Link className='link' to="/project">Project</Link></li>
            <li><Link className='link' to="/contact">Contact</Link></li>
        </ul>
        </div>
    </>
  )
}

export default Navbar