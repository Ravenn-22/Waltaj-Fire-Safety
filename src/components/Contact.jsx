import { useState } from "react"
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      },
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSubmitted(true)
      setLoading(false)
    })
    .catch(() => {
      setError("Something went wrong. Please try again or call us directly.")
      setLoading(false)
    })
  }

  return (
    <section className="contact-section" id="Contact">

      <div className="contact-top">
        <h2 className="contact-heading">
          KNOW SAFETY <span>NO FIRE</span>
        </h2>
        <p className="contact-subtext">
          Reach out today and let our certified engineers assess your facility
          before it's too late.
        </p>
      </div>

      <div className="contact-grid">

        {/* left column — unchanged */}
        <div className="contact-left">
          <div className="contact-info-card">
            <div className="contact-info-card-top">
              <div className="contact-info-icon contact-info-icon-red">📞</div>
              <div>
                <div className="contact-info-label">Call Us</div>
                <div className="contact-info-sublabel">Reach out to us</div>
              </div>
            </div>
            <div className="contact-info-value">
              <a href="tel:+2348023133328">+234 80-231-333-28</a><br />
              <a href="tel:+2348052860861">+234 80-528-608-61</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-card-top">
              <div className="contact-info-icon contact-info-icon-blue">✉️</div>
              <div>
                <div className="contact-info-label">Email Us</div>
                <div className="contact-info-sublabel">For general inquiries</div>
              </div>
            </div>
            <div className="contact-info-value">
              <a href="mailto:WALTAJNIGLTD@gmail.com">WALTAJNIGLTD@gmail.com</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-card-top">
              <div className="contact-info-icon contact-info-icon-red">🚨</div>
              <div>
                <div className="contact-info-label">Emergency Line</div>
                <div className="contact-info-sublabel">Available 24/7</div>
              </div>
            </div>
            <div className="contact-info-value">
              <a href="tel:+2348052860861">+234 80-528-608-61</a>
            </div>
          </div>

          <div className="contact-location-card">
            <div className="contact-location-top">
              <div className="contact-location-dot" />
              <div className="contact-location-title">Our Location</div>
            </div>
            <div className="contact-location-name">Lagos Head Office</div>
            <div className="contact-location-address">
              9, Apostle Afinjuomo Street, Mile 12<br />
              Lagos, Nigeria
            </div>
            <div className="contact-location-tags">
              <span className="contact-location-tag">Lagos</span>
              <span className="contact-location-tag">Site Visits Available</span>
            </div>
          </div>

          <div className="contact-urgent-card">
            <div className="contact-urgent-top">
              <span className="contact-urgent-icon">⚠️</span>
              <span className="contact-urgent-label">Request Urgent Audit</span>
            </div>
            <p className="contact-urgent-desc">
              Facing a compliance deadline or a recent fire scare? Our engineers
              can be on-site within 24 hours for an emergency assessment.
            </p>
            <a href="https://wa.me/2348052860861?text=Hello%2C%20I%20need%20emergency%20fire%20safety%20assistance" target="_blank" rel="noreferrer" className="contact-urgent-btn">
              Book Emergency Audit →
            </a>
          </div>
        </div>

        {/* right column — form */}
        <div className="contact-right">
          <div className="contact-form-title">Send Us A Message</div>
          <div className="contact-form-subtitle">
            Fill in the form and one of our engineers will get back to you within 24 hours.
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>One of our engineers will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 80 0000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="assessment">Fire Risk Assessment</option>
                  <option value="alarm">Alarm System Installation</option>
                  <option value="suppression">Suppression Systems</option>
                  <option value="extinguisher">Extinguisher Supply & Servicing</option>
                  <option value="compliance">Compliance Consulting</option>
                  <option value="urgent">Urgent Audit</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your facility, location, and what you need..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {error && <p className="contact-form-error">{error}</p>}

              <button
                type="submit"
                className="contact-form-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>

      </div>

      <div
        style={{
          textAlign: "center",
          padding: "2px 8px",
          fontSize: "13px",
          fontFamily: "lobster two",
          color: "#888",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Waltaj Nigeria Limited. All rights reserved. Built by{" "}
        <a
          href="https://temitayo-shonaike.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          Raven
        </a>
        .
      </div>
    </section>
  );
}