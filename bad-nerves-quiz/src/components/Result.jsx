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
            confettiContainer.remove()
        }, 5000)
    }

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
        <h1 className='title'>
            <span className='bad-nerves'>BAD NERVES</span> <span className='quiz'>Quiz</span>
        </h1>
        <h1 className='result-title'>Game Over!</h1>
        <p>
            <span className='result-text-red'>Your final score is: </span>
            <span className='result-score'>{score}</span>
            <span className='result-text-red'> out of </span>
            <span className='result-score'>{total}</span>
        </p>
        <p>{message}</p>
        <div className='social-media'>
            <a href='https://open.spotify.com/intl-es/artist/7IPyXY4ZHkuvQY1ny8TnMQ' target='_blank' rel='noopener noreferrer'>
                <img src='./spotify.png' alt='Spotify logo' width='40' height='40' />
            </a>
            <a href='https://www.instagram.com/badbadnerves/' target='_blank' rel='noopener noreferrer'>
                <img src='./instagram.png' alt='Instagram logo' width='40' height='40' />
            </a>
        </div>
    </div>
}

export default Result