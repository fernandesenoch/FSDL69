import React, { useEffect, useState } from 'react';

function TicketDetails() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const details = JSON.parse(localStorage.getItem('userDetails'));
    if (details) {
      setUserDetails(details);
    }
  }, []);

  return (
    <div>
      <h2>Your Ticket Details</h2>
      {userDetails ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Ticket Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userDetails.name}</td>
              <td>{userDetails.email}</td>
              <td>{userDetails.ticketType}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No details found. Please fill out the form first.</p>
      )}
    </div>
  );
}

export default TicketDetails;
