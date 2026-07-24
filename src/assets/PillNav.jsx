import { useState } from "react";
import "./PillNav.css";

const tabs = ["Overview", "Services", "Projects", "About", "Contact"];

export default function PillNav() {
  const [active, setActive] = useState("Overview");

  return (
    <nav className="pill-nav">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`pill-nav__btn ${tab === active ? "pill-nav__btn--active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}