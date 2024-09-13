import { useReducer } from "react"

const initialState={
    data:[],
    loading:false,
    error:null
}
function reducer(state,action){
    console.log(state,action);

    switch(action.type){
        case 'FETCH_DATA_START':
             return {...state,loading:true};
        case 'FETCH_DATA_SUCCESS':
             return {loading:false,error:null,data:action.payload};
        case 'FETCH_DATA_FAILURE':
             return {...state,loading:false,error:action.payload};
        case 'DELETE_DATA':
              return {
                 ...state,
                 data:state.data.filter((item)=>
                    item.id!==action.payload
                )
              };
        case 'Add_DATA':
            return {...state,data:[...state.data,action.payload]};

    }
}

export default function UseReducerComplex(){
    const [state,dispatch]=useReducer(reducer,initialState);


    let fetchData=async ()=>{
          dispatch({type:'FETCH_DATA_START'});

          try
          {
            const res=await fetch('https://jsonplaceholder.typicode.com/posts');
            const data=await res.json();
            dispatch({type:'FETCH_DATA_SUCCESS',payload:data});
          }
          catch(error){
            dispatch({type:'FETCH_DATA_FAILURE',payload:error.message});
          }
    }

    const deleteData=(id)=>{
            dispatch({type:'DELETE_DATA',payload:id});
    }   

   const addData=(newData)=>{
       dispatch({type:'ADD_DATA',payload:newData});
   }
      return(
        <div>
           <button onClick={fetchData}>Fetch Data</button>
           {state.loading && <p>Loadng...</p>}
           {state.error && <p>Error:{state.error}</p>}
            <ul>
               {
                state.data.map((item)=>(
                     <li key={item.id}>
                         {item.title}{' '}
                         <button onClick={()=>deleteData(item.id)}>Delete</button>
                     </li>
                ))
               }
            </ul>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addData({
                    id:Date.now(),
                    title:e.target.title.value,
                })
            }}>
                <input type="text" name="title" placeholder="Add new Item"/>
                <button type="submit">Add</button>
            </form>

        </div>
      )
}