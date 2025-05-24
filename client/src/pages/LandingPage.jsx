import { useState } from "react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Telegram</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#apps">Apps</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#privacy">Privacy</a></li>
          </ul>
          <button 
            className="btn-mode-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Telegram</h1>
          <p>The world’s fastest messaging app. Simple. Secure. Powerful.</p>
          <div className="hero-buttons">
            <a href="#" className="btn primary">Get Telegram for PC / Mac</a>
            <a href="#" className="btn secondary">Get Telegram for Android</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for hero image */}
          <img
            src="https://telegram.org/img/t_logo.png"
            alt="Telegram logo"
            width={200}
            height={200}
          />
        </div>
      </header>

      {/* We will add more sections next */}
      
      <style>{`
        /* Reset & base */
        * {
          box-sizing: border-box;
        }
        body, html, #root, .light, .dark {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          height: 100%;
        }

        .light {
          background: #ffffff;
          color: #000;
        }

        .dark {
          background: #1e1e1e;
          color: #e0e0e0;
        }

        /* Navbar */
        .navbar {
          background: var(--nav-bg);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .light .navbar {
          --nav-bg: #ffffff;
        }

        .dark .navbar {
          --nav-bg: #2a2a2a;
        }

        .nav-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0.8rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: #0088cc;
          cursor: pointer;
          user-select: none;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }

        .nav-links li a {
          text-decoration: none;
          color: inherit;
          font-weight: 600;
          transition: color 0.3s;
        }

        .nav-links li a:hover {
          color: #0088cc;
        }

        .btn-mode-toggle {
          background: none;
          border: none;
          font-size: 1.4rem;
          cursor: pointer;
          color: inherit;
          padding: 0 0.5rem;
        }

        /* Hero */
        .hero {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 4rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
          gap: 2rem;
          text-align: center;
        }

        .hero-content {
          flex: 1 1 400px;
          max-width: 500px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 900;
          line-height: 1.1;
          color: #0088cc;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: inherit;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s;
          user-select: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn.primary {
          background-color: #0088cc;
          color: white;
        }

        .btn.primary:hover {
          background-color: #006699;
        }

        .btn.secondary {
          background-color: transparent;
          color: #0088cc;
          border: 2px solid #0088cc;
        }

        .btn.secondary:hover {
          background-color: #0088cc;
          color: white;
        }

        .hero-image {
          flex: 1 1 300px;
        }

        .hero-image img {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          filter: drop-shadow(0 8px 10px rgba(0, 136, 204, 0.2));
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding: 3rem 1rem;
          }

          .hero-content h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
