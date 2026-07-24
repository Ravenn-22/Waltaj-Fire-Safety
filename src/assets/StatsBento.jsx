import "./StatsBento.css";

export default function StatsBento() {
  return (
    <section className="bento-section">
      <div className="bento-label">By The Numbers</div>
      <div className="bento-divider" />
      <h2 className="bento-header">25 Years Of Keeping Nigeria Safe</h2>

      <div className="bento-grid">

        {/* top left — image with stat overlay */}
        <div
          className="bento-card bento-card-img"
          style={{ backgroundImage: "url('src/assets/tanya-paquet-wjHdeYmI-XU-unsplash.jpg')" }}
        >
          <div className="bento-card-body">
            <span className="bento-tag">Track Record</span>
            <div className="bento-stat-num">15,840+</div>
            <div className="bento-stat-label">
              Projects completed across Nigeria
            </div>
          </div>
        </div>

        {/* top right — image with stat overlay */}
        <div
          className="bento-card bento-card-img"
          style={{ backgroundImage: "url('src/assets/mitchell-luo-wXs0mncHyfI-unsplash.jpg')" }}
        >
          <div className="bento-card-body">
            <span className="bento-tag">Coverage</span>
            <div className="bento-stat-num">36</div>
            <div className="bento-stat-label">
              States covered — nationwide service delivery
            </div>
          </div>
        </div>

        {/* bottom left — solid color */}
        <div className="bento-card bento-card-red bento-card-small">
          <div className="bento-card-body">
            <span className="bento-tag">Experience</span>
            <div className="bento-stat-num">25 YRS</div>
            <div className="bento-stat-label">
              Trusted fire safety partner since 1999
            </div>
          </div>
        </div>

        {/* bottom right — image with overlay */}
        <div
          className="bento-card bento-card-img bento-card-wide"
          style={{ backgroundImage: "url('src/assets/adeel-zaheer-4l6yPIuK9oc-unsplash.jpg')" }}
        >
          <div className="bento-card-body">
            <span className="bento-tag">Safety Record</span>
            <div className="bento-stat-num">0</div>
            <div className="bento-stat-label">
              Incidents recorded under our watch
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}