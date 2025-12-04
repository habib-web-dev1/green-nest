import React from "react";
import { FaSeedling, FaSun, FaLeaf, FaTint } from "react-icons/fa";

const GreenExperts = () => {
  return (
    <section className="py-10 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-emerald-900 mb-4">
          Meet Our Green Experts 🌿
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our team is dedicated to ensuring your plants thrive. Connect with a
          specialist who understands your specific green challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-xl  flex flex-col items-center text-center border-b-4 border-emerald-600">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md transition-transform duration-500 hover:scale-105">
              <img
                src="./expert1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Dr. Elara Vance
            </h3>

            <div className="flex items-center text-md font-semibold text-emerald-700 mb-3 bg-emerald-50 px-3 py-1 rounded-full">
              <FaTint className="w-4 h-4 mr-2" />
              <span>Advanced Hydroponics & Soil Science</span>
            </div>

            <p className="text-gray-600 text-sm italic">
              "Elara holds a PhD in Botany and specializes in nutrient delivery
              systems for maximum plant health."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl  flex flex-col items-center text-center border-b-4 border-emerald-600">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md transition-transform duration-500 hover:scale-105">
              <img
                src="./expert2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">Kai Lin</h3>

            <div className="flex items-center text-md font-semibold text-emerald-700 mb-3 bg-emerald-50 px-3 py-1 rounded-full">
              <FaSeedling className="w-4 h-4 mr-2" />
              <span>Tropical & Exotic Plant Propagation</span>
            </div>

            <p className="text-gray-600 text-sm italic">
              "Kai is our propagation master, focusing on successfully rooting
              and growing rare tropical species."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl  flex flex-col items-center text-center border-b-4 border-emerald-600">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md transition-transform duration-500 hover:scale-105">
              <img
                src="./expert3.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Samira Hassan
            </h3>

            <div className="flex items-center text-md font-semibold text-emerald-700 mb-3 bg-emerald-50 px-3 py-1 rounded-full">
              <FaLeaf className="w-4 h-4 mr-2" />
              <span>Pest Control & Integrated Management</span>
            </div>

            <p className="text-gray-600 text-sm italic">
              "Samira ensures your plants stay pest-free using natural,
              eco-friendly integrated management techniques."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl  flex flex-col items-center text-center border-b-4 border-emerald-600">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md transition-transform duration-500 hover:scale-105">
              <img
                src="./expert4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">Ben Carter</h3>

            <div className="flex items-center text-md font-semibold text-emerald-700 mb-3 bg-emerald-50 px-3 py-1 rounded-full">
              <FaSun className="w-4 h-4 mr-2" />
              <span>Cacti, Succulents & Light Analysis</span>
            </div>

            <p className="text-gray-600 text-sm italic">
              "Ben specializes in desert flora and can consult on optimal light
              placement for any low-water collection."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
