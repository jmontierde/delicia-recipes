import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { useAppDispatch } from "@/store";
import { fetchRecipe } from "../recipeSlice/recipeSlice";
import searchIcon from "/src/assets/search-icon.png";

const Search = () => {
  const [searchRecipeInput, setSearchRecipeInput] = useState("");
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecipeInput(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(fetchRecipe(searchRecipeInput));
  };

  return (
    <div>
      <div className="flex space-x-3 ">
        <Input
          placeholder="Search"
          className="text-black border"
          onChange={handleInputChange}
          value={searchRecipeInput}
          height={150}
          color="black"
          crossOrigin={undefined}
        />
        <img
          src={searchIcon}
          alt="search-icon"
          className="w-8 cursor-pointer"
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
};

export default Search;
