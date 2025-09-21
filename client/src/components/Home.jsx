import { Link } from "react-router-dom";
import { carData } from "../data/carData";

const reviews = [
  { name: "Saikumar", rating: "★★★★★", comment: "Amazing service and a seamless booking process!" },
  { name: "Rithwik", rating: "★★★★☆", comment: "Great selection of cars at affordable prices." },
  { name: "Vijay", rating: "★★★★★", comment: "Super smooth experience, will rent again!" },
];

const Home = () => {
  const featuredCars = carData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl font-bold mb-4 text-blue-700"> Welcome to CarRental </h1>
        <p className="text-gray-600 text-lg mb-6">Find and book your perfect car with ease!</p>
        <Link to="/cars" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform">
          Browse Cars
        </Link>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 shadow-xl rounded-lg p-8 mb-12 animate-slideLeft">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">🚀 Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Whether it's a road trip, business travel, or a luxury experience, CarRental has the perfect ride for you.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>✔ **Affordable & Flexible Pricing**</li>
          <li>✔ **Wide Selection** - Economy, SUVs, Luxury Cars</li>
          <li>✔ **Seamless Booking & Secure Payments**</li>
          <li>✔ **24/7 Customer Support**</li>
        </ul>
      </div>

      {/* Featured Cars Section */}
      <h2 className="text-4xl font-bold text-center mb-8"> Featured Cars </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredCars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all hover:shadow-xl">
            <img src={car.imageUrl} alt={car.name} className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="font-bold text-2xl text-blue-800 mb-2">{car.name}</h3>
            <p className="text-gray-600 text-lg mb-3">{car.shortDescription}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-green-600">${car.pricePerDay}/day</span>
              <Link to={`/booking?car=${car.id}`} className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition-transform">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Reviews Section */}
      <h2 className="text-4xl font-bold text-center mt-12 mb-8"> Customer Reviews </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn hover:shadow-xl transition-all">
            <h3 className="font-bold text-xl text-gray-700 mb-2">{review.name}</h3>
            <p className="text-yellow-500 text-lg">{review.rating}</p>
            <p className="text-gray-600 italic">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Global Animations
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-fadeIn { animation: fadeIn 0.8s ease-in-out; }
    .animate-slideLeft { animation: slideLeft 0.6s ease-in-out; }
  </style>
`
);

export default Home;