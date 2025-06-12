
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Building, Star, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const areas = [
    { 
      name: 'Meenakshi Temple Area', 
      providers: 85, 
      highlight: 'Heritage & Cultural Hub',
      description: 'Traditional services, temple priests, cultural guides, religious ceremonies',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop',
      topServices: ['Temple Services', 'Cultural Tours', 'Traditional Crafts', 'Religious Ceremonies']
    },
    { 
      name: 'Anna Nagar', 
      providers: 120, 
      highlight: 'Residential Paradise',
      description: 'Family services, education, healthcare, shopping, residential amenities',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=250&fit=crop',
      topServices: ['Home Services', 'Education', 'Healthcare', 'Shopping']
    },
    { 
      name: 'SS Colony', 
      providers: 95, 
      highlight: 'Modern Living',
      description: 'Tech services, home solutions, professional services, modern amenities',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=250&fit=crop',
      topServices: ['Tech Support', 'Home Renovation', 'Professional Services', 'Modern Amenities']
    },
    { 
      name: 'KK Nagar', 
      providers: 78, 
      highlight: 'Education Hub',
      description: 'Coaching centers, schools, student services, educational institutions',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop',
      topServices: ['Coaching Centers', 'Schools', 'Tutoring', 'Student Services']
    },
    { 
      name: 'Tallakulam', 
      providers: 65, 
      highlight: 'Health & Wellness',
      description: 'Hospitals, clinics, wellness centers, fitness, medical services',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      topServices: ['Hospitals', 'Clinics', 'Wellness Centers', 'Fitness']
    },
    { 
      name: 'Thirunagar', 
      providers: 92, 
      highlight: 'Commercial Center',
      description: 'Business services, retail, banking, offices, commercial activities',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
      topServices: ['Business Services', 'Banking', 'Retail', 'Office Solutions']
    },
    { 
      name: 'Vilangudi', 
      providers: 58, 
      highlight: 'Emerging Area',
      description: 'New developments, modern amenities, startups, growing community',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      topServices: ['New Developments', 'Startups', 'Modern Services', 'Community']
    },
    { 
      name: 'Pasumalai', 
      providers: 45, 
      highlight: 'Scenic Location',
      description: 'Tourism, resorts, event venues, nature services, scenic beauty',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      topServices: ['Tourism', 'Event Venues', 'Resorts', 'Nature Services']
    }
  ];

  const filteredAreas = areas.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewProviders = (areaName: string) => {
    navigate(`/businesses?area=${encodeURIComponent(areaName)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Madurai Areas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover service providers across all areas of Madurai. From heritage zones to modern neighborhoods, 
              find trusted local businesses in your area.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search areas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAreas.map((area, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={area.image} 
                      alt={area.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{area.rating}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-bold text-lg">{area.name}</h3>
                      <p className="text-xs opacity-90">{area.highlight}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Top Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.topServices.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{area.providers} providers</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewProviders(area.name)}
                      >
                        View Businesses
                      </Button>
                    </div>
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

export default Areas;
