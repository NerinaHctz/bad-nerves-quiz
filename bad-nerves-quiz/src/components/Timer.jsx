import { useEffect } from 'react'

const Timer = ({ time, setTime, handleTimeUp, isFinished }) => {
    useEffect(() => {
        if (isFinished) {
            return
        }

        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    handleTimeUp()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [setTime, handleTimeUp, isFinished])

    return <div>
        <p>{time}</p>
    </div>
}

export default Timer