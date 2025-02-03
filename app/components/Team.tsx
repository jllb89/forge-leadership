interface TeamMember {
    name: string;
    photo: string;
    resume: string;
  }
  
  const teamMembers: TeamMember[] = [
    { name: 'Jimena Mera', photo: '/images/1.webp', resume: 'Especialista en crecimiento personal y comunitario, reconocida por transformar equipos y personas.' },
    { name: 'Alfredo Arrache', photo: '/images/2.webp', resume: 'Innovador en metodologías de aprendizaje práctico y dinámico' },
    { name: 'Hugo Mera', photo: '/images/3.webp', resume: 'Mentor con experiencia internacional en la formación de líderes en diversos sectores.' },
    { name: 'Carlos Jaquez', photo: '/images/4.webp', resume: 'Experto en desbloquear el potencial personal a través de retos significativos.' },
  ];
  
  export default function Team() {
    return (
      <section id="team" className="team-section">
        <div className="container">
          <h2>Mentores de Alto Impacto</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.photo} alt={member.name} className="team-member-photo" />
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <p>{member.resume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }