
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SponsoredSection = () => {
  const sponsoredAds = [
    { title: 'Ad Banner 1', content: 'Premium Home Services' },
    { title: 'Ad Banner 2', content: 'Digital Marketing Solutions' },
    { title: 'Ad Banner 3', content: 'Local Business Growth' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Sponsored</h2>
          <p className="text-muted-foreground">Discover featured businesses and special offers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsoredAds.map((ad, index) => (
            <Card key={index} className="h-32 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground">{ad.title}</h3>
                  <p className="text-muted-foreground mt-1">{ad.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsoredSection;
