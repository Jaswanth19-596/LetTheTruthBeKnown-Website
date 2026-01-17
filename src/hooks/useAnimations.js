import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    // Initial check
    revealOnScroll();
    
    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
};

export const useParallax = (ref, speed = 0.5) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
};

export const useMouseParallax = (ref, intensity = 20) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * intensity;
      const yPos = (clientY / innerHeight - 0.5) * intensity;
      
      element.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [ref, intensity]);
};

export default useScrollReveal;
