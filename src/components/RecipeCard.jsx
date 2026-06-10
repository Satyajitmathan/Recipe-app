import {Link} from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const RecipeCard = (props) => {
  const {id,image,title,chef,description,ingredients,instructions,category,isFav} = props.recipe
  return (  
    <Link
        to={`/recipe/details/${id}`}
        className="duration-150 hover:scale-103 mr-3 mb-3 block w-[23vw] rounded overflow-hidden">
        <img className="px-2 object-cover w-full h-[35vh]" src={image} alt="" /> 
        <div className="flex justify-between items-center px-2 mt-2">
            <h1 className="font-black text-xl">
                {title}
            </h1>
            {isFav && (
                <FaHeart className="text-red-500" />
            )}
        </div> 
        <small className="px-2 text-red-400 text-xl">{chef}</small>
        <p className="px-2 pb-3">{description.slice(0,100)}... 
            <small className="text-blue-400">more</small> 
        </p>
     </Link>   
  )
}

export default RecipeCard