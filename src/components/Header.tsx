
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, Phone, Mail, MapPin, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, loading } = useAuth();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleSignOut = async () => {
    await signOut();
  };

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
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">Madurai Hub</h1>
                  <p className="text-xs text-muted-foreground">Temple City's Digital Gateway</p>
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`transition-colors font-medium ${
                  isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/businesses" 
                className={`transition-colors font-medium ${
                  isActive('/businesses') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Businesses
              </Link>
              <Link 
                to="/areas" 
                className={`transition-colors font-medium ${
                  isActive('/areas') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Areas
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors font-medium ${
                  isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-medium ${
                  isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/list-business">
                <Button variant="outline" className="hidden sm:flex">List Your Business</Button>
              </Link>
              
              {loading ? (
                <div className="text-sm text-muted-foreground">Loading...</div>
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">{user.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleSignOut} className="flex items-center space-x-2">
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
              
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
                <Link 
                  to="/" 
                  className={`transition-colors font-medium ${
                    isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/businesses" 
                  className={`transition-colors font-medium ${
                    isActive('/businesses') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Businesses
                </Link>
                <Link 
                  to="/areas" 
                  className={`transition-colors font-medium ${
                    isActive('/areas') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Areas
                </Link>
                <Link 
                  to="/about" 
                  className={`transition-colors font-medium ${
                    isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors font-medium ${
                    isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t">
                  <Link to="/list-business" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full mb-2">List Your Business</Button>
                  </Link>
                  {user ? (
                    <Button 
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }} 
                      variant="outline" 
                      className="w-full flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full">Sign Up</Button>
                      </Link>
                    </div>
                  )}
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
