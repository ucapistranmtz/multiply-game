// ResultsDisplay.tsx
import React from 'react';
import { Alert } from 'react-bootstrap';

interface Result {
  factor1: number;
  factor2: number;
  userAnswer: string;
  isCorrect: boolean;
}

interface ResultsDisplayProps {
  results: Result[];
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <Alert variant='info'>
      <h3>Incorrect Results</h3>
      <h4>You got {results.filter(item => item.isCorrect == false).length} incorrect results </h4>
      {results
        .filter(item => item.isCorrect == false)
        .map((result, index) => (
          <p key={index}>
            {result.factor1} * {result.factor2} = {result.userAnswer} -{' '}
            {result.isCorrect ? 'Correct' : 'Incorrect'}
          </p>
        ))}
    </Alert>
  );
};
