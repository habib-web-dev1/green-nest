import React from "react";
import Slider from "../Components/Slider";
import TopRatedPlants from "../Components/TopRatedPlants";
import PlantCareTips from "../Components/PlantCareTips";
import GreenExperts from "../Components/GreenExperts";
import FeaturedPlant from "../Components/FeaturedPlant";
import Spinner from "../Components/Spinner";
import usePlants from "../Hooks/usePlants";

const Home = () => {
  const { loading } = usePlants;
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <Slider></Slider>
          <TopRatedPlants></TopRatedPlants>
          <PlantCareTips></PlantCareTips>
          <GreenExperts></GreenExperts>
          <FeaturedPlant></FeaturedPlant>
        </div>
      )}
    </>
  );
};

export default Home;
