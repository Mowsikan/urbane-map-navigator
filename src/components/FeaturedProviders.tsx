
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock } from 'lucide-react';

const FeaturedProviders = () => {
  const providers = [
    {
      name: 'Provider A',
      category: 'Home Cleaning',
      rating: 4.8,
      reviews: 245,
      location: 'Anna Nagar',
      responseTime: '30 mins',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
    },
    {
      name: 'Provider B',
      category: 'AC Repair',
      rating: 4.9,
      reviews: 189,
      location: 'Gandhi Nagar',
      responseTime: '45 mins',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
    },
    {
      name: 'Provider C',
      category: 'Beauty Services',
      rating: 4.7,
      reviews: 167,
      location: 'Vilangudi',
      responseTime: '1 hour',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop'
    },
    {
      name: 'Provider D',
      category: 'Plumbing',
      rating: 4.6,
      reviews: 203,
      location: 'Alagar Kovil Road',
      responseTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Service Providers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated service providers in Madurai with verified reviews and quick response times.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{provider.name}</h3>
                  <Badge variant="secondary">{provider.category}</Badge>
                </div>
                
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{provider.rating}</span>
                  <span className="text-muted-foreground">({provider.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{provider.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
