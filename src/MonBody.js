import React, { useState, useEffect, useRef } from 'react';

function MonBody() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const startTimeRef = useRef(0); // Référence pour stocker le temps de début

  useEffect(() => {
    let animationFrameId;

    function updateTimer() {
      if (timerOn) {
        const currentTime = Date.now();
        setTime(prevTime => prevTime + currentTime - startTimeRef.current);
        startTimeRef.current = currentTime;
        animationFrameId = requestAnimationFrame(updateTimer); // Demande la prochaine image
      }
    }

    if (timerOn) {
      startTimeRef.current = Date.now(); // Initialiser le temps de début
      animationFrameId = requestAnimationFrame(updateTimer); // Démarrer l'animation
    }

    return () => {
      cancelAnimationFrame(animationFrameId); // Arrêter l'animation lors du démontage
      startTimeRef.current = 0; // Réinitialiser le temps de début
    };
  }, [timerOn]); // Dépendance pour relancer l'effet si timerOn change

  const handleStart = () => setTimerOn(true);
  const handlePause = () => setTimerOn(false);
  const handleStop = () => {
    setTimerOn(false);
    setTime(0);
  };
  const handleRestart = () => {
    setTime(0);
    setTimerOn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="text-2xl font-mono text-gray-700">
        {((time || 0) / 1000).toFixed(2)}s
      </div>
      <div className="space-x-4 mt-6">
        <button onClick={handleStart}>Commencer</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Arrêt</button>
        <button onClick={handleRestart}>Redémarrage</button>
      </div>
    </div>
  );
}

export default MonBody;
