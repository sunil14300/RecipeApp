import React, { useState, useEffect } from 'react';

const RelatedRecipes = ({ currentMealId, currentCategory, currentArea }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const categoryUrl = currentCategory ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}` : null;
        const areaUrl = currentArea ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=${currentArea}` : null;
        const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
        
        let url = categoryUrl || areaUrl || randomUrl;
        const response = await fetch(url);
        const data = await response.json();
        
        let meals = data.meals || [data.meals[0]];
        
        meals = meals.filter(meal => meal.idMeal !== currentMealId).slice(0, 6);
        
        setRelated(meals);
      } catch (error) {
        console.error('Related recipes error:', error);
        setRelated([]);
      } finally {
        setLoading(false);
      }
    };

    if (currentMealId) {
      fetchRelated();
    }
  }, [currentMealId, currentCategory, currentArea]);

  if (loading) return null;

return (
    <section className="related-section">
      <h3>🍲 Similar Recipes</h3>
      <div className="related-grid">
        {related.map((meal) => (
          <div key={meal.idMeal} className="related-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h4>{meal.strMeal}</h4>
            <a href={`/${meal.idMeal}`} className="related-link">View Recipe →</a>
          </div>
        ))}
      </div>
    </section>
);
};

export default RelatedRecipes;
