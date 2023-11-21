import React, { useEffect, useState } from 'react';
import { Container, Carousel, Row, Alert, Col } from 'react-bootstrap';
import { CardForm } from './CardForm';
import { Timer } from './Timer';
import { generateRandomFactors } from '../../helpers';
interface Factor {
  factor1: number;
  factor2: number;
}

interface Result {
  factor1: number;
  factor2: number;
  userAnswer: string;
  isCorrect: boolean;
}

export const CardList: React.FC = () => {
  const factors: Factor[] = generateRandomFactors(4);
  console.log(factors);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [results, setResults] = useState<Result[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleFormSubmit = () => {
    // Update the active index to move to the next question
    setActiveIndex(prevIndex => (prevIndex + 1) % factors.length);
  };

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const handleTimerStartStop = (isActive: boolean) => {
    setIsTimerActive(isActive);
  };

  const handleTimerEnds = () => {
    setShowResults(true);
    setIsTimerActive(false);
  };

  useEffect(() => {
    // Retrieve results from localStorage when the component mounts
    const storedResults = JSON.parse(localStorage.getItem('results') || '[]');
    setResults(storedResults);
  }, []);

  return (
    <>
      <div>
        <h1>Let's play </h1>
        <Timer  initialMinutes={3} intervalDuration={180} onTimerEnds={handleTimerEnds}  onTimerStartStop={handleTimerStartStop}/>
      </div>
      <Container>
        <Carousel activeIndex={activeIndex} onSelect={() => {}}>
          {factors.map((factor, index) => (
            <Carousel.Item key={index}>
              <CardForm
                factor1={factor.factor1}
                factor2={factor.factor2}
                onSubmit={handleFormSubmit}
                isActive= { isTimerActive }
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {showResults && (
          <Row className='mt-4'>
            <Col>
              <Alert variant='info'>
                <h3>Results</h3>
                {results.map((result, index) => (
                  <p key={index}>
                    {result.factor1} * {result.factor2} = {result.userAnswer} -{' '}
                    {result.isCorrect ? 'Correct' : 'Incorrect'}
                  </p>
                ))}
              </Alert>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
