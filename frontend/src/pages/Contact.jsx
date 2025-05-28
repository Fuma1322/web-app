import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div>
            <Header />
            <section className="contact">
                <h1>Contact Us</h1>
                <h2>Feel free to reach out</h2>
                <div className="form-contact">
                    <form className="contact-form">
                        <label htmlFor="name">Names:</label>
                        <input type="text" id="name" />

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" />

                        <label htmlFor="phone">Phone (optional):</label>
                        <input type="tel" id="phone" />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4"></textarea>

                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>

                <div className="contact-details">
                    <p>Phone: +266 22342628</p>
                    <p>Email: support@iwbmaseru.com</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
