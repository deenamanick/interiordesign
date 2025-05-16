import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6444352/pexels-photo-6444352.jpeg"
          alt="Modern interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Let's create beautiful, functional spaces that reflect your unique style and enhance your everyday life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="text"
                size="lg"
                className="bg-white text-indigo-700 hover:bg-gray-200"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;