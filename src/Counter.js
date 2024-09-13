import { useEffect, useState } from 'react'
import './Counter.css'
export default function Counter()
{
    let [count,setCount]=useState(0);
    let increment=()=>{
         setCount(count+1);
    }
    // useEffect(()=>{
    //      console.log("we are in useState");
    //      return (
    //         ()=>{
    //             console.log("cleanUp  successfully");
    //         }
    //      )
         
         
    // })
      return(
          <div className="container">
              <h1>{count}</h1>
              <button onClick={increment}>+</button>
          </div>
      )
}