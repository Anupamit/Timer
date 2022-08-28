import React, { useEffect, useState } from 'react'

function Home() {
    const [minutes,setMinutes]=useState(5)
    const [seconds,setSeconds]=useState(0)
    const [start, setStart] = useState(false);

    const refreshPage = () => {
        setMinutes(5)
        setSeconds(0)
        setStart(false)
    }
    const stopStart = () => {
        setStart(!start);
    };
    

    useEffect(()=>{
        let getData=null
        if (!start) {
            getData = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(getData)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
        }
            return ()=> {
                clearInterval(getData);
            };
        },[minutes, seconds, start]);
    return (
        <div>
            <h1>Timer</h1>
            <h1>{minutes}m {seconds}s</h1>
            <button className='start' onClick={stopStart}>{!start ? "STOP" : "START"}</button>
            <button className='reset' onClick={refreshPage}>Reset</button>
        </div>
    )
}

export default Home