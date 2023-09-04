import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/img/virr.svg"
import './ContactForm.css'; // Importa tu archivo de estilos CSS

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_frwze3n",
                "template_cz58wh7",
                form.current,
                "Ry-jfoUxqfDrH0PiC"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-info" id="connect">
            <div className="contact-img">
                <img src={contactImg} alt="Contact Us" />
            </div>
            <div className="contact-details-box">
                <h3 className="contact-details">Contact Me</h3> {/* Usa la clase 'contact-details' para el encabezado */}
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
