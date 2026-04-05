import React, { useState } from 'react'
<<<<<<< HEAD
import Mealcards from './Mealcards';

const MainPage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");
    const [searchType, setSearchType] = useState("name");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
        setSearch("");
        setSelectedCategory("");
    };

    const myfun = async () => {
        let query = "";
        if (searchType === "name") {
            if (search === "") {
                setMsg("Please enter a dish name");
                return;
            }
            query = search;
        } else {
            if (selectedCategory === "") {
                setMsg("Please select a category");
                return;
            }
            query = selectedCategory;
        }

        let url = searchType === "name" 
            ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;

        try {
            const get = await fetch(url);
            const jsonData = await get.json();
            setData(jsonData.meals);
            setMsg(jsonData.meals ? "" : `No results found for "${query}". Try another search or category.`);
        } catch (error) {
            setMsg("Error fetching data. Please try again.");
        }
    };

    // The return statement must be inside the MainPage function
    return (
        <div className='container'>
            <h1 className='head'>🍽️ Food Recipe Explorer</h1>
            
            <div className='searchBar'> 
                <div className="search-group">
                    <label>Search by: </label>
                    <select value={searchType} onChange={handleSearchTypeChange}>
                        <option value="name">🥘 Dish Name</option>
                        <option value="category">📂 Category</option>
                    </select>
                </div>

                {searchType === "name" ? (
                    <input 
                        type='text' 
                        placeholder='e.g., Chicken Curry' 
                        value={search}
                        onChange={handleInput}
                    />
                ) : (
                    <select value={selectedCategory} onChange={handleCategoryChange} className="cat-select">
                        <option value="">Select Category</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Beef">Beef</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Side Dish">Side Dish</option>
                        <option value="Starter">Starter</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Pork">Pork</option>
                        <option value="Goat">Goat</option>
                    </select>
                )}
                
                <button onClick={myfun} className="search-btn">🔍 Search</button>
            </div>

            {msg && <h4 className={`msg ${msg.includes('Error') ? 'error-msg' : ''}`}>{msg}</h4>}
            <Mealcards detail={data}/>
        </div>
    );
}

export default MainPage;
=======
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
>>>>>>> 3081a2c9f3b00b196233c1be1a6d7d7ea03d3b8c
