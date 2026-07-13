import { useState } from 'react';
import './Events.css';

export default function Events({ events, setEvents }) {
  // Added 'location' to the state object
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '' });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId) {
      // UPDATE Logic
      setEvents(events.map(event => 
        event.id === editingId ? { ...newEvent, id: editingId } : event
      ));
      setEditingId(null);
    } else {
      // CREATE Logic
      setEvents([...events, { ...newEvent, id: Date.now() }]);
    }
    // Reset form
    setNewEvent({ title: '', date: '', location: '' });
  };

  const startEdit = (event) => {
    setEditingId(event.id);
    setNewEvent({ title: event.title, date: event.date, location: event.location });
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setNewEvent({ title: '', date: '', location: '' });
    }
  };

  return (
    <div className="event-card">
        <h1>{editingId ? 'Update Event' : 'Create New Event'}</h1>
        <div className="form-group">
          <div className="input-wrapper">
            <label>Event Title</label>
            <input 
              type="text" 
              value={newEvent.title} 
              onChange={e => setNewEvent({...newEvent, title: e.target.value})} 
            />
          </div>
          <div className="input-wrapper">
            <label>Location</label>
            <input 
              type="text" 
              value={newEvent.location} 
              onChange={e => setNewEvent({...newEvent, location: e.target.value})} 
            />
          </div>
          <div className="input-row">
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Date</label>
              <input 
                type="date" 
                value={newEvent.date} 
                onChange={e => setNewEvent({...newEvent, date: e.target.value})} 
              />
            </div>
          </div>
          <div className="button-group">
            <button className="btn-primary" onClick={handleSubmit}>
              {editingId ? 'Update Event' : 'Create Event'}
            </button>
            {editingId && (
              <button className="btn-secondary" onClick={() => {setEditingId(null); setNewEvent({title:'', date:'', location:''})}}>
                Cancel
              </button>
            )}
          </div>
        </div>      

        <hr className="divider" />
        <div className="event-list">
          <h3>Upcoming Events ({events.length})</h3>
          {events.length === 0 ? (
            <p className="empty-text">No events found. Start by creating one!</p>
          ) : (
            events.map(event => (
              <div key={event.id} className="event-item">
                <div className="event-info">
                  <span className="event-name">{event.title}</span>
                  <span className="event-location">📍 {event.location}</span>
                  <span className="event-date">📅 {event.date}</span>
                </div>
                <div className="event-actions">
                  <button className="edit-btn" onClick={() => startEdit(event)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteEvent(event.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
  );
}