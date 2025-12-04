import PlantCard from "../Components/PlantCard";
import Container from "../Components/Container";
import usePlants from "../Hooks/usePlants";
import Spinner from "../Components/Spinner";

const AllPlants = () => {
  const { plants, loading } = usePlants();
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Container>
          <div className="py-5 w-11/12 mx-auto">
            <div className="p-3 flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl font-bold">Our All Plants</h1>
              <p className="text-gray-400 pt-4 text-center">
                Explore All Plants
              </p>
            </div>
            <div className="flex items-center pt-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {plants.map((plant) => (
                <PlantCard plant={plant} key={plant.plantId} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default AllPlants;
