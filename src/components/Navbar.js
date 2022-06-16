import './Navbar.css';
import React, { useState } from 'react'
import Logo from '../images/inkara.png'
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaTwitter, } from "react-icons/fa";
import { RiCustomerService2Line } from 'react-icons/ri'
import { MdOutgoingMail } from "react-icons/md"
import { Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Event from '../pages/Event';
import Contact from '../pages/Contact';
import Main from '../pages/Main';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 150) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="nav-menu">
                    <div className="nav-logo">
                        <Link to='/'><img src={Logo} alt="logo" /></Link>
                    </div>
                    <ul className={click ? 'nav-item active' : 'nav-item'}>
                        <li className="nav-links"><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li className="nav-links"><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        <li className="nav-links"><Link to="/event" onClick={closeMobileMenu}>Event</Link></li>
                        <li className="nav-links"><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                        <li className="nav-links"><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                        <div className="social-media">
                            <a href='https://www.instagram.com/ricky.zatnika/' target='blink' ><FaInstagram size={22} /></a>
                            <a href='https://www.facebook.com/' target='blink' ><FaFacebook size={22} /></a>
                            <a href='https://www.twitter.com/' target='blink' ><FaTwitter size={22} /></a>
                    </div>
                    </ul>
                    <div className="social-media">
                        <a href='https://www.instagram.com/ricky.zatnika/' target='blink' ><FaInstagram size={22} /></a>
                        <a href='https://www.facebook.com/' target='blink' ><FaFacebook size={22} /></a>
                        <a href='https://www.twitter.com/' target='blink' ><FaTwitter size={22} /></a>
                    </div>
                    <div className="hamburger" onClick={handleClick}>
                        {click ? (<FaTimes size={22} />) : (<FaBars size={22} />)}
                    </div>
                </div>

            </nav>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/event' element={<Event />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Navbar