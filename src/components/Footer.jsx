import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-text">
                    &copy; {currentYear} John Ray L. De Leon. All rights reserved.
                </p>
                <p className="footer-credit">
                    Built with React & Vite
                </p>
            </div>
        </footer>
    );
};

export default Footer;
