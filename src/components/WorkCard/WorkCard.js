import React from 'react'
import './WorkCard.css'
import project1 from '../../assets/project1.png'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className='Project-heading'>Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default WorkCard