export default function Dashboard({ events, customers }) {
  return (
    <div className="page">
      <h1>Dashboard Overview</h1>
      <div className="stat-grid">
        <div className="stat-card1">
          <h3>Total Events</h3>
          <p className="stat-number">{events.length}</p>
        </div>
        <div className="stat-card2">
          <h3>Total Customers</h3>
          <p className="stat-number">{customers.length}</p>
        </div>
      </div>
    </div>
  );
}