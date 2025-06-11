
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, GraduationCap, Heart, Users, Home, Briefcase, MapPin, User } from 'lucide-react';

const LifeStageSection = () => {
  const lifeStages = [
    { 
      icon: MapPin, 
      title: 'New to Madurai', 
      description: 'Relocation services, local guides, essential contacts, cultural orientation',
      services: ['House hunting', 'School admissions', 'Local SIM cards', 'Bank account opening']
    },
    { 
      icon: Baby, 
      title: 'New Parents', 
      description: 'Pediatricians, baby care, naming ceremonies, traditional rituals',
      services: ['Pediatric care', 'Baby photography', 'Cradle ceremony', 'Vaccination centers']
    },
    { 
      icon: GraduationCap, 
      title: 'Students & Learning', 
      description: 'Coaching centers, language classes, skill development, career guidance',
      services: ['Tamil classes', 'Engineering coaching', 'Spoken English', 'Competitive exams']
    },
    { 
      icon: Heart, 
      title: 'Getting Married', 
      description: 'Wedding planning, mandap booking, catering, traditional ceremonies',
      services: ['Wedding halls', 'Bridal makeup', 'Catering services', 'Photography']
    },
    { 
      icon: Users, 
      title: 'Family Life', 
      description: 'Family activities, weekend outings, children services, elder care',
      services: ['Family restaurants', 'Kids activities', 'Elderly care', 'Weekend trips']
    },
    { 
      icon: Home, 
      title: 'Homeowners', 
      description: 'Home maintenance, interior design, security, domestic help',
      services: ['Plumbing', 'Electrical work', 'Interior design', 'Security systems']
    },
    { 
      icon: Briefcase, 
      title: 'Professionals', 
      description: 'Business networking, co-working spaces, professional services',
      services: ['Business registration', 'Accounting', 'Legal services', 'Networking events']
    },
    { 
      icon: User, 
      title: 'Tourists & Visitors', 
      description: 'Temple tours, local experiences, accommodation, cultural immersion',
      services: ['Temple guides', 'Heritage walks', 'Local experiences', 'Travel planning']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Personalized for Your Journey
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Services Tailored to Your Life Stage</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're discovering Madurai for the first time or have called it home for generations, 
            find services perfectly matched to your current needs and life situation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifeStages.map((stage, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                  <stage.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{stage.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">{stage.description}</p>
                <div className="space-y-2">
                  {stage.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-xs text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeStageSection;
