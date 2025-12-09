import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="services-section">
            <div className="container1">
                <h2 className="section-title">Services</h2>
                <div className="services-grid">
                    <div className="service-item">
                        <div className="service-number">01</div>
                        <h3>Web Development</h3>
                        <p>Full-stack web applications with modern frameworks, responsive design, and optimized performance. From frontend to backend, I deliver complete solutions.</p>
                        <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item">
                        <div className="service-number">02</div>
                        <h3>Mobile Development</h3>
                        <p>Cross-platform mobile applications using React Native, Flutter, and native technologies. High-performance apps for iOS and Android.</p>
                        <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item">
                        <div className="service-number">03</div>
                        <h3>Cloud & DevOps</h3>
                        <p>Infrastructure setup, deployment automation, and cloud architecture. Leveraging AWS, Azure, and GCP for scalable solutions.</p>
                        <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item">
                        <div className="service-number">04</div>
                        <h3>UI/UX Design</h3>
                        <p>Beautiful, user-centric interface designs. Prototyping, wireframing, and design systems that enhance user experience.</p>
                        <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item">
                        <div className="service-number">05</div>
                        <h3>Consulting</h3>
                        <p>Technical strategy and architecture consulting. Help businesses optimize their tech stack and digital transformation journey.</p>
                        <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item">
                        <div className="service-number">06</div>
                        <h3>Training & Mentorship</h3>
                        <p>Share knowledge through workshops, training sessions, and mentorship programs. Help teams level up their technical skills.</p>
                        <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
