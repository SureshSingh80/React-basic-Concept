import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
 let [data,setData]=useState("");
//  let countRender=useRef(0);
let [countRender,setCountRender]=useState(-1);

  const handleChange=(e)=>{
      setData(e.target.value);
  }
  useEffect(()=>{
      setCountRender(countRender+1);
  },[data])
  return (
    <div>
      <input type="text" onChange={handleChange} value={data}/>
      <p>Render occurs times of {countRender}</p>
    </div>
  )
}

export default UseRef