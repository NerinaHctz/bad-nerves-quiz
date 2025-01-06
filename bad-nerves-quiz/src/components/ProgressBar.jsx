import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100

    return <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${progressPercentage}%` }}></div>
    </div>
}


export default ProgressBar