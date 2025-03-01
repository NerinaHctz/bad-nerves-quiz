import { useEffect, useState } from 'react'
import Question from './components/Question'
import Result from './components/Result'
import MainPage from './components/MainPage'
import Timer from './components/Timer'

const questions = [
  {
    question: 'How many members are in the band?',
    options: [
      '4', '5', '6'
    ],
    answer: '5'
  },
  {
    question: 'How do they define their musical genre?',
    options: [
      'Punk rock', 'Indie rock', 'Power Pop'
    ],
    answer: 'Power Pop'
  },
  {
    question: 'What is the name of their debut album?',
    options: [
      'Bad Nerves', 'Hyperactive', 'Noise Pop'
    ],
    answer: 'Bad Nerves'
  },
  {
    question: 'Complete the following song lyric: \'What did you say?...\'',
    options: [
      'What are you waiting for just call me on the phone',
      'Do you never learn? Are you listening?',
      'Uh yeah, you are real cool, real cool'
    ],
    answer: 'What are you waiting for just call me on the phone'
  },
  {
    question: 'From which country is the band?',
    options: [
      'USA', 'UK', 'Australia'
    ],
    answer: 'UK'
  },
  {
    question: 'Which of these bands is named by them as one of their biggest influences?',
    options: [
      'Blur', 'Nirvana', 'The Ramones'
    ],
    answer: 'The Ramones'
  },
  {
    question: 'What\'s the drummer\'s name?',
    options: [
      'Bobby',
      'Samuel',
      'Will'
    ],
    answer: 'Samuel'
  },
  {
    question: 'What is the name of the song that does not appear on any of their albums?',
    options: [
      'Bad Kid', 'Killing the Nerve', 'Sorry'
    ],
    answer: 'Bad Kid'
  },
  {
    question: 'What year was their debut album released?',
    options: [
      '2016', '2018', '2020'
    ],
    answer: '2020'
  },
  {
    question: 'What was the first song released by them on Spotify?',
    options: [
      'Alright', 'Baby Drummer', 'Dreaming'
    ],
    answer: 'Dreaming'
  },
  {
    question: 'How many songs are in their last album?',
    options: [
      '10', '12', '14'
    ],
    answer: '12'
  },
  {
    question: 'Which city did the band form in?',
    options: [
      'Essex', 'Liverpool', 'Birmingham'
    ],
    answer: 'Essex'
  },
  {
    question: 'Complete the following song lyric: \'Record freedom, ____, rain in the sky\'',
    options: [
      'Liberty',
      'Motorways',
      'Cocaine'
    ],
    answer: 'Liberty'
  },
  {
    question: 'What does Bobby describe as \'the perfect album from start to finish\'?',
    options: [
      'Rocket to Russia by the Ramones', 'Abbey Road by The Beatles', 'London Calling by The Clash'
    ],
    answer: 'Abbey Road by The Beatles'
  },
  {
    question: 'Which band has supported them on their 2024 European tour?',
    options: [
      'Ultra Q', 'Royal Blood', 'Green Day'
    ],
    answer: 'Ultra Q'
  },
  {
    question: 'What is the name of the live album that was recorded at the Sebright Arms in 2022?',
    options: [
      'Alive in London', 'Apathy in the UK', 'Palace'
    ],
    answer: 'Alive in London'
  },
  {
    question: 'What is their most famous song?',
    options: [
      'Antidote', 'Can\'t Be Mine', 'Dreaming'
    ],
    answer: 'Can\'t Be Mine'
  },
  {
    question: 'Which label released their debut album?',
    options: [
      'XL Recordings', 'Suburban Records', 'Sub Pop'
    ],
    answer: 'Suburban Records'
  },
  {
    question: 'What is the name of the fourth song on the B-side of the Still Nervous album?',
    options: [
      'You should know by now', 'Too lazy to love', 'Alright'
    ],
    answer: 'You should know by now'
  },
  {
    question: 'What was Jimmy\'s hair made of?',
    options: [
      'Hair', 'Mud', 'Fire'
    ],
    answer: 'Fire'
  }
]

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [time, setTime] = useState(15)
  const [showQuiz, setShowQuiz] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [animateTitle, setAnimateTitle] = useState(false)

  const handleStartQuiz = () => {
    setAnimateTitle(true)
    setTimeout(() => setShowQuiz(true), 1000)
  }

  const finishGame = () => {
    setIsFinished(true)
    setCurrentQuestionIndex(0)
    setAnswered(true)
    setCorrectAnswer(false)
    setTime(0)
  }

  const handleTimeUp = () => {
    setIsFinished(true)
  }

  return <div className='game-container'>
    <>
      {showQuiz ? (
        <div className='button-container'>
          {isFinished ? (
            <Result score={score} total={questions.length} />
          ) : (
            <>
              <Question
                question={questions[currentQuestionIndex]?.question}
                options={questions[currentQuestionIndex]?.options}
                answer={questions[currentQuestionIndex]?.answer}
                setScore={setScore}
                setAnswered={setAnswered}
                setCorrectAnswer={setCorrectAnswer}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                finishGame={finishGame}
                score={score}
                setTime={setTime}
                totalQuestions={questions.length}
                answered={answered}
                selectedOption={selectedOption}
              />
              {!isFinished && <Timer time={time} setTime={setTime} handleTimeUp={handleTimeUp} isFinished={isFinished} />}
            </>
          )}
        </div>
      ) : (
        <MainPage onStart={handleStartQuiz} animateTitle={animateTitle} />
      )}
    </>
  </div>
}

export default App