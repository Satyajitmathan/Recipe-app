const About = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto py-12">

        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
          🚀 About RecipeHub
        </div>

        <h1 className="text-6xl lg:text-7xl font-black mb-6 text-cyan-100">
          Your Personal Recipe Manager
        </h1>

        <p className="text-gray-300 text-xl leading-relaxed">
          RecipeHub is a modern recipe management application
          where users can create, organize, update and save
          their favorite recipes in one place.
        </p>

      </div>

      {/* Features */}
      <div className="mt-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          ✨ Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">🍽️</div>

            <h3 className="text-xl font-bold mb-3">
              Create Recipes
            </h3>

            <p className="text-gray-400">
              Add new recipes with images,
              ingredients and instructions.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">❤️</div>

            <h3 className="text-xl font-bold mb-3">
              Favorites
            </h3>

            <p className="text-gray-400">
              Save your favorite recipes and
              access them anytime.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">✏️</div>

            <h3 className="text-xl font-bold mb-3">
              Update Recipes
            </h3>

            <p className="text-gray-400">
              Edit recipe details whenever
              you want with ease.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">🗑️</div>

            <h3 className="text-xl font-bold mb-3">
              Delete Recipes
            </h3>

            <p className="text-gray-400">
              Remove recipes instantly and
              keep your collection organized.
            </p>
          </div>

        </div>

      </div>

      {/* Technologies */}
      <div className="mt-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          ⚙️ Built With
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          <span className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            React
          </span>

          <span className="px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
            React Router
          </span>

          <span className="px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
            Context API
          </span>

          <span className="px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
            Local Storage
          </span>

          <span className="px-6 py-3 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400">
            Tailwind CSS
          </span>

        </div>

      </div>

      {/* Developer Section */}
      <div className="mt-24">

        <div className="max-w-4xl mx-auto bg-gray-900/70 border border-gray-700 rounded-3xl p-10 text-center">

          <div className="text-6xl mb-4">
            👨‍💻
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Developed By
          </h2>

          <p className="text-xl text-blue-400 font-medium mb-4">
            Satyajit Mathan
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate MERN Stack Developer focused on
            building modern, responsive and user-friendly
            web applications.
          </p>

        </div>

      </div>
       {/* Footer */}
      <div className="mt-12 pb-8">

        <p className="text-center text-gray-500">
          © 2026 RecipeHub • Built using React & Tailwind CSS
        </p>

      </div>
      
    </div>
  );
};

export default About;