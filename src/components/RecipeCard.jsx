import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    image,
    title,
    chef,
    description,
    category,
    isFav,
  } = recipe;

  return (
    <Link
      to={`/recipe/details/${id}`}
      className="
        group
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-cyan-500/50
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >

      {/* Image */}
      <div className="overflow-hidden">

        <img
          className="
            w-full
            h-60
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
          src={image}
          alt={title}
        />

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category + Fav */}
        <div className="flex justify-between items-center mb-4">

          <span
            className="
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
            "
          >
            {category}
          </span>

          {isFav && (
            <FaHeart className="text-red-500 text-lg" />
          )}

        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2 line-clamp-1">
          {title}
        </h2>

        {/* Chef */}
        <p className="text-cyan-400 mb-3 font-medium">
          👨‍🍳 {chef}
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-white/10">

          <span
            className="
              text-cyan-400
              font-semibold
              group-hover:text-cyan-300
              transition
            "
          >
            View Recipe →
          </span>

        </div>

      </div>

    </Link>
  );
};

export default RecipeCard;