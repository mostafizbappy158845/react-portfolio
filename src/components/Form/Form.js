import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label >Your Name</label>
            <input type="text" ></input>
            <label >Email</label>
            <input type="email" ></input>
            <label >Subject</label>
            <input type="text" ></input>
            <label >Your Message</label>
            <textarea name="" id="" cols="0" rows="6" placeholder='type your message here'></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form