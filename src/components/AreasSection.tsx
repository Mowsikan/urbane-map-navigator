
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const AreasSection = () => {
  const areas = [
    { name: 'Alagar Kovil Road', providers: 45, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
    { name: 'Anna Nagar', providers: 38, image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=300&h=200&fit=crop' },
    { name: 'Gandhi Nagar', providers: 52, image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=300&h=200&fit=crop' },
    { name: 'Vilangudi', providers: 41, image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Areas We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From Alagar Kovil Road to Vilangudi—find your neighborhood.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={area.image} 
                  alt={area.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold">{area.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{area.providers} providers available</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
