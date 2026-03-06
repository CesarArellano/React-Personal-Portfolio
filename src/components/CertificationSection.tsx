import { useRef, useState, useEffect } from "react";
import reactPro from "../assets/images/react-pro.svg";
import reactNative from "../assets/images/react-native.svg";
import flutterWeb from "../assets/images/flutter-web.png";
import react from "../assets/images/react.png";
import flutterAdv from "../assets/images/flutter-adv.png";
import flutterInt from "../assets/images/flutter-disenos.png";
import flutter from "../assets/images/flutter.png";
import javascript from "../assets/images/js-moderno.png";
import masterCSS from "../assets/images/master-css.png";
import icoLogo from "../assets/images/ico-logo.png";
import francoPissoLogo from "../assets/images/franco-pisso-logo.png";

const STANDARD_CERTS = [
  {
    title: "React Native: Aplicaciones nativas para iOS y Android",
    date: "June 2023",
    certId: "UC-eb263c96-f9ab-401b-a976-6f21e83be516",
    url: "https://www.udemy.com/certificate/UC-eb263c96-f9ab-401b-a976-6f21e83be516/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: reactNative,
    logoAlt: "React Native",
  },
  {
    title: "Flutter - Móvil: De cero a experto - Edición 2023",
    date: "June 2023",
    certId: "UC-3b36f2ba-c3e0-4ce0-b165-1f4fc7e408cc",
    url: "https://www.udemy.com/certificate/UC-3b36f2ba-c3e0-4ce0-b165-1f4fc7e408cc/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: flutter,
    logoAlt: "Flutter",
  },
  {
    title: "React PRO: Lleva tus bases al siguiente nivel",
    date: "May 2023",
    certId: "UC-fb3ab5aa-7d4c-4368-8c0a-f9d980b3fe3c",
    url: "https://www.udemy.com/certificate/UC-fb3ab5aa-7d4c-4368-8c0a-f9d980b3fe3c/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: reactPro,
    logoAlt: "React Pro",
  },
  {
    title: "Flutter Web: Aplicaciones y páginas web profesionales",
    date: "August 2022",
    certId: "UC-6b7d921a-45dd-4c61-8710-cd9de5c5d404",
    url: "https://www.udemy.com/certificate/UC-6b7d921a-45dd-4c61-8710-cd9de5c5d404/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: flutterWeb,
    logoAlt: "Flutter Web",
  },
  {
    title: "React: De cero a experto ( Hooks y MERN )",
    date: "November 2021",
    certId: "UC-2ac594a2-09a8-48cf-8c4b-92fdefae1c77",
    url: "https://www.udemy.com/certificate/UC-2ac594a2-09a8-48cf-8c4b-92fdefae1c77/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: react,
    logoAlt: "React",
  },
  {
    title: "Flutter Avanzado: Lleva tu conocimiento al siguiente nivel",
    date: "Sept 2021",
    certId: "UC-5bf9db3a-f036-467e-9047-a397bae610a8",
    url: "https://www.udemy.com/certificate/UC-5bf9db3a-f036-467e-9047-a397bae610a8/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: flutterAdv,
    logoAlt: "Flutter Avanzado",
  },
  {
    title: "Flutter Intermedio: Diseños profesionales y animaciones",
    date: "May 2021",
    certId: "UC-93cf4a48-aede-45ea-8425-edff6ccf2cd9",
    url: "https://www.udemy.com/certificate/UC-93cf4a48-aede-45ea-8425-edff6ccf2cd9/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: flutterInt,
    logoAlt: "Flutter Intermedio",
  },
  {
    title: "Flutter: Tu guía completa de desarrollo para IOS y Android",
    date: "May 2021",
    certId: "UC-2a6df4a6-927c-491d-a292-40da182669eb",
    url: "https://www.udemy.com/certificate/UC-2a6df4a6-927c-491d-a292-40da182669eb/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: flutter,
    logoAlt: "Flutter",
  },
  {
    title: "JavaScript Moderno: Guía para dominar el lenguaje",
    date: "April 2021",
    certId: "UC-4b8dfeeb-5693-4fb0-a409-fdad85612ab0",
    url: "https://www.udemy.com/certificate/UC-4b8dfeeb-5693-4fb0-a409-fdad85612ab0/",
    issuer: "Fernando Herrera",
    role: "FullStack Developer",
    logo: javascript,
    logoAlt: "JavaScript",
  },
  {
    title: "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
    date: "June 2021",
    certId: "UC-a27cfc70-6137-4416-a15f-3747aef5eb26",
    url: "https://www.udemy.com/certificate/UC-a27cfc70-6137-4416-a15f-3747aef5eb26/",
    issuer: "Víctor Robles",
    role: "Web Developer",
    logo: masterCSS,
    logoAlt: "Master CSS",
  },
];

function CertIdRow({ certId }: { certId: string }) {
  const [copied, setCopied] = useState(false);
  const displayId = certId.length > 24 ? `${certId.slice(0, 21)}…` : certId;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(certId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="cert-id-row">
      <span className="cert-id-text" title={certId}>
        {displayId}
      </span>
      <button
        type="button"
        className="cert-id-copy"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy certificate ID"}
        title={copied ? "Copied!" : "Copy full ID"}
      >
        {copied ? "✓" : "⎘"}
      </button>
    </div>
  );
}

export const CertificationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`certifications ${isVisible ? "certifications--visible" : ""}`}
      id="certifications"
    >
      <div className="certifications-heading">
        <h2>Licenses and certifications</h2>
        <span className="certifications-heading-accent" aria-hidden="true" />
      </div>

      <div className="certifications-content">
        {/* Spotlight: single full-width featured cert */}
        <div className="cert-spotlight">
          <div className="cert-spotlight-inner cert-featured-teal">
            <div className="cert-featured-left">
              <h3 className="certification-title">High Impact Communication Program</h3>
              <span className="cert-date-pill">June 2025</span>
            </div>
            <div className="cert-featured-logo cert-frosted">
              <img src={icoLogo} alt="Instituto de Comunicación" className="certification-logo certification-logo--institute" />
            </div>
            <div className="cert-featured-right">
              <p className="cert-issuer-name">Adriá Sola Pastor</p>
              <p className="cert-issuer-role">Founder of Instituto de Comunicación (ICO)</p>
            </div>
          </div>
        </div>

        <div className="cert-spotlight">
          <div className="cert-spotlight-inner cert-featured-teal">
            <div className="cert-featured-left">
              <h3 className="certification-title">Soft Skills Course</h3>
              <span className="cert-date-pill">December 2025</span>
            </div>
            <div className="cert-featured-logo cert-frosted">
              <img src={francoPissoLogo} alt="Franco Pisso" className="certification-logo certification-logo--franco" />
            </div>
            <div className="cert-featured-right">
              <p className="cert-issuer-name">Franco Pisso</p>
              <p className="cert-issuer-role">Master's in public speaking, lawyer, and writer</p>
            </div>
          </div>
        </div>

        {/* Standard grid */}
        <div className="certifications-grid">
          {STANDARD_CERTS.map((cert) => (
            <article key={cert.certId} className="cert-card">
              <div className="cert-card-logo">
                <img src={cert.logo} alt={cert.logoAlt} className="certification-logo" />
              </div>
              <h3 className="cert-card-title">{cert.title}</h3>
              <span className="cert-date-pill cert-date-pill--light">{cert.date}</span>
              <div className="cert-card-id">
                <CertIdRow certId={cert.certId} />
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="cert-card-link"
                aria-label={`See certificate for ${cert.title}`}
              >
                <span>See certificate</span>
                <span className="cert-card-link-arrow" aria-hidden="true">→</span>
              </a>
              <div className="cert-card-divider" />
              <p className="cert-card-instructor">
                <span className="cert-card-instructor-name">{cert.issuer}</span>
                <span className="cert-card-instructor-role">{cert.role}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
