
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="paypal-page">

      {/* Navigation Bar */}
      <header className="navbar">

        <div className="navbar-left">

          <img
            className="paypal-logo"
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
            alt="PayPal"
          />

          <nav className="nav-links">
            <div className="nav-item">
              Personal <span className="arrow"></span>
            </div>

            <div className="nav-item">
              Business <span className="arrow"></span>
            </div>

            <div className="nav-item">
              Partners <span className="arrow"></span>
            </div>

            <div className="nav-item">
              Useful Info <span className="arrow"></span>
            </div>
          </nav>

        </div>

        <div className="navbar-right">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>

      </header>

      {/* Main Hero Section */}
      <main className="hero">

        <div className="toggle-container">
          <div className="toggle-option">Personal</div>
          <div className="toggle-option active">Business</div>
        </div>

        <section className="hero-content">

          <h1>PayPal Open</h1>

          <h2>
            One platform for your business needs
          </h2>

          <p>
            PayPal Open unifies your PayPal business solutions to help
            you get paid, get growing, and get ahead.
          </p>

          <div className="hero-buttons">
            <button className="hero-signup">
              Sign Up
            </button>

            <button className="contact-btn">
              Contact Sales
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
