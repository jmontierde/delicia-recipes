import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "./recipeSlice";
import { Spinner } from "@material-tailwind/react";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";

const RecipeDetails: React.FC = () => {
  const { selectedRecipe, loading } = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner height={100} width={100} />
      </div>
    );
  }

  if (!selectedRecipe) {
    return <div>Recipe not found.</div>;
  }

  const { label, image, cuisineType, ingredients, healthLabels } =
    selectedRecipe;

  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row p-6 md:p-12 bg-lightCream">
        <div className="w-full lg:w-1/2 h-auto">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full space-y-6 lg:w-1/2  md:px-12 ">
          <div className="py-3">
            <h1 className="text-2xl md:text-4xl font-bold">{label}</h1>
            {cuisineType.map((cuisine) => (
              <p key={cuisine}>{cuisine}</p>
            ))}
          </div>
          <div className="w-full flex flex-col items-start space-y-1">
            <h2 className="text-lg font-semibold">Ingredients</h2>
            {ingredients.map((ingredient, index) => (
              <ul key={index} className="px-4 list-disc">
                <li>{ingredient.text}</li>
              </ul>
            ))}
          </div>
          <div className="w-full flex flex-col items-start space-y-1">
            <h2 className="text-lg font-semibold">Health Labels</h2>
            {healthLabels.map((label, index) => (
              <ul key={index} className="px-4 list-disc">
                <li>{label}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
