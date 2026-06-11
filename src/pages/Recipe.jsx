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
  "supper"
  ];

  const filteredRecipes = data.filter((recipe) => {

  const matchesSearch =
    recipe.title
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
       <>
        <input
          type="text"
        placeholder="🔍 Search Recipe..."
        value={searchItem}
        onChange={(e) =>
          setSearchItem(e.target.value)
        }
        className="w-full mx-2 p-3 mb-5 rounded bg-gray-900 outline-none"
        />
        <div className="flex gap-3 mb-4 px-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${
              category === cat
                ? "bg-blue-600"
                : "bg-gray-900"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
          ))}
        </div>
            <p className="mb-4 px-2 text-gray-400">
        Recipes Found: {filteredRecipes.length}
      </p>

      <div className="flex flex-wrap">
        {filteredRecipes.length > 0 ? (
          renderRecipe
        ) : (
          <p className="text-4xl">
            No recipes found.
          </p>
        )}
      </div>
    </>
  );
};

export default Recipe;