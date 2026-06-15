import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    recipe.isFav = false;

    const copydata = [...data];
    copydata.push(recipe);

    setdata(copydata);

    localStorage.setItem(
      "recipes",
      JSON.stringify(copydata)
    );

    toast.success("Recipe created successfully!");
    reset();
    navigate("/recipe");
  };

  return (
    <div className="relative max-w-4xl mx-auto">

      {/* Glow */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8">

        <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 mb-4">
          🍽️ Create Recipe
        </div>

        <h1 className="text-5xl font-black mb-3">
          Add New Recipe
        </h1>

        <p className="text-gray-400">
          Build your personal recipe collection.
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-3xl p-6"
      >

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">

          <div>
            <input
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
              {...register("image", {
                required: "Image URL is required",
              })}
              type="url"
              placeholder="Image URL"
            />

            {errors.image && (
              <small className="text-red-500">
                {errors.image.message}
              </small>
            )}
          </div>

          <div>
            <input
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              placeholder="Recipe Title"
            />

            {errors.title && (
              <small className="text-red-500">
                {errors.title.message}
              </small>
            )}
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">

          <div>
            <input
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
              {...register("chef", {
                required: "Chef name is required",
              })}
              type="text"
              placeholder="Chef Name"
            />

            {errors.chef && (
              <small className="text-red-500">
                {errors.chef.message}
              </small>
            )}
          </div>

          <div>
            <select
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
              {...register("category")}
            >
              <option value="breakfast">
                Breakfast
              </option>

              <option value="lunch">
                Lunch
              </option>

              <option value="supper">
                Supper
              </option>

              <option value="dinner">
                Dinner
              </option>
            </select>
          </div>

        </div>

        {/* Description */}
        <div className="mb-4">

          <textarea
            rows={3}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none resize-none"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Recipe Description"
          ></textarea>

          {errors.description && (
            <small className="text-red-500">
              {errors.description.message}
            </small>
          )}

        </div>

        {/* Ingredients + Instructions */}
        <div className="grid md:grid-cols-2 gap-4">

          <div>

            <textarea
              rows={5}
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none resize-none"
              {...register("ingredients", {
                required: "Ingredients are required",
              })}
              placeholder="Ingredients"
            ></textarea>

            {errors.ingredients && (
              <small className="text-red-500">
                {errors.ingredients.message}
              </small>
            )}

          </div>

          <div>

            <textarea
              rows={5}
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none resize-none"
              {...register("instructions", {
                required: "Instructions are required",
              })}
              placeholder="Instructions"
            ></textarea>

            {errors.instructions && (
              <small className="text-red-500">
                {errors.instructions.message}
              </small>
            )}

          </div>

        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition-all duration-300"
        >
          Save Recipe
        </button>

      </form>

    </div>
  );
};

export default Create;