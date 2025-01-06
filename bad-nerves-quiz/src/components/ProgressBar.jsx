import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ currentQuestion, total }) => {
    const progressPercentage = (currentQuestion / total) * 100

    return <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${progressPercentage}%` }}></div>
        <div className='progress-numbers'>
            {Array.from({ length: total }, (_, index) => (
                <span key={index} className={index < currentQuestion ? 'completed' : ''}>
                    {index + 1}
                </span>
            ))}
        </div>
    </div>

}

export default ProgressBar