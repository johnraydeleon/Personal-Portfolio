import './Skills.css';
import { FaPython, FaJava, FaJs, FaPhp, FaDatabase, FaHtml5, FaCss3Alt, FaUnity, FaGamepad, FaChartBar, FaTable, FaFire } from 'react-icons/fa';


const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: <FaPython /> },
                { name: "Java", icon: <FaJava /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "PHP", icon: <FaPhp /> },
                { name: "SQL", icon: <FaDatabase /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Power BI", icon: <FaChartBar /> },
                { name: "Excel", icon: <FaTable /> },
                { name: "Google Analytics", icon: <FaChartBar /> },
                { name: "Firebase", icon: <FaFire /> },
            ]
        },
        {
            title: "Data & Analytics",
            skills: [
                { name: "Data Cleaning", icon: null },
                { name: "Data Visualization", icon: null },
                { name: "Dashboard Dev", icon: null },
                { name: "Descriptive Analytics", icon: null },
            ]
        },
        {
            title: "IT & Technical",
            skills: [
                { name: "System Analysis", icon: null },
                { name: "Tech Documentation", icon: null },
                { name: "Problem Solving", icon: null },
            ]
        },
        {
            title: "Game Development",
            skills: [
                { name: "2D Game Dev", icon: <FaGamepad /> },
                { name: "Unity", icon: <FaUnity /> },
                { name: "Phaser", icon: null },
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
