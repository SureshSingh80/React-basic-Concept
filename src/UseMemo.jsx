import React, { useEffect, useMemo } from 'react'
import { useState } from 'react';
const UseMemo = () => {

  const [count,setCount]=useState(0);
  const handleIncrement=()=>{
        setCount(count+1);
  }

  
  // It runs after rendering just component
  useEffect(()=>{
    console.log("useEffect");
  },[count]);

  // It runs before just before rendering component
  useMemo(()=>{
    console.log("useMemo");
  },[count])

//   useMemo(()=>{
//     console.log()
//   })
  return (
    <div>
        <p>Value is: {count}</p>   
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default UseMemo