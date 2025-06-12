
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Star, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Business {
  id: string;
  name: string;
  description: string | null;
  category: string;
  area: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  working_hours: string | null;
  price_range: string | null;
  image_url: string | null;
  rating: number;
  review_count: number;
  verified: boolean;
  speciality: string | null;
  experience: string | null;
  response_time: string | null;
}

const Businesses = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const { toast } = useToast();

  const categories = [
    'Wedding Services', 'Home Services', 'Healthcare', 'Education',
    'Food & Catering', 'Shopping', 'Professional Services', 'Tourism',
    'Automotive', 'Beauty & Wellness'
  ];

  const areas = [
    'Meenakshi Temple Area', 'Anna Nagar', 'SS Colony', 'KK Nagar', 
    'Tallakulam', 'Thirunagar', 'Vilangudi', 'Pasumalai', 'Mattuthavani',
    'Teppakulam', 'Alagar Kovil Road'
  ];

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching businesses:', error);
        toast({
          title: "Error",
          description: "Failed to load businesses. Please try again.",
          variant: "destructive"
        });
      } else {
        setBusinesses(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesArea = selectedArea === 'all' || business.area === selectedArea;
    
    return matchesSearch && matchesCategory && matchesArea;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Businesses in Madurai
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover trusted local businesses across Madurai's vibrant neighborhoods
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search businesses, services, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger>
                <SelectValue placeholder="All Areas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                {areas.map((area) => (
                  <SelectItem key={area} value={area}>{area}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {loading ? 'Loading...' : `${filteredBusinesses.length} Businesses Found`}
          </h2>
        </div>

        {/* Business Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredBusinesses.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
              <Search className="w-full h-full" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or browse all categories
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{business.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Badge variant="secondary">{business.category}</Badge>
                        {business.verified && (
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            Verified
                          </Badge>
                        )}
                      </CardDescription>
                    </div>
                    {business.rating > 0 && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{business.rating.toFixed(1)}</span>
                        <span className="text-sm text-gray-500">({business.review_count})</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {business.description && (
                    <p className="text-gray-600 text-sm line-clamp-2">{business.description}</p>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{business.area}</span>
                    </div>
                    
                    {business.working_hours && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{business.working_hours}</span>
                      </div>
                    )}
                    
                    {business.price_range && (
                      <div className="text-sm">
                        <span className="font-medium text-green-600">{business.price_range}</span>
                      </div>
                    )}
                    
                    {business.speciality && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Speciality:</span> {business.speciality}
                      </div>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex space-x-2">
                  {business.phone && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  )}
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Businesses;
