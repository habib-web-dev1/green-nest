import React from "react";
import { FaTint, FaSun, FaFlask } from "react-icons/fa";

const PlantCareTips = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
          Essential Plant Care Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-emerald-600">
            <div className="flex items-center mb-6">
              <FaTint className={"w-8 h-8 text-blue-600 mr-4"} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Watering Wisdom
              </h3>
            </div>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="text-lg">
                Check the top 1-2 inches of soil before watering.
              </li>
              <li className="text-lg">
                Water thoroughly until it drains out the bottom.
              </li>
              <li className="text-lg">
                Reduce frequency significantly during winter months.
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-emerald-600">
            <div className="flex items-center mb-6">
              <FaSun className={"w-8 h-8 text-yellow-600 mr-4"} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Sunlight Secrets
              </h3>
            </div>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="text-lg">
                Most indoor plants prefer bright, indirect light.
              </li>
              <li className="text-lg">Rotate plants weekly for even growth.</li>
              <li className="text-lg">
                Avoid direct afternoon sun, which can scorch leaves.
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-emerald-600">
            <div className="flex items-center mb-6">
              <FaFlask className={"w-8 h-8 text-orange-600 mr-4"} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Fertilizer Facts
              </h3>
            </div>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li className="text-lg">
                Fertilize only during the growing season (spring and summer).
              </li>
              <li className="text-lg">
                Use a balanced, diluted liquid fertilizer (half-strength).
              </li>
              <li className="text-lg">
                Stop fertilizing completely in fall and winter.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;
