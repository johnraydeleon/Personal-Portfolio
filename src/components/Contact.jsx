import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container contact-container">
                <h2 className="section-title">Contact Me</h2>
                <p className="contact-subtitle">
                    Feel free to reach out for opportunities or collaborations.
                </p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon"><FaEnvelope /></div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <a href="mailto:deleon.johnray23@gmail.com">deleon.johnray23@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><FaPhone /></div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <a href="tel:+639515610675">+63 951 561 0675</a>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <h3>Connect with me</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/johnraydeleon" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/johnraydeleon" target="_blank" rel="noopener noreferrer" className="social-link github">
                                    <FaGithub />
                                </a>
                                <a href="https://www.facebook.com/DeleonjohnRay23" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
