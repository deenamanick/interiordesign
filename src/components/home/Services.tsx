import React from 'react';
import { Home, Building2, Sofa, Ruler, PenTool, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-12 h-12 rounded-md bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary that reflects your lifestyle and preferences.',
      icon: <Home size={24} />,
    },
    {
      title: 'Commercial Spaces',
      description: 'Create functional and inspirational workplaces that enhance productivity and represent your brand.',
      icon: <Building2 size={24} />,
    },
    {
      title: 'Furniture Selection',
      description: 'Expert curation of furniture pieces that balance aesthetics, comfort, and functionality.',
      icon: <Sofa size={24} />,
    },
    {
      title: 'Space Planning',
      description: 'Optimize your layout to enhance flow, functionality, and make the most of available space.',
      icon: <Ruler size={24} />,
    },
    {
      title: '3D Visualization',
      description: 'See your space come to life before implementation with realistic 3D renderings and walkthroughs.',
      icon: <PenTool size={24} />,
    },
    {
      title: 'Consultation',
      description: 'Get professional advice and insights to guide your design decisions and planning process.',
      icon: <Users size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer comprehensive design solutions tailored to your unique needs and vision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;