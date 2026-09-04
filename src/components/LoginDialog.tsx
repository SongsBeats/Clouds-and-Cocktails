import { FormEvent, useEffect, useState } from "react";

export const demoAccount = {
  email: "member@cnc.dxb",
  password: "Clouds2026!",
  name: "CNC Member",
};

type LoginDialogProps = {
  open: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
};

export default function LoginDialog({ open, onClose, onLogin }: LoginDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setEmail("");
      setPassword("");
      setError("");
    }
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

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (email.trim().toLowerCase() !== demoAccount.email || password !== demoAccount.password) {
      setError("Email or password is incorrect.");
      return;
    }
    onLogin(demoAccount.name);
    onClose();
  };

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="booking-dialog login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="dialog-close" onClick={onClose} aria-label="Close login">×</button>
        <form onSubmit={submit}>
          <span className="dialog-eyebrow">Member access</span>
          <h2 id="login-title">Welcome back</h2>
          <div className="login-demo">
            <strong>Demo login</strong>
            <span>{demoAccount.email}</span>
            <span>{demoAccount.password}</span>
          </div>
          <label>
            Email
            <input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="member@cnc.dxb" />
          </label>
          <label>
            Password
            <input required type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" />
          </label>
          {error && <p className="login-error" role="alert">{error}</p>}
          <button className="button button-solid dialog-submit" type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
