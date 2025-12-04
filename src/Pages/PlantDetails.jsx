import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaSpinner,
  FaExclamationTriangle,
  FaCheckCircle,
  FaLeaf,
  FaSeedling,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import usePlants from "../Hooks/usePlants";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
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
        {rating.toFixed(1) || "0.0"}
      </span>
    </div>
  );
};

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading, error } = usePlants();
  const [plant, setPlant] = useState(null);
  useEffect(() => {
    if (plants && id) {
      const foundPlant = plants.find((p) => p.plantId === Number(id));
      setPlant(foundPlant);
    }
  }, [plants, id]);
  if (loading) {
    return (
      <div className="p-20 text-center">
        <FaSpinner className="animate-spin w-8 h-8 mx-auto text-emerald-600" />
        <p className="mt-4 text-gray-600">Loading plant details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-20 text-center">
        <FaExclamationTriangle className="w-8 h-8 mx-auto text-red-500" />
        <p className="mt-4 text-red-700">Error loading data: {error}</p>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="p-20 text-center">
        <FaExclamationTriangle className="w-8 h-8 mx-auto text-orange-500" />
        <p className="mt-4 text-gray-600">Plant with ID "{id}" not found.</p>
      </div>
    );
  }
  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("Appointment Booked Successfully!");
    e.target.reset();
  };

  const { plantName, price, rating, availableStock, image, description } =
    plant;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-12 p-8">
          <div className="lg:pr-10 mb-8 lg:mb-0">
            <img
              src={image}
              alt={plantName}
              className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-100"
            />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-emerald-900 mb-2">
              {plantName}
            </h1>
            <div className="flex items-center space-x-6 mb-6">
              <Rating rating={rating} />
              <div
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  availableStock > 5
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                Stock: {availableStock}
              </div>
            </div>

            <p className="text-5xl font-bold text-gray-900 mb-6">
              ${price?.toFixed(2)}
            </p>

            <div className="space-y-4 text-gray-600 mb-8">
              <h3 className="text-xl font-semibold text-emerald-800 flex items-center mb-2">
                <FaSeedling className="mr-2 text-emerald-600" /> Description
              </h3>
              <p className="leading-relaxed">{description}</p>
            </div>

            <hr className="my-8 border-gray-200" />

            <form
              onSubmit={handleBookNow}
              className="p-6 bg-emerald-50 rounded-xl shadow-inner border border-emerald-100"
            >
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                <FaLeaf className="mr-2 text-emerald-600" /> Book Consultation
              </h3>
              <p className="text-gray-700 mb-4">
                Have questions about caring for {plantName}? Book a 15-minute
                slot with our experts.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full border border-emerald-500 rounded-md shadow-sm p-3 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full border border-emerald-500 rounded-md shadow-sm p-3 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-emerald-600 text-white font-bold rounded-lg shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default PlantDetails;
