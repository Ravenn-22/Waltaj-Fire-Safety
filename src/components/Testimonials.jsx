import "./Testimonials.css"
const TESTIMONIALS = [
  {
    quote:
      "We were highly impressed by the professionalism, expertise, and efficiency demonstrated throughout the project. Their team delivered reliable fire safety solutions while ensuring full compliance with industry standards. we appreciare their commitent to quality and would confidently recommend their services to any organization seeeking a trusted fire safety partner",
    name: "Mr Ademola Oyebanj",
    role: "Facilities Manager",
    company: "First Bank Head Office",
    tag: "Alarm Systems",
    featured: true,
  },
  {
    quote:
      "From the initial site assessment to project completion, the team demonstrated exceptional professionalism and technical expertise. Every aspect of the work was carried out efficiently with minimal disruption to our daily operations, delivering a fire protection solution that met our expectations.",
    name: "Mrs Tijani Yetunde",
    role: "Operations Manager",
    company: "Blackwoods Bar and Hotel",
    tag: "Suppression Systems",
  },
  {
    quote:
      "Our experience with the team was outstanding from start to finish. They supplied high-quality fire extinguishers that met our facility's safety requirements and ensured the entire process was completed efficiently and professionally.",
    name: "Mr Okafor Sunday",
    role: "Site Supervisor",
    company: "Super Warehouse Facility",
    tag: "Fire Extinguisher Suppy",
  },
  {
    quote:
      "The team carried out a thorough fire risk assessment of our facility and promptly identified fire extinguishers that required repair or replacement. Their recommendations were practical, the resupply process was efficient, and the quality of service was exceptional. ",
    name: "Mrs Eguabor Barnabas",
    role: "Plant Manager",
    company: "AAVA Beverage Facility",
    tag: "Fire Risk Assessment, Extinguisher Inspection & Resupply",
  },
  {
    quote:
      "We were impressed by the quality of the fire extinguishers supplied and the professionalism demonstrated throughout the engagement. The team provided solutions tailored to our operational needs, ensuring compliance with fire safety standards while delivering excellent service.",
    name: "Mr Emmanuel",
    role: "Operations Manager",
    company: "AFRAB Medical Warehouse",
    tag: "Fire Extinguisher Suppy",
  },
  {
    quote:
      "They handled our fire suppression upgrade across all floors without disrupting daily operations, and we passed Oyo State Fire Service inspection on the first attempt. The whole process was far smoother than we expected for a building our size.",
    name: "Mr Damilare",
    role: "Operations Manager",
    company: "International Institute of Tropical Agriculture ",
    tag: "Suppression Systems",
  },
]

function FeaturedTestimonial({ item }) {
  return (
    <div className="testimonial-featured">
      <span className="testimonial-quote-mark" aria-hidden="true">
        
      </span>
      <p className="testimonial-featured-quote">{item.quote}</p>
      <div className="testimonial-featured-attribution">
        <div className="testimonial-avatar">{item.name.charAt(0)}</div>
        <div>
          <div className="testimonial-name">{item.name}</div>
          <div className="testimonial-role">
            {item.role}, {item.company}
          </div>
        </div>
        <span className="testimonial-tag">{item.tag}</span>
      </div>
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card-quote">{item.quote}</p>
      <div className="testimonial-card-attribution">
        <div className="testimonial-avatar testimonial-avatar-small">
          {item.name.charAt(0)}
        </div>
        <div>
          <div className="testimonial-name testimonial-name-small">{item.name}</div>
          <div className="testimonial-role testimonial-role-small">
            {item.role}, {item.company}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured) || TESTIMONIALS[0]
  const rest = TESTIMONIALS.filter((t) => t !== featured)

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Floating decorative dots */}
      <div className="float-dot dot-1" aria-hidden="true" />
      <div className="float-dot dot-2" aria-hidden="true" />
      <div className="float-dot dot-3" aria-hidden="true" />

      <div className="testimonials-content">
        <div className="testimonials-top">
          <div className="testimonials-icon">"</div>
          <h2 className="testimonials-heading">
            What Our<span> Clients Say</span>
          </h2>
          <p className="testimonials-subtext">
            Feedback from the facilities and teams we've worked with directly.
          </p>
        </div>

        <FeaturedTestimonial item={featured} />

        <div className="testimonials-grid">
          {rest.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}