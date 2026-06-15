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
    recipe ? ( <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10">


     {/* LEFT SIDE */}
      <div>

        <div className="flex items-center justify-between mb-5">

          <h1 className="text-4xl font-black text-white tracking-tight">
            {recipe.title}
          </h1>

          <button
            type="button"
            onClick={favHandler}
            className="text-3xl hover:scale-125 transition-all duration-300"
          >
            {recipe.isFav ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-slate-300" />
            )}
          </button>

        </div>

        <img
          className="
                w-full
                h-[220px]
                sm:h-[280px]
                md:h-[350px]
                lg:h-[400px]
                object-cover
                rounded-3xl
                border border-white/10
          "
          src={recipe.image}
          alt=""
        />

        <div className="flex items-center gap-4 mt-4 flex-wrap">

          <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            {recipe.category}
          </span>

          <span className="text-slate-300">
            👨‍🍳 {recipe.chef}
          </span>

        </div>

        <div className="mt-5 space-y-4">

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4">

            <h2 className="text-xl font-bold mb-2 text-cyan-300">
              Description
            </h2>

            <p className="text-slate-300 leading-relaxed">
              {recipe.description}
            </p>

          </div>

          {/* Ingredients */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4">

            <h2 className="text-xl font-bold mb-2 text-cyan-300">
              Ingredients
            </h2>

            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
              {recipe.ingredients}
            </p>

          </div>

          {/* Instructions */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4">

            <h2 className="text-xl font-bold mb-2 text-cyan-300">
              Instructions
            </h2>

            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
              {recipe.instructions}
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="
          h-fit
          sticky
          top-28
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
        "
      >

        <h2 className="text-3xl font-bold mb-5 text-cyan-100">
          Edit Recipe ✏️
        </h2>

        <div className="space-y-3">

          <input
            className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none focus:border-cyan-500"
            {...register("title", {
              required: "Title is required"
            })}
            type="text"
            placeholder="Recipe Title"
          />

          {errors.title && (
            <small className="text-red-500 block">
              {errors.title.message}
            </small>
          )}

          <div className="grid grid-cols-2 gap-3">

            <input
              className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none focus:border-cyan-500"
              {...register("chef", {
                required: "Chef name is required"
              })}
              type="text"
              placeholder="Chef Name"
            />

            <select
              className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none focus:border-cyan-500"
              {...register("category")}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="supper">Supper</option>
              <option value="dinner">Dinner</option>
            </select>

          </div>

          <input
            className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none focus:border-cyan-500"
            {...register("image", {
              required: "Image URL is required"
            })}
            type="url"
            placeholder="Image URL"
          />

          {errors.image && (
            <small className="text-red-500 block">
              {errors.image.message}
            </small>
          )}

          <textarea
            rows={3}
            className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none resize-none focus:border-cyan-500"
            {...register("description", {
              required: "Description is required"
            })}
            placeholder="Description"
          />

          <textarea
            rows={3}
            className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none resize-none focus:border-cyan-500"
            {...register("ingredients", {
              required: "Ingredients are required"
            })}
            placeholder="Ingredients"
          />

          <textarea
            rows={4}
            className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none resize-none focus:border-cyan-500"
            {...register("instructions", {
              required: "Instructions are required"
            })}
            placeholder="Instructions"
          />

          <div className="grid grid-cols-2 gap-3 pt-2">

            <button
              type="submit"
              className="
                py-3
                rounded-xl
                font-semibold
                bg-blue-600
                hover:bg-blue-700
                transition-all
                duration-300
              "
            >
              Update
            </button>

            <button
              type="button"
              onClick={deleteHandler}
              className="
                py-3
                rounded-xl
                font-semibold
                bg-red-600
                hover:bg-red-700
                transition-all
                duration-300
              "
            >
              Delete
            </button>

          </div>

        </div>

      </form>

    </div>


    ) : ( <p className="text-center text-xl text-slate-400">
    Recipe not found. </p>
    )
);

}

export default RecipeDetail