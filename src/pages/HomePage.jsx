import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { WhyAssureSection } from '../components/WhyAssureSection';
import { GoalInvestingSection } from '../components/GoalInvestingSection';
import { PortfolioVisualization } from '../components/PortfolioVisualization';
import { MutualFundsSection } from '../components/MutualFundsSection';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { InsightsSection } from '../components/InsightsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

export function HomePage({ onOpenModal }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path === 'calculators') navigate('/calculators');
    else if (path === 'products') navigate('/products');
    else if (path === 'about') navigate('/about-us');
    else if (path === 'investor-zone') navigate('/investor-zone');
    else if (path === 'videos') navigate('/educational-videos');
    else if (path === 'partner') navigate('/become-a-partner');
    else if (path === 'contact') navigate('/contact-us');
    else navigate(`/${path}`);
  };

  return (
    <div className="homepage-wrapper">
      
      {/* 1. CINEMATIC FULL-SCREEN HERO (DARK) */}
      <Hero 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
      />

      {/* 2. 01 — EDITORIAL ABOUT ASSURE SECTION (DARK LUXURY) */}
      <AboutSection 
        onOpenModal={onOpenModal} 
        theme="dark"
      />

      {/* 3. 02 — INVESTMENT SOLUTIONS HORIZONTAL ROWS (DARK) */}
      <ProductsSection 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
        theme="dark"
      />

      {/* 4. 03 — WHY INVESTORS CHOOSE ASSURE (LIGHT) */}
      <WhyAssureSection 
        onOpenModal={onOpenModal} 
        theme="light"
      />

      {/* 5. 04 — INVESTMENT ROADMAP (DARK) */}
      <GoalInvestingSection 
        onOpenModal={onOpenModal} 
        theme="dark"
      />

      {/* 6. 05 — WEALTH INTELLIGENCE PORTFOLIO (LIGHT) */}
      <div className="section-theme-light" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <PortfolioVisualization 
          onOpenModal={onOpenModal} 
          theme="light"
          embedded={true}
        />
      </div>

      {/* 7. 06 — MUTUAL FUNDS INTELLIGENCE SPOTLIGHT (HOME FEATURE PREVIEW) */}
      <MutualFundsSection 
        variant="home"
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
      />

      {/* 7. 06 — REDESIGNED FINANCIAL CALCULATORS HUB (DARK) */}
      <CalculatorsHub 
        onOpenModal={onOpenModal} 
        theme="dark"
      />

      {/* 8. 07 — EDITORIAL RESEARCH & INSIGHTS PUBLICATION (LIGHT) */}
      <InsightsSection 
        onOpenModal={onOpenModal} 
        theme="light"
      />

      {/* 9. 08 — VERIFIED CLIENT TESTIMONIALS & 40+ AMCS (DARK) */}
      <TestimonialsSection 
        theme="dark"
      />

      {/* 10. 09 — DRAMATIC FULL-WIDTH CLOSING CTA (LIGHT) */}
      <FinalCtaSection 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
        theme="light"
      />

    </div>
  );
}

export default HomePage;
