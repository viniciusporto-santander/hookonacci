import { useEffect, useRef, useState } from "react";

export function useFibonacci(displayNumber: number) {
  const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);

  // whats the best type to use here?
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      calculateFibonacci();
    }, 5000);

    function calculateFibonacci() {
      const sequence: number[] = [];

      for (let i = 0; i <= displayNumber; i++) {
        if (i === 0 || i === 1) {
          sequence.push(i);
        } else {
          sequence.push(sequence[i - 1] + sequence[i - 2]);
        }

        setFibonacciSequence(sequence);
      }
      console.log("Calculated sequence");
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [displayNumber]);

  return fibonacciSequence;
}
