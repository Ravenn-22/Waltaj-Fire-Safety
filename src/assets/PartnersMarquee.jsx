import './Part.css'
import React from 'react';


const partners = [
  "/images/first-bank-nigeria-seeklogo.png",
  "/images/germany-embassy-eagle-seeklogo.png",
  "/images/gsk-seeklogo.png",
  "/images/ean-logo-full.png",
  "http://www.iita.org/wp-content/themes/iita/images/IITA-TAA-smallnew.png",
  "http://www.towerplc.com/images/logo.jpg"
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