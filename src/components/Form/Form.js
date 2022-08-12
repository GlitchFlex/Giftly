import React from 'react'
import useState from 'react';
import './Form.css'
const Form = () => {
  // const [fname,setFname] = useState("");
  // const [lname,setLname] = useState("");
  // const [email,set] = useState("");
  // const [fname,setFname] = useState("");
  // const [fname,setFname] = useState("");


  return (
    <div className='container'>
        <div className="Form">
        <div className="left2">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus corporis perspiciatis excepturi tempore, quidem necessitatibus nisi nemo fugiat voluptate.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus corporis perspiciatis excepturi tempore, quidem necessitatibus nisi nemo fugiat voluptate.</p>
        </div>
        <div className="right2">
            <div className="one">
                <input type="text" placeholder=' First Name'   />
                <input type="text" placeholder='Last Name'   />
            </div>
            <div className="two">
                <input type="text" placeholder='Email'   />
                <input type="text" placeholder='Subject'   />
            </div>
            <textarea name="demo" id="textArea" cols="30" rows="10" placeholder='Enter your Message'></textarea>
            <button className='btnx'>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Form