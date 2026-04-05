import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
  if (!detail || detail.length === 0) {
    return (
      <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem' }}>
        <h3 style={{ color: '#667eea', fontSize: '2rem', marginBottom: '1rem' }}>🥗 No recipes found</h3>
        <p style={{ color: '#fff', fontSize: '1.1rem' }}>
          Try searching for popular dishes like "chicken curry", "pizza", or select a category!
        </p>
      </div>
    );
  }

  return (
    <div className='meals'>
      {detail.map((currItem, index) => (
        <div 
          key={currItem.idMeal} 
          className='mealImg' 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="meal-image-container">
            <img 
              src={currItem.strMealThumb || 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=🍲'} 
              alt={currItem.strMeal || 'Delicious meal'}
              loading="lazy"
            />
            <div className="meal-overlay">
              <span style={{ color: 'white', fontWeight: '600' }}>👀 View Recipe</span>
            </div>
          </div>

          <div className="meal-content">
            <h3>{currItem.strMeal || 'Delicious Dish'}</h3>
            <NavLink to={`/${currItem.idMeal}`} className="recipe-btn">
              🍳 Get Recipe
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mealcards;
