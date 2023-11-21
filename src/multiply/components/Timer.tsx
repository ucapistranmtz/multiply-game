// Timer.tsx
import React, { useState, useEffect } from 'react';

interface TimerProps {
  intervalDuration: number;
  initialMinutes: number;
  onTimerEnds: () => void;
  onTimerStartStop: (isActive: boolean) => void; // Callback for timer start/stop
}

export const Timer: React.FC<TimerProps> = ({ intervalDuration, initialMinutes, onTimerEnds, onTimerStartStop }) => {
  const initialSeconds: number = initialMinutes * 60;
  const [totalSeconds, setTotalSeconds] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval:any;

    if (isActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
      }, intervalDuration);
    } else if (totalSeconds === 0) {
      setIsActive(false);
      clearInterval(interval!);
      onTimerEnds(); // Call the callback when the timer ends
    } else {
      clearInterval(interval!);
    }

    return () => {
      clearInterval(interval!);
    };
  }, [isActive, totalSeconds, intervalDuration, onTimerEnds]);

  const handleStartStop = () => {
    setIsActive(!isActive);
    onTimerStartStop(!isActive);
  };

  const handleReset = () => {
    setTotalSeconds(initialSeconds);
    setIsActive(false);
    onTimerStartStop(false);
  };

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>Timer: {formatTime(totalSeconds)}</h1>
      <button onClick={handleStartStop}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}; 