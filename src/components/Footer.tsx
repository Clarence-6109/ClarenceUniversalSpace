import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <h3>Follow Me</h3>
                    <div className="icon">
                        <a href="#" title="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#" title="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#" title="Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="#" title="GitHub"><ion-icon name="logo-github"></ion-icon></a>
                        <a href="#" title="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a>
                    </div>
                </div>
                {/* Add footer links div if needed */}
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Clarence. All rights reserved. | Crafted with <i className="fas fa-heart"></i> by Clarence</p>
            </div>
        </footer>
    );
};

export default Footer;
