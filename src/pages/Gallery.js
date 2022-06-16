import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/gallery.css'
import pic1 from '../images/Assets/pic1.jpg'
import pic2 from '../images/Assets/pic2.jpg'
import pic3 from '../images/Assets/pic3.jpg'
import pic4 from '../images/Assets/pic4.png'
import pic5 from '../images/Assets/pic5.jpg'
import pic6 from '../images/Assets/pic6.jpg'
import pic7 from '../images/Assets/pic7.jpg'
import pic8 from '../images/Assets/pic8.jpg'
import pic9 from '../images/Assets/pic9.jpg'

const Gallery = () => {


  return (
    <>
      <div className="container">
        <div className="gallery">
          <div className="gallery-title">
            <h3>Inkara Docs 2011 - 2022</h3>
          </div>
          <div className="gallery-content">
            <ReactPlayer width='780px' height='480px' controls url='https://www.youtube.com/watch?v=3nQNiWdeH2Q' />
          </div>
        </div>
        <div className="gallery-image">
          <div className="title">
            <h2>Image Gallery</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery