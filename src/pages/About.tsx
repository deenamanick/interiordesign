import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  // Update document title when component mounts
  React.useEffect(() => {
    document.title = 'About Us - InteriorBlend';
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Olivia Bennett',
      role: 'Founder & Principal Designer',
      bio: 'With over 15 years of experience in interior design, Olivia founded InteriorBlend with a vision to create spaces that perfectly balance beauty and functionality. Her work has been featured in Architectural Digest and Elle Decor.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      id: 2,
      name: 'James Chen',
      role: 'Commercial Design Director',
      bio: 'James specializes in commercial and hospitality design, bringing a unique perspective shaped by his international background and studies in architecture. He leads our team in creating functional and inspiring workspaces.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      role: 'Senior Interior Designer',
      bio: 'Sofia combines her passion for sustainable design with a keen eye for color and texture. Her residential projects are known for their warmth and personality, creating homes that truly reflect their owners.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      role: '3D Visualization Specialist',
      bio: 'Marcus bridges technology and design, creating stunning 3D visualizations that help clients see their spaces before implementation. His background in both fine arts and computer science brings a unique skill set to our team.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
  ];

  const stats: Stat[] = [
    { value: '200+', label: 'Projects Completed', icon: <Award size={24} /> },
    { value: '15+', label: 'Years Experience', icon: <Clock size={24} /> },
    { value: '25', label: 'Design Professionals', icon: <Users size={24} /> },
    { value: '12', label: 'Design Awards', icon: <Lightbulb size={24} /> },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center mb-20 gap-12">
          <div className="lg:w-1/2">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">
              We Transform Spaces Into Experiences
            </h1>
            <p className="text-lg text-black mb-8 leading-relaxed">
              InteriorBlend was founded on a simple principle: thoughtful design has the power to transform how we live, work, and experience the world around us. Our team combines creativity and technical expertise to create spaces that are beautiful, functional, and deeply personal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio">
                <Button 
                  variant="primary" 
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  View Our Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg" 
                alt="Our design team at work" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg md:max-w-xs">
                <p className="italic text-gray-600 dark:text-gray-300">
                  "We believe that good design is not just about aesthetics—it's about creating spaces that enhance how people live, work, and connect."
                </p>
                <p className="font-medium text-gray-900 dark:text-white mt-2">— Olivia Bennett, Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <SectionTitle 
            title="Our Story" 
            subtitle="From a small studio to an award-winning design firm, our journey has been driven by passion and purpose."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <span className=" text-xl font-medium">1</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-3">
                Humble Beginnings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                InteriorBlend began as a small studio in 2010, with founder Olivia Bennett working directly with local homeowners to reimagine their living spaces.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <span className=" text-xl font-medium">2</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-3">
                Growth & Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                By 2015, our portfolio expanded to include commercial spaces and our first projects were featured in national design publications, earning industry recognition.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <span className="text-xl font-medium">3</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-3">
                Where We Are Today
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Today, our team of 25+ design professionals works on projects nationwide, while maintaining the personalized approach and attention to detail that defined our early work.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-medium text-black mb-4">
              Our Philosophy
            </h3>
            <p className=" text-black">
              We believe that exceptional design begins with listening. Every project starts with understanding not just what our clients want their spaces to look like, but how they want to feel within them. This human-centered approach guides our creative process, resulting in spaces that are as functional as they are beautiful.
            </p>
            <p className="text-black leading-relaxed">
              Sustainability is woven into everything we do. We prioritize environmentally responsible materials, energy-efficient systems, and timeless design that won't need to be replaced after a few years. Good design is inherently sustainable—it's made to last, both physically and aesthetically.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400 mb-4">
                  {stat.icon}
                </div>
                <h3 className="font-serif text-3xl font-medium text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="Our diverse team of designers brings together experience, creativity, and technical expertise."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Let's create a space that reflects your unique style and meets your functional needs.
          </p>
          <Link to="/contact">
            <Button 
              variant="text" 
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;