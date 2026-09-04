import { useState } from "react";
import { siteAssets } from "../siteAssets";

type EventDetailPageProps = {
  onBook: (mode: "table" | "event" | "member") => void;
  onNavigate: (destination: string) => void;
};

const highlights = [
  "Extended 4-hour DJ set from DJ Kairo",
  "Rooftop open-air floor, weather permitting canopy",
  "Guest bartender takeover on the Signature Bar",
  "Limited VIP tables with skyline sightlines",
];

const faqs = [
  { question: "Is there a dress code?", answer: "Smart rooftop attire — no sportswear or flip-flops. Collared shirts recommended for gentlemen." },
  { question: "Can I book a table for this event?", answer: "Yes — use ‘Book a Table for This Event’ to reserve seating on the main floor or VIP section." },
  { question: "What's the refund policy?", answer: "Entry tickets are refundable up to 24 hours before the event. Table deposits follow the standard cancellation policy." },
];

const ticketTiers = [
  { name: "General Entry", status: "Open", price: 150 },
  { name: "Couple Entry", status: "Open", price: 250 },
  { name: "VIP Entry", status: "Limited", price: 350 },
];

export default function EventDetailPage({ onBook, onNavigate }: EventDetailPageProps) {
  const [shared, setShared] = useState(false);

  const share = async () => {
    const shareData = { title: "Clouds After Dark", text: "Clouds After Dark with DJ Kairo at CNC Dubai", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch {
      setShared(false);
    }
  };

  return (
    <main className="event-detail-page">
      <section className="event-detail-content">
        <div className="event-detail-hero">
          <img src={siteAssets.eventDetailHero} alt="DJ Kairo performing at Clouds After Dark" />
          <div className="event-detail-hero-copy">
            <h1>Clouds After Dark</h1>
            <div className="event-detail-meta">
              <div><strong>Fri, Aug 28</strong><span>09:00PM - Late</span></div>
              <div><strong>DJ Kairo</strong><span>Main Rooftop</span></div>
              <div><strong>Dress Code</strong><span>Non</span></div>
              <div><strong>Age</strong><span>21+</span></div>
            </div>
          </div>
        </div>

        <div className="event-detail-layout">
          <div className="event-detail-main">
            <section className="detail-about">
              <h2>About the Event</h2>
              <p>Bassline Rooftop brings DJ Kairo back to the main floor for a night built around deep house and skyline views. Doors open at 10, the set runs past 2 — come early for the golden hour, stay for the drop.</p>
            </section>

            <section className="detail-highlights">
              <h2>Highlights</h2>
              <ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </section>

            <section className="detail-faq">
              <h2>Frequently Asked</h2>
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </section>

            <section className="detail-gallery">
              <h2>Gallery</h2>
              <div>
                <img src={siteAssets.rooftopBar} alt="CNC rooftop bar" />
                <img src={siteAssets.djNight} alt="CNC dance floor" />
                <img src={siteAssets.burger} alt="CNC kitchen burger" />
                <img src={siteAssets.ladiesNightPoster} alt="CNC ladies night artwork" />
              </div>
            </section>
          </div>

          <aside className="event-ticket-panel" aria-label="Event ticket options">
            <div>
              <h2>Get Entry</h2>
              <p>Selling fast - Limited capacity tonight</p>
            </div>
            <div className="ticket-tiers">
              {ticketTiers.map((tier) => (
                <div className="ticket-tier" key={tier.name}>
                  <div><strong>{tier.name}</strong><span className={tier.status === "Limited" ? "is-limited" : ""}>{tier.status}</span></div>
                  <p><span>AED</span><strong>{tier.price}</strong></p>
                </div>
              ))}
            </div>
            <button className="detail-primary-action" onClick={() => onBook("event")}>Get Your Tickets Now</button>
            <button className="detail-secondary-action" onClick={() => onBook("table")}>Get Your Tickets Now</button>
            <div className="event-member-offer">
              <strong>Members Save 20%</strong>
              <p>CnC members get priority entry and 20% off this tier. Not a member yet?</p>
              <button onClick={() => onBook("member")}>Become Member</button>
            </div>
            <div className="event-utility-actions">
              <button onClick={share}>{shared ? "Copied" : "Share"}</button>
              <button onClick={() => onNavigate("/calendar")}>Add to Calander</button>
              <button onClick={() => onNavigate("/#contact")}>Direction</button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
