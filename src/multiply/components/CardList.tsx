import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { CardForm } from './CardForm';

interface Factor {
  factor1: number;
  factor2: number;
}

export const CardList: React.FC = () => {
  const factors: Factor[] = [
    { factor1: 2, factor2: 0 },
    { factor1: 3, factor2: 1 },
    { factor1: 4, factor2: 2 },
    // Add more factors as needed
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleFormSubmit = () => {
    // Update the active index to move to the next question
    setActiveIndex(prevIndex => (prevIndex + 1) % factors.length);
  };

  return (
    <Container>
      <Carousel activeIndex={activeIndex} onSelect={() => {}}>
        {factors.map((factor, index) => (
          <Carousel.Item key={index}>
            <CardForm
              factor1={factor.factor1}
              factor2={factor.factor2}
              onSubmit={handleFormSubmit}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
