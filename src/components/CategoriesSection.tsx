
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
  Wrench,
  Building,
  MapPin,
  ShoppingBag,
  Users
} from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { 
      icon: Home, 
      title: 'Home & Living', 
      count: '380+ providers',
      description: 'Complete home solutions',
      popular: ['House cleaning', 'Interior design', 'Pest control', 'Appliance repair']
    },
    { 
      icon: Heart, 
      title: 'Health & Wellness', 
      count: '250+ providers',
      description: 'Your health, our priority',
      popular: ['Doctors', 'Physiotherapy', 'Yoga classes', 'Medical equipment']
    },
    { 
      icon: GraduationCap, 
      title: 'Education & Training', 
      count: '420+ providers',
      description: 'Learn and grow',
      popular: ['Tamil tuition', 'Computer training', 'Competitive coaching', 'Skill development']
    },
    { 
      icon: MapPin, 
      title: 'Travel & Tourism', 
      count: '180+ providers',
      description: 'Explore Madurai',
      popular: ['Temple tours', 'Travel agents', 'Car rentals', 'Heritage walks']
    },
    { 
      icon: Utensils, 
      title: 'Food & Dining', 
      count: '320+ providers',
      description: 'Taste of Madurai',
      popular: ['Traditional meals', 'Catering', 'Sweet shops', 'Street food']
    },
    { 
      icon: Palette, 
      title: 'Beauty & Personal Care', 
      count: '190+ providers',
      description: 'Look your best',
      popular: ['Bridal makeup', 'Hair styling', 'Spa treatments', 'Grooming']
    },
    { 
      icon: Camera, 
      title: 'Events & Photography', 
      count: '150+ providers',
      description: 'Capture memories',
      popular: ['Wedding photography', 'Event planning', 'Videography', 'Sound systems']
    },
    { 
      icon: Wrench, 
      title: 'Repair & Maintenance', 
      count: '280+ providers',
      description: 'Fix everything',
      popular: ['Mobile repair', 'AC service', 'Bike repair', 'Electrical work']
    },
    { 
      icon: Building, 
      title: 'Business Services', 
      count: '160+ providers',
      description: 'Grow your business',
      popular: ['CA services', 'Legal advice', 'Digital marketing', 'Office setup']
    },
    { 
      icon: ShoppingBag, 
      title: 'Shopping & Retail', 
      count: '240+ providers',
      description: 'Shop local',
      popular: ['Silk sarees', 'Jewelry', 'Handicrafts', 'Traditional wear']
    },
    { 
      icon: Users, 
      title: 'Cultural & Religious', 
      count: '120+ providers',
      description: 'Spiritual services',
      popular: ['Temple priests', 'Astrology', 'Religious ceremonies', 'Cultural events']
    },
    { 
      icon: Car, 
      title: 'Transport & Logistics', 
      count: '200+ providers',
      description: 'Move with ease',
      popular: ['Auto drivers', 'Packers movers', 'Logistics', 'Courier services']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Everything You Need
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Service Categories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From ancient temple rituals to modern tech solutions, from traditional crafts to contemporary services - 
            explore our complete range of carefully curated service categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                <div className="text-xs font-medium text-primary mb-3">{category.count}</div>
                <div className="space-y-1">
                  {category.popular.slice(0, 2).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-xs text-muted-foreground bg-gray-50 px-2 py-1 rounded">
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <button className="text-primary hover:underline font-medium">Request a new service category →</button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
