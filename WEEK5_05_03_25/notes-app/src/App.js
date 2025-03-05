import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketForm from './TicketForm';
import TicketDetails from './TicketDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Notes App - Ticket Reservation System</h1>
        <Routes>
          <Route path="/" element={<TicketForm />} />
          <Route path="/details" element={<TicketDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
