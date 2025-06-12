
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Krishnan',
      role: 'New Resident',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      text: 'Moving to Madurai was overwhelming until I found this platform. From finding a house to getting my kids admitted to school, everything was sorted within a week!'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      text: 'Listed my catering business here and got 50+ bookings in the first month. The platform really understands Madurai\'s market and connects with the right customers.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Tourist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      text: 'Visited Madurai for the first time and this platform made my trip perfect. The temple guides were knowledgeable and the local experiences were authentic!'
    },
    {
      name: 'Dr. Meena Iyer',
      role: 'Healthcare Professional',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      text: 'Started my practice in Madurai and this platform helped me connect with patients from day one. The healthcare category is well-organized and professional.'
    },
    {
      name: 'Arjun Pandian',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      text: 'Found the best Tamil tutor and competitive exam coaching through this platform. The education services here are top-notch and very affordable.'
    },
    {
      name: 'Lakshmi Devi',
      role: 'Senior Citizen',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      text: 'At my age, finding reliable home services was difficult. This platform connected me with trustworthy people who take care of all my household needs.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💬 Real Stories
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">What Our Community Says</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From newcomers to long-time residents, from tourists to business owners - hear how Madurai Hub 
            has transformed their experience in the temple city.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
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

export default TestimonialsSection;
