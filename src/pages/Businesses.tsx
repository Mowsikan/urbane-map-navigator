import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Award, Shield, Search, Filter, Users, Phone, Mail } from 'lucide-react';

const Businesses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const categories = ['All', 'Wedding Services', 'Home Services', 'Healthcare', 'Education', 'Food & Catering', 'Shopping', 'Professional Services', 'Tourism', 'Automotive', 'Beauty & Wellness'];

  const areas = ['All Areas', 'Meenakshi Temple Area', 'Anna Nagar', 'SS Colony', 'KK Nagar', 'Tallakulam', 'Thirunagar', 'Vilangudi', 'Pasumalai'];

  const businesses = [
    {
      name: 'Meenakshi Traditional Catering',
      category: 'Food & Catering',
      area: 'Meenakshi Temple Area',
      rating: 4.9,
      reviews: 245,
      location: 'Near Meenakshi Temple, Ward 1',
      responseTime: '2 hours',
      speciality: 'Authentic Tamil Nadu wedding cuisine',
      verified: true,
      experience: '15+ years',
      phone: '+91 98765 43210',
      email: 'meenakshi.catering@gmail.com',
      price: '₹500-1200/person',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop',
      features: ['Vegetarian & Non-Veg Options', 'Traditional Banana Leaf Service', 'Custom Menu Planning']
    },
    {
      name: 'Heritage Home Solutions',
      category: 'Home Services',
      area: 'SS Colony',
      rating: 4.8,
      reviews: 189,
      location: 'SS Colony Main Road',
      responseTime: '30 mins',
      speciality: 'Traditional & modern interior designs',
      verified: true,
      experience: '12+ years',
      phone: '+91 98765 43211',
      email: 'heritage.homes@gmail.com',
      price: '₹50,000-5,00,000',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop',
      features: ['3D Design Visualization', 'Vastu Consultation', 'Complete Project Management']
    },
    {
      name: 'Madurai Temple Tours',
      category: 'Tourism',
      area: 'Anna Nagar',
      rating: 4.9,
      reviews: 324,
      location: 'Anna Nagar 2nd Street',
      responseTime: '1 hour',
      speciality: 'Cultural & spiritual heritage tours',
      verified: true,
      experience: '8+ years',
      phone: '+91 98765 43212',
      email: 'temple.tours@gmail.com',
      price: '₹500-2,000/person',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      features: ['Expert Local Guides', 'Historical Insights', 'Customized Tours']
    },
    {
      name: 'Tamil Language Academy',
      category: 'Education',
      area: 'KK Nagar',
      rating: 4.7,
      reviews: 167,
      location: 'KK Nagar Main Road',
      responseTime: '45 mins',
      speciality: 'Traditional Tamil learning & literature',
      verified: true,
      experience: '20+ years',
      phone: '+91 98765 43213',
      email: 'tamil.academy@gmail.com',
      price: '₹2,000-8,000/month',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      features: ['Native Tamil Teachers', 'Literature & Poetry', 'Cultural Immersion']
    },
    {
      name: 'Dr. Kumaran Ayurvedic Center',
      category: 'Healthcare',
      area: 'Tallakulam',
      rating: 4.9,
      reviews: 298,
      location: 'Tallakulam Hospital Road',
      responseTime: '24 hours',
      speciality: 'Traditional Ayurvedic healing',
      verified: true,
      experience: '18+ years',
      phone: '+91 98765 43214',
      email: 'ayurveda.center@gmail.com',
      price: '₹1,000-5,000/session',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      features: ['Authentic Treatments', 'Herbal Medicine', 'Personalized Programs']
    },
    {
      name: 'Digital Solutions Pro',
      category: 'Professional Services',
      area: 'Thirunagar',
      rating: 4.6,
      reviews: 156,
      location: 'Thirunagar Commercial Complex',
      responseTime: '1 hour',
      speciality: 'Web development & digital marketing',
      verified: true,
      experience: '10+ years',
      phone: '+91 98765 43215',
      email: 'digital.solutions@gmail.com',
      price: '₹10,000-1,00,000',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      features: ['Custom Web Solutions', 'SEO & Marketing', 'E-commerce Development']
    },
    {
      name: 'Royal Silk Sarees',
      category: 'Shopping',
      area: 'Meenakshi Temple Area',
      rating: 4.8,
      reviews: 203,
      location: 'West Masi Street',
      responseTime: '2 hours',
      speciality: 'Handwoven Madurai silk sarees',
      verified: true,
      experience: '25+ years',
      phone: '+91 98765 43216',
      email: 'royal.silks@gmail.com',
      price: '₹5,000-50,000',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop',
      features: ['Handwoven Quality', 'Custom Designs', 'Authentic Silk']
    },
    {
      name: 'Bridal Beauty Parlour',
      category: 'Beauty & Wellness',
      area: 'Anna Nagar',
      rating: 4.7,
      reviews: 178,
      location: 'Anna Nagar 4th Cross',
      responseTime: '3 hours',
      speciality: 'Bridal makeup & traditional styling',
      verified: true,
      experience: '12+ years',
      phone: '+91 98765 43217',
      email: 'bridal.beauty@gmail.com',
      price: '₹3,000-25,000',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      features: ['Bridal Packages', 'Traditional Styling', 'Makeup Artist']
    }
  ];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
    const matchesArea = selectedArea === 'All Areas' || business.area === selectedArea;
    return matchesSearch && matchesCategory && matchesArea;
  });

  const handleBookNow = (business) => {
    setSelectedBusiness(business);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedBusiness(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Businesses in Madurai
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find verified businesses and service providers across Madurai. All businesses are 
              vetted for quality and reliability.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search businesses, services, specialities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="flex flex-wrap gap-2">
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
              
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filter by Area:</span>
                </div>
                {areas.map((area) => (
                  <Button
                    key={area}
                    variant={selectedArea === area ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedArea(area)}
                  >
                    {area}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Businesses Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {filteredBusinesses.length} businesses
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedArea !== 'All Areas' && ` in ${selectedArea}`}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBusinesses.map((business, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={business.image} 
                      alt={business.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      {business.verified && (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{business.area}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{business.name}</h3>
                      <Badge variant="outline">{business.category}</Badge>
                    </div>
                    
                    <p className="text-sm text-primary font-medium mb-3">{business.speciality}</p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{business.rating}</span>
                      <span className="text-muted-foreground">({business.reviews} reviews)</span>
                    </div>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{business.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Response: {business.responseTime}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>Experience: {business.experience}</span>
                      </div>
                    </div>

                    <div className="text-primary font-bold mb-4">{business.price}</div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => handleBookNow(business)}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBusinesses.length === 0 && (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No businesses found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms, category, or area filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
      
      <BookingModal 
        business={selectedBusiness}
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />
    </div>
  );
};

export default Businesses;
