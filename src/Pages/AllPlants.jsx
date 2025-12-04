import PlantCard from "../Components/PlantCard";
import Container from "../Components/Container";
import usePlants from "../Hooks/usePlants";
import Spinner from "../Components/Spinner";
import { useEffect, useState } from "react";

const AllPlants = () => {
  const { plants, loading } = usePlants();
  const [sortBy, setSortBy] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(100);

  const categories = (() => {
    if (!plants || plants.length === 0) return ["all"];
    const uniqueCategories = new Set(plants.map((plant) => plant.category));
    return ["all", ...Array.from(uniqueCategories)];
  })();

  const maxPrice = (() => {
    if (!plants || plants.length === 0) return 100;
    return Math.max(...plants.map((p) => p.price)) + 10;
  })();

  useEffect(() => {
    if (plants && plants.length > 0 && priceRange !== maxPrice) {
      setPriceRange(maxPrice);
    }
  }, [plants, maxPrice, priceRange]);
  let sortedAndFilteredPlants = [...plants];

  sortedAndFilteredPlants = sortedAndFilteredPlants.filter(
    (plant) => plant.price <= priceRange
  );

  if (filterCategory !== "all") {
    sortedAndFilteredPlants = sortedAndFilteredPlants.filter(
      (plant) => plant.category === filterCategory
    );
  }

  sortedAndFilteredPlants.sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.plantName.localeCompare(b.plantName);
      case "name-desc":
        return b.plantName.localeCompare(a.plantName);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });
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
            <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-10">
              <div className="flex justify-between gap-6 items-center">
                <div className="flex flex-col space-y-2">
                  <label className="font-bold text-gray-700">Sort By:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select select-bordered w-full bg-white border-green-400 focus:border-green-600"
                  >
                    <option value="default" disabled>
                      Default Order
                    </option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-bold text-gray-700">
                    Filter By Category:
                  </label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="select select-bordered w-full bg-white border-green-400 focus:border-green-600"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === "all"
                          ? "All Categories"
                          : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {sortedAndFilteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6">
                {sortedAndFilteredPlants.map((plant) => (
                  <PlantCard plant={plant} key={plant.plantId} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg shadow-md">
                <p className="text-xl text-red-600 font-semibold">
                  Sorry, no items found matching your current filter criteria.
                </p>
                <button
                  onClick={() => {
                    setFilterCategory("all");
                    setPriceRange(maxPrice);
                    setSortBy("default");
                  }}
                  className="btn btn-outline btn-success mt-4"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default AllPlants;
