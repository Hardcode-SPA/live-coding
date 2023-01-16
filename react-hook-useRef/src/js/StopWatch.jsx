import { useRef, useState, useEffect } from 'react';


function StopWatch(props) {
    // Ref-Variable fuer TimerInterval ID
    const timerIdRef = useRef(null);

    // Statevariable fuer den Timer
    const [timerCount, setTimerCount] = useState(0);
    // const [isTimerRunning, setTimerRunning] = useState(false);

    // Side-Effect für die Veränderung der Statevariable isRunning
    // useEffect(() => {
    //     // Erstellt Intervalvariable
    //     let interval = null;

    //     // Wenn Laufindikator positiv
    //     if (isTimerRunning) {
    //         // Erstelle neues Interval für den Timer
    //         interval = setInterval(() => {
    //             setCount(prev => prev+1);
    //         }, 1000);
        
    //     } else {
    //         // Räume Interval für Timer auf
    //         clearInterval(interval);
    //     }

    //     // Räume zwischen Updates das Interval auf
    //     return () => clearInterval(interval);
    // }, [isTimerRunning]);

    // Clickhandler fuer den Timer-Start Button
    const startHandler = () => {
        // Verhindere doppelte Timerintervalle
        if (timerIdRef.current !== null) { return; }

        // Speichere TimerIntervall ID in der Referenz (timerIdRef.current)
        timerIdRef.current = setInterval(() => setTimerCount(c => c+1), 1000);

        // setTimerRunning(true);
    };

    // Clickhandler fuer den Timer-Stop Button
    const stopHandler = () => {
        // Stoppe das TimerIntervall anhand der in der Referenz (timerIdRef.current) gespeicherten TimerIntervall ID
        clearInterval(timerIdRef.current);

        // Entferne die TimerIntervall ID aus der Referenz (timerIdRef.current)
        timerIdRef.current = null;

        // setTimerRunning(false);
    };

    // Laeuft bei Mount und Unmount
    useEffect(() => {
        // Clean-Up Funktion bei Unmount zum Aufloesen des TimerIntervalls anhand der in der Ref-Variable gespeicherten ID
        return () => clearInterval(timerIdRef.current);
    }, []);



    return (
        <div>
        <div>Timer: {timerCount}s</div>
        <div>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
        </div>
        </div>
    );
}

export default StopWatch;