
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const SponsoredAdModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAd, setCurrentAd] = useState(0);

  const sponsoredAds = [
    {
      title: 'Premium Home Services',
      content: 'Get 20% off on all home cleaning and maintenance services this month!',
      company: 'CleanPro Madurai',
      offer: '20% OFF'
    },
    {
      title: 'Digital Marketing Solutions',
      content: 'Boost your business online with our comprehensive digital marketing packages.',
      company: 'DigiGrow Solutions',
      offer: 'Free Consultation'
    },
    {
      title: 'Local Business Growth',
      content: 'Join our business network and grow your customer base in Madurai.',
      company: 'Madurai Business Hub',
      offer: 'Special Package'
    }
  ];

  useEffect(() => {
    // Show ad after 30 seconds, then every 5 minutes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % sponsoredAds.length);
      setIsOpen(true);
    }, 300000); // 5 minutes

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const ad = sponsoredAds[currentAd];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">
                Sponsored
              </span>
              {ad.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg text-center mb-4">
            <div className="text-2xl font-bold text-primary mb-2">{ad.offer}</div>
            <h3 className="font-semibold text-lg mb-2">{ad.company}</h3>
            <p className="text-muted-foreground">{ad.content}</p>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleClose} variant="outline" className="flex-1">
              Not Interested
            </Button>
            <Button onClick={handleClose} className="flex-1">
              Learn More
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SponsoredAdModal;
