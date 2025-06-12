import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Award, Shield } from 'lucide-react';
import ProviderProfileModal from './ProviderProfileModal';

const FeaturedProviders = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const providers = [
    {
      name: 'Meenakshi Traditional Catering',
      category: 'Wedding Catering',
      rating: 4.9,
      reviews: 245,
      location: 'Near Meenakshi Temple',
      responseTime: '2 hours',
      speciality: 'Authentic Tamil Nadu cuisine',
      verified: true,
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop',
      phone: '+91 98765 43210',
      address: 'No. 123, East Masi Street, Near Meenakshi Temple, Madurai - 625001',
      workingHours: 'Mon-Sun: 6:00 AM - 10:00 PM',
      services: ['Wedding Catering', 'Event Catering', 'Traditional Meals', 'Festival Catering'],
      description: 'Authentic Tamil Nadu catering service specializing in traditional wedding meals and festival catering with 15+ years of experience.',
      gallery: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=150&fit=crop'
      ]
    },
    {
      name: 'Heritage Home Solutions',
      category: 'Home Renovation',
      rating: 4.8,
      reviews: 189,
      location: 'SS Colony',
      responseTime: '30 mins',
      speciality: 'Traditional & modern designs',
      verified: true,
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop',
      phone: '+91 98765 43211',
      address: 'No. 456, SS Colony, Madurai - 625010',
      workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      services: ['Home Renovation', 'Interior Design', 'Construction', 'Maintenance'],
      description: 'Professional home renovation and interior design services blending traditional and modern aesthetics.',
      gallery: [
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop'
      ]
    },
    {
      name: 'Madurai Temple Tours',
      category: 'Tourism Services',
      rating: 4.9,
      reviews: 324,
      location: 'Anna Nagar',
      responseTime: '1 hour',
      speciality: 'Cultural & spiritual tours',
      verified: true,
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      phone: '+91 98765 43212',
      address: 'No. 789, Anna Nagar, Madurai - 625020',
      workingHours: 'Mon-Sun: 5:00 AM - 8:00 PM',
      services: ['Temple Tours', 'Cultural Tours', 'Spiritual Guidance', 'Group Tours'],
      description: 'Experienced temple tour guides offering authentic cultural and spiritual experiences in Madurai.',
      gallery: [
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1548013146-72479768bada?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=200&h=150&fit=crop'
      ]
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
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      phone: '+91 98765 43213',
      address: 'No. 321, KK Nagar, Madurai - 625014',
      workingHours: 'Mon-Sat: 8:00 AM - 8:00 PM',
      services: ['Tamil Classes', 'Literature Studies', 'Cultural Training', 'Online Classes'],
      description: 'Premier Tamil language academy offering comprehensive courses in Tamil language and literature.',
      gallery: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=150&fit=crop'
      ]
    },
    {
      name: 'Silk Saree Heritage',
      category: 'Traditional Shopping',
      rating: 4.8,
      reviews: 203,
      location: 'East Masi Street',
      responseTime: 'Visit anytime',
      speciality: 'Handwoven silk sarees',
      verified: true,
      experience: '25+ years',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop',
      phone: '+91 98765 43214',
      address: 'No. 654, East Masi Street, Madurai - 625001',
      workingHours: 'Mon-Sun: 10:00 AM - 9:00 PM',
      services: ['Silk Sarees', 'Wedding Collections', 'Custom Designs', 'Alteration Services'],
      description: 'Traditional silk saree shop with 25+ years of heritage in handwoven Madurai silk sarees.',
      gallery: [
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0beb7d23b46?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1583391265426-32eca8cbc4a0?w=200&h=150&fit=crop'
      ]
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
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      phone: '+91 98765 43215',
      address: 'No. 987, Tallakulam, Madurai - 625002',
      workingHours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      services: ['Ayurvedic Treatment', 'Herbal Medicine', 'Therapy Sessions', 'Health Consultation'],
      description: 'Authentic Ayurvedic healthcare center providing traditional healing methods and herbal treatments.',
      gallery: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop',
        'https://images.unsplash.com/photo-1594824388406-fbd1f656037d?w=200&h=150&fit=crop'
      ]
    }
  ];

  const handleConnectBook = (provider) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              ⭐ Verified Excellence
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-6">Top-Rated Service Providers in Madurai</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the cream of Madurai's service providers - handpicked, verified, and trusted by thousands. 
              From traditional craftsmanship to modern solutions, these providers embody the spirit of Madurai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
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
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">{provider.name}</h3>
                    <Badge variant="secondary" className="ml-2 shrink-0">{provider.category}</Badge>
                  </div>
                  
                  <p className="text-sm text-primary font-medium mb-3">{provider.speciality}</p>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-foreground">{provider.rating}</span>
                    <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                  </div>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{provider.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>Response: {provider.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Award className="h-4 w-4 shrink-0" />
                      <span>Experience: {provider.experience}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => handleConnectBook(provider)}
                  >
                    Connect & Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Featured Providers
            </Button>
          </div>
        </div>
      </section>
      
      <ProviderProfileModal 
        provider={selectedProvider}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FeaturedProviders;
