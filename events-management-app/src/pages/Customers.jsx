import './Customers.css';

export default function Customers({ customers, setCustomers }) {
  const toggleApprove = (id) => {
    setCustomers(customers.map(c => c.id === id ? { ...c, approved: !c.approved } : c));
  };

  const deleteCustomer = (id) => setCustomers(customers.filter(c => c.id !== id));

  return (
    <div className="container">
      <div className="table-card">
        <h1 className="table-title">Customer List</h1>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Mail</th>
              <th>Tel</th>
              <th className="text-center">Approved</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map(c => (
                <tr key={c.id}>
                  <td className="font-bold">{c.name}</td>
                  <td>{c.gender || "Male"}</td>
                  <td>{c.mail || "John123@gmail.com"}</td>
                  <td>{c.tel || "098786756"}</td>
                  <td className="text-center">
                    <input 
                      type="checkbox" 
                      className="status-checkbox"
                      checked={c.approved} 
                      onChange={() => toggleApprove(c.id)} 
                    />
                  </td>
                  <td className="text-center">
                    <button className="delete-btn" onClick={() => deleteCustomer(c.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-row">No customers available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}