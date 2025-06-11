
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, GraduationCap, Heart, Users, Home, Briefcase } from 'lucide-react';

const LifeStageSection = () => {
  const lifeStages = [
    { icon: Baby, title: 'New Parents', description: 'Childcare, pediatricians, baby products' },
    { icon: GraduationCap, title: 'Students', description: 'Tutoring, courses, educational services' },
    { icon: Heart, title: 'Couples', description: 'Wedding planning, relationship counseling' },
    { icon: Users, title: 'Families', description: 'Family activities, home services, entertainment' },
    { icon: Home, title: 'Homeowners', description: 'Maintenance, repairs, home improvement' },
    { icon: Briefcase, title: 'Professionals', description: 'Business services, networking, career growth' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Life Stage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover services perfectly tailored to your current life situation and needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeStages.map((stage, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <stage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-muted-foreground">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeStageSection;
