export const WorkSection = () => {
  const experience = [
    {
      company: 'Nearfleet Inc',
      location: 'Mexico City',
      role: 'Full Stack Software Engineer',
      period: 'June 2024 – Present',
      highlights: [
        'Designed and led full platform reconstruction (Flutter + Django), tripling production speed.',
        'Led 3-person engineering team through migration with zero data loss.',
        'Introduced n8n for workflow automation; Azure & Docker for scalable infrastructure.',
        'Tech: Flutter, Django, Azure, Docker, n8n, Sentry, GraphQL, CI/CD.',
      ],
    },
    {
      company: 'Borderless AI',
      location: 'Mexico City',
      role: 'Software Engineer — Mobile & Web',
      period: 'Aug 2023 – Apr 2024',
      highlights: [
        'Introduced unit/widget tests and GitLab CI/CD; built Employer of Record Flutter app.',
        'Integrated Mixpanel and DataDog for analytics and production logging.',
        'Collaborated with Product, Design, and Engineering across 4 countries (Agile/Scrum).',
        'Tech: Flutter, Firebase, React, TypeScript, AWS, DataDog, Mixpanel.',
      ],
    },
    {
      company: 'Gtec Software',
      location: 'Mexico City',
      role: 'Mobile App Developer — Mobile & Web',
      period: '2021 – 2023',
      highlights: [
        'Delivered solutions for Soy Cliente (GNP), Tekae, and Ganado Bravo (Grupo BAL).',
        'Coordinated frontend for leading livestock management system (Mexico & Spain).',
        'Refactored legacy codebases to reduce technical debt and enable faster iteration.',
        'Tech: Flutter, GCP, Firebase, REST APIs.',
      ],
    },
    {
      company: 'YouTube — César Arellano',
      location: 'Mexico City',
      role: 'Content Creator: Mobile & Web Development',
      period: '2021 – Present',
      highlights: [
        'Educational community across Latin America focused on Flutter and mobile development.',
        'Consistent commitment to knowledge-sharing, mentorship, and engineering trends.',
      ],
    },
  ];

  return (
    <section className="work experience-section" id="work">
      <div className="heading">
        <h2>Professional experience</h2>
        <p>Roles and impact across parcel logistics, international HR, and product development.</p>
      </div>
      <div className="experience-list">
        {experience.map((job, i) => (
          <article key={i} className="experience-card">
            <div className="experience-header">
              <h3>{job.company}</h3>
              <span className="experience-period">{job.period}</span>
            </div>
            <p className="experience-role">{job.role} · {job.location}</p>
            <ul className="experience-highlights">
              {job.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="heading-btn">
        <a href="https://github.com/CesarArellano?tab=repositories" target="_blank" className="btn-view hoverable" rel="noreferrer">View more on GitHub</a>
      </div>
    </section>
  );
};
