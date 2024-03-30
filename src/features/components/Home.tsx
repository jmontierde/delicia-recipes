import gsap from "gsap";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Recipe from "./Recipe";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import RecipeList from "../recipeSlice/RecipeList";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchRecipe } from "../recipeSlice/recipeSlice";
import chafing from "/src/assets/chafing-dish.png";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo("#header", { x: `-150%`, ease: "bounce.in" }, { x: 0 });
    tl.fromTo("#imageAnimate", { x: "150%", ease: "bounce.in" }, { x: 0 });
  }, []);

  const words = ` Craving delicious yet healthy food? Look no further! Our app makes
    it easy to find and cook recipes that tantalize your taste buds and
    fuel your body for optimal health.`;

  const dispatch = useAppDispatch();

  const { recipes, loading, error } = useAppSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipe("Chicken"));
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="h-screen flex flex-col-reverse lg:flex-row justify-center lg:px-16 lg:gap-3 items-center bg-darkGreen ">
        <div className="w-4/6 " id="header">
          <h1 className="text-2xl lg:text-8xl  font-bold text-customText">
            Delicious Food, <br className="lg:hidden" /> Healthy Food
          </h1>{" "}
          <TextGenerateEffect words={words} className="text-customText" />
        </div>
        <div className="w-full lg:w-3/6 ">
          <img
            src={chafing}
            alt="Salad"
            className="w-10/12 mx-auto"
            id="imageAnimate"
          />
        </div>
      </div>
      <Recipe />
      <RecipeList
        recipes={recipes}
        loading={loading}
        error={error}
        selectedRecipe={null}
      />
    </>
  );
};

export default Home;
