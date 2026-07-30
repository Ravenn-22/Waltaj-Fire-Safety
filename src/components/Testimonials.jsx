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
      "Professional from the first site visit to final sign-off. They worked around our guests without a single disruption to hotel operations.",
    name: "Mrs Tijani Yetunde",
    role: "Operations Manager",
    company: "Blackwoods Bar and Hotel",
    tag: "Suppression Systems",
  },
  {
    quote:
      "Their risk assessment caught gaps we didn't know we had across the warehouse. Genuinely thorough, not just a checkbox exercise.",
    name: "Mr Okafor Sunday",
    role: "Site Supervisor",
    company: "Super Warehouse Facility",
    tag: "Risk Assessment",
  },
  {
    quote:
      "We've now used them on two separate facilities. Consistent quality both times, and they're easy to reach when something needs attention.",
    name: "Mrs Eguabor Barnabas",
    role: "Plant Manager",
    company: "AAVA Beverage Facility",
    tag: "Fire Extinguisher Supply",
  },
  {
    quote:
      "They secured our compliance certification faster than we'd budgeted for, and explained every requirement in plain terms along the way.",
    name: "Mr Emmanuel",
    role: "Compliance Officer",
    company: "AFRAB Medical Warehouse",
    tag: "Compliance Consulting",
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