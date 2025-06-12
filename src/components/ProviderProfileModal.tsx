
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Phone, Clock, Award, Shield, Camera, MessageCircle, Calendar } from 'lucide-react';

interface Provider {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  responseTime: string;
  speciality: string;
  verified: boolean;
  experience: string;
  image: string;
  phone?: string;
  email?: string;
  address?: string;
  workingHours?: string;
  services?: string[];
  gallery?: string[];
  description?: string;
  coordinates?: { lat: number; lng: number };
}

interface ProviderProfileModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProviderProfileModal = ({ provider, isOpen, onClose }: ProviderProfileModalProps) => {
  if (!provider) return null;

  const handleConnect = () => {
    console.log('Connecting with provider:', provider.name);
    // Here you would implement the actual connect functionality
  };

  const handleContactProvider = () => {
    console.log('Contacting provider:', provider.name);
    // Here you would implement contact functionality
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{provider.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Images and Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={provider.image} 
                alt={provider.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {provider.verified && (
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Award className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              </div>
            </div>
            
            {/* Gallery */}
            <div className="grid grid-cols-3 gap-2">
              {(provider.gallery || [
                'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop',
                'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=150&fit=crop'
              ]).map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${provider.name} gallery ${index + 1}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
            
            {/* Map Section */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">{provider.address || provider.location}</p>
                    <p className="text-sm">Interactive map will load here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Details and Contact */}
          <div className="space-y-4">
            {/* Basic Info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{provider.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{provider.rating}</span>
                  <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-primary font-medium mb-3">{provider.speciality}</p>
              <p className="text-muted-foreground leading-relaxed">
                {provider.description || `Trusted ${provider.category.toLowerCase()} service in ${provider.location} with ${provider.experience} of experience. Known for quality service and customer satisfaction.`}
              </p>
            </div>
            
            {/* Services */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Services Offered</h3>
                <div className="flex flex-wrap gap-2">
                  {(provider.services || ['Premium Service', 'Standard Service', 'Consultation', 'Emergency Support']).map((service, index) => (
                    <Badge key={index} variant="outline">{service}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{provider.phone || '+91 98765 43210'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{provider.address || `${provider.location}, Madurai`}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{provider.workingHours || 'Mon-Sat: 9:00 AM - 7:00 PM'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Response time: {provider.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Experience: {provider.experience}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg" onClick={handleConnect}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Connect Now
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={handleContactProvider}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-green-700">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Verified Business</span>
                </div>
                <p className="text-xs text-green-600 mt-1">
                  This business has been verified by our team for authenticity and quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProviderProfileModal;
