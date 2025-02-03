export default function VideoSection() {
  return (
    <section id="video" className="video-section">
      <div className="container">
        <h2>Tu momento es ahora</h2>
        <p>Regresa a casa con una versión renovada de ti mismo.</p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
        <a href="#contact" className="cta-button font-semibold">Quiero Desafiarme</a>
      </div>
    </section>
  );
}