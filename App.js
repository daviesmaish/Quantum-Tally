import React from "react";
import Image from './img/Eng.jpg';
import { useState } from "react";
import './App.css';
function App() {
  const [ counter,setCounter]=useState(0);
  return (
    <di>
      <h3> COUNTER</h3>
      <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
      <p>Nestled within the heart of a captivating React project, the counter stands as a shining example of 
        technical brilliance. With each click and update, it leaves users in awe of its dynamic nature and 
        responsiveness. Its ability to flawlessly keep track of numbers and instantly reflect changes draws
         gasps of amazement from those who interact with it. The counter's intuitive design and smooth animations
          create an engaging user experience, making it a joy to use and explore. Within the React project's realm,
           the counter shines brightly as a testament to the power of technology, 
        leaving a lasting impression on all who encounter its ingenuity.</p>
      <h3> #DAVIES</h3>
      <h4>FOUNDER,, DAVIES</h4>
      <h5></h5>
      <p1>Embracing the world of web development with React!</p1>
      <p2>#ReactLove #WebDevWonderland#CodingPassion #Engineering</p2>           
    </di>
  );
  } 
export default App;