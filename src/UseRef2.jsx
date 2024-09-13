import React, { useEffect, useRef } from 'react'

const UseRef2 = () => {

    // working with DOM using useRef
    let inputEl=useRef(null);
    useEffect(()=>{
        inputEl.current.focus();
    })


    function handleBlur(){
         inputEl.current.style.backgroundColor='black'
    }

    function handleFocus(){
        inputEl.current.style.backgroundColor='';
    }

  return (
    <input ref={inputEl} type="text" onBlur={handleBlur} onFocus={handleFocus}/>
  )
}

export default UseRef2