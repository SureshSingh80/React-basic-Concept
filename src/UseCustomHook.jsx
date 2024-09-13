import React from 'react'
import { useState,useEffect } from 'react'

// making a custom hook for reuse in other component like another hooks (useState,useEffect,useReducer)
const UseCustomHook = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
         async function fetchData(){
        //    fetch("https://api.github.com/users").then(res=>res.json()).then(data=>setUser(data));
                      //OR (other way to call API)
           let res= await fetch("https://api.github.com/users");
           let data=await res.json();

           setUser(data);

             
        }
        fetchData();
    },[])

     return user;
}

export default UseCustomHook