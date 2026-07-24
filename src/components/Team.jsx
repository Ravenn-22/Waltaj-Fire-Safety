import "./Team.css";

const founder = {
  name: " Tijani Omobowale Waltaj",
  role: "Founder & Managing Director",
  bio: "With over 25 years at the forefront of fire safety engineering in Nigeria, he has led Waltaj Fire Safety to become one of the most trusted names in the industry — delivering certified solutions to over 15,000 facilities across all 36 states.",
  badges: ["NFPA Certified", "Lagos State Licensed", "Federal Fire Service Accredited", "ISO Certified"],
  initials: "AW",
};

const engineers = [
  {
    name: "Engr. Tijani Olajuwon",
    role: "Lead Fire Systems Engineer",
    badges: ["NFPA Certified", "Suppression Systems"],
    initials: "TO",
  },
  {
    name: "Engr. xoxo Adeniyi",
    role: "Alarm & Detection Specialist",
    badges: ["Addressable Systems", "Lagos State Licensed"],
    initials: "xa",
  },
  {
    name: "Engr. Tijani Temitayo",
    role: "Compliance & Risk Consultant",
    badges: ["CFPS Certified", "Risk Assessment"],
    initials: "TT",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <h2 className="team-header">Meet The Team</h2>
      <p className="team-subheader">
        Experienced engineers and consultants dedicated to keeping you safe.
      </p>

      {/* founder */}
      <div className="team-founder">
        <div className="team-founder-image">
         <img src="src/assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="" />
          <div className="team-founder-image-placeholder">
            {founder.initials}
          </div>
        </div>

        <div className="team-founder-content">
          <div className="team-founder-tag">Founder & MD</div>
          <h2 className="team-founder-name">{founder.name}</h2>
          <div className="team-founder-role">{founder.role}</div>
          <p className="team-founder-bio">{founder.bio}</p>
          <div className="team-badges">
            {founder.badges.map((badge) => (
              <span className="team-badge" key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* engineers */}
      <div className="team-engineers">
        {engineers.map((eng) => (
          <div className="team-engineer-card" key={eng.name}>
            <div className="team-engineer-image">
             <img src="src/assets/chandler-cruttenden-bPUvUVxPzGE-unsplash.jpg" alt="" />
              <div className="team-engineer-image-placeholder">
                {eng.initials}
              </div>
            </div>
            <div className="team-engineer-content">
              <div className="team-engineer-name">{eng.name}</div>
              <div className="team-engineer-role">{eng.role}</div>
              <div className="team-engineer-badges">
                {eng.badges.map((badge) => (
                  <span className="team-engineer-badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}