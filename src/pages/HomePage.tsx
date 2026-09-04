import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { siteAssets } from "../siteAssets";

type BookingMode = "table" | "event" | "member";

type HomePageProps = {
  onBook: (mode: BookingMode) => void;
};

const updates = [
  {
    label: "Featured",
    title: "Clouds After Dark",
    detail: "DJ sets from sunset to late",
    image: siteAssets.newsUpdateOne,
  },
  {
    label: "Rooftop Sessions",
    title: "Live From the C&C Decks",
    detail: "Music, cocktails and skyline views",
    image: siteAssets.newsUpdateTwo,
  },
  {
    label: "Night Sessions",
    title: "Clouds After Dark at C&C",
    detail: "Join us for a late-night rooftop set",
    image: siteAssets.newsUpdateThree,
  },
  {
    label: "Featured",
    title: "Sukoon by Tabu - Friday, Aug 14th",
    detail: "Join us for live music by Tabu",
    image: siteAssets.tabuPoster,
  },
  {
    label: "This weekend",
    title: "Clouds After Dark - Saturday, Aug 22nd",
    detail: "DJ sets from sunset to late",
    image: siteAssets.featuredNight,
  },
];

const weeklyEvents = [
  { image: siteAssets.ladiesNightPoster, label: "Ladies Night", title: "Clouds After Dark -", date: "Friday, Aug 14th", detail: "8:00 PM · Open Bar for Her" },
  { image: siteAssets.liveSinger, label: "Live Music", title: "Clouds After Dark -", date: "Friday, Aug 14th", detail: "8:00 PM · Open Bar for Her" },
  { image: siteAssets.liveDrummer, label: "DJ Night", title: "Clouds After Dark -", date: "Friday, Aug 14th", detail: "8:00 PM · Open Bar for Her" },
  { image: siteAssets.ladiesNightPoster, label: "Ladies Night", title: "Clouds After Dark -", date: "Friday, Aug 14th", detail: "8:00 PM · Open Bar for Her" },
  { image: siteAssets.liveSinger, label: "Live Music", title: "Clouds After Dark -", date: "Friday, Aug 14th", detail: "8:00 PM · Open Bar for Her" },
  { image: siteAssets.liveDrummer, label: "DJ Night", title: "Clouds After Dark -", date: "Friday, Aug 14th", detail: "8:00 PM · Open Bar for Her" },
];

const experiences = [
  { title: "Rooftop", description: "320 meters above the city, where the skyline does half the talking." },
  { title: "Bar", description: "Signature cocktails built by hand, not by menu templates." },
  { title: "Kitchen", description: "Sharing plates designed for table theft. Staying all night is fine." },
];

const membershipPerks = ["Members Events", "Priority Tables", "Exclusive Offers", "Birthday Privileges", "Early Access"];

export default function HomePage({ onBook }: HomePageProps) {
  const [updateIndex, setUpdateIndex] = useState(0);
  const update = updates[updateIndex];

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="hero-title">
        <img className="home-hero-image" src={siteAssets.heroDj} alt="DJ performing on the Clouds and Cocktails rooftop" />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <span className="hero-kicker">Rooftop · Dubai</span>
          <h1 id="hero-title">Clouds &amp; Cocktails</h1>
          <h2>Dubai Nights, Elevated.</h2>
          <p>Cocktails above the skyline, food that means it,<br />and a Friday night that starts here.</p>
          <div className="hero-actions">
            <button className="button button-solid" onClick={() => onBook("table")}>Book a Table</button>
            <button className="button button-outline" onClick={() => document.getElementById("whats-on")?.scrollIntoView({ behavior: "smooth" })}>Explore Events</button>
          </div>
        </div>
      </section>

      <section className="news-section" id="news">
        <SectionHeading title="News and Updates" />
        <div className="news-stage">
          <div className="news-copy">
            <div className="carousel-arrows" aria-label="News carousel controls">
              <button onClick={() => setUpdateIndex((updateIndex - 1 + updates.length) % updates.length)} aria-label="Previous update"><img src={siteAssets.arrowLeft} alt="" /></button>
              <button onClick={() => setUpdateIndex((updateIndex + 1) % updates.length)} aria-label="Next update"><img src={siteAssets.arrowRight} alt="" /></button>
            </div>
            <span>{update.label}</span>
            <h3>{update.title}</h3>
            <p>{update.detail}</p>
            <button className="button button-solid" onClick={() => onBook("event")}>Get your tickets now</button>
          </div>
          <div className="news-poster-wrap" key={update.image}>
            <img className="news-poster" src={update.image} alt={update.title} />
          </div>
        </div>
      </section>

      <section className="weekly-section" id="whats-on">
        <SectionHeading
          title="What's Going On"
          subtitle="Discover upcoming nights, live entertainment, exclusive events and unforgettable rooftop experiences at C&C."
        />
        <div className="weekly-grid">
          {weeklyEvents.map((event, index) => (
            <article className="weekly-card" key={`${event.label}-${index}`}>
              <img src={event.image} alt="" />
              <div className="weekly-card-footer">
                <div>
                  <span>{event.label}</span>
                  <h3>{event.title}<br />{event.date}</h3>
                  <p>{event.detail}</p>
                </div>
                <button onClick={() => onBook("event")}>Get your tickets now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <SectionHeading
          title="The Experience"
          subtitle="Discover upcoming nights, live entertainment, exclusive events and unforgettable rooftop experiences at C&C."
          dark
        />
        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.title}>
              <img src={siteAssets.terrace} alt="" />
              <div className="experience-overlay" />
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" id="featured">
        <SectionHeading
          title="Featured This Month"
          subtitle="Discover upcoming nights, live entertainment, exclusive events and unforgettable rooftop experiences at C&C."
        />
        <article className="featured-card">
          <img src={siteAssets.featuredNight} alt="DJ performing at Bollywood Night: The Reunion" />
          <div className="featured-shade" />
          <div className="featured-copy">
            <span>Featured This Month</span>
            <h3>Bollywood Night: The Reunion</h3>
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

      <section className="membership-section" id="membership">
        <SectionHeading
          title="Unlock the CNC After Dark"
          subtitle="Priority tables, member-only nights, and a few things we don't advertise."
        />
        <div className="membership-perks">
          {membershipPerks.map((perk) => <span key={perk}>{perk}</span>)}
        </div>
        <button className="button button-solid membership-cta" onClick={() => onBook("member")}>Become a Member</button>
        <div className="membership-gallery" id="membership-gallery">
          <img src={siteAssets.rooftopBar} alt="The CNC rooftop bar" />
          <img src={siteAssets.djNight} alt="CNC dance floor" />
          <img src={siteAssets.burger} alt="Burger from the CNC kitchen" />
          <img src={siteAssets.ladiesNightPoster} alt="CNC ladies night artwork" />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <SectionHeading title="Find Us" dark />
        <div className="contact-layout">
          <dl className="contact-details">
            <div><dt>Address</dt><dd>Carlton Dubai Creek - R floor - 15 Baniyas Rd - Al Rigga - Deira - Dubai - United Arab Emirates</dd></div>
            <div><dt>Hours</dt><dd>Daily · 6 PM - 3AM</dd></div>
            <div><dt>Phone</dt><dd>+971 58190 2942</dd></div>
          </dl>
          <img className="contact-map" src={siteAssets.map} alt="Map showing Clouds and Cocktails at Carlton Dubai Creek" />
        </div>
      </section>

      <footer className="marquee-footer" aria-label="CNC Dubai footer">
        <div className="marquee marquee-magenta"><span>CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp;</span><span aria-hidden="true">CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp;</span></div>
        <div className="marquee marquee-blue"><span>CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp;</span><span aria-hidden="true">CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp;</span></div>
        <div className="marquee marquee-lime"><span>CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp;</span><span aria-hidden="true">CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp; CnC DXB&nbsp;</span></div>
      </footer>
    </main>
  );
}
