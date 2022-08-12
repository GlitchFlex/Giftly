import React from 'react'
import two from '../../assets/two.jpg'
import './Third.css'
const Third = () => {
  return (
    <div className='container'>
        <div className="third">
            <div className="left1">
                <img src={two} alt="" />
            </div>
            <div className="right1">
                <h2>Corporate Gifting</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere mollitia iure tempore ab fuga numquam sapiente dignissimos sequi veniam sint, iusto ea deleniti cupiditate deserunt delectus corrupti in quam ipsum? Corporis quibusdam obcaecati quasi ab, maxime deserunt. Ipsam, sed autem!</p>
                <button className='btn3'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Third