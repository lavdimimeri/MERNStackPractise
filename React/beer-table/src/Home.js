import React from "react";
import { useState } from 'react'
const Home = () => {
const [name, setName]=useState('Mario');
const [age, setAge]=useState('25');

const handleClick = () => {
  setName('Lavdim');
  setAge(27);
}
const handleClickAgain=(name) => {
  console.log(name);
}



    return (
       <div className="home">
         <h2>Home page</h2>
         <p>{name} is {age} old </p>
         <button onClick={handleClick}>Click Me!</button>
         <button onClick={() => handleClickAgain(name)}>Click me again</button>
       </div>

      );
}
 
export default Home;
       
