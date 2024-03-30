import React from "react";
import { Recipe } from "./recipeSlice";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index }) => {
  const uri = recipe.uri.split("#")[1];

  return (
    <Link to={`recipe/${uri}`}>
      <div key={index} className="w-full">
        {/* <img
          src={recipe.image}
          className="h-72 lg:h-96 lg:w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={recipe.label}
        /> */}
        <img
          src={recipe.image}
          className="h-72 lg:h-96 w-96  object-cover rounded-xl group-hover/card:shadow-xl"
          alt={recipe.label}
        />
        <p className="text-darkGreen text-center text-bold pt-3">
          {recipe.label}
        </p>
        <p className="text-darkGreen text-center ">{recipe.cuisineType}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
