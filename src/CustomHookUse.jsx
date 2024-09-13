import React from 'react'
import UseCustomHook from './UseCustomHook'
const CustomHookUse = () => {

   // access customHook like other (useState,useEffect,useReducer)
    let users=UseCustomHook();
    console.log(users);
  return (
      <div> 
        <h2>User List</h2>
        <ul>
         {
            users.map((user)=>{
               return <li key={user.id}>
                         <a href={user.avatar_url}>{user.login}</a>
                     </li>
            })
         }
         </ul>
      </div>
  )
}

export default CustomHookUse