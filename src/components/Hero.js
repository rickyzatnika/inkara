import React from 'react';
import bg from '../images/Assets/hero.png'
import './Hero.css'

const Hero = () => {
  return (
    <>
         <section className="hero">
            <div className="container">
                <img src={bg} alt="" />
                <div className="hero-content">
                    <h2>Inkara Indonesia</h2>
                    <h6>inkara.id</h6>
                </div>
            </div>
        </section>
    </>
  )
}
 

export default Hero;