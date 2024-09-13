import { useEffect, useState } from "react"

export default function MultipleReturn(){
    let [user,setUser]=useState([]);
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(null);

    useEffect(()=>{
        async function fetchData(){
            try
            {
                const res=await fetch("https://api.github.com/users");
                const data=await res.json();
                setUser(data);
                setLoading(false);
            }
            catch(error){
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    });

    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <p>Error: {error.message}</p>
    }
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