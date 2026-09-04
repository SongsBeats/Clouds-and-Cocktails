import { useMemo, useState, type CSSProperties } from "react";
import SectionHeading from "../components/SectionHeading";
import { siteAssets } from "../siteAssets";

type EventsPageProps = {
  onBook: (mode: "table" | "event") => void;
  onNavigate: (destination: string) => void;
};

const filters = ["All", "This Weekend", "DJ Nights", "Live Music", "Ladies Night", "Members Only", "Under AED 200"];

type EventRow = {
  day: string;
  date: string;
  title: string;
  color: string;
  tone: string;
  category: string;
  detailPath?: string;
};

const eventRows: EventRow[] = [
  { day: "Thursday", date: "27 Aug 7PM", title: "Clouds in the Dark", color: "#97d700", tone: "dark", category: "DJ Nights" },
  { day: "Friday", date: "28 Aug 7PM", title: "Clouds After Dark", color: "#3521b5", tone: "light", category: "This Weekend", detailPath: "/events/clouds-after-dark" },
  { day: "Saturday", date: "29 Aug 7PM", title: "Light Showers and Wind", color: "#bc0201", tone: "light", category: "Live Music" },
  { day: "Sunday", date: "30 Aug 7PM", title: "Mild Temperatures with Clear Skies", color: "#eb6e00", tone: "lime", category: "Ladies Night" },
  { day: "Monday", date: "31 Aug 7PM", title: "Heavy Rain and Thunderstorms", color: "#1b6c9b", tone: "light", category: "Members Only" },
  { day: "Tuesday", date: "01 Sept 7PM", title: "Partly Cloudy with Gentle Breeze", color: "#360839", tone: "light", category: "Under AED 200" },
];

export default function EventsPage({ onBook, onNavigate }: EventsPageProps) {
  const [filter, setFilter] = useState("All");
  const rows = useMemo(() => filter === "All" ? eventRows : eventRows.filter((event) => event.category === filter), [filter]);

  return (
    <main className="events-page">
      <section className="events-featured">
        <SectionHeading
          title="Featured This Month"
          subtitle="Discover upcoming nights, live entertainment, exclusive events and unforgettable rooftop experiences at C&C."
        />
        <article className="events-featured-card">
          <img src={siteAssets.featuredNight} alt="Bollywood Night: The Reunion" />
          <div className="events-featured-shade" />
          <div className="events-featured-copy">
            <span>Featured This Month</span>
            <h1>Bollywood Night: The Reunion</h1>
            <div className="featured-meta">
              <div><strong>Sat, Sep 12</strong><small>8:00 PM · Onward</small></div>
              <div><strong>DJ Tabu + Live Music</strong><small>Main rooftop</small></div>
              <div><strong>From AED 250</strong><small>Table &amp; Entry Available</small></div>
            </div>
            <div className="featured-actions">
              <button className="button button-solid" onClick={() => onBook("event")}>Get Event Entry</button>
              <button className="button button-outline-light" onClick={() => onBook("table")}>Book a Table</button>
            </div>
          </div>
        </article>
      </section>

      <section className="event-browser" aria-label="Upcoming CNC events">
        <div className="event-browser-topbar">
          <div className="event-filters" role="group" aria-label="Filter events">
            {filters.map((item) => (
              <button key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
          <button className="calendar-link" onClick={() => onNavigate("/calendar")}>Calendar view →</button>
        </div>

        <div className="event-rows" aria-live="polite">
          {rows.map((event) => (
            <article className={`event-row event-row-${event.tone}`} key={event.day} style={{ "--event-color": event.color } as CSSProperties}>
              <img src={siteAssets.eventStrip} alt="" />
              <div className="event-row-gradient" />
              <time>{event.date}</time>
              <div className="event-row-copy">
                <h2>{event.day}</h2>
                <p>{event.title}</p>
              </div>
              <button
                aria-label={event.detailPath ? `View ${event.day} event details` : `Book ${event.day}`}
                onClick={() => event.detailPath ? onNavigate(event.detailPath) : onBook("event")}
              />
            </article>
          ))}
          {rows.length === 0 && <p className="no-events">New dates are coming soon.</p>}
        </div>
      </section>
    </main>
  );
}
