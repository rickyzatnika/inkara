import './Navbar.css';
import React from 'react'
import Logo from '../images/inkara.png'
import { FaBars, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Event from '../pages/Event';
import Contact from '../pages/Contact';



const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="nav-logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="nav-item">
                <li className="nav-links"><Link to="/">Home</Link></li>
                <li className="nav-links"><Link to="/about">About</Link></li>
                <li className="nav-links"><Link to="/event">Event</Link></li>
                <li className="nav-links"><Link to="/gallery">Gallery</Link></li>
                <li className="nav-links"><Link to="/">Ticket</Link></li>
                <li className="nav-links"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="hamburger">
                <FaBars size={25}/>
            </div>
            <div className="social-media">
                <Link to="/"><FaInstagram size={25}/></Link>
                <Link to="/"><FaFacebook size={25}/></Link>
                <Link to="/"><FaTwitter size={25}/></Link>
            </div>
        </nav>
        <Routes>
            <Route path='/about'element ={<About/>}/>
            <Route path='/event'element ={<Event/>}/>
            <Route path='/gallery'element ={<Gallery/>}/>
            <Route path='/contact'element ={<Contact/>}/>
        </Routes>
    </>
  )
}

export default Navbar