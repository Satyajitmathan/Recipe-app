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
      <div className="w-full flex gap-10 items-start">
        
        <div className="left flex-1">

          <div className="flex items-center justify-between mb-5">
            <h1 className="font-black text-4xl">
              {recipe.title}
            </h1>

            <button
              type="button"
              onClick={favHandler}
              className="text-3xl hover:scale-125 transition"
            >
              {recipe.isFav ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>

          <img
            className="w-full h-[350px] object-cover rounded-2xl"
            src={recipe.image}
            alt=""
          />

          <div className="mt-4">
            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
              {recipe.category}
            </span>
          </div>

          <p className="text-gray-400 mt-4 text-lg">
            👨‍🍳 Chef: {recipe.chef}
          </p>

          <div className="bg-gray-900 p-5 rounded-2xl mt-6">
            <h2 className="font-bold text-xl mb-3">
              Description
            </h2>

            <p>{recipe.description}</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-2xl mt-6">
            <h2 className="font-bold text-xl mb-3">
              Ingredients
            </h2>

            <p>{recipe.ingredients}</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-2xl mt-6">
            <h2 className="font-bold text-xl mb-3">
              Instructions
            </h2>

            <p>{recipe.instructions}</p>
          </div>

        </div>

        <form
          className="right w-[40%] bg-gray-900 border border-gray-700 rounded-2xl p-6 h-fit"
          onSubmit={handleSubmit(updateHandler)}
        >
          <h2 className="text-2xl font-bold mb-6">
            Edit Recipe ✏️
          </h2>

          <input
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
            {...register("image", {
              required: "Image URL is required"
            })}
            type="url"
            placeholder="Enter image url"
          />

          {errors.image && (
            <small className="text-red-500 block mb-2">
              {errors.image.message}
            </small>
          )}

          <input
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
            {...register("title", {
              required: "Title is required"
            })}
            type="text"
            placeholder="Recipe Title"
          />

          {errors.title && (
            <small className="text-red-500 block mb-2">
              {errors.title.message}
            </small>
          )}

          <input
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
            {...register("chef", {
              required: "Chef name is required"
            })}
            type="text"
            placeholder="Chef Name"
          />

          {errors.chef && (
            <small className="text-red-500 block mb-2">
              {errors.chef.message}
            </small>
          )}

          <textarea
            rows={4}
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none resize-none focus:border-blue-500"
            {...register("description", {
              required: "Description is required"
            })}
            placeholder="Recipe Description"
          />

          {errors.description && (
            <small className="text-red-500 block mb-2">
              {errors.description.message}
            </small>
          )}

          <textarea
            rows={4}
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none resize-none focus:border-blue-500"
            {...register("ingredients", {
              required: "Ingredients are required"
            })}
            placeholder="Write Ingredients separated by comma"
          />

          {errors.ingredients && (
            <small className="text-red-500 block mb-2">
              {errors.ingredients.message}
            </small>
          )}

          <textarea
            rows={5}
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none resize-none focus:border-blue-500"
            {...register("instructions", {
              required: "Instructions are required"
            })}
            placeholder="Write Instructions"
          />

          {errors.instructions && (
            <small className="text-red-500 block mb-2">
              {errors.instructions.message}
            </small>
          )}

          <select
            className="w-full p-3 mb-3 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all duration-200 py-3 rounded-xl font-medium"
            >
              Update
            </button>

            <button
              type="button"
              onClick={deleteHandler}
              className="flex-1 bg-red-600 hover:bg-red-700 transition-all duration-200 py-3 rounded-xl font-medium"
            >
              Delete
            </button>
          </div>
        </form>

      </div>
    ) : (
      <p className="px-2">Recipe not found.</p>
    )
  )
}

export default RecipeDetail