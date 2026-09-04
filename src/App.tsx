import { useCallback, useEffect, useState } from "react";
import BookingDialog from "./components/BookingDialog";
import LoginDialog from "./components/LoginDialog";
import SiteHeader from "./components/SiteHeader";
import CalendarPage from "./pages/CalendarPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";

type BookingMode = "table" | "event" | "member";
type SitePath = "/" | "/events" | "/events/clouds-after-dark" | "/calendar";

const getPath = (): SitePath => {
  if (window.location.pathname.startsWith("/events/clouds-after-dark")) return "/events/clouds-after-dark";
  if (window.location.pathname.startsWith("/calendar")) return "/calendar";
  if (window.location.pathname.startsWith("/events")) return "/events";
  return "/";
};

const resolvePath = (pathname: string): SitePath => {
  if (pathname.startsWith("/events/clouds-after-dark")) return "/events/clouds-after-dark";
  if (pathname.startsWith("/calendar")) return "/calendar";
  if (pathname.startsWith("/events")) return "/events";
  return "/";
};

export default function App() {
  const [path, setPath] = useState<SitePath>(getPath);
  const [bookingDialog, setBookingDialog] = useState<BookingMode | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [memberName, setMemberName] = useState<string | null>(() => localStorage.getItem("cnc_demo_member"));

  useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((destination: string) => {
    const url = new URL(destination, window.location.origin);
    window.history.pushState({}, "", `${url.pathname}${url.hash}`);
    setPath(resolvePath(url.pathname));

    window.requestAnimationFrame(() => {
      if (url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }, []);

  const login = (name: string) => {
    localStorage.setItem("cnc_demo_member", name);
    setMemberName(name);
  };

  const logout = () => {
    localStorage.removeItem("cnc_demo_member");
    setMemberName(null);
  };

  return (
    <div className="site-shell">
      <SiteHeader
        path={path}
        onNavigate={navigate}
        onLogin={() => setLoginOpen(true)}
        isLoggedIn={memberName !== null}
        onLogout={logout}
      />

      {path === "/events" && <EventsPage onBook={setBookingDialog} onNavigate={navigate} />}
      {path === "/events/clouds-after-dark" && <EventDetailPage onBook={setBookingDialog} onNavigate={navigate} />}
      {path === "/calendar" && <CalendarPage />}
      {path === "/" && <HomePage onBook={setBookingDialog} />}

      <BookingDialog open={bookingDialog !== null} mode={bookingDialog ?? "table"} onClose={() => setBookingDialog(null)} />
      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} onLogin={login} />
    </div>
  );
}
