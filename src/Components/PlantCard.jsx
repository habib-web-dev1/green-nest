import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500 w-4 h-4" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 w-4 h-4" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
    }
  }

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="ml-1 text-sm font-semibold text-gray-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
const PlantCard = ({ plant }) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg">
        <div className="h-64 overflow-hidden">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full rounded-t-xl h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3
            className="text-xl font-semibold text-emerald-800 mb-2"
            title={plant.plantName}
          >
            {plant.plantName}
          </h3>

          <Rating rating={plant.rating} />

          <div className="flex justify-between items-center mt-3 mb-4">
            <p className="text-2xl font-bold text-gray-900">
              ${plant.price.toFixed(2)}
            </p>
            <p
              className={`text-sm font-medium ${
                plant.stock > 5 ? "text-green-600" : "text-orange-500"
              }`}
            >
              Stock: {plant.availableStock}
            </p>
          </div>
          <Link to={`/plants/${plant.plantId}`}>
            <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 shadow-md">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
