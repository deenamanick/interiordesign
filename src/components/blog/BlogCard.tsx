import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import Card, { CardImage, CardContent } from '../ui/Card';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, image, date, author, category }) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <Card hover={true} className="h-full">
        <CardImage src={image} alt={title} className="h-56" />
        <CardContent>
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
            {category}
          </span>
          <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{author}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;