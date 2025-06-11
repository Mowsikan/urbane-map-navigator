
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Your One-Stop Marketplace for Everything in Madurai
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Find local services tailored to your needs, from newborn care to senior support.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Your Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alagar-kovil">Alagar Kovil Road</SelectItem>
                  <SelectItem value="anna-nagar">Anna Nagar</SelectItem>
                  <SelectItem value="gandhi-nagar">Gandhi Nagar</SelectItem>
                  <SelectItem value="vilangudi">Vilangudi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Demographic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="families">Families</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="seniors">Seniors</SelectItem>
                  <SelectItem value="professionals">Professionals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home-services">Home Services</SelectItem>
                  <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="business">Business Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="relative">
              <Input placeholder="Search for services..." className="pr-12" />
              <Button size="icon" className="absolute right-1 top-1 h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
