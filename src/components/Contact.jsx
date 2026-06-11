import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'; 

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault(); 
    setStatus('loading'); 

    emailjs.sendForm('service_3v2ct7v', 'template_b1lgndu', form.current, '-I1XUkDz25opl6M_B')
      .then((result) => {
          setStatus('success'); 
          e.target.reset(); 
      }, (error) => {
          setStatus('error'); 
          setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section className="contact" id="contacto">
      <div className="contactLeft">
        <p className="sectionTitle">CONTACTO</p>
        <h2>¿Creamos algo increíble?</h2>
        <p>Si tienes una idea, un proyecto o quieres conectar conmigo, escríbeme.</p>
        
        <div className="contactInfo">
          <div className="infoCard">
            📩<span>Correo</span>
          </div>
          <div className="infoCard">
            📍<span>Perú</span>
          </div>
          <div className="infoCard">
            ✨<span>Disponible</span>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contactForm form-relative">
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input type="email" name="user_email" placeholder="Correo" required />
        <input type="tel" name="user_phone" placeholder="Número de WhatsApp (Opcional)" />
        <textarea name="message" placeholder="Cuéntame tu idea..." required></textarea>
        
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {/* Mensaje de Error */}
        {status === 'error' && (
          <p className="error-message">
            ❌ Hubo un error al enviar el mensaje. Inténtalo de nuevo.
          </p>
        )}

        {/* Caja de Éxito - Fondo difuminado con Tarjeta Pequeña y Centrada */}
        {status === 'success' && (
          <div className="success-modal">
            <div className="success-card">
              <div className="success-icon">✨</div>
              <h3 className="success-title">¡Mensaje Enviado!</h3>
              <p className="success-text">
                Tu mensaje ha sido recibido con éxito. Me pondré en contacto contigo pronto.
              </p>
              <button type="button" onClick={() => setStatus('')} className="success-btn">
                Aceptar
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;