import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeDetail = () => {
    const {data,setdata} = useContext(recipecontext);
    const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find(recipe => recipe.id == params.id);
    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
        defaultValues:{
            title: recipe?.title,
            image: recipe?.image,
            chef: recipe?.chef,
            description :recipe?.description,
            instructions:recipe?.instructions, 
            ingredients:recipe?.ingredients,
            category: recipe?.category

        }
    });

    const updateHandler = (recipe) => {
        const index = data.findIndex((recipe)=>recipe.id == params.id);
        const copydata = [...data];
        copydata[index] = {...copydata[index],...recipe};
        setdata(copydata);
        localStorage.setItem("recipes",JSON.stringify(copydata));
        toast.success("Recipe Updated!");
    }

    const favHandler = () => {
        const copydata = [...data];

        const index = copydata.findIndex(
            (r) => r.id == params.id
        );

        copydata[index].isFav = !copydata[index].isFav;

        setdata(copydata);
        localStorage.setItem(
            "recipes",
            JSON.stringify(copydata)
        );
        };

    const deleteHandler = () =>{
        const filterdata = data.filter((r) => r.id != params.id);
        setdata(filterdata);
        localStorage.setItem("recipes",JSON.stringify(filterdata));
        toast.success("Recipe Deleted!");
        navigate("/recipe"); 
    }
    
  return (
    recipe ? (
      <div className="w-full flex gap-10">
        <div className="left w-1/2 p-2 ">
           <div className="flex items-center justify-between px-2 pb-3 mt-2">
                <h1 className="font-black text-2xl">
                    {recipe.title}
                </h1>
                <button
                    type="button"
                    onClick={favHandler}
                    className="text-3xl"
                >
                    {recipe.isFav ? (
                    <FaHeart className="text-red-500" />
                    ) : (
                    <FaRegHeart />
                    )}
                </button>
            </div>
            <img className="object-cover px-2 pb-3 h-60 w-60" src={recipe.image} alt="" />
            <p className="px-2 pb-3 text-xl">
                <span className="font-medium text-red-400">Chef: </span>
                {recipe.chef}
            </p>
            <p className="px-2 pb-3 text-xl">
                {recipe.description}
            </p>
            <p className="px-2 text-xl"><span className="font-medium text-red-400">Ingredients: </span> 
                {recipe.ingredients}
            </p>
            <p className="px-2 text-xl"><span className="font-medium text-red-400">Instructions: </span>
                {recipe.instructions}
            </p>
        </div>
        <form className="right w-1/3 p-2 text-lg"
            onSubmit={handleSubmit(updateHandler)} >
            <input
            className='w-full block p-2 border-b outline-0'
            {...register("image", {
              required: "Image URL is required"
            })}
            type="url"
            placeholder='Enter image url'
          />

          {errors.image && (
            <small className='text-red-500'>
              {errors.image.message}
            </small>
          )}
            <input 
            className='w-full block p-2 border-b outline-0'
            {...register("title", {
              required: "Title is required"
            })}
            type="text" 
            placeholder='Recipe Title' 
            />
            {errors.title && (
            <small className='text-red-500'>
              {errors.title.message}
            </small>
          )}
            <input 
            className='w-full block p-2 border-b outline-0'
            {...register("chef", {
              required: "Chef name is required"
            })}
            type="text" 
            placeholder='Chef Name' 
            />
            {errors.chef && (
            <small className='text-red-500'>
              {errors.chef.message}
            </small>
          )}
            <textarea
            className='w-full block p-2 border-b outline-0'
            {...register("description", {
              required: "Description is required"
            })} 
            placeholder='Recipe Description' 
            ></textarea>
            {errors.description && (
            <small className='text-red-500'>
              {errors.description.message}
            </small>
          )}

            <textarea
            className='w-full block p-2 border-b outline-0'
            {...register("ingredients", {
              required: "Ingredients are required"
            })} 
            placeholder='Write Ingredients separated by comma' 
            ></textarea>
            {errors.ingredients && (
            <small className='text-red-500'>
              {errors.ingredients.message}
            </small>
          )}

            <textarea
            className='w-full block p-2 border-b outline-0'
            {...register("instructions", {
              required: "Instructions are required"
            })} 
            placeholder='Write Instructions' 
            ></textarea>
            {errors.instructions && (
            <small className='text-red-500'>
              {errors.instructions.message}
            </small>
          )}
          
            <select
            className='w-full block p-2 border-b outline-0 '
            {...register("category")} 
            >
                <option className='text-black' value="breakfast">Breakfast</option>
                <option className='text-black'
                value="lunch">Lunch</option>
                <option className='text-black'
                value="supper">Supper</option>
                <option className='text-black' 
                value="dinner">Dinner</option>
            </select>
            <button 
                type="submit"
                className='block bg-blue-900 px-4 py-2 rounded mt-4'>
                Update Recipe
            </button>
            <button
                type="button"
                onClick={deleteHandler}
                className='block bg-red-900 px-4 py-2 rounded mt-4'>
                Delete Recipe
            </button>
        </form>
      </div>
    ) : (
      <p className="px-2">Recipe not found.</p>
    )
  )
}

export default RecipeDetail