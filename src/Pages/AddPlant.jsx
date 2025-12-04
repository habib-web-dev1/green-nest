import React, { useState } from "react";
import Container from "../Components/Container";
import { toast } from "react-toastify";

const AddPlant = () => {
  const [formData, setFormData] = useState({
    plantName: "",
    category: "Tropical",
    price: "",
    rating: "",
    description: "",
    image: "",
    availableStock: "",
    careLevel: "Easy",
    providerName: "",
  });

  const categories = [
    "Tropical",
    "Succulent/Foliage",
    "Tree/Foliage",
    "Foliage",
    "Vining",
    "Flowering",
    "Succulent",
    "Hanging/Foliage",
    "Palm/Tropical",
    "Foliage/Color",
  ];
  const careLevels = ["Easy", "Moderate", "Hard"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.plantName ||
      !formData.image ||
      !formData.price ||
      !formData.description
    ) {
      return toast.error("Please fill in all required fields.");
    }

    const newPlant = {
      ...formData,

      price: Number(formData.price),
      rating: Number(formData.rating) || 0,
      availableStock: Number(formData.availableStock),

      shortDescription:
        formData.shortDescription ||
        formData.description.split(". ")[0].substring(0, 100) +
          (formData.description.includes(".") ? "." : ""),
    };

    console.log("New Plant Data to Submit:", newPlant);

    toast.success("New plant item added successfully!");

    setFormData({
      plantName: "",
      category: "Tropical",
      price: "",
      rating: "",
      description: "",
      shortDescription: "",
      image: "",
      availableStock: "",
      careLevel: "Easy",
      providerName: "",
    });
  };

  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-800 tracking-tight">
            🪴 Add A New Green Plant
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Input the details for a new plant to add in your collection.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-green-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Item Name*
                </span>
              </div>
              <input
                type="text"
                name="plantName"
                value={formData.plantName}
                onChange={handleChange}
                placeholder="e.g., Monstera Deliciosa"
                className="input input-bordered w-full input-success"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Category*
                </span>
              </div>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="select select-bordered w-full select-success"
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Price ($)*
                </span>
              </div>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="35.00"
                className="input input-bordered w-full input-success"
                step="0.01"
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Image URL*
                </span>
              </div>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/plant.png"
                className="input input-bordered w-full input-success"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Provider Name
                </span>
              </div>
              <input
                type="text"
                name="providerName"
                value={formData.providerName}
                onChange={handleChange}
                placeholder="GreenLeaf Growers"
                className="input input-bordered w-full input-success"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Stock*
                </span>
              </div>
              <input
                type="number"
                name="availableStock"
                value={formData.availableStock}
                onChange={handleChange}
                placeholder="10"
                className="input input-bordered w-full input-success"
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Rating (0.0 - 5.0)
                </span>
              </div>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="4.5"
                className="input input-bordered w-full input-success"
                min="0"
                max="5"
                step="0.1"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Care Level
                </span>
              </div>
              <select
                name="careLevel"
                value={formData.careLevel}
                onChange={handleChange}
                className="select select-bordered w-full select-success"
              >
                {careLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-gray-700">
                  Full Description* (details page)
                </span>
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the plant's features, care instructions, and ideal environment."
                className="textarea textarea-bordered h-24 textarea-success"
                required
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            className="btn bg-green-600 text-white w-full py-3 text-lg font-semibold hover:bg-green-700 border-green-600 hover:border-green-700 shadow-xl transition-all duration-300"
          >
            Submit Item to Collection
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">* Required fields</span>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddPlant;
