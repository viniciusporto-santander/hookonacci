import { useEffect, useState } from "react";

export function useFibonacci(displayNumber: number) {
  const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);

  useEffect(() => {
    console.log("Inside fib hook");
    const sequence: number[] = [];
    for (let i = 0; i <= displayNumber; i++) {
      if (i === 0 || i === 1) {
        sequence.push(i);
      } else {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }
    setFibonacciSequence(sequence);
  }, [displayNumber]);

  return fibonacciSequence;
}
