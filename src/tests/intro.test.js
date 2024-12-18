import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from '../intro';
//describe: for creating a test suite or group of related test
//we pass two arguments. The first argument is a string i.e name of our test suite. Typically we use the name of the function or unit under test. In this case max.
//Second argument will be the function that will be called by our test runner in this case vitest
//test or it : for creating a test case
// test and it is a matter of personal preference
describe('max', () => {
 //in this block or test suit we define one or more test cases
 //just like describe method here we need two arguments
 // the first argument is a string that represents our test name. 

    it('should return the first argument if it is greater', () => {
    //In this test case we use AAA pattern
    // Arrange:- In the arrange face, we setup our test environment including any neccessary data and configurations
    // Act:- In the act face, we perform the action we wanna take
    // Assert:- In the assert face, we check the outcome to ensure that it matches our expectations.
    //patter that lot of people follow while organizing test
    //Image the real example:- we wanna test that TV can be truned off.
    //Arrange: We wanna turn on the TV
    // Act: We wanna Press the power button.
    // Assert: Verify the TV is off.
    //we take this analozy and apply the test
    // Arrange
      expect(max(2, 1)).toBe(2);
    });
   
   it('should return the second argument if it is greater', () => {
      expect(max(1,2)).toBe(2);
   })

   it('should return the first argument if the arguments are equal', () => {
        expect(max(1,1)).toBe(1);
   })

})

describe('fizzBuzz', () => {
   it('should return FizBuzz string if number is divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
   });
   it('should return Fizz string if a number is divisible by 3', () => {
      expect(fizzBuzz(6)).toBe('Fizz');
   })
   it('should return Buzz if number is divisible by 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
   })
   it('should return the number as a string if it is not divisible by both 3 and 5', () => {
      expect(fizzBuzz(7)).toBe('7');
   })
})
