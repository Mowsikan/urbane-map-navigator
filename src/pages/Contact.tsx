
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HelpCircle, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 East Masi Street', 'Near Meenakshi Temple', 'Madurai, Tamil Nadu 625001']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9876543210', '+91 9876543211', 'Mon-Sat: 9 AM - 7 PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@maduraihub.com', 'support@maduraihub.com', 'business@maduraihub.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM', '24/7 Online Support']
    }
  ];

  const contactTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'support', label: 'Customer Support', icon: HelpCircle },
    { value: 'business', label: 'Business Partnership', icon: Building },
    { value: 'feedback', label: 'Feedback', icon: Send }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4">Get In Touch</Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                We're Here to
                <span className="text-primary block">Help You</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have questions about our services? Want to partner with us? Or just want to say hello?
                We'd love to hear from you. Our team is always ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                  All fields marked with * are required.
                </p>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Contact Type Selection */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          What can we help you with? *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {contactTypes.map((type) => (
                            <label key={type.value} className="cursor-pointer">
                              <input
                                type="radio"
                                name="type"
                                value={type.value}
                                checked={formData.type === type.value}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className={`p-3 rounded-lg border-2 transition-all ${
                                formData.type === type.value
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}>
                                <div className="flex items-center space-x-2">
                                  <type.icon className="h-4 w-4" />
                                  <span className="text-sm font-medium">{type.label}</span>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief description of your inquiry"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide details about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Find Us</h2>
                  <p className="text-muted-foreground mb-6">
                    Located in the heart of Madurai, near the famous Meenakshi Temple.
                    Drop by our office for a cup of traditional filter coffee and a chat!
                  </p>
                </div>

                {/* Map Placeholder */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-12 w-12 mx-auto mb-4" />
                        <p className="font-medium">Interactive Map</p>
                        <p className="text-sm">123 East Masi Street, Madurai</p>
                        <p className="text-sm">Near Meenakshi Temple</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5" />
                        <span>Call us at +91 9876543210</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5" />
                        <span>Live chat available on our website</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5" />
                        <span>Email: support@maduraihub.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
