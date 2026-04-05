import React from 'react'
import MainPage from './component/MainPage';
import {Routes,Route } from 'react-router-dom';
import MealInfo from './component/MealInfo';
<<<<<<< HEAD
import './App.css'; // Add this line to enable your styles
=======
>>>>>>> 3081a2c9f3b00b196233c1be1a6d7d7ea03d3b8c

const App = () => {
  return (
    <>
<<<<<<< HEAD
=======
   
     
>>>>>>> 3081a2c9f3b00b196233c1be1a6d7d7ea03d3b8c
      <Routes>
        <Route  path='/' element={<MainPage/>} />
        <Route path='/:mealid' element={<MealInfo/>}/>
      </Routes>
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 3081a2c9f3b00b196233c1be1a6d7d7ea03d3b8c
