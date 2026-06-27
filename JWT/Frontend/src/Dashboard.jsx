import React, { useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const token = localStorage.getItem("accessToken")
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8000/dashboard/", {
            method: "POST", 
            headers: {
                "content-type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
        }).then(rawData => rawData.json())
        .then(res => console.log(res))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        navigate("/login")
    }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">MyApp</h2>

        <ul className="menu">
          <li className="active">🏠 Dashboard</li>
          <li>👤 Profile</li>
          <li>📚 Courses</li>
          <li>📊 Reports</li>
          <li>⚙️ Settings</li>
          <li onClick={handleLogout}>🚪 Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <h1>Dashboard</h1>
          <div className="user">
            <img
              src="https://i.pravatar.cc/50"
              alt="User"
              className="avatar"
            />
            <span>Welcome, User</span>
          </div>
        </header>

        {/* Cards */}
        <section className="cards">
          <div className="card">
            <h3>Users</h3>
            <p>1,250</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>$12,450</p>
          </div>

          <div className="card">
            <h3>Orders</h3>
            <p>340</p>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <p>18</p>
          </div>
        </section>

        {/* Table */}
        <section className="table-container">
          <h2>Recent Activity</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John</td>
                <td>Registered</td>
                <td>27 Jun 2026</td>
                <td className="success">Completed</td>
              </tr>

              <tr>
                <td>Emma</td>
                <td>Purchased Course</td>
                <td>26 Jun 2026</td>
                <td className="success">Completed</td>
              </tr>

              <tr>
                <td>David</td>
                <td>Payment Pending</td>
                <td>25 Jun 2026</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;