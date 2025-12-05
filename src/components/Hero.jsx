import './Hero.css';
import profileImage from '../assets/image/IMG_20230209_155338_987.jpg';


const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-title">John Ray L. De Leon</h1>
                    <h2 className="hero-subtitle">
                        Fresh IT Graduate <span className="separator">|</span> Business Analytics <span className="separator">|</span> Software & Web Developer
                    </h2>
                    <p className="hero-description">
                        A Bachelor of Science in Information Technology graduate with a specialization in Business Analytics, possessing a strong foundation in software development, data analytics, and systems analysis. Demonstrates a disciplined approach to problem-solving and a commitment to continuous technical improvement. Oriented toward delivering efficient, well-structured, and sustainable technology solutions that support organizational and user needs.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={profileImage} alt="John Ray L. De Leon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
