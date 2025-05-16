import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  // Update document title when component mounts
  React.useEffect(() => {
    document.title = 'Page Not Found - InteriorBlend';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="container px-4 text-center">
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/">
          <Button 
            variant="primary" 
            size="lg"
            icon={<ArrowLeft size={20} />}
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;