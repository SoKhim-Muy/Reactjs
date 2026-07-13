import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-placeholder">👩‍💻</div>
        <h2>Hello, Jade</h2>
      </div>
      <nav>
        <Link to="/">DASHBOARD</Link><br></br>
        <Link to="/events">EVENTS</Link><br></br>
        <Link to="/customers">CUSTOMERS</Link><br></br>
        <Link to="/calendar">CALENDAR</Link>
      </nav>
    </aside>
  );
}