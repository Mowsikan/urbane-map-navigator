
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Award, Shield, Heart, MapPin, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Verified Businesses', icon: Shield },
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '25+', label: 'Service Categories', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in strengthening the Madurai community by connecting locals with trusted service providers.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Every business on our platform is verified to ensure you get reliable, quality services every time.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We partner only with the best service providers who maintain high standards and customer satisfaction.'
    },
    {
      icon: MapPin,
      title: 'Local Focus',
      description: 'Born in Madurai, for Madurai. We understand the unique needs of our temple city and its people.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4">About Madurai Hub</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Connecting Madurai's
                <span className="text-primary block">Heritage with Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Since 2020, we've been the bridge between Madurai's rich cultural heritage and modern digital convenience,
                helping thousands discover and connect with trusted local service providers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Born in the heart of Madurai, we recognized the challenge locals faced in finding reliable,
                    quality service providers in our beloved temple city. While Madurai boasts incredible craftsmanship
                    and traditional services, connecting with the right provider was often a matter of word-of-mouth.
                  </p>
                  <p>
                    We created Madurai Hub to bridge this gap, combining our city's rich heritage of quality service
                    with modern digital convenience. Our platform celebrates local businesses while making them
                    easily discoverable to those who need them.
                  </p>
                  <p>
                    Today, we're proud to be Madurai's most trusted platform for local services, fostering connections
                    that strengthen our community and support local economic growth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583391265426-32eca8cbc4a0?w=600&h=400&fit=crop"
                  alt="Madurai Temple"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve the Madurai community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking for services or want to grow your business, Madurai Hub is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Find Services
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                List Your Business
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
