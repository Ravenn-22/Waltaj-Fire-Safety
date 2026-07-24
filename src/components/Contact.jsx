import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="Contact">

      {/* heading */}
      <div className="contact-top">
      
        <h2 className="contact-heading">
          KNOW SAFETY  <span>NO FIRE</span>
        </h2>
        <p className="contact-subtext">
          
          Reach out today and let our certified engineers assess your facility
          before it's too late.
        </p>
      </div>

      <div className="contact-grid">

        {/* left column */}
        <div className="contact-left">

          {/* call */}
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
              <a href="tel:+2347081532426">+234 70-815-324-26</a>
            </div>
          </div>

          {/* email */}
          <div className="contact-info-card">
            <div className="contact-info-card-top">
              <div className="contact-info-icon contact-info-icon-blue">✉️</div>
              <div>
                <div className="contact-info-label">Email Us</div>
                <div className="contact-info-sublabel">For general inquiries</div>
              </div>
            </div>
            <div className="contact-info-value">
              <a href="mailto:WALTAJNIGLTD@gmail.com">
                WALTAJNIGLTD@gmail.com
              </a>
            </div>
          </div>

          {/* hours */}
         {/* emergency line */}
<div className="contact-info-card">
  <div className="contact-info-card-top">
    <div className="contact-info-icon contact-info-icon-red">🚨</div>
    <div>
      <div className="contact-info-label">Emergency Line</div>
      <div className="contact-info-sublabel">Available 24/7</div>
    </div>
  </div>
  <div className="contact-info-value">
    <a href="tel:+2348023133328">+234 80-231-333-28</a>
  </div>
</div>

          {/* location */}
          <div className="contact-location-card">
            <div className="contact-location-top">
              <div className="contact-location-dot" />
              <div className="contact-location-title">Our Location</div>
            </div>
            <div className="contact-location-name">Lagos Head Office</div>
            <div className="contact-location-address">
              12, Rosemary Street, Santorini Uptown<br />
              Lagos, Nigeria
            </div>
            <div className="contact-location-tags">
              <span className="contact-location-tag">Lagos </span>
              {/* <span className="contact-location-tag">Open Mon – Sat</span> */}
              <span className="contact-location-tag">Site Visits Available</span>
            </div>
          </div>

          {/* urgent */}
          <div className="contact-urgent-card">
            <div className="contact-urgent-top">
              <span className="contact-urgent-icon">⚠️</span>
              <span className="contact-urgent-label">Request Urgent Audit</span>
            </div>
            <p className="contact-urgent-desc">
              Facing a compliance deadline or a recent fire scare? Our engineers
              can be on-site within 24 hours for an emergency assessment.
            </p>
            <a href="tel:+2349013986749" className="contact-urgent-btn">
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

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label">Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">Email Address</label>
                <input type="email" placeholder="you@company.com" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label">Phone Number</label>
                <input type="tel" placeholder="+234 80 0000 0000" />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">Company Name</label>
                <input type="text" placeholder="Enter company name" />
              </div>
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">Service Needed</label>
              <select>
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
              <textarea placeholder="Tell us about your facility, location, and what you need..." />
            </div>

            <button type="submit" className="contact-form-submit">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}