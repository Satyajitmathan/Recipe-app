import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipe" },
    { name: "Favorites ❤️", path: "/fav" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="flex items-center justify-between mb-10 py-4 border-b border-gray-700">

      {/* Logo */}
      <h1 className="text-2xl font-bold">
        🍽️ RecipeHub
      </h1>

      {/* Links */}
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `transition duration-200 hover:text-blue-400 ${
                isActive
                  ? "text-blue-400 font-medium"
                  : "text-gray-300"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* CTA Button */}
        <NavLink
          to="/create-recipe"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition duration-200 ${
              isActive
                ? "bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`
          }
        >
          + Create Recipe
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;