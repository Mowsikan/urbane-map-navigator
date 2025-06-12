
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    let searchParams = new URLSearchParams();
    
    if (selectedLocation) searchParams.append('area', selectedLocation);
    if (selectedCategory) searchParams.append('category', selectedCategory);
    
    const queryString = searchParams.toString();
    navigate(`/businesses${queryString ? `?${queryString}` : ''}`);
  };

  const popularSearches = [
    'Temple priests', 'Wedding halls', 'Food delivery', 'Auto drivers', 'Tamil tutors',
    'Silk saree shops', 'Home cleaning', 'Ayurvedic doctors', 'Photography services'
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🕉️ Temple City's Premier Digital Hub
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Your Gateway to 
          <span className="text-primary block mt-2">Madurai's Everything</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          From Meenakshi Amman Temple to modern tech hubs, from traditional silk sarees to contemporary startups - 
          discover, connect, and thrive in the cultural capital of Tamil Nadu. Your one-stop platform for 
          living, working, and exploring Madurai.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary">2500+</div>
            <div className="text-sm text-muted-foreground">Verified Service Providers</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Major Areas Covered</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Find Your Perfect Service Match</h3>
            <p className="text-muted-foreground">Tell us what you need, and we'll connect you with the best in Madurai</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Location in Madurai</span>
              </label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Your Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anna-nagar">Anna Nagar</SelectItem>
                  <SelectItem value="ss-colony">SS Colony</SelectItem>
                  <SelectItem value="kk-nagar">KK Nagar</SelectItem>
                  <SelectItem value="tallakulam">Tallakulam</SelectItem>
                  <SelectItem value="vilangudi">Vilangudi</SelectItem>
                  <SelectItem value="thirunagar">Thirunagar</SelectItem>
                  <SelectItem value="alagar-kovil">Alagar Kovil Road</SelectItem>
                  <SelectItem value="mattuthavani">Mattuthavani</SelectItem>
                  <SelectItem value="teppakulam">Teppakulam</SelectItem>
                  <SelectItem value="pasumalai">Pasumalai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
                <ShoppingBag className="h-4 w-4" />
                <span>Service Category</span>
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="What do you need?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home-services">Home & Living</SelectItem>
                  <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                  <SelectItem value="education-learning">Education & Learning</SelectItem>
                  <SelectItem value="travel-tourism">Travel & Tourism</SelectItem>
                  <SelectItem value="food-dining">Food & Dining</SelectItem>
                  <SelectItem value="business-professional">Business & Professional</SelectItem>
                  <SelectItem value="cultural-religious">Cultural & Religious</SelectItem>
                  <SelectItem value="shopping-retail">Shopping & Retail</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </label>
              <Button size="lg" className="h-12 w-full" onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Find Businesses
              </Button>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {popularSearches.slice(0, 5).map((search, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-muted-foreground">•</span>}
                <button 
                  className="text-sm text-primary hover:underline cursor-pointer"
                  onClick={() => {
                    navigate('/businesses?search=' + encodeURIComponent(search));
                  }}
                >
                  {search}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
