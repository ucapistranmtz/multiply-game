import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export interface CardFormProps {
  factor1: number;
  factor2: number;
  onSubmit: () => void;
}

export const CardForm: React.FC<CardFormProps> = ({ factor1, factor2, onSubmit }) => {
  const [userAnswer, setUserAnswer] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check the answer or perform any other necessary action here
    console.log('User answer:', userAnswer);
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
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
