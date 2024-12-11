import React from 'react'

function Question({ questionData, onAnswer }) {
    return <div>
        <h2>{questionData.question}</h2>
        <div className='button-container'>
            {questionData.options.map((option, index) => (
                <button key={index} onClick={() => onAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    </div>
}

export default Question