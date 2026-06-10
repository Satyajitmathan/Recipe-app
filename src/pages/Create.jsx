import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const {data,setdata} = useContext(recipecontext)

    const {
          register,
          handleSubmit,
          reset,
          formState: { errors }
        } = useForm();
    const submitHandler = (recipe) => {
      recipe.id = nanoid();
      recipe.isFav = false;

      const copydata = [...data];
      copydata.push(recipe);

      setdata(copydata);
      localStorage.setItem("recipes",JSON.stringify(copydata));
      
      toast.success("Recipe created successfully!"); 
      reset() 
      navigate("/recipe"); 
}

  return (
    <form className='w-1/3'
        onSubmit={handleSubmit(submitHandler)} >
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
        <button className='block mx-auto bg-gray-900 px-6 py-3 rounded mt-4'>
            Save Recipe
        </button>
    </form>
  )
}

export default Create