const partners = [
    '/images/p1.png',
    '/images/p2.png',
    '/images/p3.png',
    '/images/p4.png',
    '/images/p5.png',
    '/images/p6.png',
    '/images/p7.png',
  ];
  
  export default function Partners() {
    return (
      <section id="partners" className="partners-section">
        <div className="container">
          <h2>Nuestros socios y colaboradores</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }