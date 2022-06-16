import React from 'react'
import './Service.css'
import bgService from '../../images/Assets/bg-service.png'
import { Link } from 'react-router-dom'
// import ImageSlider from '../Carousel/ImageSlider'
// import { SliderData } from '../Carousel/SliderData'
import eventPlan from '../../images/Assets/services/eventPlan.jpg'
import eventFest from '../../images/Assets/services/eventFest.jpg'
import eventMan from '../../images/Assets/services/eventMan.jpg'

const Service = () => {
    return (
        <>
            <section className="services">
                <div className="service-container">
                    <div className="service-bg">
                        <img src={bgService} alt="circle" />
                    </div>
                    <div className="service-title">
                        <h3>What We Do</h3>
                        <h4>Our Service</h4>
                    </div>
                    <div className="service-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor quos repellendus pariatur voluptate doloremque natus nesciunt error veritatis? Excepturi inventore numquam officiis corrupti nobis aperiam dolor laudantium! Reprehenderit, hic deserunt! Minima amet quia sint eos dignissimos cum rerum, exercitationem sit, ad praesentium aliquid nostrum eligendi hic, quidem voluptate soluta?</p>
                    </div>
                    <div className="service-button">
                        <Link to='/Event'>All Services</Link>
                    </div>
                </div>
            </section>
            {/* <ImageSlider slides={SliderData}/> */}
            <section className="service-info">
                <div className="grid-service">
                    <div className="box-image">
                        <div className="box-anime">
                            <h3><Link to='/Event'>Event Organizer</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={eventPlan} alt="event planner" />
                        <h4 className='box-caption'>Event Organizer</h4>
                        <div className="box-service"></div>
                    </div>
                    <div className="box-image">
                        <div className="box-anime">
                            <h3><Link to='/Event'>Event Planner</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={eventFest} alt="event planner" />
                        <h4 className='box-caption'>Event Planner</h4>
                        <div className="box-service"></div>
                    </div>
                    <div className="box-image">
                        <div className="box-anime">
                            <h3><Link to='/Event'>Event Production</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={eventMan} alt="event planner" />
                        <h4 className='box-caption'>Event Production</h4>
                        <div className="box-service"></div>
                    </div>
                    <div className="box-image">
                        <div className="box-anime">
                            <h3><Link to='/Event'>Manpower Event</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={eventMan} alt="event planner" />
                        <h4 className='box-caption'>Manpower Event</h4>
                        <div className="box-service"></div>
                    </div>
                    <div className="box-image">
                        <div className="box-anime">
                            <h3><Link to='/Event'>Tallent Event</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={eventMan} alt="event planner" />
                        <h4 className='box-caption'>Tallent Event</h4>
                        <div className="box-service"></div>
                    </div>
                    <div className="box-image">
                        <div className="box-anime">
                            <h3><Link to='/Event'>Wedding Organizer</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={eventMan} alt="event planner" />
                        <h4 className='box-caption'>Wedding Organizer</h4>
                        <div className="box-service"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service