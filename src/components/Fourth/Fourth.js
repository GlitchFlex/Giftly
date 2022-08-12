import React from 'react'
import './Fourth.css'
import three from '../../assets/three.jpg';
const Fourth = () => {
  return (
    <div className='container'>
        <div className="first">
            <div className="left">
                <h2>Personal Gifting </h2>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum consequatur corrupti, ab laborum ipsam! Iusto rem cumque similique maxime, tenetur optio, assumenda voluptatum expedita eos consequuntur eaque sed molestias?</p>
                <button className="btn3">Learn More</button>
            </div>
            <div className="right">
                <img src={three} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Fourth