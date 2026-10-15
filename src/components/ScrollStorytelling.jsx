import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Phase 5: Scroll Storytelling, Cinematic Reveal & Desktop Micro-Interactions Engine
 * High-performance, zero-dependency system.
 * Handles section reveals, staggered cards, cinematic image scaling,
 * desktop-only subtle magnetic CTA interaction, and animated financial stat counters.
 */
export function ScrollStorytelling() {
  const location = useLocation();

  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .cinematic-reveal').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-revealed');

          // Number Counter Animation for elements with [data-counter-target]
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
      threshold: 0.12
    });

    // Small delay to allow React DOM tree to render
    const timer = setTimeout(() => {
      const elementsToObserve = document.querySelectorAll(
        '.reveal-on-scroll, .cinematic-reveal, [data-counter-target]'
      );
      elementsToObserve.forEach((el) => observer.observe(el));
    }, 120);

    // Desktop-only magnetic interaction for selected primary CTA buttons (Requirement 6)
    const isDesktopPointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let cleanupMagnetic = null;

    if (isDesktopPointer && !prefersReducedMotion) {
      const magneticButtons = document.querySelectorAll('.btn-primary-emerald, .btn-primary-navy, [data-magnetic="true"]');
      
      const mouseMoveHandlers = [];
      const mouseLeaveHandlers = [];

      magneticButtons.forEach((btn) => {
        const handleMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          // Very subtle magnetic pull (clamped to max 4px X, 3px Y)
          const deltaX = Math.max(-4, Math.min(4, (e.clientX - centerX) * 0.15));
          const deltaY = Math.max(-3, Math.min(3, (e.clientY - centerY) * 0.15));
          
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
      if (cleanupMagnetic) cleanupMagnetic();
    };
  }, [location.pathname]);

  return null;
}

/**
 * Smooth ease-out counter for statistics (Requirement 2)
 */
function animateNumber(element) {
  const targetStr = element.getAttribute('data-counter-target') || '';
  const prefix = element.getAttribute('data-counter-prefix') || '';
  const suffix = element.getAttribute('data-counter-suffix') || '';

  // Extract numeric part
  const numericVal = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
  if (isNaN(numericVal)) return;

  const duration = 1400; // 1.4 seconds
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
