import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt"); // Remove token
    navigate("/auth"); // Redirect to login page
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to Your Dashboard! 🎉</h2>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background 0.3s",
  },
};

export default Dashboard;