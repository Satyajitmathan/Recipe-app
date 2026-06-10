import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipe from "../pages/Recipe"
import Create from "../pages/Create"
import RecipeDetail from "../pages/RecipeDetail"
import Fav from "../pages/Fav"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/recipe/details/:id" element={<RecipeDetail />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="*" element={<h1 className="text-8xl  text-center text-red-500 mt-20">404 Not Found</h1>} />
    </Routes>
  )
}

export default MainRoutes