import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TimePickerInput from '@/components/ui/time-picker-input';
import { Building, MapPin, Phone, Mail, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ListBusiness = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    description: '',
    address: '',
    area: '',
    phone: '',
    email: '',
    website: '',
    openingTime: '',
    closingTime: '',
    workingDays: '',
    services: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    'Healthcare', 'Education', 'Home Services', 'Tourism', 'Food & Catering', 
    'Shopping', 'Professional Services', 'Beauty & Wellness', 'Automotive', 
    'Technology', 'Construction', 'Real Estate'
  ];

  const areas = [
    'Meenakshi Temple Area', 'Anna Nagar', 'SS Colony', 'KK Nagar', 
    'Tallakulam', 'Thirunagar', 'Vilangudi', 'Pasumalai', 'Mattuthavani',
    'Teppakulam', 'Alagar Kovil Road'
  ];

  const benefits = [
    { 
      icon: Users, 
      title: 'Reach More Customers', 
      description: 'Connect with 50,000+ active users in Madurai',
      stat: '50K+ Users'
    },
    { 
      icon: MapPin, 
      title: 'Local Visibility', 
      description: 'Top rankings in area-based searches',
      stat: '15+ Areas'
    },
    { 
      icon: CheckCircle, 
      title: 'Trust & Credibility', 
      description: 'Verified badge builds customer confidence',
      stat: '95% Trust Rate'
    },
    { 
      icon: TrendingUp, 
      title: 'Grow Your Business', 
      description: 'Average 40% increase in customer inquiries',
      stat: '+40% Growth'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your business listing and get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      businessName: '',
      category: '',
      description: '',
      address: '',
      area: '',
      phone: '',
      email: '',
      website: '',
      openingTime: '',
      closingTime: '',
      workingDays: '',
      services: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Grow Your Business in Madurai
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join Madurai's leading local business platform. Get discovered by thousands of customers 
              actively searching for your services.
            </p>
            
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Badge className="bg-green-500 text-white px-4 py-2">Free Listing</Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">Instant Approval</Badge>
              <Badge className="bg-purple-500 text-white px-4 py-2">24/7 Support</Badge>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Choose Madurai Hub?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">{benefit.stat}</div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Listing Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  List Your Business
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Complete the form below to get your business listed on Madurai Hub
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="businessName"
                          placeholder="Enter your business name"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your business and services..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  
                  {/* Address Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="address"
                          placeholder="Enter complete address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="area">Area in Madurai *</Label>
                      <Select value={formData.area} onValueChange={(value) => handleInputChange('area', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          {areas.map((area) => (
                            <SelectItem key={area} value={area}>{area}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Contact Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="business@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Website */}
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      placeholder="https://your-website.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
                  
                  {/* Working Hours Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <TimePickerInput
                        label="Opening Time *"
                        value={formData.openingTime}
                        onChange={(value) => handleInputChange('openingTime', value)}
                        id="openingTime"
                      />
                      <TimePickerInput
                        label="Closing Time *"
                        value={formData.closingTime}
                        onChange={(value) => handleInputChange('closingTime', value)}
                        id="closingTime"
                      />
                      <div className="space-y-2">
                        <Label htmlFor="workingDays">Working Days *</Label>
                        <Input
                          id="workingDays"
                          placeholder="Mon-Sat, Sunday Closed"
                          value={formData.workingDays}
                          onChange={(e) => handleInputChange('workingDays', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-2">
                    <Label htmlFor="services">Services Offered</Label>
                    <Textarea
                      id="services"
                      placeholder="List your main services separated by commas..."
                      value={formData.services}
                      onChange={(e) => handleInputChange('services', e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  {/* Terms checkbox */}
                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" className="mt-1 rounded" required />
                    <span className="text-muted-foreground">
                      I confirm that I am authorized to list this business and agree to the 
                      Terms of Service and Business Listing Guidelines.
                    </span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Business Listing"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-8">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
                <h4 className="font-semibold">Review</h4>
                <p className="text-sm text-muted-foreground">We review your listing within 24 hours</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
                <h4 className="font-semibold">Approve</h4>
                <p className="text-sm text-muted-foreground">Get verification badge and go live</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
                <h4 className="font-semibold">Grow</h4>
                <p className="text-sm text-muted-foreground">Start receiving customer inquiries</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListBusiness;
