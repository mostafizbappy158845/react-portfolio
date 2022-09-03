import React, { Component } from 'react'
import './HeroImg2.css'

//using class component
class HeroImg2 extends Component {
    render(){
        return (
            <div className="hero-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

// const HeroImg2 = (props) => {
//     return (
//       <div className="hero-img">
//           <div className="heading">
//               <h1>{props.heading}</h1>
//               <p>{props.text}</p>
//           </div>
//       </div>
//     )
//   }
export default HeroImg2