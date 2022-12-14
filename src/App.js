
import React, { useEffect, useState } from 'react';
import './App.css';
import image from "./secrets-aura-cozumel.jpg"




function App() {
  // state = {
  //   event1: '12/07/2022',
  //   Christmas: '12/25/2022'
  // }


  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`12/07/${year}`) - +new Date()

    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

   useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
   })

   const timerComponents = []

   Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })


    return (
    <div className="App">
      <div className="App-header">
        <img src={image} alt="hotel" className="frame" />
        <h1>Countdown to Cozumel {year}</h1>

        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        <h5>Check out <a href='https://www.hyatt.com/en-US/hotel/mexico/secrets-aura-cozumel/seacz'>our hotel</a></h5>
      </div>
  </div>)

}

export default App
