import React, { useState } from 'react';
import axios from 'axios';
function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/data', formData); // Assuming your Express API endpoint is at '/api/users'
  
      console.log('Data submitted successfully:', response.data);
      setFormData({ name: '', password: '' });
      
      // Handle success (e.g., clear form, display success message)
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error (e.g., display error message to the user)
    }
    
  };
  function submit(){
    console.log('btnclicked');
    // setFormData('');
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={submit} type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
