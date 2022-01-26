import React from 'react';
import { useEffect, useState } from 'react';

export const TimerComponent = () => {

    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])



  return (<div>
      <h1>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:{("0" + Math.floor(time / 1000) % 60).slice(-2)}.{("0" + (time / 10) % 100).slice(-2)}</h1>
      <div className="butoni">
          <button onClick={() => setTimerOn(true)}>start</button>
          <button onClick={() => setTimerOn(false)}>stop</button>
      </div>
  </div>);
};
