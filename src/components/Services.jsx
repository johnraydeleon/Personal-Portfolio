import './Services.css';
import { FaPaintBrush, FaCode, FaChartLine, FaGamepad, FaLayerGroup } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "UI/UX Design",
            icon: <FaPaintBrush />,
            description: "Designing intuitive and aesthetically pleasing user interfaces for web and mobile applications."
        },
        {
            title: "Web Development",
            icon: <FaCode />,
            description: "Building responsive and functional websites using modern technologies like HTML, CSS, JavaScript, and React."
        },
        {
            title: "Analytics Consulting",
            icon: <FaChartLine />,
            description: "Transforming raw data into actionable insights through data cleaning, visualization, and dashboard development."
        },
        {
            title: "Game Development",
            icon: <FaGamepad />,
            description: "Creating engaging 2D games using Unity and Phaser with a focus on educational and interactive experiences."
        },
        {
            title: "Full-Stack Development",
            icon: <FaLayerGroup />,
            description: "Developing end-to-end software solutions, handling both front-end interfaces and back-end logic."
        }
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <h2 className="section-title">Services Offered</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
