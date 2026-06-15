import { Link } from "react-router-dom";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Home = () => {
const { data } = useContext(recipecontext);

const favCount = data.filter(
(recipe) => recipe.isFav
).length;

return ( <div className="relative min-h-screen overflow-hidden">


  {/* Glow Effects */}
  <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/15 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/15 blur-[120px] rounded-full"></div>

  {/* Hero Section */}
  <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-12">

    {/* Left Content */}
    <div className="max-w-2xl z-10">

      <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-6">
        ✨ Smart Recipe Management Platform
      </div>

      <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
        Discover Amazing Recipes
      </h1>

      <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10">
        Create, organize, search and save your favorite recipes with a beautiful modern experience built for food lovers.
      </p>

      <div className="flex flex-wrap gap-4">

        <Link
          to="/recipe"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 px-7 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/30"
        >
          Browse Recipes
        </Link>

        <Link
          to="/create-recipe"
          className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500 px-7 py-4 rounded-xl font-medium transition-all duration-300"
        >
          Create Recipe
        </Link>

      </div>

    </div>

    {/* Hero Image */}
    <div className="relative">

      <img
        src={`${import.meta.env.BASE_URL}food.jpg`}
        alt="Food"
        className="
          w-full
          max-w-[580px]
          h-[400px]
          object-cover
          rounded-[32px]
          border
          border-white/10
          shadow-2xl
          hover:scale-105
          transition-all
          duration-500
        "
      />

      <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
        ⭐ {data.length} Recipes
      </div>

    </div>

  </div>

  {/* Stats Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 p-8 rounded-3xl text-center">

      <h2 className="text-5xl font-black text-cyan-300">
        {data.length}
      </h2>

      <p className="text-slate-400 mt-3">
        Total Recipes
      </p>

    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 p-8 rounded-3xl text-center">

      <h2 className="text-5xl font-black text-cyan-300">
        {favCount}
      </h2>

      <p className="text-slate-400 mt-3">
        Favorites
      </p>

    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 p-8 rounded-3xl text-center">

      <h2 className="text-5xl font-black text-cyan-300">
        4
      </h2>

      <p className="text-slate-400 mt-3">
        Categories
      </p>

    </div>

  </div>

  {/* Latest Recipes */}
  {data.length > 0 && (
    <div className="mt-28">

      <h2 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
        🔥 Latest Recipes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {data.slice(0, 3).map((recipe) => (
          <div
            key={recipe.id}
            className="
              group
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              hover:border-cyan-500
              hover:-translate-y-3
              transition-all
              duration-300
            "
          >

            <div className="overflow-hidden">

              <img
                src={recipe.image}
                alt={recipe.title}
                className="
                  w-full
                  h-60
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              />

            </div>

            <div className="p-6">

              <div className="flex items-center justify-between mb-3">

                <h3 className="text-2xl font-bold">
                  {recipe.title}
                </h3>

                <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  {recipe.category}
                </span>

              </div>

              <p className="text-cyan-300 font-medium">
                👨‍🍳 {recipe.chef}
              </p>

              <p className="text-slate-400 mt-4">
                {recipe.description.slice(0, 90)}...
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )}

</div>


);
};

export default Home;
