import React, { useState, useEffect } from "react";
export function Example2() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);
  useEffect(() => {
    setCalc(calc + 2);
  }, [count]);
  return (
    <>
      <h2>{calc}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <h2>I have rendered {count} times </h2>
    </>
  );
}
