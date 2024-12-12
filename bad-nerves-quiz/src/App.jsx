import { useEffect, useState } from 'react'
import Question from './components/Question'
import Result from './components/Result'

const questions = [
  {
    question: 'In what year was Bad Nerves formed?',
    options: [
      '2015', '2016', '2017'
    ],
    answer: '2016'
  },
  {
    question: 'What musical genre defines Bad Nerves?',
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
    question: 'Complete the following song lyric: "What did you say?..."',
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
    question: 'What influences do Bad Nerves members cite in their music?',
    options: [
      'Blur', 'Nirvana', 'The Ramones'
    ],
    answer: 'The Ramones'
  },
  {
    question: 'What are the names of the members?',
    options: [
      'Kevin, Bryan, Nick, Howie, and AJ',
      'Bobby, Samuel, Will, George, and Jon',
      'Steve, Glen, Johnny, Paul, and Sid'
    ],
    answer: 'Bobby, Samuel, Will, George, and Jon'
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
    question: 'What was the first song released by Bad Nerves?',
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
    question: 'Which city did Bad Nerves form in?',
    options: [
      'Essex', 'Chicago', 'Sidney'
    ],
    answer: 'Essex'
  },
  {
    question: 'Complete the following song lyric: "Record freedom, ____, rain in the sky"',
    options: [
      'Liberty',
      'Motorways',
      'Cocaine'
    ],
    answer: 'Liberty'
  },
  {
    question: 'What does Bobby describe as "the perfect album from start to finish"?',
    options: [
      'Rocket to Russia by the Ramones', 'Abbey Road by The Beatles', 'London Calling by The Clash'
    ],
    answer: 'Abbey Road by The Beatles'
  },
  {
    question: 'What band has accompanied Bad Nerves on their European tour?',
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
      'Antidote', "Can't Be Mine", 'Dreaming'
    ],
    answer: "Can't Be Mine"
  },
  {
    question: "Which label released Bad Nerves' debut album?",
    options: [
      'XL Recordings', 'Suburban Records', 'Sub Pop'
    ],
    answer: 'Suburban Records'
  },
  {
    question: 'Which Bad Nerves music video has the most views on YouTube?',
    options: [
      'Radio Punk', 'USA', 'Television'
    ],
    answer: 'USA'
  },
  {
    question: "What was Jimmy's hair made of?",
    options: [
      'Hair', 'Mud', 'Fire'
    ],
    answer: 'Fire'
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    if (timeLeft === 0) {
      setIsFinished(true)
    }

    const timer = setInterval(() => {
      if (timeLeft > 0 && !isFinished) {
        setTimeLeft(prevTime => prevTime - 1)
      }
    }, 1000);

    return () => clearInterval(timer)
  }, [timeLeft, isFinished])

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) setScore(score + 1)

    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1)
    else setIsFinished(true)
  }

  return <div className='game-container'>
    <h1 className='title'>BAD NERVES QUIZ</h1>
    <div className='button-container'>
      {isFinished ? (
        <Result score={score} total={questions.length} />
      ) : (
        <div>
          <Question
            questionData={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />

        </div>
      )}
    </div>
    <div className='timer-container'>
      <div className='timer-circle'>
        <p>{timeLeft} sec</p>
      </div>
    </div>
  </div>

}

export default App