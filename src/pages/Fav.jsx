import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const { data } = useContext(recipecontext);

  const favRecipes = data.filter(
    (recipe) => recipe.isFav
  );

  return (
    <div className="relative min-h-screen">

      {/* Glow Effects */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute right-0 top-40 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="relative mb-10">

        <div className="inline-flex px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 mb-5">
          ❤️ Favorite Collection
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-4 text-cyan-100">
          Your Favorite
          <span className="text-cyan-400"> Recipes</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl">
          All your saved recipes are collected here
          for quick access anytime.
        </p>

      </div>

      {/* Stats */}
      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-700 px-5 py-3 rounded-2xl">

          <span className="text-red-400 text-xl">
            ❤️
          </span>

          <span className="text-gray-300">
            {favRecipes.length} Favorite Recipes
          </span>

        </div>

      </div>

      {/* Recipes */}
      {favRecipes.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {favRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}

        </div>

      ) : (

        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-3xl py-24 text-center">

          <div className="text-7xl mb-5">
            💔
          </div>

          <h1 className="text-4xl font-black mb-4">
            No Favorite Recipes Yet
          </h1>

          <p className="text-gray-400 text-lg">
            Click the heart icon on any recipe and
            it will appear here.
          </p>

        </div>

      )}

    </div>
  );
};

export default Fav;