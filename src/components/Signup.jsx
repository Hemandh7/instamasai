
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    age: '',
    city: '',
    is_married: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://drab-hare-teddy.cyclic.app/users/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.error('Error in user registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input
          type="checkbox"
          name="is_married"
          checked={formData.is_married}
          onChange={() =>
            setFormData({ ...formData, is_married: !formData.is_married })
          }
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
