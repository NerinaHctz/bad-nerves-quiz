import React, { useEffect } from 'react'

function Result({ score, total }) {
    let message

    useEffect(() => {
        if (score === total) {
            createConfetti()
        }
    }, [score, total])

    const createConfetti = () => {
        const confettiContainer = document.createElement('div')
        confettiContainer.className = 'confetti-container'
        document.body.appendChild(confettiContainer)

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div')
            confetti.classList.add('confetti')
            const xPos = Math.random() * 100
            const delay = Math.random() * 2
            const duration = 2 + Math.random() * 3
            confetti.style.left = `${xPos}%`
            confetti.style.animationDelay = `${delay}s`
            confetti.style.animationDuration = `${duration}s`
            confettiContainer.appendChild(confetti)
        }

        setTimeout(() => {
            confettiContainer.remove();
        }, 5000)
    };

    if (score < 5) {
        message = 'It seems like you need to listen to more Bad Nerves! Keep trying!'
    } else if (score < 10) {
        message = 'Good job! You know quite a bit about Bad Nerves, but there is still more to discover.'
    } else if (score < 15) {
        message = 'Great effort! You know a lot about Bad Nerves, but there is still more to learn!'
    } else if (score < 20) {
        message = 'Awesome! You are a real fan of Bad Nerves, but a few details still need mastering!'
    } else if (score === 20) {
        message = 'Perfect score! You are a real Bad Nerd! Congratulations!!'
    }

    return <div className='result-container'>
        <h1>Game Over!</h1>
        <p>Your final score is: {score} out of {total}</p>
        <p>{message}</p>
        <a href='https://open.spotify.com/intl-es/artist/7IPyXY4ZHkuvQY1ny8TnMQ' target='_blank' rel='noopener noreferrer'>
            <img src='./spotify.png' alt='Spotify logo' width='50' height='50' />
        </a>
    </div>
}

export default Result