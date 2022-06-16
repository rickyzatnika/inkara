import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import {BsFillPlayFill} from 'react-icons/bs'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const AboutSection = () => {
  return (
    <>
        <section className="about-container">
            <div className="about-title">
                <h3>Welcome</h3>
                <h4>About Our Company</h4>
            </div>
            <div className="about-content">
                <div className="col-1">
                    <h2>We’re constantly improving our skills to fulfill your needs.</h2>
                    <div className="about-links">
                        <Link to='/Gallery'>VIDEO ABOUT US-</Link>
                        <Link to='/Gallery'><BsFillPlayFill size={52} className="icon-play"/></Link>
                    </div>
                </div>
                <div className="col-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum blanditiis, maxime quia ducimus tempore iusto, numquam exercitationem neque, ullam eum illo modi dolore pariatur quibusdam nemo. Hic dolores, quas aspernatur nam quaerat odit, ut sed nihil deserunt placeat autem rerum neque fuga eos.</p> 
                    <p> Minus vero, aliquid doloribus sapiente sint, natus laudantium sunt quas cupiditate fugit maxime facilis. Ex, asperiores? Sit fugiat nostrum sint aperiam voluptas deleniti asperiores illum non veniam atque quod saepe repellat tempora, mollitia eum excepturi necessitatibus eaque at.</p>
                    <div className="link-contents">
                        <Link to="/About">More About Us </Link>
                        <Link to="/About"><MdOutlineKeyboardArrowRight size={20} className="arrow-icons"/></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutSection