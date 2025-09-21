import { useState, useEffect } from "react";
import axios from "axios";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    type: "",
    imageUrl: "",
    shortDescription: "",
    pricePerDay: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:9092/api/cars");
        setCars(response.data);
      } catch (err) {
        setError("Failed to fetch cars. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:9092/api/cars/${formData.id}`
      : "http://localhost:9092/api/cars";

    try {
      const response = await axios({
        method,
        url,
        headers: { "Content-Type": "application/json" },
        data: formData,
      });

      const updatedCar = response.data;

      setCars((prevCars) =>
        isEditing
          ? prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
          : [...prevCars, updatedCar]
      );

      setFormData({
        id: null,
        name: "",
        type: "",
        imageUrl: "",
        shortDescription: "",
        pricePerDay: "",
      });

      setIsEditing(false);
    } catch (err) {
      setError("Failed to save car. Try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9092/api/cars/${id}`);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (err) {
      setError("Failed to delete car.");
    }
  };

  const handleEdit = (car) => {
    setFormData(car);
    setIsEditing(true);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-8 animate-pulse">Loading cars...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center animate-bounce">Available Cars</h1>

      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md mb-8 px-4 py-2 border rounded shadow-lg transition-transform transform hover:scale-105"
      />

      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-100 p-4 rounded mb-8 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Car" : "Add New Car"}</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Car Name"
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleFormChange}
            placeholder="Car Type"
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleFormChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleFormChange}
            placeholder="Short Description"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleFormChange}
            placeholder="Price Per Day"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">
          {isEditing ? "Update Car" : "Add Car"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white rounded shadow p-4 hover:scale-105 transition-transform">
            <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="font-bold text-xl mb-2">{car.name}</h3>
            <p className="text-gray-600 mb-2">{car.shortDescription}</p>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600">{car.type}</div>
                <div className="font-bold">${car.pricePerDay}/day</div>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(car)} className="bg-yellow-600 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={() => handleDelete(car.id)} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;