import React from 'react'
import './WorkCard.css'
import project1 from '../../assets/project1.png'
import { NavLink } from 'react-router-dom'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="imageOfProject" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="https://github.com/mostafizbappy158845" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work