
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LifeStageSection from '@/components/LifeStageSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProviders from '@/components/FeaturedProviders';
import AreasSection from '@/components/AreasSection';
import SponsoredSection from '@/components/SponsoredSection';
import VideoRecommendations from '@/components/VideoRecommendations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LifeStageSection />
      <CategoriesSection />
      <FeaturedProviders />
      <AreasSection />
      <SponsoredSection />
      <VideoRecommendations />
      <Footer />
    </div>
  );
};

export default Index;
