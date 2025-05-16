import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardImage, CardContent } from '../ui/Card';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, image, description }) => {
  return (
    <Link to={`/portfolio/${id}`} className="block">
      <Card hover={true} className="h-full">
        <CardImage src={image} alt={title} className="h-64" />
        <CardContent>
          <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1 block">
            {category}
          </span>
          <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;