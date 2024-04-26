import React from 'react';
import Axios from "axios";
import {useEffect, useState } from "react";


// fetch("https://catefact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
//   console.log(data)
// });

const Cat = () => {
  const [catFact , setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catefact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();

  }, []);
  return (
    <div>
         <button onClick={fetchCatFact}> Generate Cat Facts</button>
         <p> </p>
    </div>
  )
}

export default Cat