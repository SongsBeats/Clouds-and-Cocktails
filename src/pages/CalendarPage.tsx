import { useState } from "react";

const calendarFilters = ["All", "DJ Nights", "Live Music", "Ladies Night", "Members Only", "Offers"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const firstWeek = ["24", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function CalendarPage() {
  const [filter, setFilter] = useState("All");

  return (
    <main className="calendar-page">
      <section className="calendar-section">
        <h1>Events Calender</h1>
        <div className="calendar-filters" role="group" aria-label="Filter calendar">
          {calendarFilters.map((item) => (
            <button key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <h2>August 2026</h2>
        <div className="calendar-grid calendar-weekdays">
          {weekdays.map((day) => <span key={day}>{day}</span>)}
        </div>
        <div className="calendar-grid calendar-first-week">
          {firstWeek.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
        </div>
      </section>
      <div className="calendar-black-space" aria-hidden="true" />
    </main>
  );
}
