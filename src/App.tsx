import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import MyBookings from "./components/MyBookings";
import EventsGrid from "./components/EventsGrid";
import VenueFeatures from "./components/VenueFeatures";
import GallerySection from "./components/GallerySection";
import MarqueeFooter from "./components/MarqueeFooter";
import TicketModal from "./components/TicketModal";
import EventDetailsDrawer from "./components/EventDetailsDrawer";
import { eventsData } from "./data";
import { EventItem, Ticket } from "./types";

export default function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDetailsEvent, setSelectedDetailsEvent] = useState<EventItem | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Find Lena Brooks event for spotlight
  const lenaBrooksEvent = eventsData.find((e) => e.id === "lena-brooks") || eventsData[2];

  // Load bookings from local storage on load
  useEffect(() => {
    const saved = localStorage.getItem("cnc_bookings_pass");
    if (saved) {
      try {
        setTickets(JSON.parse(saved));
      } catch (err) {
        console.error("Error loading tickets", err);
      }
    }
  }, []);

  // Sync bookings to local storage on change
  const handleBookSuccess = (newTicket: Ticket) => {
    const updated = [...tickets, newTicket];
    setTickets(updated);
    localStorage.setItem("cnc_bookings_pass", JSON.stringify(updated));
  };

  const handleCancelTicket = (id: string) => {
    const filtered = tickets.filter((t) => t.id !== id);
    setTickets(filtered);
    localStorage.setItem("cnc_bookings_pass", JSON.stringify(filtered));
  };

  const triggerBooking = (event: EventItem) => {
    setSelectedEvent(event);
    setIsBookingOpen(true);
  };

  const triggerDetails = (event: EventItem) => {
    setSelectedDetailsEvent(event);
    setIsDetailsOpen(true);
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen relative selection:bg-brand-neon selection:text-black">
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* 2. Seamless Diagonal split Hero section */}
      <Hero />

      {/* 3. News Spotlight section */}
      <NewsSection
        lenaEvent={lenaBrooksEvent}
        onOpenModal={triggerBooking}
      />

      {/* 4. Active booking pass dashboard (appears only when user has booked tickets!) */}
      <MyBookings
        tickets={tickets}
        onCancelTicket={handleCancelTicket}
      />

      {/* 5. Events Calendar grid */}
      <EventsGrid
        events={eventsData}
        onOpenModal={triggerBooking}
        onOpenDetails={triggerDetails}
      />

      {/* 6. Venue features list columns */}
      <VenueFeatures />

      {/* 7. Interactive optical gallery */}
      <GallerySection />

      {/* 8. Footer marquee rows (Opposite multi-directional loops) */}
      <MarqueeFooter />

      {/* Interactive Transaction Modal */}
      <TicketModal
        event={selectedEvent}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onBookSuccess={handleBookSuccess}
      />

      {/* Details Side-Drawer panel */}
      <EventDetailsDrawer
        event={selectedDetailsEvent}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onBookTickets={triggerBooking}
      />
    </div>
  );
}
