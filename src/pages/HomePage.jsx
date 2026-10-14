import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { QuickToolsBar } from '../components/QuickToolsBar';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { InvestorZone } from '../components/InvestorZone';
import { EducationalVideos } from '../components/EducationalVideos';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PartnerSection } from '../components/PartnerSection';
import { ContactSection } from '../components/ContactSection';

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
    <div>
      {/* Hero Banner Carousel & Compounding Teaser (Light) */}
      <Hero 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
      />

      {/* 6 Quick Intelligence Tools with Original GIFs (Dark) */}
      <QuickToolsBar 
        onOpenModal={onOpenModal} 
        theme="dark"
      />

      {/* About Section (Light) */}
      <AboutSection 
        onOpenModal={onOpenModal} 
      />

      {/* Products Showcase (Dark) */}
      <ProductsSection 
        onOpenModal={onOpenModal} 
        onNavigate={handleNavigate} 
        theme="dark"
      />

      {/* Calculators Hub (Light) */}
      <CalculatorsHub 
        onOpenModal={onOpenModal} 
      />

      {/* Investor Zone & KYC Portals (Dark) */}
      <InvestorZone 
        onOpenModal={onOpenModal} 
        theme="dark"
      />

      {/* Educational Videos Masterclasses (Light) */}
      <EducationalVideos 
        onOpenModal={onOpenModal} 
      />

      {/* Verified Reviews & 40+ AMCs Marquee (Dark) */}
      <TestimonialsSection 
        theme="dark"
      />

      {/* Become a Partner Onboarding (Light) */}
      <PartnerSection 
        theme="light"
      />

      {/* Contact & Lucknow Headquarters (Dark) */}
      <ContactSection 
        theme="dark"
      />
    </div>
  );
}
