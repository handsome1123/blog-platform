import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
      } catch (err) {
        const message = err.response?.data?.msg || "Access denied";
        setError(message);
      }
    };
    fetchDashboard();
  }, []);

  if (error) return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      {data ? (
        <ul style={styles.stats}>
          <li><strong>Users:</strong> {data.users}</li>
          <li><strong>Posts:</strong> {data.posts}</li>
          <li><strong>Comments:</strong> {data.comments}</li>
          <li><strong>Latest Signup:</strong> {data.latestSignup}</li>
        </ul>
      ) : (
        <p>Loading dashboard...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    background: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
  },
  stats: {
    listStyle: "none",
    padding: 0,
    fontSize: "18px",
    lineHeight: "2",
  },
};
