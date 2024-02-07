import React, { useState } from 'react'

const States = () => {

  const [count, setCount] = useState(0);
  
  const increase = () =>{
    setCount(count +1 );

  }

const decrease = () =>{
  setCount(count-1);

}
const setToZero = () =>{
  setCount(0);

}


  const [textColor, setTextColor] = useState("yellow");

  const [showText, setShowText] = useState(true);

  const [ipValue, setipValue] = useState("");

  const handleIpChange = (event) => {
    setipValue(event.target.value);
  };
    const [age, setAge] = useState(2);

    const increaseAge = () =>{
        setAge(age+1);

    }
  return (
    <div className='States'>
      <div>
      <button onClick={increase} >Increase</button>
      <button onClick={decrease} >Decrease</button>
      <button onClick={setToZero} >Set To Zero</button>
      </div>

     
        {age}
        <button onClick={increaseAge}>increaseAge</button>
    </div>
  )
}

export default States