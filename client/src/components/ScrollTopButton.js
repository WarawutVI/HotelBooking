import React, { useState, useEffect } from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [buttonColor, setButtonColor] = useState('#FFCF47'); // Default color

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
              
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            id="scrollTopBtn" 
            className={`scroll-top-btn ${isVisible ? 'visible' : ''}`} 
            onClick={scrollToTop}
            style={{ backgroundColor: buttonColor }}
        >
            <i className="fas fa-chevron-up"></i>
        </div>
    );
};

export default ScrollTopButton;
