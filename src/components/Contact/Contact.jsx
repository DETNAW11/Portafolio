// import contactImg from "../../assets/img/contact-img.svg";
import contactImg from "../../assets/img/virr.svg"
// import 'animate.css';
import './Contact.css';

function Contact() {

  return (
    <div className="contact-info" id="connect">
      <div className="contact-img">
        <img src={contactImg} alt="Contacto" />
      </div>
      <div className="contact-details-box">
        <div className="contact-details">
          <h3>Contact</h3>
          <a className="taa">
            <span className="tagline"></span>
            <span className="tagline"></span>
            <span className="tagline"></span>
            <span className="tagline"></span>Correo: alejito.prieto05@gmail.com
          </a>
          <a className="taa">
            <span className="tagline"></span>
            <span className="tagline"></span>
            <span className="tagline"></span>
            <span className="tagline"></span>Teléfono: +573208605403
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;