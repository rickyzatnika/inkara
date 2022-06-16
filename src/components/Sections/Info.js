import "./Info.css"
import React from 'react'
import browser from '../../images/Assets/browser.svg'
import manager from '../../images/Assets/manager.svg'
import arrow from '../../images/Assets/arrow.svg'
import bgInfo from '../../images/Assets/bg-info.png'


const Info = () => {
  return (
    <>
        <section className="info">
            <div className="bgInfo">
                <img src={bgInfo} alt="circle" />
            </div>
            <div className="grid-info">
                <div className="col-one">
                    <div className="box-info">
                        <div className="box">
                            <img src={browser} alt="certified" />
                            <h4>Licensed & Certified</h4>
                            <p>Company</p>
                        </div>
                        <p className="caption-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nobis.</p>
                    </div>
                </div>
                <div className="col-two">
                    <div className="box-info">
                        <div className="box">
                            <img src={manager} alt="certified" />
                            <h4>We Are Professional</h4>
                            <p>Team Work</p>
                        </div>
                        <p className="caption-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nobis.</p>
                    </div>
                </div>
                <div className="col-three">
                    <div className="box-info">
                        <div className="box">
                            <img src={arrow} alt="certified" />
                            <h4>Quick Response</h4>
                            <p>Company</p>
                        </div>
                        <p className="caption-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nobis.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Info