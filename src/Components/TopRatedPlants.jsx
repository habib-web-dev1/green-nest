import React from "react";
import usePlants from "../Hooks/usePlants";
import { Link } from "react-router";
import PlantCard from "./PlantCard";

const TopRatedPlants = () => {
  const { plants } = usePlants();
  const sortedPlants = plants.sort((a, b) => b.rating - a.rating);
  const topRated = sortedPlants.slice(0, 8);

  return (
    <section className="py-16">
      <div className=" px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
          Top Rated Indoor Plants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6">
          {topRated.map((plant) => (
            <PlantCard plant={plant} key={plant.plantId}></PlantCard>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link
            to="/plants"
            className="btn  bg-emerald-900 hover:bg-emerald-700 text-white font-semibold rounded-lg"
          >
            View All Plants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRatedPlants;
