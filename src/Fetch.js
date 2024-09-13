import { useEffect, useState } from "react"

export default function Fetch(){
    const [user,setUser]=useState([])
    useEffect(()=>{
         async function fetchData(){
        //    fetch("https://api.github.com/users").then(res=>res.json()).then(data=>setUser(data));
                      //OR (other way to call API)
           let res= await fetch("https://api.github.com/users");
           let data=await res.json();
           console.log(data);
           setUser(data);

             
        }
        fetchData();
    },[])

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {
                    user.map((userData)=>{
                        return <li key={userData.id}>
                                    <a href={userData.html_url}>{userData.login}</a>
                               </li>
                    })
                }
            </ul>
        </div>
    )
}