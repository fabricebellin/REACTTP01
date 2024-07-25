import React, { useState, useEffect } from 'react';

function MonBody() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [timerStopped, setTimerStopped] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn && !timerStopped) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn, timerStopped]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Chrono</h1>
            <div className="text-2xl font-mono text-gray-700">{(time / 1000).toFixed(2)}s</div>
            <div className="space-x-4 mt-6">
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 shadow-xl" 
                        onClick={() => !timerStopped && setTimerOn(true)}>Start</button>
                <button className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 shadow-xl" 
                        onClick={() => setTimerOn(false)}>Pause</button>
                <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 shadow-xl" 
                        onClick={() => { setTimerOn(false); setTimerStopped(true); }}>Stop</button>
                <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 drop-shadow-xl" 
                        onClick={() => { setTime(0); setTimerOn(true); setTimerStopped(false); }}>Restart</button>
            </div>
        </div>
    );
}

export default MonBody;