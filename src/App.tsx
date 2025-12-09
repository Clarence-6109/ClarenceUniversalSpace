import React, { useEffect } from 'react';
import './App.css'; // Import all your CSS styles

// Import utility functions
import { throttle } from './utils/helpers';

// Import all components you created in src/components/
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


const App: React.FC = () => {

    // Helper to add the 'active' class to nav links based on scroll position
    const updateActiveNavLink = throttle(() => {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120) { // 120px offset for header
                current = section.getAttribute('id') || '';
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }, 150);

    // Scroll progress bar logic
    const updateScrollProgress = throttle(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const percent = (window.scrollY / docHeight) * 100;
        let bar = document.getElementById('scroll-progress') as HTMLElement;
        if (bar) {
            bar.style.width = `${percent}%`;
        }
    }, 50);

    useEffect(() => {
        // --- Dark Mode Initialization --- (Logic remains similar to original JS)
        function initDarkModeToggle() {
            const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            let isDark = localStorage.getItem('darkMode') !== 'false';
            if (prefers && localStorage.getItem('darkMode') === null) isDark = true;
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        }
        
        // --- Keyboard Shortcuts ---
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // Escape key logic for mobile nav is complex here, handled better in Header component if needed.
        };

        // --- Performance Logging ---
        function monitorPerformance() {
            if (!window.performance || !performance.timing) return;
            setTimeout(() => {
                const t = performance.timing;
                const load = t.loadEventEnd - t.navigationStart;
                console.log('Page Load Time:', load, 'ms');
            }, 2000);
        }

        // Mount global listeners and initialization functions
        window.addEventListener('scroll', updateActiveNavLink);
        window.addEventListener('scroll', updateScrollProgress);
        document.addEventListener('keydown', handleKeyDown);
        initDarkModeToggle();
        monitorPerformance();
        
        // Inject the scroll progress bar element into the DOM once
        const bar = document.createElement('div');
        bar.id = 'scroll-progress';
        document.body.appendChild(bar);


        // Cleanup listeners when component unmounts
        return () => {
            window.removeEventListener('scroll', updateActiveNavLink);
            window.removeEventListener('scroll', updateScrollProgress);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.removeChild(bar);
        };
    }, []);

    return (
        <div className="protagonist">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <SkillsSection />
                <StatsSection />
                <ContactSection />
            </main>
            <div className="antagonist">
               <Footer />
            </div>
        </div>
    );
};

export default App;
