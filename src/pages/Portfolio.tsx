import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Update document title when component mounts
  useEffect(() => {
    document.title = 'Portfolio - InteriorBlend';
  }, []);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const categories = ['all', 'Residential', 'Commercial'];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Portfolio" 
          subtitle="Explore our recent projects and see how we've transformed spaces for our clients."
        />

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
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
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
              alt="Featured project" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <span className="text-indigo-300 mb-2 inline-flex items-center">
                <Bookmark size={16} className="mr-2" />
                Featured Project
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">
                Luxury Penthouse Redesign
              </h2>
              <p className="text-white/90 max-w-xl mb-4">
                A complete transformation of a downtown penthouse, combining modern luxury with practical living space for a growing family.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                  Residential
                </span>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                  Luxury
                </span>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                  Modern
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              image={project.mainImage}
              description={project.description}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg mt-8">
            <p className="text-gray-600 dark:text-gray-300">
              No projects found in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;