import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Tag } from 'lucide-react';
import Button from '../components/ui/Button';
import { projects, Project } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    const foundProject = projects.find(p => p.id === Number(id));
    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.mainImage);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif mb-4">Project not found</h1>
          <Link to="/portfolio">
            <Button variant="primary" icon={<ArrowLeft size={20} />}>
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/portfolio">
            <Button variant="primary" icon={<ArrowLeft size={20} />}>
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {project.year}
            </div>
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              {project.client}
            </div>
          </div>
        </div>

        {/* Main Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-9">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(image)}
                  className={`relative h-32 rounded-lg overflow-hidden ${
                    activeImage === image ? 'ring-2 ring-indigo-600' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-medium text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
                  <p className="text-gray-600">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;