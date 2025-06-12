
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Star, Clock, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', count: 150 },
    { id: 'wedding', name: 'Wedding Services', count: 25 },
    { id: 'home', name: 'Home Services', count: 30 },
    { id: 'healthcare', name: 'Healthcare', count: 15 },
    { id: 'education', name: 'Education', count: 20 },
    { id: 'automotive', name: 'Automotive', count: 12 },
    { id: 'beauty', name: 'Beauty & Wellness', count: 18 },
    { id: 'food', name: 'Food & Catering', count: 22 },
    { id: 'construction', name: 'Construction', count: 8 }
  ];

  const services = [
    {
      id: 1,
      name: 'Traditional Wedding Catering',
      category: 'wedding',
      description: 'Authentic Tamil Nadu wedding meals with traditional recipes and professional service.',
      providers: 15,
      avgRating: 4.8,
      avgPrice: '₹500-1200/person',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop',
      features: ['Vegetarian & Non-Veg Options', 'Traditional Banana Leaf Service', 'Custom Menu Planning']
    },
    {
      id: 2,
      name: 'Home Renovation & Interior Design',
      category: 'home',
      description: 'Complete home makeover services blending traditional and modern design elements.',
      providers: 12,
      avgRating: 4.7,
      avgPrice: '₹50,000-5,00,000',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=200&fit=crop',
      features: ['3D Design Visualization', 'Vastu Consultation', 'Complete Project Management']
    },
    {
      id: 3,
      name: 'Ayurvedic Treatment & Wellness',
      category: 'healthcare',
      description: 'Traditional Ayurvedic treatments and wellness programs for holistic health.',
      providers: 8,
      avgRating: 4.9,
      avgPrice: '₹1,000-5,000/session',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      features: ['Authentic Treatments', 'Herbal Medicine', 'Personalized Programs']
    },
    {
      id: 4,
      name: 'Tamil Language & Cultural Classes',
      category: 'education',
      description: 'Learn Tamil language, literature, and cultural traditions from expert teachers.',
      providers: 10,
      avgRating: 4.6,
      avgPrice: '₹2,000-8,000/month',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      features: ['Native Tamil Teachers', 'Literature & Poetry', 'Cultural Immersion']
    },
    {
      id: 5,
      name: 'Temple & Cultural Tours',
      category: 'tourism',
      description: 'Guided tours of Madurai\'s famous temples and cultural landmarks.',
      providers: 6,
      avgRating: 4.8,
      avgPrice: '₹500-2,000/person',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      features: ['Expert Local Guides', 'Historical Insights', 'Customized Tours']
    },
    {
      id: 6,
      name: 'Traditional Silk Sarees',
      category: 'shopping',
      description: 'Handwoven Madurai silk sarees and traditional clothing with custom designs.',
      providers: 14,
      avgRating: 4.7,
      avgPrice: '₹5,000-50,000',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop',
      features: ['Handwoven Quality', 'Custom Designs', 'Authentic Silk']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4">Services Directory</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Discover Quality
                <span className="text-primary block">Services in Madurai</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From traditional craftsmanship to modern solutions, find verified service providers
                across all categories in Madurai's most trusted platform.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for services (e.g., wedding catering, home renovation...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories and Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold text-foreground">Filter by Category</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 hover:bg-green-600 text-white">
                        <Users className="h-3 w-3 mr-1" />
                        {service.providers} Providers
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{service.avgRating}</span>
                        <span className="text-muted-foreground text-sm">rating</span>
                      </div>
                      <div className="text-primary font-bold">
                        {service.avgPrice}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full group">
                      View Providers
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No services found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Don't See Your Service Listed?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We're always adding new service categories. If you're a service provider in Madurai,
              join our platform and reach thousands of potential customers.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              List Your Service
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
