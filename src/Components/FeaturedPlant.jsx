import React from "react";
import { useState, useEffect } from "react";
import {
  FaStar,
  FaLeaf,
  FaSun,
  FaHandHoldingHeart,
  FaSpinner,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import usePlants from "../Hooks/usePlants";
const FeaturedPlant = () => {
  const { plants } = usePlants();
  const [featuredPlant, setFeaturedPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectRandomPlant = () => {
      if (plants.length > 0) {
        const randomIndex = Math.floor(Math.random() * plants.length);
        setFeaturedPlant(plants[randomIndex]);
      }
      setLoading(false);
    };

    selectRandomPlant();
  }, [plants]);

  const Rating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500 w-4 h-4" />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-500 w-4 h-4" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
      }
    }
    return <div className="flex items-center space-x-0.5">{stars}</div>;
  };

  if (loading) {
    return (
      <section className="py-16 bg-white flex items-center justify-center min-h-[400px]">
        <FaSpinner className="w-12 h-12 animate-spin text-emerald-600" />
        <p className="ml-4 text-gray-700">Loading Plant of the Week...</p>
      </section>
    );
  }

  if (!featuredPlant) {
    return (
      <section className="py-16 bg-white text-center">
        <p className="text-red-500">
          Could not load Plant of the Week. Please try again later.
        </p>
      </section>
    );
  }

  const { plantName, category, price, rating, description, image, careLevel } =
    featuredPlant;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-emerald-800 mb-2">
          🌿 Plant of the Week
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Discover our current favorite! This plant is hand-selected for its
          beauty and excellent growing performance.
        </p>

        <div className="bg-emerald-50 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-emerald-200">
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-emerald-100">
            <img
              src={image}
              alt={plantName}
              className="w-full max-h-96 object-contain rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <span className="font-semibold mb-3">
              Plant Category:{" "}
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
                {category}
              </span>
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              {plantName}
            </h3>

            <div className="flex items-center justify-between mb-4 pb-4 border-b border-emerald-200">
              {Rating(rating)}
              <p className="text-3xl font-extrabold text-emerald-700">
                ${price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 mb-6">{description}</p>

            <div className="flex justify-between text-sm font-medium text-gray-700 mb-8">
              <div className="flex items-center space-x-2">
                <FaHandHoldingHeart className="w-5 h-5 text-emerald-500" />
                <span>
                  Care Level:{" "}
                  <span className="text-emerald-700 font-bold">
                    {careLevel}
                  </span>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <FaLeaf className="w-5 h-5 text-emerald-500" />
                <span>
                  Growth: <strong className="text-emerald-700">Varies</strong>
                </span>
              </div>
            </div>

            <button className="w-full md:w-auto self-start flex items-center justify-center space-x-2 py-3 px-8 text-white bg-emerald-600 font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.02]">
              <FaSun className="w-5 h-5" />
              <span>Adopt Your {plantName} Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlant;
