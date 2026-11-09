import { useState, useRef } from "react";
import "./Testimonials.css";

const AUTOPLAY_MS = 5000;

const TESTIMONIALS = [
  {
    stat: "Full compliance with industry standards",
    quote:
      "We were highly impressed by the professionalism, expertise, and efficiency demonstrated throughout the project. Their team delivered reliable fire safety solutions while ensuring full compliance with industry standards.",
    name: "Mr Ademola Oyebanjo",
    role: "Facilities Manager, First Bank Head Office",
    tag: "Alarm Systems",
    image: "/images/first-bank-nigeria-seeklogo.png",
  },
  {
    stat: "Minimal disruption to daily operations",
    quote:
      "From the initial site assessment to project completion, the team demonstrated exceptional professionalism and technical expertise. Every aspect of the work was carried out efficiently with minimal disruption to our daily operations, delivering a fire protection solution that met our expectations.",
    name: "Mrs Tijani Yetunde",
    role: "Operations Manager, Blackwoods Bar and Hotel",
    tag: "Suppression Systems",
    image: "/images/IMG_0525.jpg",
  },
  {
    stat: "Extinguishers that met safety requirements",
    quote:
      "Our experience with the team was outstanding from start to finish. They supplied high-quality fire extinguishers that met our facility's safety requirements and ensured the entire process was completed efficiently and professionally.",
    name: "Mr Okafor Sunday",
    role: "Site Supervisor, Super Warehouse Facility",
    tag: "Fire Extinguisher Supply",
    image: "/images/Super-eng.jpeg",
  },
  {
    stat: "Service and Supply of extinguishers",
    quote:
      "The team carried out a thorough fire risk assessment of our facility and promptly identified fire extinguishers that required repair or replacement. Their recommendations were practical, the resupply process was efficient, and the quality of service was exceptional.",
    name: "Mr Eguabor Barnabas",
    role: "Plant Manager, AAVA Beverage Facility",
    tag: "Extinguisher Inspection & Resupply",
    image: "/images/AAVA.jpeg",
  },
  {
    stat: "Extinguishers tailored to our operations",
    quote:
      "We were impressed by the quality of the fire extinguishers supplied and the professionalism demonstrated throughout the engagement. The team provided solutions tailored to our operational needs, ensuring compliance with fire safety standards while delivering excellent service.",
    name: "Mr Emmanuel",
    role: "Operations Manager, AFRAB Medical Warehouse",
    tag: "Fire Extinguisher Supply",
    image: "/images/Afrab.jpeg",
  },
  {
    stat: "Passed Oyo State Fire Service inspection",
    quote:
      "They handled our fire suppression upgrade across all floors without disrupting daily operations, and we passed Oyo State Fire Service inspection. The whole process was far smoother than we expected for a building our size.",
    name: "Mr Damilare",
    role: "Operations Manager, International Institute of Tropical Agriculture",
    tag: "Suppression Systems",
    image: "/images/IITA.jpg",
  },
  {
    stat: "Supply of Hanging extinguishers",
    quote:
      "Working with Waltaj across our two warehouse locations was a smooth experience. They understood what each site needed, supplied the hanging extinguishers on schedule, and kept us informed throughout.",
    name: "MR Richard",
    role: "Manager, Pernod Ricard Warehouse",
    tag: "Fireball Extinguisher Supply",
    image: "/images/pernod.jpeg",
  },
];

export default function Testimonials() {
  const total = TESTIMONIALS.length;
  const [active, setActive] = useState(0);
  const touchX = useRef(null);

  const [paused, setPaused] = useState(false);

  const go = (i) => setActive((i + total) % total);

  // swipe support for mobile
  const onTouchStart = (e) => {
    setPaused(true);
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    setPaused(false);
    if (touchX.current === null) return;
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) go(active + (diff > 0 ? 1 : -1));
    touchX.current = null;
  };

  // position of card i relative to the active one: 0 = center, -1 = left, 1 = right...
  const half = Math.floor(total / 2);
  const getOffset = (i) => {
    let diff = (i - active + total) % total;
    if (diff > half) diff -= total;
    return diff;
  };

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Floating decorative balls */}
      <div className="float-dot dot-1" aria-hidden="true" />
      <div className="float-dot dot-2" aria-hidden="true" />
      <div className="float-dot dot-3" aria-hidden="true" />

      <div className="testimonials-header">
        <div className="testimonials-eyebrow">What Our Clients Say</div>
        <h2 className="testimonials-title">
          Feedback from the facilities and teams we've worked with directly.
        </h2>
      </div>

      <div
        className="testimonials-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {TESTIMONIALS.map((t, i) => {
          const offset = getOffset(i);
          if (Math.abs(offset) > 2) return null;

          if (offset === 0) {
            return (
              <article
                className="tcard-active"
                key={`active-${i}`}
                style={{ order: 0 }}
                aria-live="polite"
              >
                <div className="tcard-content">
                  <div className="tcard-head">
                    <span className="tcard-tag">{t.tag}</span>
                    <h3 className="tcard-stat">{t.stat}</h3>
                  </div>
                  <blockquote className="tcard-quote">“{t.quote}”</blockquote>
                  <div className="tcard-chips">
                    <span>{t.name}</span>
                    <span>{t.role}</span>
                  </div>
                </div>
                <div
                  className="tcard-media"
                  style={{ "--bg": `url("${t.image}")` }}
                >
                  <img
                    src={t.image}
                    alt={`${t.name}, ${t.role}`}
                    loading="lazy"
                  />
                </div>
              </article>
            );
          }

          return (
            <button
              type="button"
              key={`side-${i}`}
              className={`tcard-side tcard-side-${Math.abs(offset)}`}
              style={{ order: offset }}
              onClick={() => go(i)}
              aria-label={`Show testimonial from ${t.name}`}
            >
              <img src={t.image} alt="" loading="lazy" />
            </button>
          );
        })}
      </div>

      <div className="testimonials-controls">
        <button
          type="button"
          className="testimonials-arrow"
          onClick={() => go(active - 1)}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="testimonials-dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              type="button"
              key={i}
              className={`testimonials-dot ${i === active ? "testimonials-dot-active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active}
            >
              {i === active && (
                <span
                  className="testimonials-dot-fill"
                  aria-hidden="true"
                  style={{
                    animationDuration: `${AUTOPLAY_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                  onAnimationEnd={() => total > 1 && go(active + 1)}
                />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="testimonials-arrow"
          onClick={() => go(active + 1)}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  );
}
