import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const { data } = useContext(recipecontext);

  const favRecipes = data.filter(
    (recipe) => recipe.isFav
  );

  return (
    <div className="flex flex-wrap">
      {favRecipes.length > 0 ? (
        favRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))
      ) : (
        <h1>No Favorite Recipes Found ❤️</h1>
      )}
    </div>
  );
};

export default Fav;