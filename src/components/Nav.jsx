import { useState, useEffect } from "react";
import "./Nav.css";

const servicesMenu = [
  { label: "Fire Risk Assessment", icon: "🔍", href: "#Services" },
  { label: "Alarm Installation", icon: "🚨", href: "#Services" },
  { label: "Suppression Systems", icon: "💧", href: "#Services" },
  { label: "Compliance Consulting", icon: "📋", href: "#Services" },
];

const productsMenu = [
  { label: "Fire Extinguishers", icon: "🧯", href: "#Products" },
  { label: "FM-200 Systems", icon: "⚗️", href: "#Products" },
  { label: "Alarm Panels", icon: "📟", href: "#Products" },
  { label: "Smoke Detectors", icon: "💨", href: "#Products" },
  { label: "Hose Reels", icon: "🌀", href: "#Products" },
  { label: "Sprinkler Heads", icon: "🔧", href: "#Products" },
];

function DropdownMenu({ label, items }) {
  return (
    <div className="nav-dropdown-wrapper">
      <div className="nav-dropdown-trigger">
        {label}
        <span className="nav-dropdown-arrow">▼</span>
      </div>
      <div className="nav-dropdown">
        {items.map((item, i) => (
          <div key={item.label}>
            <a href={item.href}>
              <span className="nav-dropdown-icon">{item.icon}</span>
              {item.label}
            </a>
            {i < items.length - 1 && <div className="nav-dropdown-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-brand" id="nav-brand">
          <a href="#">
            {" "}
            <img
              src="/images/walt.jpeg"
              alt="brand-img"
              className="brand-img"
            />
          </a>{" "}
          
          {/* <span>Nigeria Limited</span> */}
        </div>

        <ul className="nav-links">
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <DropdownMenu label="Services" items={servicesMenu} />
          </li>
          <li>
            <DropdownMenu label="Products" items={productsMenu} />
          </li>
        </ul>

        <div id="conts">
          <a href="#Contact">Contact Us</a>
        </div>

        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* mobile drawer */}
      <ul className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
        </li>
        <li className="mobile-section-label">Services</li>
        {servicesMenu.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>
              {item.icon} {item.label}
            </a>
          </li>
        ))}
        <li className="mobile-section-label">Products</li>
        {productsMenu.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>
              {item.icon} {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#Contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
