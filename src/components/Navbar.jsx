import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center text-md gap-10 mb-10">
        
        <NavLink className={(e)=>e.isActive ?"text-blue-300":""} to="/">Home</NavLink>

        <NavLink className={(e)=>e.isActive ?"text-blue-300":""} to="/recipe">Recipes</NavLink>

        <NavLink className={(e)=>e.isActive ?"text-blue-300":""} to="/about">About</NavLink>    

        <NavLink className={(e)=> `px-4 py-2 rounded-md  bg-gray-900 ${ e.isActive ? "text-blue-300 " : ""}`}
        to="/create-recipe">Create Recipe</NavLink>
        
        <NavLink className={(e)=>e.isActive ?"text-blue-300":""} to="/fav">Favorites❤️</NavLink>


        

    </div>
  )
}

export default Navbar