import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="imageOfProject" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details" >
                    <p title={props.text}>{props.text.length > 90 ? props.text.slice(0,90) + ' ...' : props.text}</p>
                    <div className="pro-btns">
                        {/* <NavLink to={props.view} className="btn">View</NavLink> */}
                        <a href={props.view}  className="btn" rel="noopener noreferrer" target='_blank' >View</a>
                        <a href={props.source}  className="btn" rel="noopener noreferrer" target='_blank' >Source</a>
                        {/* <NavLink to={props.source} className="btn">Source</NavLink> */}
                    </div>
                </div>
            </div>
  )
}

export default WorkCard