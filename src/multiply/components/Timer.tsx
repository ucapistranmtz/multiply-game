import React, { useState, useEffect } from 'react';

interface TimerProps {
  durationInSeconds: number;
}

export const Timer: React.FC<TimerProps> = ({ durationInSeconds }) => {
  const [seconds, setSeconds] = useState(durationInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          handleTimeEnds();
          return 0;
        }
      });
    }, 1000);

    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [durationInSeconds]);

  const handleTimeEnds = () => {
    // Display a popup message (you can replace this with a modal component)
    alert('Time Ends');
  };

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
