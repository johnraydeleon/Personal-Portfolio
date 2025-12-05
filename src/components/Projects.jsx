import { useState } from 'react';
import './Projects.css';
import detaxScreenshot from '../assets/image/Screenshot 2025-12-04 035104.png';
import powerBiProject from '../assets/image/powerBiProjects2025.png';
import dentalImage from '../assets/image/dentalimage.png';
import easybankImage from '../assets/image/easybank.png';
import inventoryImage from '../assets/image/inventoryManagement.png';
import spotifyImage from '../assets/image/spotify.jpg';
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "DETAX – Educational Programming Game",
            description: "2D educational game developed in Unity to help IT students improve programming and debugging skills. Features interactive challenges, character control, level progression, feedback system, and progress tracking.",
            impact: "Improves understanding of sequences, loops, and conditionals through gameplay.",
            tech: ["Unity", "C#"],
            image: "game-dev",
            imageUrl: detaxScreenshot,
            features: [
                "Interactive programming challenges",
                "Character control mechanics",
                "Progressive difficulty levels",
                "Real-time feedback system",
                "Progress tracking dashboard"
            ]
        },
        {
            title: "Business Analytics Dashboard",
            description: "Comprehensive dashboard for data-driven decision-making. Integrates multiple data sources and highlights trends and performance metrics.",
            impact: "Supports informed business and organizational decisions.",
            tech: ["Power BI", "Excel", "SQL"],
            image: "analytics",
            imageUrl: powerBiProject,
            features: [
                "Multi-source data integration",
                "Interactive visualizations",
                "Trend analysis tools",
                "Performance metrics tracking",
                "Custom reporting capabilities"
            ]
        },
        {
            title: "Dental Appointment Reservation System",
            description: "Desktop application for managing dental appointments. Includes appointment booking, notifications, and data management.",
            impact: "Streamlines clinic workflows.",
            tech: ["VB.NET", "SQL Server"],
            image: "desktop-app",
            imageUrl: dentalImage,
            features: [
                "Appointment scheduling",
                "Patient management",
                "Automated notifications",
                "Data backup system",
                "Report generation"
            ]
        },
        {
            title: "Easy Bank – Landing Page",
            description: "Responsive practice landing page for a banking website. Clean UI with strong navigation and call-to-action elements.",
            impact: "Enhances user engagement.",
            tech: ["HTML", "CSS", "JavaScript"],
            image: "web-dev",
            imageUrl: easybankImage,
            features: [
                "Fully responsive design",
                "Modern UI/UX",
                "Smooth animations",
                "Cross-browser compatibility",
                "Optimized performance"
            ]
        },
        {
            title: "Inventory Management System",
            description: "Web-based system for tracking products and stock levels. Supports CRUD operations and real-time inventory monitoring.",
            impact: "Improves store management efficiency.",
            tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            image: "web-app",
            imageUrl: inventoryImage,
            features: [
                "Real-time inventory tracking",
                "CRUD operations",
                "Low stock alerts",
                "Sales reporting",
                "User authentication"
            ]
        },
        {
            title: "Spotify Clone",
            description: "Mobile application replicating core Spotify features. Includes song playback, playlists, search, and UI customization.",
            impact: "Demonstrates mobile app development capabilities.",
            tech: ["Flutter", "Dart", "Firebase"],
            image: "mobile-app",
            imageUrl: spotifyImage,
            features: [
                "Music playback controls",
                "Playlist management",
                "Search functionality",
                "User authentication",
                "Custom themes"
            ]
        }
    ];

    const openPreview = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closePreview = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Projects / Portfolio</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            onClick={() => openPreview(project)}
                        >
                            <div className={`project-image ${project.image}`}>
                                {project.imageUrl ? (
                                    <img src={project.imageUrl} alt={project.title} className="project-screenshot" />
                                ) : (
                                    <span>{project.title} Preview</span>
                                )}
                                <div className="preview-overlay">
                                    <span className="preview-text">Click to preview</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <p className="project-impact"><strong>Impact:</strong> {project.impact}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview Modal */}
            {selectedProject && (
                <div className="preview-modal" onClick={closePreview}>
                    <div className="preview-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closePreview}>×</button>

                        <div className={`preview-image ${selectedProject.image}`}>
                            {selectedProject.imageUrl ? (
                                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="project-screenshot" />
                            ) : (
                                <span>{selectedProject.title}</span>
                            )}
                        </div>

                        <div className="preview-details">
                            <h2>{selectedProject.title}</h2>

                            <div className="preview-section">
                                <h3>Description</h3>
                                <p>{selectedProject.description}</p>
                            </div>

                            <div className="preview-section">
                                <h3>Impact</h3>
                                <p>{selectedProject.impact}</p>
                            </div>

                            <div className="preview-section">
                                <h3>Key Features</h3>
                                <ul className="features-list">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="preview-section">
                                <h3>Technologies Used</h3>
                                <div className="project-tech">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
