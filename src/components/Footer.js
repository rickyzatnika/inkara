import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Inkara from '../images/inkara.png'
import Newsletter from './Sections/Newsletter'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-content">
                    <h3>INKARA <span>INDONESIA</span></h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sapiente, dolore sunt eum quam, soluta nihil omnis voluptate magnam rem ipsum nobis hic neque, aut optio. Temporibus nulla aut molestiae!</p>
                    <Newsletter/>
                </div>
                <div class="footer-bottom">
                    <div className="copyright">
                        <p>copyright© - 2022 <a href="https://www.inkara.id">inkara.id</a></p>
                    </div>
                    <div className="support-links">
                        <Link to=''>Terms & conditions</Link>
                        <Link to=''>Privacy Police</Link>
                        <Link to=''>Disclaimer</Link>
                        <Link to=''>Support</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer