import React, { useState } from 'react'
import "../index.css";
import Mealcards from './Mealcards';

const MainPage = () => {
    const[data,setData]=useState();
    const[search,setSearch]=useState("");
    const[msg,setMsg]=useState();

    const handleInput=(event)=>{
        setSearch(event.target.value);
    }

    const myfun= async()=>{
        if(search==""){
            setMsg("Please enter something")
        }
        else{
            const get= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData=await get.json();
            // console.log(jsonData.meals);
            setData(jsonData.meals);
            setMsg("");
        }
       
    }

    // console.log(data);
  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter Dishes'onChange={handleInput}/>
            <button onClick={myfun}>Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
        <div>
<Mealcards detail={data}/>
        </div>
      </div>
    </>
  )
}

export default MainPage
