export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>El campamento que transformará tu vida</h2>
        <p>Inscríbete ahora y comienza tu cambio.</p>
        <div className="contact-grid">
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Nombre" className="form-input" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Apellido" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-group">
              <div className="phone-input">
                <select className="country-code">
                  <option value="+1">+1 (US)</option>
                  <option value="+52">+52 (MX)</option>
                  <option value="+54">+54 (AR)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input type="tel" placeholder="Celular" className="form-input" />
              </div>
            </div>
            <button type="submit" className="cta-button">Registrarme ahora</button>
          </form>
          {/* Logo */}
          <div className="contact-logo">
            <img src="/images/Logo 1.png" alt="Contact Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}