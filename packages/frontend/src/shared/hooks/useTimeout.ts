import { useEffect, useState } from 'react';

const useTimeout = (miliseconds : number) => {
  const [ number , setNumber ] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setNumber(n => ++n);
    }, miliseconds);

    return () => clearInterval(interval);
  },[]);

  return number;
}

export default useTimeout;