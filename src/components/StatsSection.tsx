
import React from 'react';
import { Users, Building, Star, Clock, MapPin, Award, Phone, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Customers', description: 'Satisfied users across Madurai' },
    { icon: Building, number: '2,500+', label: 'Verified Providers', description: 'Trusted service professionals' },
    { icon: Star, number: '4.8/5', label: 'Average Rating', description: 'Based on 25,000+ reviews' },
    { icon: Clock, number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' },
    { icon: MapPin, number: '15+', label: 'Areas Covered', description: 'Complete Madurai coverage' },
    { icon: Award, number: '95%', label: 'Success Rate', description: 'Successful service matches' },
    { icon: Phone, number: '1,00,000+', label: 'Bookings Completed', description: 'Services successfully delivered' },
    { icon: Heart, number: '99%', label: 'Customer Retention', description: 'Customers who return' }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📊 Our Impact
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Trusted by Madurai</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for themselves. See how we've become Madurai's most trusted platform 
            for connecting people with quality services.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Growing Every Day</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every day, more people discover the convenience of finding quality services through our platform. 
              From small family businesses to established enterprises, we're proud to support Madurai's vibrant service economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">New users daily</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Services booked daily</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">New providers joining monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
