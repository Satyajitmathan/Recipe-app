import { useContext, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);

  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    "breakfast",
    "lunch",
    "dinner",
    "supper",
  ];

  const filteredRecipes = data.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchItem.toLowerCase());

    const matchesCategory =
      category === "all" ||
      recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute right-0 top-60 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="relative mb-10">

        <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 mb-5">
          🍽️ Explore Recipes
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Discover Your
          <span className="text-cyan-400"> Favorite </span>
          Recipes
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl">
          Search, filter and manage your collection of
          delicious recipes in one place.
        </p>

      </div>

      {/* Search Bar */}
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-3xl p-5 mb-8">

        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={searchItem}
          onChange={(e) =>
            setSearchItem(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-2xl
            bg-gray-800
            border
            border-gray-700
            focus:border-cyan-500
            outline-none
            transition
          "
        />

      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`
              px-5
              py-2.5
              rounded-full
              font-medium
              transition-all
              duration-300
              ${
                category === cat
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 scale-105"
                  : "bg-gray-900 border border-gray-700 text-gray-300 hover:border-cyan-500"
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}

      </div>

      {/* Stats */}
      <div className="mb-10">

        <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-700 px-5 py-3 rounded-2xl">

          <span className="text-cyan-400 text-xl">
            📚
          </span>

          <span className="text-gray-300">
            {filteredRecipes.length} Recipes Found
          </span>

        </div>

      </div>

      {/* Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))
        ) : (
          <div className="col-span-full">

            <div className="bg-gray-900 border border-gray-700 rounded-3xl py-20 text-center">

              <h2 className="text-4xl font-black mb-4">
                😔 No Recipes Found
              </h2>

              <p className="text-gray-400 text-lg">
                Try a different search term or category.
              </p>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default Recipe;