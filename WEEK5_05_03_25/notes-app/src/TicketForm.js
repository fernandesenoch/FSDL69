import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function TicketForm() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    ticketType: 'regular',
  });

  const history = useHistory();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in localStorage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    // Navigate to the details page
    Navigate('/details');
  };

  return (
    <div>
      <h2>Enter Your Ticket Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ticket Type:</label>
          <select
            name="ticketType"
            value={userDetails.ticketType}
            onChange={handleChange}
          >
            <option value="regular">Regular</option>
            <option value="vip">VIP</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TicketForm;
