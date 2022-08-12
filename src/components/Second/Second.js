import React from 'react'
import './Second.css'
import gift4 from '../../assets/gift4.png'
import child from '../../assets/child.png'
import flower from '../../assets/flower.png'
const Second = () => {
  return (
    <div className='container'>
        <div className="second">
          <h2>Thoughtful Gifting Made Easy</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis nemo dolorum <br/>quo pariatur quidem ipsa.</p>
          <div className="cards">
            <div className='card'>
              <div className="img">
                <img src={gift4} alt="" />
              </div>
              <h4>Gift Delivery</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consectetur totam esse vitae quam culpa vero aperiam nihil dolor omnis!</p>
            </div>
            <div className='card'>
              <div className="img">
                <img src={child} alt="" />
              </div>
              <h4>Home with kids</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consectetur totam esse vitae quam culpa vero aperiam nihil dolor omnis!</p>
            </div>
            <div className='card'>
              <div className="img">
                <img src={flower} alt="" />
              </div>
              <h4>Plants & Flower</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consectetur totam esse vitae quam culpa vero aperiam nihil dolor omnis!</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Second