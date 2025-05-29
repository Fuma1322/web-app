import "../styles/query.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const QueryList = () => {
  const [queries, setQueries] = useState([]);
  const [editMode, setEditMode] = useState(true);

  const fetchQueries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/client-queries");
      setQueries(res.data);
    } catch (err) {
      console.error("Failed to fetch queries:", err);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/client-queries/${id}`, {
        status: newStatus,
      });
      fetchQueries();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const deleteQuery = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/client-queries/${id}`);
      setQueries((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      console.error("Failed to delete query:", err);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const chartData = {
    labels: ["Pending", "Complete"],
    datasets: [
      {
        label: "Number of Queries",
        data: [
          queries.filter((q) => q.status === "pending").length,
          queries.filter((q) => q.status === "complete").length,
        ],
        backgroundColor: ["#fbba3f", "#83C760"],
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="query-layout">
      <AdminSidebar />
      <div className="query-main">
        <div style={{ maxWidth: "500px", marginBottom: "2rem" }}>
          <h3 style={{ color: "#4facfe" }}>Query Stats</h3>
          <Bar data={chartData} />
        </div>
      <h2>Client Queries</h2>
        <button onClick={() => setEditMode(!editMode)} className="toggle-btn">
          Toggle {editMode ? "Read-Only" : "Edit"} Mode
        </button>
        <div className="query-table">
          {queries.length === 0 ? (
            <p>No queries found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Status</th>
                  {editMode && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {queries.map((query) => (
                  <tr key={query._id}>
                    <td>{query.name}</td>
                    <td>{query.email}</td>
                    <td>{query.message}</td>
                    <td>{query.status}</td>
                    {editMode && (
                      <td>
                        <select
                          value={query.status}
                          onChange={(e) =>
                            updateStatus(query._id, e.target.value)
                          }
                        >
                          <option value="pending">Pending</option>
                          <option value="complete">Complete</option>
                        </select>
                        <button
                          onClick={() => deleteQuery(query._id)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryList; 