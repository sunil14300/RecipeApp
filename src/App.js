import React from 'react'
import MainPage from './component/MainPage';
import {Routes,Route } from 'react-router-dom';
import MealInfo from './component/MealInfo';
import './App.css'; // Add this line to enable your styles

const App = () => {
  return (
    <>
      <Routes>
        <Route  path='/' element={<MainPage/>} />
        <Route path='/:mealid' element={<MealInfo/>}/>
      </Routes>
    </>
  )
}

export default App