
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Award, Shield, Search, Filter } from 'lucide-react';

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Education', 'Home Services', 'Tourism', 'Food & Catering', 'Shopping', 'Professional Services'];

  const providers = [
    {
      name: 'Meenakshi Traditional Catering',
      category: 'Food & Catering',
      rating: 4.9,
      reviews: 245,
      location: 'Near Meenakshi Temple',
      responseTime: '2 hours',
      speciality: 'Authentic Tamil Nadu cuisine',
      verified: true,
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop'
    },
    {
      name: 'Heritage Home Solutions',
      category: 'Home Services',
      rating: 4.8,
      reviews: 189,
      location: 'SS Colony',
      responseTime: '30 mins',
      speciality: 'Traditional & modern designs',
      verified: true,
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop'
    },
    {
      name: 'Madurai Temple Tours',
      category: 'Tourism',
      rating: 4.9,
      reviews: 324,
      location: 'Anna Nagar',
      responseTime: '1 hour',
      speciality: 'Cultural & spiritual tours',
      verified: true,
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop'
    },
    {
      name: 'Tamil Language Academy',
      category: 'Education',
      rating: 4.7,
      reviews: 167,
      location: 'KK Nagar',
      responseTime: '45 mins',
      speciality: 'Traditional Tamil learning',
      verified: true,
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop'
    },
    {
      name: 'Dr. Kumaran Ayurvedic Center',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 298,
      location: 'Tallakulam',
      responseTime: '24 hours',
      speciality: 'Traditional healing',
      verified: true,
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    {
      name: 'Digital Solutions Pro',
      category: 'Professional Services',
      rating: 4.6,
      reviews: 156,
      location: 'Thirunagar',
      responseTime: '1 hour',
      speciality: 'Web & digital marketing',
      verified: true,
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    }
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Service Providers Directory
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find trusted, verified service providers across Madurai. All providers are 
              vetted for quality and reliability.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search providers, services, specialities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Providers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {filteredProviders.length} providers
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProviders.map((provider, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={provider.image} 
                      alt={provider.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      {provider.verified && (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{provider.name}</h3>
                      <Badge variant="secondary">{provider.category}</Badge>
                    </div>
                    
                    <p className="text-sm text-primary font-medium mb-3">{provider.speciality}</p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{provider.rating}</span>
                      <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{provider.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Response: {provider.responseTime}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>Experience: {provider.experience}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Connect & Book
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Providers;
