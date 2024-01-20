"use client"

import axios from "axios";
import { useState } from "react";


function Serverdata() {
const [dataa , setdataa]=useState([])
    const fetchData = async ()=>{
        try{
            const response = await axios.get('http://localhost:3001/')
        const result = response.data;
        console.log(result);
        setdataa(result[0].toolName)
        console.log('btn cliked');
    }catch(e){
        console.error('error found'+e.message);
    }
        }

        // In your Next.js component's handleSubmit function
// import axios from 'axios';

const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/api', {
        name: 'tufail',
        password: 1234,
      });
  
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  

        
    return ( <>
    <button onClick={fetchData} onSubmit={handleSubmit}>get data</button>
    <h2>the data is {dataa}</h2>
    </> );
}

 
 


export default Serverdata;