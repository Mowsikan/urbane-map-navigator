
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock, Eye, ThumbsUp } from 'lucide-react';

const VideoRecommendations = () => {
  const videos = [
    {
      title: 'Meenakshi Amman Temple: Complete Guide for First-Time Visitors',
      duration: '15:45',
      views: '125K',
      likes: '4.2K',
      description: 'Everything you need to know about visiting Madurai\'s most sacred temple',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop'
    },
    {
      title: 'Madurai Street Food Adventures: Must-Try Local Delicacies',
      duration: '12:30',
      views: '89K',
      likes: '3.1K',
      description: 'Discover authentic Madurai flavors from famous street vendors',
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop'
    },
    {
      title: 'Traditional Silk Saree Shopping Guide in Madurai',
      duration: '18:20',
      views: '67K',
      likes: '2.8K',
      description: 'How to choose authentic handwoven silk sarees from local artisans',
      thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=250&fit=crop'
    },
    {
      title: 'Living in Madurai: Best Neighborhoods for Families',
      duration: '22:15',
      views: '54K',
      likes: '2.1K',
      description: 'Complete guide to residential areas, schools, and family amenities',
      thumbnail: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=250&fit=crop'
    },
    {
      title: 'Madurai Wedding Traditions: Planning Your Perfect Tamil Wedding',
      duration: '25:40',
      views: '98K',
      likes: '5.6K',
      description: 'Traditional ceremonies, modern planning tips, and local vendors',
      thumbnail: 'https://images.unsplash.com/photo-1512220917904-6f0d4c30932a?w=400&h=250&fit=crop'
    },
    {
      title: 'Business Opportunities in Madurai: Startup Ecosystem Guide',
      duration: '19:30',
      views: '43K',
      likes: '1.9K',
      description: 'Emerging sectors, government support, and networking opportunities',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📺 Local Insights
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Discover Madurai Through Videos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get insider knowledge about Madurai through our curated video content. From cultural insights to practical guides, 
            these videos help you navigate and appreciate the depth of Tamil Nadu's cultural capital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  TRENDING
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
            Watch More Madurai Videos
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            New videos added every week featuring local insights and expert guides
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoRecommendations;
