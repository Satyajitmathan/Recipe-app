import { NavLink } from "react-router-dom";

const Navbar = () => {
const navLinks = [
{ name: "Home", path: "/" },
{ name: "Recipes", path: "/recipe" },
{ name: "Favorites ❤️", path: "/fav" },
{ name: "About", path: "/about" },
];

return ( <nav
   className="
     sticky
     top-4
     z-50
     mb-10
     px-6
     py-4
     rounded-3xl
     border
     border-white/10
     bg-white/5
     backdrop-blur-xl
     shadow-xl
     shadow-black/20
   "
 > 
 <div className="flex items-center justify-between">

    {/* Logo */}
    <div>
      <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
        🍽️ RecipeHub
      </h1>

      <p className="text-xs text-slate-400">
        Smart Recipe Management
      </p>
    </div>

    {/* Navigation Links */}
    <div className="flex items-center gap-3">

      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `
              px-4
              py-2
              rounded-xl
              transition-all
              duration-300
              ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
            `
          }
        >
          {link.name}
        </NavLink>
      ))}

      {/* Create Recipe Button */}
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          `
            ml-3
            px-5
            py-3
            rounded-xl
            font-medium
            transition-all
            duration-300
            shadow-lg
            ${
              isActive
                ? "bg-cyan-500 text-slate-950"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105"
            }
          `
        }
      >
        + Create Recipe
      </NavLink>

    </div>
 </div>
</nav>


);
};

export default Navbar;
