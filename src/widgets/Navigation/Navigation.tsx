import React, { useState, useEffect } from 'react';
import './index.scss';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1200);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className={`navbar-menu ${isMobile ? 'mobile' : ''} ${isOpen ? 'open' : ''}`}>
                    <a href="#home" className="navbar-item" onClick={toggleMenu}>Главная</a>
                    <a href="#about" className="navbar-item" onClick={toggleMenu}>Услуги</a>
                    <a href="#services" className="navbar-item" onClick={toggleMenu}>О нас</a>
                    <a href="#portfolio" className="navbar-item" onClick={toggleMenu}>Портфолио</a>
                    <a href="#contact" className="navbar-item" onClick={toggleMenu}>Контакты</a>
                </div>
                {isMobile && (
                    <div className={`navbar-burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
