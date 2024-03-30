import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Recipe {
  label: string;
  image: string;
  uri: string;
  index: string;
  ingredients: { text: string }[];
  mealType: [];
  healthLabels: [];
  dishType: [];
  cuisineType: [];
  // Add other properties as needed
}

export interface RecipeState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  selectedRecipe: Recipe | null;
}

interface EdamamResponse {
  hits: {
    recipe: Recipe;
  }[];
}

const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: null,
  selectedRecipe: null,
};

const API_ID = "b46ca1cd";
const API_KEY = "9b3d1f744bc2f3be081354ba00ebf9a5";

export const fetchRecipe = createAsyncThunk<Recipe[], string | undefined>(
  "recipes/fetchRecipeList",
  async (recipeQuery) => {
    const response = await axios.get<EdamamResponse>(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeQuery}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    return response.data.hits.map((hit) => hit.recipe);
  }
);

export const fetchRecipeById = createAsyncThunk<Recipe, string | null>(
  "recipes/fetchRecipeById",
  async (recipeId) => {
    const response = await axios.get<EdamamResponse>(
      `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${recipeId}&app_id=${API_ID}&app_key=${API_KEY} `
    );

    return response.data.hits[0].recipe; // Assuming only one recipe is fetched
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;

        console.log("Payload", (state.recipes = action.payload));
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        console.log("BY ID STATE", state.loading);
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.selectedRecipe = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default recipeSlice.reducer;
