import { useState, useRef } from "react";
import ResultModal from './ResultModal.jsx';



export default function TimerChallenge({ title, targetime }){
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetime*1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetime * 1000);
    }
    function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    
    return (
        <>
        <ResultModal ref={dialog} remainingTime={timeRemaining} targetime = {targetime} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetime} second{targetime > 1 ? 's' : '' }</p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
                {timerIsActive ? 'timer is running ...' : 'timer is Inactive' }
            </p>
        </section>
        </>
    );
}