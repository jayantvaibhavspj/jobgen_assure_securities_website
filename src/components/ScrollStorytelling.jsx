import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Assure Securities — Premium Animation & Motion System
 * Zero-dependency, GPU-accelerated motion engine.
 * Features:
 * 1. Single-fire IntersectionObserver for smooth entry reveals
 * 2. Ultra-thin scroll progress bar at top (#scroll-progress-bar)
 * 3. Desktop-only subtle parallax (5-18px) on .parallax-subtle elements
 * 4. Desktop-only magnetic CTA micro-interaction
 * 5. Smooth legitimate number counter animation
 * 6. Full prefers-reduced-motion compliance
 */
export function ScrollStorytelling() {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Accessibility: Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .cinematic-reveal, .reveal-heading').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // 2. Single-fire Scroll Reveal Observer
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-revealed');

          // Smooth Number Counter Animation for elements with [data-counter-target]
          if (el.hasAttribute('data-counter-target') && !el.dataset.hasCounted) {
            el.dataset.hasCounted = 'true';
            animateNumber(el);
          }

          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    const timer = setTimeout(() => {
      const elementsToObserve = document.querySelectorAll(
        '.reveal-on-scroll, .cinematic-reveal, .reveal-heading, [data-counter-target]'
      );
      elementsToObserve.forEach((el) => observer.observe(el));
    }, 100);

    // 3. Scroll Progress & Subtle Parallax Engine (Passive, RAF-driven)
    const isDesktop = window.matchMedia && window.matchMedia('(min-width: 992px) and (hover: hover) and (pointer: fine)').matches;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = height > 0 ? winScroll / height : 0;
          setScrollProgress(scrolled);

          // Subtle Parallax (Requirement 8: 5-18px max movement on desktop only)
          if (isDesktop && !prefersReducedMotion) {
            const parallaxElements = document.querySelectorAll('.parallax-subtle');
            parallaxElements.forEach((el) => {
              const rect = el.getBoundingClientRect();
              // Only compute if element is in viewport bounds
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = Math.max(-18, Math.min(18, (rect.top - window.innerHeight / 2) * 0.04));
                el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
              }
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 4. Desktop-only Subtle Magnetic CTA Micro-Interaction (Requirement 14 & 27)
    let cleanupMagnetic = null;
    if (isDesktop && !prefersReducedMotion) {
      const magneticButtons = document.querySelectorAll('.btn-primary-emerald, .btn-primary-navy, [data-magnetic="true"]');
      const mouseMoveHandlers = [];
      const mouseLeaveHandlers = [];

      magneticButtons.forEach((btn) => {
        const handleMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          // Very subtle magnetic pull (clamped to max 4px X, 3px Y)
          const deltaX = Math.max(-4, Math.min(4, (e.clientX - centerX) * 0.12));
          const deltaY = Math.max(-3, Math.min(3, (e.clientY - centerY) * 0.12));
          
          btn.style.transition = 'none';
          btn.style.transform = `translate3d(${deltaX}px, ${deltaY - 2}px, 0)`;
        };

        const handleMouseLeave = () => {
          btn.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
          btn.style.transform = 'translate3d(0, 0, 0)';
          setTimeout(() => {
            btn.style.transition = '';
            btn.style.transform = '';
          }, 320);
        };

        btn.addEventListener('mousemove', handleMouseMove);
        btn.addEventListener('mouseleave', handleMouseLeave);

        mouseMoveHandlers.push({ btn, fn: handleMouseMove });
        mouseLeaveHandlers.push({ btn, fn: handleMouseLeave });
      });

      cleanupMagnetic = () => {
        mouseMoveHandlers.forEach(({ btn, fn }) => btn.removeEventListener('mousemove', fn));
        mouseLeaveHandlers.forEach(({ btn, fn }) => btn.removeEventListener('mouseleave', fn));
      };
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (cleanupMagnetic) cleanupMagnetic();
    };
  }, [location.pathname]);

  return (
    <>
      {/* Requirement 26: Ultra-thin Emerald Scroll Progress Indicator */}
      <div 
        id="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </>
  );
}

/**
 * Smooth ease-out counter for statistics (Requirement 11)
 * Animates only legitimate existing numbers.
 */
function animateNumber(element) {
  const targetStr = element.getAttribute('data-counter-target') || '';
  const prefix = element.getAttribute('data-counter-prefix') || '';
  const suffix = element.getAttribute('data-counter-suffix') || '';

  // Extract numeric part safely
  const numericVal = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
  if (isNaN(numericVal)) return;

  const duration = 1200; // 1.2 seconds smooth ease-out
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing out cubic: 1 - Math.pow(1 - progress, 3)
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * numericVal);

    element.textContent = `${prefix}${current.toLocaleString('en-IN')}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = `${prefix}${targetStr}${suffix}`;
    }
  };

  requestAnimationFrame(updateCounter);
}

export default ScrollStorytelling;
