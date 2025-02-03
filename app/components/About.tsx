interface AboutItem {
    icon: string; // Path to the GIF
    title: string;
    text: string;
  }
  
  const aboutItems: AboutItem[] = [
    { icon: '/images/lider.gif', title: 'Habilidades de liderazgo:', text: 'Perfecciona tu capacidad para inspirar y dirigir. A través de ejercicios prácticos y sesiones con expertos, aprenderás cómo tomar decisiones efectivas, motivar a otros y convertirte en un referente positivo.' },
    { icon: '/images/liderazgo.gif', title: 'Capacidad de rehacerte:', text: 'Aprende a ver los desafíos como oportunidades. Transforma la adversidad en una herramienta para tu crecimiento personal, fortaleciendo tu capacidad para adaptarte y prosperar frente a cualquier situación.' },
    { icon: '/images/equipo.gif', title: 'Conexiones significativas:', text: 'Conoce a personas que comparten tus metas y tu pasión por crecer. Construirás relaciones genuinas y una red de apoyo que podrá impulsarte a alcanzar nuevos horizontes y metas personales.' },
    { icon: '/images/motivacion.gif', title: 'Acción y resultados:', text: 'Define tus objetivos, crea un plan concreto y aprende a ejecutarlo con claridad y enfoque. Saldrás del campamento con herramientas prácticas para transformar tus sueños en logros tangibles.' },
  ];
  
  export default function About() {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <h2>Tu Transformación Comienza Aquí</h2>
          <p>Lo que te llevarás del campamento...</p>
          <div className="about-grid">
            {aboutItems.map((item, index) => (
              <div key={index} className="about-item">
                <img src={item.icon} alt={item.title} className="about-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }