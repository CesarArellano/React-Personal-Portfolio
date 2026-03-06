import service1 from '../assets/images/icon1.png';
import service2 from '../assets/images/icon2.png';
import service3 from '../assets/images/icon3.png';
import service4 from '../assets/images/icon4.png';

export const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="heading white">
        <h2>What I do</h2>
      </div>
      <div className="content">
        <div className="servicesBx">
          <img src={ service1 } alt="Full Stack" />
          <h2>Full Stack Development</h2>
          <p>End-to-end product development with React, TypeScript, and Django (Python). I build REST and GraphQL APIs, design frontend and backend systems, and ship features that scale — from parcel logistics platforms to HR and payment products.</p>
        </div>
        <div className="servicesBx2">
          <img src={ service2 } alt="Mobile" />
          <h2>Mobile & Web</h2>
          <p>Advanced Flutter/Dart for iOS and Android, plus React and TypeScript for web. I've delivered production apps for enterprise clients, international HR (EOR), and field operations, with Firebase, REST APIs, and modern tooling.</p>
        </div>
        <div className="servicesBx3">
          <img src={ service3 } alt="Architecture" />
          <h2>System Design & Architecture</h2>
          <p>Clean Architecture, microservices, and distributed systems. I've led full platform rebuilds, replaced legacy monoliths with scalable solutions, and introduced observability (Sentry, DataDog) and automation (n8n, CI/CD) to improve reliability and velocity.</p>
        </div>
        <div className="servicesBx4">
          <img src={ service4 } alt="Leadership" />
          <h2>Technical Leadership & Mentoring</h2>
          <p>I lead small engineering teams through planning, code reviews, and delivery. I advocate for quality (TDD, automated pipelines), AI-assisted development with strict reviews, and knowledge-sharing — including educational content for developers across Latin America.</p>
        </div>
      </div>
    </section>
  )
}
