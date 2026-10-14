import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProductsSection } from '../components/ProductsSection';
import { GoalInvestingSection } from '../components/GoalInvestingSection';
import { QuickToolsBar } from '../components/QuickToolsBar';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { WhyAssureSection } from '../components/WhyAssureSection';
import { AppSection } from '../components/AppSection';
import { PortfolioVisualization } from '../components/PortfolioVisualization';
import { MarketSection } from '../components/MarketSection';
import { InsightsSection } from '../components/InsightsSection';
import { EducationalVideos } from '../components/EducationalVideos';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
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
      {/* 1. HERO + TRUST STRIP (Section 6, 7 & 8) */}
      <Hero 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
      />

      {/* 2. INVESTMENT SOLUTIONS (Section 9) */}
      <ProductsSection 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
      />

      {/* 3. GOAL-BASED INVESTING (Section 10) */}
      <GoalInvestingSection 
        onOpenModal={onOpenModal}
      />

      {/* 4. FINANCIAL TOOLS OVERVIEW (Section 11) */}
      <QuickToolsBar 
        onOpenModal={onOpenModal} 
      />

      {/* 5. INTERACTIVE CALCULATORS HUB (Section 12) */}
      <CalculatorsHub 
        onOpenModal={onOpenModal} 
      />

      {/* 6. WHY ASSURE EDITORIAL SECTION (Section 13) */}
      <WhyAssureSection 
        onOpenModal={onOpenModal} 
      />

      {/* 7. APP SECTION (Section 14) */}
      <AppSection 
        onOpenModal={onOpenModal} 
      />

      {/* 8. PORTFOLIO VISUALIZATION (Section 15) */}
      <PortfolioVisualization 
        onOpenModal={onOpenModal} 
      />

      {/* 9. MARKET SECTION (Section 16) */}
      <MarketSection />

      {/* 10. INSIGHTS SECTION (Section 17) */}
      <InsightsSection 
        onOpenModal={onOpenModal} 
      />

      {/* 11. EDUCATIONAL VIDEO MASTERCLASSES */}
      <EducationalVideos 
        onOpenModal={onOpenModal} 
      />

      {/* 12. VERIFIED REVIEWS & 40+ AMCS PARTNERS (Section 18) */}
      <TestimonialsSection />

      {/* 13. FAQ ACCORDION (Section 19) */}
      <FaqSection 
        onOpenModal={onOpenModal} 
      />

      {/* 14. FINAL CLOSING CTA (Section 20) */}
      <FinalCtaSection 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
