
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hello@maduraihub.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Serving all of Madurai</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">Madurai Hub</h1>
                  <p className="text-xs text-muted-foreground">Temple City's Digital Gateway</p>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#areas" className="text-foreground hover:text-primary transition-colors font-medium">Areas</a>
              <a href="#providers" className="text-foreground hover:text-primary transition-colors font-medium">Providers</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:flex">List Your Business</Button>
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
                <a href="#areas" className="text-foreground hover:text-primary transition-colors font-medium">Areas</a>
                <a href="#providers" className="text-foreground hover:text-primary transition-colors font-medium">Providers</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full mb-2">List Your Business</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
