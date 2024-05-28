// 'use client'

import axios from "axios"

// import { useEffect, useState } from "react"

// import { Todo } from "../../Type";


const Data= async ()=>{
    try {
        
        let fetchdata=axios.get('https://dummyjson.com/products').then((res)=>{

        return res.data.products

        })

    } catch (error) {

        console.log(error);
        
    }
}

export default async function  App() {
   
    const todo= await Data();

//     let [todo,setodo]=useState([])
   

//     let [load,setloader]=useState(false);


//     let [reload,setreload]=useState(false);



//     useEffect(()=>{

//         Data();

//     },[reload])


//     const ReloadedData=(()=>{
    
//         setreload(true)
    
//     });




//     const Data =async()=>{
    
//         try {

//             setloader(true);
    
//             let fetchdata=await axios.get('https://dummyjson.com/products').then((res)=>{
            
//             setodo(res.data.products)

//             console.log(res.data.products);
            
//         })

//     }catch (error) {
    
//         console.log(error);
        
//     }

//     finally{
//         setloader(false)
//     }
   
// }
   
   return  <div>
   
   {/* <button onClick={ReloadedData}>Click me here </button> */}
     <br></br>
    {/* {!load ? '':'Loading...'} */}

    <ol>
{/* {
    todo.map((item:Todo)=>{
        return (
            <li>{item.description}</li>
        )
    })
} */}
 
 {/* <h1>Route</h1> */}
    </ol>

     </div>
}