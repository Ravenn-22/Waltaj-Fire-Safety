import React from "react";
import PartnersMarquee from "../assets/PartnersMarquee";
import "./About.css";
import StatsBento from "../assets/StatsBento";

function About() {
  return (
    <div id="About" className="about-container">
      <div className="about-grid">
        <div className="about-top">
          <span className="about-us">About Us</span>
          <h1 className="about-header">
            Dedicated to safeguarding lives and{" "}
            <span className="about-span">Properties</span>
          </h1>
          <p className="about-p">
            Waltaj Nigeria Limited is a corporation, saddled with the
            objective of providing fire safety equipments and apparatus to
            facilities around the World, which would drastically reduce the risk
            of fire disasters. We ensure fire safety compliance for all our
            clients through the high standards of customer service delivery we
            provide. We specialize in the sales, installation, and maintenance
            of a wide range of fire safety equipment across Nigeria. We are also
            an approved fire safety dealer accredited by the Nigerian Federal
            Fire Service and the Lagos State Fire Service. Our services cater to
            a diverse range of clients, including manufacturing firms, oil and
            gas companies, government agencies, the power sector, ICT providers,
            construction and real estate companies, transportation and aviation
            industries, financial institutions, schools, hotels,
            telecommunications operators, and private individuals.
          </p>
          <div className="about-servs">
            <a href="#Services">
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">Explore Services</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* <div className="about-bottom"></div> */}
      </div>

      {/* stat cards */}
      <div>
        <StatsBento />
      </div>

      {/* partners */}
      <div className="partner">
        <h3 className="partner-head">
          Trusted by More than 100+ partners nationwide
        </h3>
        <PartnersMarquee />
      </div>

      <div className="why-choos">
        <div className="why-choos-bg" />
        <div className="why-choos-overlay" />

        <div className="why-choos-content">
          <div className="cho-top">
            <h2 className="cho">Why Choose Us</h2>
            <p className="cho-p">
              Your safety, our commitment — here is what sets us apart
            </p>
          </div>

          <div className="cho-butts">
            {[
              {
                title: "Safety And Trust",
                desc: "All our engineers are fully certified, and every installation is properly documented and approved to meet regulatory compliance standards.",
              },
              {
                title: "Nationwide Coverage",
                desc: "Headquartered in Lagos, with active project teams across Abuja, Port Harcourt, and Ibadan for reliable nationwide service.",
              },
              {
                title: "Full Lifecycle Management",
                desc: "One trusted partner for the entire process. From design and installation to maintenance — no handoffs.",
              },
              {
                title: "25 Years Experience",
                desc: "Over two decades of hands-on fire safety engineering across residential, commercial, and industrial sectors.",
              },
            ].map((item) => (
              <div className="cho-button" key={item.title}>
                <h3 className="cho-butt-head">{item.title}</h3>
                <p className="cho-butt-p">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
