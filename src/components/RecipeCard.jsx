import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const RecipeCard = (props) => {
  const {
    id,
    image,
    title,
    chef,
    description,
    category,
    isFav,
  } = props.recipe;

  return (
    <Link
      to={`/recipe/details/${id}`}
      className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <img
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-4">

        {/* Category + Favorite */}
        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>

          {isFav && (
            <FaHeart className="text-red-500 text-lg" />
          )}
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mb-2 line-clamp-1">
          {title}
        </h1>

        {/* Chef */}
        <p className="text-red-400 mb-3">
          👨‍🍳 {chef}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {description.slice(0, 90)}...
        </p>

        {/* Read More */}
        <p className="mt-4 text-blue-400 font-medium">
          View Recipe →
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;