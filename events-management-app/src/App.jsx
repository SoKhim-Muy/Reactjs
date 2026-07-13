import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Customers from './pages/Customers';
import CalendarView from './pages/CalendarView';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  // Shared State
  const [events, setEvents] = useState([
    { id: 1, title: 'Music Fest', date: '2025-12-30' },
  ]);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', approved: false },
  ]);

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard events={events} customers={customers} />} />
            <Route path="/events" element={<Events events={events} setEvents={setEvents} />} />
            <Route path="/customers" element={<Customers customers={customers} setCustomers={setCustomers} />} />
            <Route path="/calendar" element={<CalendarView events={events} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;