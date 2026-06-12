import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const { data } = useContext(recipecontext);

  const favRecipes = data.filter(
    (recipe) => recipe.isFav
  );

  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {favRecipes.length > 0 ? (
      favRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))
    ) : (
      <div className="col-span-full text-center py-16">
        <h1 className="text-3xl font-bold">
          ❤️ No Favorite Recipes
        </h1>
        <p className="text-gray-400 mt-2">
          Add recipes to favorites to see them here.
        </p>
      </div>
    )}
  </div>
  );
};

export default Fav;