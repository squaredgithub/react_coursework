import React from 'react';
import Axios from "axios";
import {useEffect, useState } from "react";

const  Excuse  = () => {

  const [generatedExcuse, setgeneratedExcuse] = useState("");
  const fetchExcuse  = (excuse) => {
    Axios.get(`https:excuser.herokuapp.co/v1/excuse/${excuse}/`).then(
      (res) => {
        setgeneratedExcuse(res.data[0].excuse)
      })
  }
  return (
    <div> 
        <h1>Generate an Excuse </h1>
        <button onClick={() => fetchExcuse("party")}> Party </button>
        <button onClick={() => fetchExcuse("family")}> Family </button>
        <button onClick={() => fetchExcuse("office")}> Office </button>

        <p> {generatedExcuse} </p>

    </div>
  )
}

export default Excuse