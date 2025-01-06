import { useState } from 'react'
import ProgressBar from './ProgressBar'
import './Question.css'

const Question = ({
    question,
    options = [],
    answer,
    setScore,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    finishGame,
    score,
    setTime
}) => {
    const [answered, setAnswered] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const handleAnswer = (selectedOption) => {
        setAnswered(true)
        setSelectedOption(selectedOption)
        if (selectedOption === answer) {
            setCorrectAnswer(true)
            setScore(score + 1)
        } else {
            setCorrectAnswer(false)
        }

        setTimeout(() => {
            setAnswered(false)
            setSelectedOption(null)
            if (currentQuestionIndex < 40) {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
                setTime(15)
            } else {
                finishGame()
            }
        }, 500)
    }

    return <div>
        <h2>{question}</h2>
        <div>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={
                        answered
                            ? option === answer
                                ? selectedOption !== answer
                                    ? 'correct-transparent'
                                    : 'correct'
                                : option === selectedOption
                                    ? 'incorrect'
                                    : ''
                            : ''
                    }
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
}

export default Question