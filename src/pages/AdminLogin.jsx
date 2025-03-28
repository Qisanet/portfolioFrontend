import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Declare navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://portfoliobackend-3-31l1.onrender.com/admin/admin`, formData);
      localStorage.setItem('token', response.data.token); // Save the token
      navigate('/admin/dashboard'); // Use navigate to redirect
    } catch (error) {
      console.error('Error during login:', error);
      alert('Invalid email or password.');
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;