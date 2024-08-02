import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(res.data);
      
      // Check if login was successful (you might need to adapt this based on your response)
      if (res.status === 200) {
        navigate('/menu'); // Redirect to the Menu page
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: 'url("https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/300365936_192653753118758_7926666929302338075_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=qrAyIM6RRvQQ7kNvgFz8W--&_nc_ht=scontent.fblr4-5.fna&oh=00_AYCRnRsjw2fqHKUk_D_RH4AfJbWWz3I3OQxWZZ2Az0_pnQ&oe=66A7BD96")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Make sure the background covers the whole viewport height
        padding: '2rem',
        color: '#fff'
      }}
    >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
