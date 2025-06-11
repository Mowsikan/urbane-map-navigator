
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock, Eye } from 'lucide-react';

const VideoRecommendations = () => {
  const videos = [
    {
      title: 'Madurai Temple Tour',
      duration: '12:45',
      views: '15K',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop'
    },
    {
      title: 'Eat Street: Madurai Edition',
      duration: '8:30',
      views: '8.2K',
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop'
    },
    {
      title: 'Traditional Crafts of Madurai',
      duration: '15:20',
      views: '12K',
      thumbnail: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Madurai Video Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore Madurai through our curated video content showcasing local culture, food, and attractions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 group-hover:bg-white transition-colors">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{video.views} views</span>
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
      </div>
    </section>
  );
};

export default VideoRecommendations;
