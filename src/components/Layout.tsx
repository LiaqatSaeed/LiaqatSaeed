import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/profile";
import { useTheme } from "../hooks";
import ScrollToTop from "./ScrollToTop";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" }
];

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/">
            <img
              className="brand-avatar"
              src="/Liaqat_saeed.jpeg"
              alt="Liaqat Saeed"
            />
            <span className="brand-name">{profile.name}</span>
          </NavLink>
          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <button
        className="theme-fab"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        type="button"
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? (
          <svg
            className="theme-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 4.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1V6a1 1 0 0 1-2 0V4.5Zm0 13a1 1 0 0 1 1 1V20a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1Zm7.5-5.5a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-17 0a1 1 0 0 1 1-1H5a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1Zm13.02-5.52a1 1 0 0 1 1.42 0l.06.06a1 1 0 1 1-1.42 1.42l-.06-.06a1 1 0 0 1 0-1.42Zm-10.1 10.1a1 1 0 0 1 1.42 0l.06.06a1 1 0 1 1-1.42 1.42l-.06-.06a1 1 0 0 1 0-1.42Zm10.16 1.48a1 1 0 0 1 0-1.42l.06-.06a1 1 0 1 1 1.42 1.42l-.06.06a1 1 0 0 1-1.42 0Zm-10.1-10.1a1 1 0 0 1 0-1.42l.06-.06a1 1 0 1 1 1.42 1.42l-.06.06a1 1 0 0 1-1.42 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            className="theme-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M20.5 15.6A8.5 8.5 0 0 1 8.4 3.5a1 1 0 0 1 1.2 1.2 6.5 6.5 0 1 0 9.7 9.7 1 1 0 0 1 1.2 1.2Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      <ScrollToTop />
      <Outlet />

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="footer-links">
            <NavLink to="/hire-full-stack-developer">Hire Full-Stack</NavLink>
            <NavLink to="/hire-react-developer">Hire React</NavLink>
            <NavLink to="/automation-engineer">Automation</NavLink>
            <NavLink to="/remote-software-engineer">Remote Engineer</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
