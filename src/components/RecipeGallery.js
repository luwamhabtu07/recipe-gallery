import React from 'react';
import './RecipeGallery.css'; // For styling (optional)

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Chicken Alfredo",
    ingredients: ["Chicken", "Pasta", "Cream", "Parmesan"],
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Tacos",
    ingredients: ["Tortilla", "Beef", "Lettuce", "Tomato"],
    image: "https://via.placeholder.com/150"
  }
];

function RecipeGallery() {
  return (
    <div className="gallery">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
