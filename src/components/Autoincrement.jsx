"use client"
import React, { useState, useEffect } from 'react';

function Autoincrement({limit, time, customClass}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const incrementarCounter = () => {
      setCounter((prevCounter) => {
        if (prevCounter >= limit) {
          clearInterval(intervalo);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    };

    const intervalo = setInterval(incrementarCounter, time);
    return () => clearInterval(intervalo);
  }, []); 

  return (
      <span className={customClass}>{counter}</span>
  );
};

export default Autoincrement;