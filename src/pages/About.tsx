
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Star, Trophy, Target, Eye, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '2,500+', label: 'Verified Businesses', icon: Trophy },
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '15+', label: 'Areas Covered', icon: Target },
    { number: '4.8/5', label: 'Average Rating', icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in strengthening Madurai\'s local business ecosystem and fostering community connections.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Every business is verified to ensure our users connect with genuine, quality service providers.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Bringing traditional Madurai businesses into the digital age with modern technology solutions.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Honest reviews, clear pricing, and authentic business information for informed decisions.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Native Madurai entrepreneur with 15+ years in tech and local business development.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
    },
    {
      name: 'Priya Selvam',
      role: 'Head of Operations',
      description: 'Expert in local business networks with deep understanding of Madurai\'s commercial landscape.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop'
    },
    {
      name: 'Arun Murugan',
      role: 'Technology Lead',
      description: 'Full-stack developer passionate about creating user-friendly digital solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Madurai Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're on a mission to digitally empower Madurai's vibrant business community. 
              From the historic Meenakshi Temple vicinity to modern residential areas, 
              we connect local businesses with customers who value quality and authenticity.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Born from a deep love for Madurai's rich cultural heritage and entrepreneurial spirit, 
                Madurai Hub emerged in 2024 as the city's premier digital marketplace. We recognized 
                that while Madurai is steeped in tradition, its businesses needed a modern platform 
                to reach customers in the digital age.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a simple directory has evolved into a comprehensive ecosystem where 
                traditional silk saree shops sit alongside modern tech startups, where temple priests 
                connect with spiritual seekers, and where family-run restaurants reach food lovers 
                across the city.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve as the bridge between Madurai's timeless values and 
                contemporary convenience, helping businesses grow while preserving the personal 
                touch that makes our city special.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape how we serve the Madurai community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate locals working to make Madurai's business ecosystem thrive in the digital era
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Madurai Hub Community?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a business owner looking to grow or a customer seeking quality services, 
              we're here to help you succeed in Madurai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/list-business">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  List Your Business
                </Button>
              </Link>
              <Link to="/businesses">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Explore Businesses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
