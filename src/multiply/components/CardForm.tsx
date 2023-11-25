import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export interface CardFormProps {
  factor1: number;
  factor2: number;
  onSubmit: () => void;
  isActive: boolean;
}

export const CardForm: React.FC<CardFormProps> = ({ factor1, factor2, onSubmit, isActive }) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = factor1 * factor2;
    const userEnteredAnswer = parseInt(userAnswer, 10);
    const isAnswerCorrect = !isNaN(userEnteredAnswer) && userEnteredAnswer === correctAnswer;

    setIsCorrect(isAnswerCorrect);

    // Save the result to localStorage
    const result = {
      factor1,
      factor2,
      userAnswer,
      isCorrect: isAnswerCorrect,
    };
    const previousResults = JSON.parse(localStorage.getItem('results') || '[]');
    //only 26 results are allowed to be stored in local storage
    if (previousResults.length <= 26) {
      localStorage.setItem('results', JSON.stringify([...previousResults, result]));
    }
    // Trigger the parent component's onSubmit function to change the carousel
    onSubmit();
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Multiplication Quiz</Card.Title>
        <Card.Text>
          {factor1} * {factor2} = ?
        </Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formAnswer'>
            <Form.Label>Enter your answer:</Form.Label>
            <Form.Control
              type='text'
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' disabled={!isActive}>
            Submit
          </Button>
        </Form>
        {isCorrect !== null && (
          <p className={isCorrect ? 'text-success' : 'text-danger'}>
            {isCorrect ? 'Correct! Well done!' : 'Incorrect. Try again.'}
          </p>
        )}
      </Card.Body>
    </Card>
  );
};
