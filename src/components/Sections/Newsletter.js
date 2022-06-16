import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom'
// import bgContacts from '../../images/Assets/bgEnd.png'
import newsletter from '../../images/newsletter.png'


const Newsletter = () => {
  return (
    <>
      <section className="contacts">
        <div className="contacts-container">
          {/* <div className="bg-contacts">
            <img src={bgContacts} alt="" />
          </div> */}
          <div className="container-grid">
            <div className="grid-contacts">
              <div className="grid-1">
                <img src={newsletter} alt="newsletter-icon" />
                <div className="grid-2">
                  <h4>Newsletter Subscription</h4>
                  <p className='paraf'>Get latest News & Update Our Event</p>
                </div>
              </div>
              <div className="grid-2">
                <form>
                  <input type="email" name="email" id="email" placeholder='Masukkan Email' />
                </form>
              </div>
              <div className="grid-3">
                <a href="#"><button type="submit">Subscribe Us</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter