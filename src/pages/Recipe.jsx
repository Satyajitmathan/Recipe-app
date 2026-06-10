import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import RecipeCard from "../components/RecipeCard"
const Recipe = () => {

  const {data} = useContext(recipecontext)

  const renderRecipe = data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))

  return (
    <div className="flex flex-wrap">
      {data.length>0 ? renderRecipe : <p className="text-4xl">No recipes found .</p>}
    </div>
  )
}

export default Recipe