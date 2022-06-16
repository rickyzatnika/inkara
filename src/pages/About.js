import React from 'react';
import bgr from '../images/Assets/about.png'
import '../styles/about.css'


const About = () => {
  return (
    <>
        <section className="about">
            <div className="bg-image">
               <img src={bgr} alt="" />
            </div>
        </section>
    </>
  )
}

export default About