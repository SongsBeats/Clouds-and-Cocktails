import { FormEvent, useEffect, useState } from "react";

type BookingDialogProps = {
  open: boolean;
  mode: "table" | "event" | "member";
  onClose: () => void;
};

const dialogCopy = {
  table: { eyebrow: "Rooftop reservations", title: "Book a table", action: "Request a table" },
  event: { eyebrow: "CNC after dark", title: "Get event entry", action: "Request tickets" },
  member: { eyebrow: "Private access", title: "Become a member", action: "Join the list" },
};

export default function BookingDialog({ open, mode, onClose }: BookingDialogProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const copy = dialogCopy[mode];

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="booking-dialog" role="dialog" aria-modal="true" aria-label={copy.title} onMouseDown={(event) => event.stopPropagation()}>
        <button className="dialog-close" onClick={onClose} aria-label="Close dialog">×</button>
        {submitted ? (
          <div className="dialog-success">
            <span>Request received</span>
            <h2>See you above the city.</h2>
            <p>Our team will confirm the details with you shortly.</p>
            <button className="button button-solid" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <span className="dialog-eyebrow">{copy.eyebrow}</span>
            <h2>{copy.title}</h2>
            <label>
              Name
              <input required name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Preferred date
              <input required type="date" name="date" />
            </label>
            <button className="button button-solid dialog-submit" type="submit">{copy.action}</button>
          </form>
        )}
      </div>
    </div>
  );
}
