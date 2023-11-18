export const randomNumbers = async () => { 
    const numbers:Number[] = [];
    while (numbers.length < 10) {
      const randomNumber:Number = Math.floor(Math.random() * 10) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }