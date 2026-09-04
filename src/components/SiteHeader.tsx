import { useEffect, useState } from "react";

type SiteHeaderProps = {
  path: string;
  onNavigate: (destination: string) => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
};

const links = [
  { label: "Events", destination: "/events" },
  { label: "Menu", destination: "/#experience" },
  { label: "Gallery", destination: "/#membership-gallery" },
  { label: "Membership", destination: "/#membership" },
  { label: "Contact", destination: "/#contact" },
];

export default function SiteHeader({ path, onNavigate, onLogin, isLoggedIn, onLogout }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  if (path.startsWith("/events/")) {
    return (
      <header className="site-header site-header-detail">
        <button className="brand" onClick={() => onNavigate("/")} aria-label="Clouds and Cocktails home">CNC.DBX</button>
        <button className="back-events-button" onClick={() => onNavigate("/events")}>Back to Events</button>
      </header>
    );
  }

  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate("/")} aria-label="Clouds and Cocktails home">
        CNC.DBX
      </button>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
      </button>

      <nav id="primary-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"}>
        {links.map((link) => (
          <button
            key={link.label}
            className={link.label === "Events" && path.startsWith("/events") ? "is-active" : ""}
            onClick={() => onNavigate(link.destination)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button className="login-button" onClick={isLoggedIn ? onLogout : onLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </header>
  );
}
