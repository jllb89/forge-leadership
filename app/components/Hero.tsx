export default function Hero() {
    return (
      <section id="hero" className="hero">
        <div className="container">
          <div className="content">
            <h1>¿Qué te está deteniendo?</h1>
            <p>La rutina te consume, las oportunidades pasan y las dudas te frenan. ¿Cuánto más vas a esperar para tomar el control de tu vida?</p>
            <p className="font-light">En este campamento, más que una experiencia, encontrarás TU catalizador para transformar tu vida.</p>
            <a href="#contact" className="cta-button font-semibold">Quiero Desafiarme</a>
          </div>
          <div></div> {/* Empty column for larger screens */}
        </div>
      </section>
    );
  }