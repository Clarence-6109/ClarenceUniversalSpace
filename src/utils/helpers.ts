// Throttle utility for scroll events
export const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// TypeWriter function adapted for use inside a React effect
export const typeWriterEffect = (element: HTMLElement | null, text: string, speed: number, callback?: () => void) => {
    // ... (keep the existing implementation of typeWriterEffect from previous message) ...
    if (!element || !text) {
        if (callback) callback();
        return;
    }
    element.textContent = ''; 
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i++);
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
};


// Function to animate a numeric value
export const animateValue = (element: HTMLElement, start: number, end: number, duration: number, suffix: string = '') => {
    let startTime: number | null = null;

    function step(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
};
