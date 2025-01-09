import React from 'react'
import './MainPage.css'

const MainPage = ({ onStart, animateTitle }) => {
    return <div className='main-page'>
        <h1 className={`title ${animateTitle ? 'animate' : ''}`}>
            <span className='bad-nerves'>BAD NERVES</span> <span className='quiz'>Quiz</span>
        </h1>
        <h2 className='subtitle'>Test your knowledge</h2>
        <p className='text'>Bad Nerves Quiz is a trivia game about the band Bad Nerves. Answer questions, get immediate feedback . Test your knowledge and enjoy discovering more about the band!</p>
        <button className='start-button' onClick={onStart}>Get started</button>
    </div>

}

export default MainPage