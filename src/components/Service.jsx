import { useEffect, useRef } from "react";
import "./Service.css";

const services = [
  {
    name: "Fire Risk Assessment",
    desc: "Detailed on-site fire safety audits that uncover risks, document hazards, and provide a complete compliance report in line with Nigerian fire codes.",
    image: "/images/jon-tyson-kR4K8nJ9JRc-unsplash.jpg",
    cta: "Get a Quote",
  },
  {
    name: "Alarm System Installation",
    desc: "Supply and installation of intelligent fire detection and alarm systems — addressable, conventional, or wireless for any building type.",
    image: "/images/salah-regouane-OO2bLxR7ri0-unsplash.jpg",
    cta: "Get a Quote",
  },
  {
    name: "Suppression Systems",
    desc: "Design and installation of sprinkler systems, gaseous suppression, and foam systems tailored to your occupancy and risk profile.",
    image: "/images/IMG_6035.png",
    cta: "Get a Quote",
  },
  {
    name: "Extinguisher Supply & Servicing",
    desc: " From homes to high-rises, we deliver the right extinguisher for the risk  - C02, foam, dry powder, or wet chemical- straigh to your door no delay ",
    image: "/images/dynamic-wang-efMMsZP8Qqw-unsplash.jpg",
    cta: "Get a Quote",
  },
  {
    name: "Compliance Consulting",
    desc: "We guide you through Lagos State Fire Service regulations, NFPA standards, and building code requirements to achieve full certification.",
    image: "/images/mitchell-luo-wXs0mncHyfI-unsplash.jpg",
    cta: "Get a Quote",
  },
];

export default function Services() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el) => {
      if (!el) return null;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="services-section" id="Services">
      <div className="services-header">
        <div className="services-divider" />
        <h2 className="services-title" id="Services">
          Our <span className="servs">Services</span>
        </h2>
      </div>

      {services.map((service, i) => (
        <div key={service.num} ref={(el) => (itemRefs.current[i] = el)}>
          <div className="service-item">
            <div
              className="service-item-bg"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            <div className="service-item-overlay" />
            

            <div className="service-item-content">
              <div className="service-item-inner">
             
                <h3 className="service-item-name">{service.name}</h3>
                <p className="service-item-desc">{service.desc}</p>
                <a href="#Contact" className="service-item-cta">
                  {service.cta} →
                </a>
              </div>
            </div>
          </div>
          {i < services.length - 1 && (
            <div className="service-item-divider" />
          )}
        </div>
      ))}
    </section>
  );
}