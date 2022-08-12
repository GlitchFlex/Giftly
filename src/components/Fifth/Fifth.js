import React from 'react'
import './fifth.css'

import gift1 from '../../assets/gift1.jpg'
import gift2 from '../../assets/gift2.jpg'
import gift3 from '../../assets/gift3.jpg'

const Fifth = () => {
  return (
    <div className='container'>
        <div className="fifth">
            <h2>Our Blog</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aperiam</p>
            <div className='grid'>
                <div className="itemCard">
                    <img src={gift1} alt="" />
                    <div className="text">
                        <p id='header'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius assumenda error voluptatibus autem!</p>
                        <button id='btny'> See More</button>
                    </div>
                </div>
                <div className="itemCard">
                    <img src={gift3} alt="" />
                    <div className="text">
                        <p id='header'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius assumenda error voluptatibus autem!</p>
                        <button id='btny'> See More</button>
                    </div>
                </div>
                <div className="itemCard">
                    <img src={gift2} alt="" />
                    <div className="text">
                        <p id='header'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius assumenda error voluptatibus autem!</p>
                        <button id='btny'> See More</button>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Fifth