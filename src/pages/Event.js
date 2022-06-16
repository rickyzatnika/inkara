import React from 'react'
import '../styles/event.css'
import Form from '../components/Form/Form'
import sponsor1 from '../images/Assets/sponsor1.png'
import sponsor2 from '../images/Assets/sponsor2.png'
import sponsor3 from '../images/Assets/sponsor3.png'
import eventBg from '../images/Assets/eventpage.jpg'
import talentBg from '../images/Assets/all talent-01.jpg'

const Event = () => {
  return (
    <>
      <section>
        <div className="event-container">
          <div className="event-hero">
            <img src={eventBg} alt="senjafest" />
          </div>
          <div className="sponsor">
            <div className="sponsor-flex">
              <h3>SPONSOR :</h3>
              <div>
                <img src={sponsor1} alt="logo sponsor" />
                <img src={sponsor2} alt="logo sponsor" />
                <img src={sponsor3} alt="logo sponsor" />
              </div>
              
            </div>
          </div>
          <div className="tagline">
            <h2>Rasakan Rindu, Nikmati Senja . . .</h2>
            <p>Bersama</p>
            <img src={talentBg} alt="" />
          </div>
          
          <Form/>
        </div>
      </section>
      
    </>
  )
}

export default Event;