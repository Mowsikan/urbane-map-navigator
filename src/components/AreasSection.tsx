
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Building, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AreasSection = () => {
  const navigate = useNavigate();

  const areas = [
    { 
      name: 'Meenakshi Temple Area', 
      providers: 85, 
      highlight: 'Heritage & Cultural Hub',
      description: 'Traditional services, temple priests, cultural guides',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop'
    },
    { 
      name: 'Anna Nagar', 
      providers: 120, 
      highlight: 'Residential Paradise',
      description: 'Family services, education, healthcare, shopping',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=300&h=200&fit=crop'
    },
    { 
      name: 'SS Colony', 
      providers: 95, 
      highlight: 'Modern Living',
      description: 'Tech services, home solutions, professional services',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=300&h=200&fit=crop'
    },
    { 
      name: 'KK Nagar', 
      providers: 78, 
      highlight: 'Education Hub',
      description: 'Coaching centers, schools, student services',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop'
    },
    { 
      name: 'Tallakulam', 
      providers: 65, 
      highlight: 'Health & Wellness',
      description: 'Hospitals, clinics, wellness centers, fitness',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    },
    { 
      name: 'Thirunagar', 
      providers: 92, 
      highlight: 'Commercial Center',
      description: 'Business services, retail, banking, offices',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop'
    },
    { 
      name: 'Vilangudi', 
      providers: 58, 
      highlight: 'Emerging Area',
      description: 'New developments, modern amenities, startups',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    },
    { 
      name: 'Pasumalai', 
      providers: 45, 
      highlight: 'Scenic Location',
      description: 'Tourism, resorts, event venues, nature services',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
    }
  ];

  const handleExploreArea = (areaName: string) => {
    navigate(`/businesses?area=${encodeURIComponent(areaName)}`);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🗺️ Comprehensive Coverage
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Every Corner of Madurai Covered</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the ancient temple precincts to modern residential areas, from bustling commercial centers to serene suburbs - 
            we serve every neighborhood with dedicated local providers who understand your area's unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={area.image} 
                  alt={area.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
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
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{area.providers} providers</span>
                  </div>
                  <button 
                    onClick={() => handleExploreArea(area.name)}
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Explore area →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Don't See Your Area?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're rapidly expanding across Madurai. If your area isn't listed, let us know and we'll prioritize adding services in your neighborhood.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors">
            Request Area Coverage
          </button>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
