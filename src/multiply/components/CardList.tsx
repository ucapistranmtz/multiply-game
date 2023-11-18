import { Card } from './Card'
import { useMemo } from 'react';
import  { Container,Row,Col} from 'react-bootstrap'
import { randomNumbers} from '../../helpers'
//a function returning an array  of 10 random non repeated numbers between 1 and 10 

export const CardList = ( props: { factor:Number}) => {
    
 
    const factorMap = new Map<Number, Number>()

    const numbers:Number[] = [];
    while (numbers.length < 10) {
      const randomNumber:Number = Math.floor(Math.random() * 10) + 1;
      if (!numbers.includes(randomNumber)) {
        factorMap.set(randomNumber,props.factor) 
        numbers.push(randomNumber);
      }
    } 
    console.log(factorMap)

  return (
    <>
     <Container>

        
          {[...factorMap.entries()].map(([key,value]) => (
            
            <Card firstFactor={value} secondFactor={key} key={`${key}-${value}`}/>
            
          ))}
        
     </Container>
  
   
 
  
    </>
  )
}
