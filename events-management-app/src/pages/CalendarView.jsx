import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import base styles first
import './CalendarView.css';

export default function CalendarView({ events }) {
  const [date, setDate] = useState(new Date());

  const getEventsForDate = (calendarDate) => {
    // Local date string comparison (YYYY-MM-DD)
    const year = calendarDate.getFullYear();
    const month = String(calendarDate.getMonth() + 1).padStart(2, '0');
    const day = String(calendarDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    return events.filter((event) => event.date === dateString);
  };

  return (
    <div className="calendar-page-wrapper">
      <div className="calendar-card">
        <header className="calendar-header">
          <h1>Event Schedule</h1>
          <p>Manage your upcoming appointments and tasks</p>
        </header>

        <div className="main-layout">
          <div className="calendar-section">
            <Calendar
              onChange={setDate}
              value={date}
              next2Label={null} // Hide year-skip for cleaner look
              prev2Label={null}
              tileContent={({ date, view }) => {
                if (view === 'month') {
                  const dayEvents = getEventsForDate(date);
                  return (
                    <div className="dot-container">
                      {dayEvents.length > 0 && (
                        <div className="event-indicator-dot" />
                      )}
                    </div>
                  );
                }
              }}
            />
          </div>

          <div className="details-section">
            <div className="details-header">
              <h3>
                {date.toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
              <span className="event-count">
                {getEventsForDate(date).length} Events
              </span>
            </div>

            <div className="event-list">
              {getEventsForDate(date).length > 0 ? (
                getEventsForDate(date).map((event) => (
                  <div key={event.id} className="event-card-modern">
                    <div className="event-card-accent" />
                    <div className="event-card-content">
                      <div className="event-card-header">
                        <h4>{event.title}</h4>
                        <span className="event-category-tag">
                          {event.category || 'Event'}
                        </span>
                      </div>

                      <div className="event-details-grid">
                        <div className="detail-item">
                          <span className="detail-icon">📍</span>
                          <span>{event.location || 'Remote / TBA'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state-message">
                  <p>No events scheduled for this day.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}