import React, { useState,useEffect } from 'react'

export const Text = () => {
    const [text, setText]= useState(""); 
    
    useEffect(()=> {
      console.log("cpm");

      return () => {
        console.log("cpum")
      }
    }, [])

  return (
    
    <div>
        <input
        onChange={(event)=> {
            setText(event.target.value);
        }}
        />
        <h1>{text}</h1>
    </div>
  )
}

