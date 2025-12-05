import { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">John Ray<span className="accent">.</span></a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link" onClick={toggleMenu}>Services</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link btn btn-primary" onClick={toggleMenu}>Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
