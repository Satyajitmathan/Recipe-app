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

  const renderRecipe = filteredRecipes.map((recipe) => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
    />
  ));

  return (
    <div className="w-full">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">
          Discover Recipes 🍽️
        </h1>
        <p className="text-gray-400 mt-2">
          Search, filter and explore your favorite recipes
        </p>
      </div>

      {/* Search */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={searchItem}
          onChange={(e) =>
            setSearchItem(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none transition"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 mb-5 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full transition-all duration-200 ${
              category === cat
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-900 hover:bg-gray-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Recipe Count */}
      <div className="mb-6">
        <span className="bg-gray-900 px-4 py-2 rounded-full text-gray-300">
          {filteredRecipes.length} Recipes Found
        </span>
      </div>

      {/* Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          renderRecipe
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-3xl font-bold mb-2">
              🍽️ No Recipes Found
            </h2>
            <p className="text-gray-400">
              Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;