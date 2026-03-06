import img1 from "../assets/images/aboutMe.png";
import cv from "../assets/documents/cv.pdf";

const TECH_PILLS = ["Flutter", "React", "Django", "Azure", "Docker"];

export const AboutMeSection = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">
            About Me
          </h2>
      <div className="about-inner">
        <div className="about-col-left">
          <div className="about-body">
          <h3>
            Full stack software engineer with 5 years building high-impact mobile and web products.
          </h3>
            <p>
              I design systems from scratch, lead cross-functional teams, and deliver measurable results — including a complete platform migration that tripled production speed and accelerated the development cycle by 50%.
            </p>
            <p>
              My experience spans parcel logistics, international HR recruitment, and service payments. I work with Flutter, React, Django, Azure, Docker, and agile methodologies, and I care deeply about clean architecture, engineering excellence, and mentoring.
            </p>
            <p>
              I hold a B.S. in Computer Science and Telecommunications Engineering from Universidad Iberoamericana (Mexico City).
            </p>
            <p>
              Outside work, I build an educational community across Latin America on my YouTube channel{" "}
              <a className="about-link" href="https://youtube.com/@cesarmauricio.arellano" target="_blank" rel="noreferrer">
                César Arellano
              </a>
              , teaching Flutter and mobile development.
            </p>
          </div>
          <div className="about-pills">
            {TECH_PILLS.map((tech) => (
              <span key={tech} className="about-pill">
                {tech}
              </span>
            ))}
          </div>
          <div className="about-cta">
            <a className="about-btn-primary" href={cv} target="_blank" rel="noreferrer">
              <span className="about-btn-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              Download my CV
            </a>
            <a className="about-btn-ghost" href="#work">
              View My Work →
            </a>
          </div>
        </div>
        <div className="about-col-right">
          <div className="about-visual-wrap">
            <div className="about-img-clip">
              <img src={img1} alt="César Arellano" className="about-img" />
            </div>
            <div className="about-badge">5+ years experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
