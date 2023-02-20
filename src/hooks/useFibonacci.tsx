import { useEffect, useMemo } from "react";

export function useFibonacci(displayNumber: number) {
  // should be a state
  let fibonacciSequence: number[] = useMemo(() => [], []);

  useEffect(() => {
    console.log("Inside useFib hook");
    // should be a ma
    for (let i = 0; i <= displayNumber; i++) {
      if (i === 0 || i === 1) {
        fibonacciSequence.push(i);
      } else {
        fibonacciSequence.push(
          fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
        );
      }
    }
  }, [displayNumber, fibonacciSequence]);

  console.log(fibonacciSequence);
  return fibonacciSequence;
}
