import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [birthDate, setBirthDate] = useState('');
  const [vaccinated, setVaccinated] = useState('Yes');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name,
      gender,
      birthDate,
      vaccinated: vaccinated === 'Yes',
    };
  
    try {
      const response = await axios.post('http://localhost:5000/vote', formData);
      
      if (response.status === 201) {
        setSubmitMessage('Form submitted successfully!');
      } else {
        setSubmitMessage('Error: Unexpected response status code');
      }
    } catch (error) {
      console.error('API Error:', error);
      setSubmitMessage('Error submitting the form. Please try again.');
    }
  
    // Clearing the form after submission
    setName('');
    setGender('Male');
    setBirthDate('');
    setVaccinated('Yes');
  }

  return (
    <div className="formContainer">
      <h3>Fill your details</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <br />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Birth Date</label>
          <br />
          <input
            type="date"
            min={new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0]}
            max={new Date().toISOString().split('T')[0]}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Are you vaccinated?</label>
          <br />
          <input
            type="radio"
            name="vaccinated"
            value="Yes"
            checked={vaccinated === 'Yes'}
            onChange={() => setVaccinated('Yes')}
          />
          <label className="radioLabel">Yes</label>
          <input
            type="radio"
            name="vaccinated"
            value="No"
            checked={vaccinated === 'No'}
            onChange={() => setVaccinated('No')}
          />
          <label>No</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div className='submitMsg'>
          {submitMessage && <p>{submitMessage}</p>}
        </div>
        <div>
          <NavLink to="/trend">Check out Trend Analysis</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Form;
