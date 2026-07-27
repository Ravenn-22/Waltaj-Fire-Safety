import './Part.css'
import React from 'react';


const partners = [
  "/images/first-bank-nigeria-seeklogo.png",
  "/images/german.jpeg",
  "/images/gsk-seeklogo.png",
  "/images/ean-logo-full.png",
  "/images/AAVA.jpeg",
  "/images/Afrab.jpeg",
  "/images/blackwood.jpeg",
  "/images/Lifegate.jpeg",
  "/images/pernod.jpeg",
  "/images/Super-eng.jpeg",
  "/images/Sylma.jpeg",
  "/images/Caring.jpeg",
  "http://www.iita.org/wp-content/themes/iita/images/IITA-TAA-smallnew.png"
];

export default function PartnersMarquee() {
  return (
    <div className="partners-wrapper">
      {/* <h2 className="partners-title">Trusted By Industry Leaders</h2> */}

      <div className="marquee">
        <div className="marquee-track">
          {[...partners, ...partners].map((logo, i) => (
            <div className="logo-item" key={i}>
              <img src={logo} alt="partner logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}