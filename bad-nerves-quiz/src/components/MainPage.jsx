import React from 'react'

const MainPage = ({ onStart, animateTitle }) => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }} className='main-page'>
            <h1 className={`title ${animateTitle ? 'animate' : ''}`}>Bad Nerves Quiz</h1>
            <h2>Test your knowledge</h2>
            <p>Bad Nerves Quiz is a trivia game about the band Bad Nerves. Answer questions, get immediate feedback . Test your knowledge and enjoy discovering more about the band!</p>
            <button onClick={onStart} style={{ padding: '10px 20px', fontSize: '16px' }}>Get started</button>
        </div>
    )
}

export default MainPage