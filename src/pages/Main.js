import React from 'react'
import bg from '../images/Assets/hero.jpeg'
import bg2 from '../images/Assets/SLIDER-01.jpg'
import '../Hero.css'
import { Link } from 'react-router-dom'
import AboutSection from '../components/Sections/About'
import Info from '../components/Sections/Info'
import Service from '../components/Sections/Service'
import Newsletter from '../components/Sections/Newsletter'
import Carousel from 'react-bootstrap/Carousel'

const Main = () => {
  return (
    <>
      <section className="hero">
        <Carousel 
          style={{ 
            width: '100%' 
            
            
          }}>
          <Carousel.Item interval={3000} >
            <img
              className="d-block w-100 bg2"
              src={bg}
              alt="First slide"
            />
                <div className="hero-content">
                    <h1>EVENT MANAGEMENT SYSTEM</h1>
                    <h2>Creative <span>Solutions</span> <span className='and'>&</span> <span>Ideas</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae est atque delectus dolor, molestias facilis quas totam nisi qui rerum, saepe.</p>
                    <Link to='www.google.com'><button type='button' className='btn'>Work With Us</button></Link>
                </div>
           
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 bg2"
              src={bg2}
              alt="Second slide"
            />
                <div className="senjaTicket">
                    <h2>Buruan Beli Tiketnya ..</h2>
                    <a href='https://api.whatsapp.com/send?phone=6281910573272&text=Nama%20Lengkap%20%3A%0AAlamat%20Email%20%3A%0ANIK%20KTP%20%3A%0AJumlah%20Ticket%20%3A%0APilih%20Ticket%20%3A%20BRONZE%20%2C%20SILVER%2C%20GOLD%2C%20PLATINUM%0A'><button type='button' className='Ebtn'>Pesan Ticket</button></a>
                </div>
          </Carousel.Item>
        </Carousel>
        {/* <div className="container-fluid">
                <div className="bg-gradient"></div>
                <img src={bg} alt="inkara-logo" />
                <div className="hero-content">
                    <h1>EVENT MANAGEMENT SYSTEM</h1>
                    <h2>Creative <span>Solutions</span> <span className='and'>&</span> <span>Ideas</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae est atque delectus dolor, molestias facilis quas totam nisi qui rerum, saepe.</p>
                    <Link to='www.google.com'><button type='button' className='btn'>Work With Us</button></Link>
                </div>
            </div> */}
      </section>
      <section>
        <AboutSection />
        <Info />
        <Service />
        {/* <Newsletter /> */}
      </section>
    </>

  )
}

export default Main