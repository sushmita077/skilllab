import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const AdminDashboard = () => {
  const containerStyle = {
    backgroundImage: 'url(https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/300365936_192653753118758_7926666929302338075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=qrAyIM6RRvQQ7kNvgFz8W--&_nc_ht=scontent.fblr4-5.fna&oh=00_AYCRnRsjw2fqHKUk_D_RH4AfJbWWz3I3OQxWZZ2Az0_pnQ&oe=66A7BD96)', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <h2 className="text-center mb-4 text-white">Admin Dashboard</h2>
      <div className="row">
        {/* User Management */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">Manage users and their roles.</p>
              <a href="/manage-users" className="btn btn-primary">Manage Users</a>
            </div>
          </div>
        </div>

        {/* Order Management */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Management</h5>
              <p className="card-text">View and process orders.</p>
              <a href="/manage-orders" className="btn btn-primary">Manage Orders</a>
            </div>
          </div>
        </div>

        {/* Reports/Analytics */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reports/Analytics</h5>
              <p className="card-text">View sales reports and analytics.</p>
              <a href="/reports" className="btn btn-primary">View Reports</a>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Configure application settings.</p>
              <a href="/settings" className="btn btn-primary">Settings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
