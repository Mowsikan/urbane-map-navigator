
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProviders from '@/components/FeaturedProviders';
import HowItWorksSection from '@/components/HowItWorksSection';
import AreasSection from '@/components/AreasSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SponsoredAdModal from '@/components/SponsoredAdModal';
import VideoRecommendations from '@/components/VideoRecommendations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="providers">
          <FeaturedProviders />
        </section>
        <HowItWorksSection />
        <section id="areas">
          <AreasSection />
        </section>
        <StatsSection />
        <TestimonialsSection />
        <VideoRecommendations />
      </main>
      <Footer />
      <SponsoredAdModal />
    </div>
  );
};

export default Index;
