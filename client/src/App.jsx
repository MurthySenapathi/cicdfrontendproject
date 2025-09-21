import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

const App = () => {
  const token = localStorage.getItem("jwt"); // Check if user is authenticated

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={token ? <Navigate to="/dashboard" /> : <Auth />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;