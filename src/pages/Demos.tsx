import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardImage, CardContent } from '../components/ui/Card';

interface Demo {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
  popular: boolean;
}

const Demos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Update document title when component mounts
  React.useEffect(() => {
    document.title = 'Browse Demos - InteriorBlend';
  }, []);

  const demos: Demo[] = [
    {
      id: 1,
      title: 'Modern Minimalist',
      description: 'Clean lines and simple elegance for contemporary living spaces.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Open concept layout', 'Neutral color palette', 'Furniture with clean lines', 'Strategic lighting'],
      category: 'Residential',
      popular: true,
    },
    {
      id: 2,
      title: 'Scandinavian Inspired',
      description: 'Light-filled spaces with natural elements and functional simplicity.',
      image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg',
      features: ['Light woods', 'Monochromatic palette', 'Textured fabrics', 'Indoor plants'],
      category: 'Residential',
      popular: true,
    },
    {
      id: 3,
      title: 'Industrial Chic',
      description: 'Raw urban appeal with exposed elements and versatile spaces.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      features: ['Exposed brick/concrete', 'Metal finishes', 'Vintage accents', 'Open shelving'],
      category: 'Commercial',
      popular: false,
    },
    {
      id: 4,
      title: 'Coastal Elegance',
      description: 'Beachside inspiration with sophisticated details and airy spaces.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      features: ['Ocean-inspired colors', 'Natural light maximization', 'Relaxed furnishings', 'Textural elements'],
      category: 'Residential',
      popular: false,
    },
    {
      id: 5,
      title: 'Boutique Retail',
      description: 'Engaging commercial spaces that highlight products and enhance customer experience.',
      image: 'https://images.pexels.com/photos/6197928/pexels-photo-6197928.jpeg',
      features: ['Custom displays', 'Brand-aligned aesthetics', 'Strategic lighting', 'Traffic flow optimization'],
      category: 'Commercial',
      popular: true,
    },
    {
      id: 6,
      title: 'Modern Office',
      description: 'Productive workspaces balancing collaboration and focus.',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      features: ['Ergonomic design', 'Collaborative areas', 'Biophilic elements', 'Technology integration'],
      category: 'Commercial',
      popular: false,
    },
  ];

  const categories = ['all', 'Residential', 'Commercial'];

  const filteredDemos = demos.filter((demo) => {
    const matchesCategory = activeFilter === 'all' || demo.category === activeFilter;
    const matchesSearch = demo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          demo.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Browse Our Design Demos" 
          subtitle="Explore our design concepts and find inspiration for your next project."
        />

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeFilter === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search demos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            </div>
          </div>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDemos.map((demo) => (
            <Card key={demo.id} hover={true} className="h-full">
              {demo.popular && (
                <div className="absolute top-4 right-4 z-10 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <CheckCircle size={12} className="mr-1" />
                  Popular
                </div>
              )}
              <CardImage src={demo.image} alt={demo.title} className="h-56" />
              <CardContent>
                <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-2">
                  {demo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {demo.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/demos/${demo.id}`}>
                  <Button 
                    variant="primary" 
                    icon={<ArrowRight size={18} />} 
                    iconPosition="right"
                  >
                    View Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDemos.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">No demos found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-medium text-black mb-4">
            Don't see what you're looking for?
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            We offer custom design solutions tailored to your specific needs and preferences. 
            Contact our team to discuss your project requirements.
          </p>
          <Link to="/contact">
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demos;