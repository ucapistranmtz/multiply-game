// helpers.ts
export const generateRandomFactors = (factor1: number, numberOfFactors: number = 10) => {
  const factors: { factor1: number; factor2: number }[] = [];
  const usedFactor2Values: Set<number> = new Set();

  for (let i = 0; i < numberOfFactors; i++) {
    let factor2: number;
    
    // Ensure that factor2 is not repeated
    do {
      factor2 = Math.floor(Math.random() * 11); // Generates a random number between 0 and 10
    } while (usedFactor2Values.has(factor2));

    usedFactor2Values.add(factor2);
    factors.push({ factor1, factor2 });
  }

  return factors;
};
