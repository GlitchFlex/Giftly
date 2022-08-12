import React from 'react'
import './First.css'
import three from '../../assets/three.jpg';
const First = () => {
  return (
    <div className='container'>
        <div className="first">
            <div className="left">
                <h1>Thoughtful Gifting <br/> Made Easy</h1>
                <p className='para'> veniam, ducimus molestias possimus! Nostrum nesciunt commodi, corrupti repellat deserunt cupiditate libero!</p>
                <button className="btn3">Get started</button>
            </div>
            <div className="right">
                <img src={three} alt="" />
            </div>
        </div>

    </div>
  )
}

export default First