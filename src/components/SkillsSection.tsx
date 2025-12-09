import React from 'react';

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container1">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3><i className="fas fa-paint-brush"></i> Frontend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag"><i className="fab fa-react"></i> React</span>
                            <span className="skill-tag"><i className="fab fa-vuejs"></i> Vue.js</span>
                            <span className="skill-tag"><i className="fas fa-code"></i> TypeScript</span>
                            <span className="skill-tag"><i className="fas fa-palette"></i> Tailwind CSS</span>
                            <span className="skill-tag"><i className="fab fa-html5"></i> HTML/CSS</span>
                            <span className="skill-tag"><i className="fab fa-js-square"></i> JavaScript</span>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3><i className="fas fa-server"></i> Backend</h3>
                        <div className="skill-tags">
                            <span className="skill-tag"><i className="fab fa-node-js"></i> Node.js</span>
                            <span className="skill-tag"><i className="fab fa-python"></i> Python</span>
                            <span className="skill-tag"><i className="fas fa-cube"></i> Express.js</span>
                            <span className="skill-tag"><i className="fas fa-database"></i> PostgreSQL</span>
                            <span className="skill-tag"><i className="fas fa-leaf"></i> MongoDB</span>
                            <span className="skill-tag"><i className="fas fa-plug"></i> REST API</span>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3><i className="fas fa-tools"></i> Tools & DevOps</h3>
                        <div className="skill-tags">
                            <span className="skill-tag"><i className="fab fa-git-alt"></i> Git</span>
                            <span className="skill-tag"><i className="fab fa-docker"></i> Docker</span>
                            <span className="skill-tag"><i className="fab fa-aws"></i> AWS</span>
                            <span className="skill-tag"><i className="fas fa-infinity"></i> CI/CD</span>
                            <span className="skill-tag"><i className="fab fa-linux"></i> Linux</span>
                            <span className="skill-tag"><i className="fas fa-cube"></i> Webpack</span>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3><i className="fas fa-pen-fancy"></i> Design & UX</h3>
                        <div className="skill-tags">
                            <span className="skill-tag"><i className="fas fa-pen-nib"></i> Figma</span>
                            <span className="skill-tag"><i className="fas fa-laptop"></i> UI Design</span>
                            <span className="skill-tag"><i className="fas fa-edit"></i> Wireframing</span>
                            <span className="skill-tag"><i className="fas fa-bezier-curve"></i> Prototyping</span>
                            <span className="skill-tag"><i className="fas fa-users"></i> User Research</span>
                            <span className="skill-tag"><i className="fas fa-universal-access"></i> Accessibility</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
