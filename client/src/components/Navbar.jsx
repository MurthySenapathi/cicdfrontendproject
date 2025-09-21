import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Car, User } from "lucide-react"; // Import User icon

const Navbar = () => {
    const [username, setUsername] = useState(localStorage.getItem("username") || null);

    useEffect(() => {
        setUsername(localStorage.getItem("username")); // Ensure username updates dynamically
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
        setUsername(null);
        window.location.href = "/auth"; // Redirect to login page
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                        <Car className="h-6 w-6" />
                        <span>CarRental</span>
                    </Link>
                    <div className="flex gap-6 items-center">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <Link to="/cars" className="hover:text-blue-600">Cars</Link>
                        <Link to="/booking" className="hover:text-blue-600">Booking</Link>
                        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                        {!username ? (
                            <Link to="/auth" className="hover:text-blue-600">Login</Link>
                        ) : (
                            <div className="flex items-center gap-4 bg-gray-200 px-3 py-2 rounded-md">
                                <User className="h-5 w-5" />
                                <span className="font-semibold">User: {username}</span>
                                <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded-md">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;