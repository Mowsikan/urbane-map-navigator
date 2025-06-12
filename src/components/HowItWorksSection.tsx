
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Users, Calendar, Star, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Tell Us What You Need',
      description: 'Use our smart search to find exactly what you\'re looking for - from traditional services to modern solutions.',
      details: ['Select your location in Madurai', 'Choose your profile type', 'Describe your specific needs', 'Get instant matches']
    },
    {
      icon: Users,
      step: '02',
      title: 'Browse Verified Providers',
      description: 'Explore handpicked, verified service providers with real reviews from your community.',
      details: ['View detailed profiles', 'Check ratings and reviews', 'Compare services and prices', 'See location and availability']
    },
    {
      icon: Calendar,
      step: '03',
      title: 'Connect & Book',
      description: 'Directly connect with providers, discuss your needs, and book services at your convenience.',
      details: ['Chat or call providers', 'Get custom quotes', 'Schedule appointments', 'Secure booking process']
    },
    {
      icon: Star,
      step: '04',
      title: 'Experience & Review',
      description: 'Enjoy quality service and share your experience to help others in the Madurai community.',
      details: ['Get professional service', 'Rate your experience', 'Leave detailed reviews', 'Build community trust']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🚀 Simple Process
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">How Madurai Hub Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From search to service completion, we've made finding and booking services in Madurai 
            as simple as four easy steps. Join thousands who trust our platform daily.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-4">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their perfect service match in Madurai. 
              Start your journey today!
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Find Services Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
