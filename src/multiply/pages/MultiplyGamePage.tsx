import React, { useState } from 'react';
import { CardList } from '../components';

export const MultiplyGamePage = () => {
  const [inputFactor, setInputFactor] = useState(1);
  const [submittedFactor, setSubmittedFactor] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFactor(Number(event.target.value));
  };

  const handleSubmit = () => {
    setSubmittedFactor(inputFactor);
  };

  return (
    <>
      <input type='number' value={inputFactor} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <CardList factor={submittedFactor} />
    </>
  );
};
