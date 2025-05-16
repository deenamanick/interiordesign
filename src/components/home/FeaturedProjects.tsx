import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardImage, CardContent } from '../ui/Card';
import Button from '../ui/Button';

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ id, title, category, image, description }) => {
  return (
    <Card hover={true}>
      <CardImage src={image} alt={title} className="h-64" />
      <CardContent>
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1 block">
          {category}
        </span>
        <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <Link to={`/portfolio/${id}`}>
          <Button 
            variant="text" 
            icon={<ArrowRight size={18} />} 
            iconPosition="right"
          >
            View Project
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Minimalist Urban Loft',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      description: 'A modern loft space transformed with clean lines and thoughtful details for urban living.',
    },
    {
      id: 2,
      title: 'Coastal Retreat',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      description: 'A beachfront property redesigned to maximize views and create an elegant, relaxing atmosphere.',
    },
    {
      id: 3,
      title: 'Creative Office Hub',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      description: 'A collaborative workspace designed to foster creativity and productivity for a tech startup.',
    },
  ];

  return (
    <section className="py-2">
      <div className="container mx-auto px-4 ">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Explore our recent work and see how we've helped clients transform their spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/portfolio">
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;