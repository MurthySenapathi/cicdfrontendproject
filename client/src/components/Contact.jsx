import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9093/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setError(""); // Clear any previous error
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Message Sent!</h2>
          <p className="mb-4 text-gray-700">Thank you for contacting us. We'll get back to you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 animate-slideLeft">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>📍 Address:</strong><br />
              123 Car Street<br />
              Vijayawada
            </p>
            <p>
              <strong>📞 Phone:</strong><br />
              +911234567890
            </p>
            <p>
              <strong>✉️ Email:</strong><br />
              info@carrental.com
            </p>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 animate-slideRight">
          {error && (
            <div className="text-red-500 bg-red-100 p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Global Animations
document.head.insertAdjacentHTML("beforeend", `
  <style>
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-slideLeft {
      animation: slideLeft 0.6s ease-in-out;
    }

    .animate-slideRight {
      animation: slideRight 0.6s ease-in-out;
    }

    .animate-fadeIn {
      animation: fadeIn 0.8s ease-in-out;
    }
  </style>
`);

export default Contact;