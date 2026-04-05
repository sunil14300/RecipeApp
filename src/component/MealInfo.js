<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedRecipes from './RelatedRecipes';

const MealInfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            if (!mealid) return;
            try {
                setLoading(true);
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
                const jsonData = await response.json();
                if (!jsonData.meals) throw new Error("Meal not found");
                setInfo(jsonData.meals[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getInfo();
    }, [mealid]);

    const shareUrl = window.location.href;

    if (loading) return <div className="loading">🔥 Loading delicious recipe...</div>;
    if (error || !info) return <div className="error">❌ {error || "Recipe not found"}</div>;

    return (
        <div className="meal-info-container">
            <div className="premium-meal-page">
                {/* 1. Hero Header with background image and glassmorphism overlay */}
                <div className="hero-header" style={{ backgroundImage: `url(${info.strMealThumb})` }}>
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1>{info.strMeal}</h1>
                            <div className="hero-meta">
                                <span className="badge">🌍 {info.strArea}</span>
                                <span className="badge">🍳 {info.strCategory}</span>
                            </div>
                            <div className="hero-actions">
                                <button className="share-btn" onClick={() => navigator.clipboard.writeText(shareUrl)}>📱 Copy Link</button>
                                <button className="print-btn" onClick={() => window.print()}>🖨️ Print Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recipe-sections">
                    {/* 2. Ingredients Card - Professional Grid Layout */}
                    <section className="recipe-section">
                        <h2>🥘 Ingredients</h2>
                        <ul className="ingredients-grid">
                            {Array.from({ length: 20 }, (_, i) => {
                                const ingredient = info[`strIngredient${i + 1}`];
                                const measure = info[`strMeasure${i + 1}`];
                                return ingredient && ingredient.trim() ? (
                                    <li key={i}><strong>{measure}</strong> {ingredient}</li>
                                ) : null;
                            })}
                        </ul>
                    </section>

                    {/* 3. Instructions Card - Clean Step-by-Step UI */}
                    <section className="recipe-section">
                        <h2>📋 Step-by-Step Instructions</h2>
                        <div className="instructions-content">
                            {info.strInstructions.split(/\r?\n/).filter(s => s.trim()).map((step, index) => (
                                <div key={index} className="instruction-step">
                                    <span className="step-number">{index + 1}</span>
                                    <p>{step.replace(/^\d+\.?\s*/, '').trim()}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Video Card */}
                    {info.strYoutube && (
                        <section className="recipe-section">
                            <h2>🎥 Video Tutorial</h2>
                            <div className="video-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/${info.strYoutube.split('v=')[1]}`}
                                    title="Recipe Video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>
                    )}

                    {/* 5. Related Recipes */}
                    <RelatedRecipes 
                        currentMealId={mealid} 
                        currentCategory={info.strCategory} 
                        currentArea={info.strArea} 
                    />
                </div>
            </div>
        </div>
    );
};

export default MealInfo;
=======
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setInfo] = useState()
    console.log(mealid);

    const getInfo = async () =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if(info != ""){
        getInfo()
    }
  return (
     <div>
        { !info ? "Data Not Found" : 
        <div className='mealInfo'> 
     <img src={info.strMealThumb}/>
     <div className='info'>
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Intruction's</h3>
        <p>{info.strInstructions}</p>
     </div>
    </div>
    }
     </div>
     
  )
}

export default Mealinfo
>>>>>>> 3081a2c9f3b00b196233c1be1a6d7d7ea03d3b8c
