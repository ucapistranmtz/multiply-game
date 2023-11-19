import React, { useState, useEffect } from 'react';

interface TimerProps {
  durationInSeconds: number;
  onTimerEnds: () => void;
}

export const Timer: React.FC<TimerProps> = ({ durationInSeconds, onTimerEnds }) => {
  const [seconds, setSeconds] = useState(durationInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          onTimerEnds();
          return 0;
        }
      });
    }, 1000);

    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [durationInSeconds, onTimerEnds]);

  return (
    <div>
      {seconds > 0 ? (
        <p>
          Time left: {Math.floor(seconds / 60)}:{seconds % 60}
        </p>
      ) : null}
    </div>
  );
};
