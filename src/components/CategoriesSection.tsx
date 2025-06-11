
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  Heart, 
  GraduationCap, 
  Car, 
  Utensils, 
  Palette,
  Camera,
  Wrench
} from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { icon: Home, title: 'Home Services', count: '150+ providers' },
    { icon: Heart, title: 'Health & Wellness', count: '80+ providers' },
    { icon: GraduationCap, title: 'Education & Training', count: '120+ providers' },
    { icon: Car, title: 'Automotive', count: '60+ providers' },
    { icon: Utensils, title: 'Food & Catering', count: '90+ providers' },
    { icon: Palette, title: 'Beauty & Salon', count: '70+ providers' },
    { icon: Camera, title: 'Events & Photography', count: '50+ providers' },
    { icon: Wrench, title: 'Repair Services', count: '110+ providers' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Explore Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our comprehensive range of service categories to find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
