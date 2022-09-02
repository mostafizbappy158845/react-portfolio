import React from 'react'
import "./Footer.css"
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>123 Mirpur, Dhaka.</p>
                        <p>Bangladesh.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        01925812069.
                    </h4>
                
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        01925812069.
                    </h4>
                
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Mostafizur Rahman. CEO and Founder of Learn&Share. I enjoy discussing new projects and problem solving.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer