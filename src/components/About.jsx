import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-text">
                        <p>
                            I am a fresh graduate with a <strong>Bachelor of Science in Information Technology</strong>, majoring in <strong>Business Analytics</strong>, from Batangas State University – Malvar Campus (Class of 2025).
                        </p>
                        <p>
                            My journey in technology is driven by a desire to earn, grow professionally, and most importantly, to help people and the world by building efficient and sustainable digital solutions.
                        </p>
                        <p>
                            Although I am just starting my professional career, I have honed my skills through rigorous academic projects and personal initiatives. I am committed to continuous learning and am eager to contribute my technical expertise in software development and data analytics to a dynamic team.
                        </p>
                    </div>

                    <div className="education-card">
                        <h3 className="education-title">Education</h3>
                        <div className="education-item">
                            <div className="education-year">2021 - 2025</div>
                            <div className="education-details">
                                <h4>Bachelor of Science in Information Technology</h4>
                                <p>Major in Business Analytics</p>
                                <p className="school-name">Batangas State University – Malvar Campus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
