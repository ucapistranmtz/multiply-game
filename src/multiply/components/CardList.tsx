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
type CardListProps = {
  factor: number;
};
export const CardList: React.FC<CardListProps> = ({ factor }) => {
  let factors: Factor[] = generateRandomFactors(factor);
  for (let index = 1; index <= (factor - 2 > 0 ? factor - 2 : factor + 2); index++) {
    let newFactor: Factor[] = generateRandomFactors(factor - index);
    newFactor = newFactor.slice(0, newFactor.length - 2);
    factors = factors.concat([...newFactor]);
  }
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
    localStorage.clear();
    setResults([]);
  };

  const handleTimerEnds = () => {
    setShowResults(true);
    const storedResults = JSON.parse(localStorage.getItem('results') || '[]');

    console.log('handleTimerEnds', storedResults);
    setIsTimerActive(false);
  };

  useEffect(() => {
    // Retrieve results from localStorage when the component mounts
    const storedResults = JSON.parse(localStorage.getItem('results') || '[]');
    console.log('storedResults', storedResults);
    setResults(storedResults);
  }, []);

  return (
    <>
      <div>
        <h1>Let's play </h1>
        <Timer
          initialMinutes={3}
          intervalDuration={1800}
          onTimerEnds={handleTimerEnds}
          onTimerStartStop={handleTimerStartStop}
        />
      </div>
      <Container>
        <Carousel activeIndex={activeIndex} onSelect={() => {}}>
          {factors.map((factor, index) => (
            <Carousel.Item key={index}>
              <CardForm
                factor1={factor.factor1}
                factor2={factor.factor2}
                onSubmit={handleFormSubmit}
                isActive={isTimerActive}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {showResults && (
          <Row className='mt-4'>
            <Col>
              <Alert variant='info'>
                <h3>Results</h3>
                <h3> Great you solved {results.length} operations</h3>
                <h4>{results.filter(result => result.isCorrect).length} where correct</h4>
                <h4>{results.filter(result => !result.isCorrect).length} where incorrect</h4>
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
