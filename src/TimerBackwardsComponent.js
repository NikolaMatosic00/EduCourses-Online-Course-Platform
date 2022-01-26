import React, { useEffect, useState } from 'react';

export const TimerBackwardsComponent = () => {

    const [time, setTime] = useState(0)
    const [pokrenuto, setPokrenuto] = useState(false)

    useEffect(() => {

        let interval = null;

        if(pokrenuto){
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 0.01)
            }, 10);
        }else{
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [pokrenuto])


  return (<div>

    <input id='inputZaTimerBW' type="number" placeholder='set timer ..' onChange={(event) => setTime(event.target.value)} />
      <h1>{(Math.round(time * 100) / 100).toFixed(2)}</h1>
    <div className="butoni">
        <button onClick={() => setPokrenuto(true)}>Pokreni</button>
    </div>
  </div>);
};
