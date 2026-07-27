import "./Products.css";

const products = [
  {
    name: "Fire Extinguishers",
    desc: "Portable and wheeled extinguishers for all classes of fire — ABC dry powder, CO2, foam, and wet chemical types available.",
    icon: <img src="/images/ploegerson-K_MhX-YKuCg-unsplash.jpg" alt="" />,
    tag: "Supply & Service",
  },
  {
    name: "FM-200 Systems",
    desc: "Clean agent gaseous suppression systems ideal for server rooms, control rooms, and areas where water damage is unacceptable.",
    icon: <img src="/images/albert-stoynov-WMyhL1ya_NM-unsplash.jpg" alt="" srcset="" />,
    tag: "Supply & Install",
  },
  {
    name: "Alarm Panels",
    desc: "Addressable and conventional fire alarm control panels for buildings of all sizes — fully programmable and expandable.",
    icon: <img src="/images/chris-porter--At4vx7KbAI-unsplash.jpg" alt="" srcset="" />,
    tag: "Supply & Install",
  },
  {
    name: "Smoke Detectors",
    desc: "Optical, ionisation, and multi-sensor detectors for early fire detection in residential, commercial, and industrial spaces.",
    icon: <img src="/images/ymzdcs-mhu7AvGCNLM-unsplash.jpg" alt="" srcset="" />,
    tag: "Supply & Install",
  },
  {
    name: "Hose Reels",
    desc: "Fixed and swing-type hose reel systems with full installation and commissioning service for commercial buildings.",
    icon: <img src="/images/david-trinks-Bi6t4Gp1cDA-unsplash.jpg" alt="" srcset="" />,
    tag: "Supply & Install",
  },
  {
    name: "Sprinkler Heads",
    desc: "Pendant, upright, and concealed sprinkler heads for automatic suppression systems — all pressure-tested and certified.",
    icon: <img src="/images/aleksey-shkitenkov-YWRDfkedXvo-unsplash.jpg" alt="" srcset="" />,
    tag: "Supply & Install",
  },
];

export default function Products() {
  return (
    <section className="products-section" id="Products">
      <h2 className="products-header">Our Products</h2>
      <p className="products-subheader">
        Certified fire safety equipment supplied, installed, and maintained by our engineers.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-card-image">
              <div className="product-placeholder">
                <span className="product-placeholder-icon">{product.icon}</span>
                <span className="product-placeholder-text">Image Coming Soon</span>
              </div>
            </div>
            <div className="product-card-content">
              <div className="product-card-name">{product.name}</div>
              <p className="product-card-desc">{product.desc}</p>
              <div className="product-card-footer">
                <span className="product-card-tag">{product.tag}</span>
                <a href="#Contact" className="product-card-cta">
                  Request Quote 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}