import React, { useState } from 'react';
export function Example() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("mango");
  const [age, setAge] = useState({age:21});
  const [name, setName] = useState("dhruvi");
  const handleage = () => {
     setAge((obj)=>{ return {...obj,age:10}});
  }
 
  return (
    <>
       
      <h3> current age is {age.age} </h3>
      <button
        onClick={handleage}
      >
        click here to change age
      </button>
      <h3>hello {name}</h3>
      <input
        type="text"
        placeholder="enter name here"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>fruit value is {fruit}</h3>
      <h3>tap the button to change the fruit</h3>
      <button
        onClick={() => {
          setFruit("banana");
        }}
      >
        click me
      </button>
      <h3>you clicked {count} times</h3>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </>
  );
}
