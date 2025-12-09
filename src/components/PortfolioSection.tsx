import React from 'react';

const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container1">
                <h2 className="section-title">Featured Projects</h2>
                <div className="portfolio-grid">
                    <div className="portfolio-card">
                        <div className="portfolio-image">
                            {/* Use loading="lazy" in React */}
                            <img src="via.placeholder.com" alt="Chy-Wears" loading="lazy" />
                            <div className="portfolio-overlay">
                                <a href="dashboard.html" className="portfolio-btn">View Project</a>
                            </div>
                        </div>
                        <h3>Chy-Wears E-Commerce</h3>
                        <p className="portfolio-category">Web Development • E-Commerce</p>
                        <p className="portfolio-description">A modern e-commerce platform for fashion retail with inventory management, payment integration, and user analytics.</p>
                    </div>

                    <div className="portfolio-card">
                        <div className="portfolio-image">
                            <img src="via.placeholder.com" alt="Unit Converter" loading="lazy" />
                            <div className="portfolio-overlay">
                                <a href="dashboard.html" className="portfolio-btn">View Project</a>
                            </div>
                        </div>
                        <h3>Analytics Dashboard</h3>
                        <p className="portfolio-category">Web App • Data Visualization</p>
                        <p className="portfolio-description">Real-time data visualization dashboard with interactive charts, custom reporting, and predictive analytics.</p>
                    </div>

                    <div className="portfolio-card">
                        <div className="portfolio-image">
                            <img src="via.placeholder.com" alt="Portfolio" loading="lazy" />
                            <div className="portfolio-overlay">
                                <a href="dashboard.html" className="portfolio-btn">View Project</a>
                            </div>
                        </div>
                        <h3>Personal Portfolio</h3>
                        <p className="portfolio-category">Web Design • Portfolio</p>
                        <p className="portfolio-description">Modern portfolio website showcasing projects, skills, and services with smooth animations and responsive design.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;

