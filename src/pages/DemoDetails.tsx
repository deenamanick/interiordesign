import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

interface Demo {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
  popular: boolean;
  fullDescription?: string;
  gallery?: string[];
  specifications?: { [key: string]: string };
}

const demos: Demo[] = [
  {
    id: 1,
    title: 'Modern Minimalist',
    description: 'Clean lines and simple elegance for contemporary living spaces.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    features: ['Open concept layout', 'Neutral color palette', 'Furniture with clean lines', 'Strategic lighting'],
    category: 'Residential',
    popular: true,
    fullDescription: 'Our Modern Minimalist design concept embraces simplicity and functionality without sacrificing style. This approach focuses on creating clean, uncluttered spaces that promote a sense of calm and order. The design utilizes a carefully curated selection of materials and furnishings, each chosen for both their aesthetic appeal and practical purpose.',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg'
    ],
    specifications: {
      'Style': 'Modern Minimalist',
      'Color Scheme': 'Neutral with monochromatic accents',
      'Materials': 'Natural wood, steel, glass',
      'Lighting': 'LED recessed lighting with adjustable sconces',
      'Flooring': 'Polished concrete or engineered hardwood',
      'Storage': 'Built-in solutions with clean fronts'
    }
  },
  {
    id: 2,
    title: 'Scandinavian Inspired',
    description: 'Light-filled spaces with natural elements and functional simplicity.',
    image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg',
    features: ['Light woods', 'Monochromatic palette', 'Textured fabrics', 'Indoor plants'],
    category: 'Residential',
    popular: true,
    fullDescription: 'Drawing inspiration from Nordic design principles, our Scandinavian-inspired concept creates bright, airy spaces that celebrate natural light and organic materials. The design philosophy emphasizes functionality without compromising on comfort, incorporating soft textures and warm wood tones to create inviting environments that feel both sophisticated and homey.',
    gallery: [
      'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg',
      'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg',
      'https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg'
    ],
    specifications: {
      'Style': 'Scandinavian Modern',
      'Color Scheme': 'White base with pale neutrals and black accents',
      'Materials': 'Light wood, wool, linen, ceramic',
      'Lighting': 'Maximum natural light with pendant fixtures',
      'Flooring': 'Light oak hardwood',
      'Storage': 'Minimalist cabinets and open shelving'
    }
  },
  {
    id: 3,
    title: 'Industrial Chic',
    description: 'Raw urban appeal with exposed elements and versatile spaces.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    features: ['Exposed brick/concrete', 'Metal finishes', 'Vintage accents', 'Open shelving'],
    category: 'Commercial',
    popular: false,
    fullDescription: 'Our Industrial Chic concept celebrates the raw beauty of architectural elements while incorporating modern comforts. This design approach transforms commercial spaces into dynamic environments that honor their industrial heritage while meeting contemporary needs. The aesthetic combines exposed structural elements with refined finishes to create a sophisticated urban atmosphere.',
    gallery: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg',
      'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg',
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg'
    ],
    specifications: {
      'Style': 'Industrial Modern',
      'Color Scheme': 'Grays, blacks, and warm metals',
      'Materials': 'Exposed brick, concrete, steel, reclaimed wood',
      'Lighting': 'Industrial pendants and exposed bulb fixtures',
      'Flooring': 'Polished concrete or reclaimed hardwood',
      'Storage': 'Metal shelving and vintage-inspired cabinets'
    }
  },
  {
    id: 4,
    title: 'Boutique Retail',
    description: 'Engaging commercial spaces that highlight products and enhance customer experience.',
    image: 'https://images.pexels.com/photos/6197928/pexels-photo-6197928.jpeg',
    features: ['Custom displays', 'Brand-aligned aesthetics', 'Strategic lighting', 'Traffic flow optimization'],
    category: 'Commercial',
    popular: true,
    fullDescription: 'Our Boutique Retail concept creates immersive shopping environments that elevate the customer experience while maximizing sales potential. The design carefully balances aesthetic appeal with practical retail requirements, incorporating flexible display solutions and creating intuitive customer flow patterns. Special attention is paid to lighting design and visual merchandising opportunities.',
    gallery: [
      'https://images.pexels.com/photos/6197928/pexels-photo-6197928.jpeg',
      'https://images.pexels.com/photos/7319315/pexels-photo-7319315.jpeg',
      'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg',
      'https://images.pexels.com/photos/6197921/pexels-photo-6197921.jpeg'
    ],
    specifications: {
      'Style': 'Contemporary Retail',
      'Color Scheme': 'Brand-specific with neutral base',
      'Materials': 'High-end finishes, glass, metal',
      'Lighting': 'Layered lighting with product spotlights',
      'Flooring': 'Luxury vinyl or polished concrete',
      'Storage': 'Back-of-house optimization and display storage'
    }
  },
  {
    id: 5,
    title: 'Coastal Elegance',
    description: 'Beachside inspiration with sophisticated details and airy spaces.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    features: ['Ocean-inspired colors', 'Natural light maximization', 'Relaxed furnishings', 'Textural elements'],
    category: 'Residential',
    popular: false,
    fullDescription: 'Our Coastal Elegance concept brings the serenity of beachside living into the home while maintaining a sophisticated aesthetic. This design approach combines light, airy spaces with refined materials and thoughtful details that reference coastal elements without becoming themed. The result is a fresh, timeless interior that feels both luxurious and relaxed.',
    gallery: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/2476637/pexels-photo-2476637.jpeg',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg'
    ],
    specifications: {
      'Style': 'Coastal Contemporary',
      'Color Scheme': 'Blues, sandy neutrals, crisp whites',
      'Materials': 'Natural fibers, weathered woods, glass',
      'Lighting': 'Abundant natural light with coastal-inspired fixtures',
      'Flooring': 'Wide plank light wood or limestone',
      'Storage': 'Built-in cabinetry with beachy hardware'
    }
  }
];

const DemoDetails: React.FC = () => {
  const { id } = useParams();
  const [demo, setDemo] = useState<Demo | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    const foundDemo = demos.find(d => d.id === Number(id));
    if (foundDemo) {
      setDemo(foundDemo);
      setActiveImage(foundDemo.image);
      document.title = `${foundDemo.title} Demo - InteriorBlend`;
    }
  }, [id]);

  if (!demo) {
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif mb-4">Demo not found</h1>
          <Link to="/demos">
            <Button variant="primary" icon={<ArrowLeft size={20} />}>
              Back to Demos
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
          <Link to="/demos">
            <Button variant="primary" icon={<ArrowLeft size={20} />}>
              Back to Demos
            </Button>
          </Link>
        </div>

        {/* Demo Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-gray-900">
              {demo.title}
            </h1>
            {demo.popular && (
              <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-md flex items-center">
                <CheckCircle size={14} className="mr-1" />
                Popular
              </span>
            )}
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            {demo.description}
          </p>
        </div>

        {/* Main Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-9">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src={activeImage}
                alt={demo.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {demo.gallery?.map((image, index) => (
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

        {/* Demo Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle 
              title="About this Design" 
              alignment="left"
            />
            <p className="text-gray-600 mb-8 leading-relaxed">
              {demo.fullDescription}
            </p>

            <div className="mb-8">
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {demo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-indigo-600 mr-2 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-4">
                Specifications
              </h3>
              <dl className="space-y-4">
                {Object.entries(demo.specifications || {}).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-medium text-gray-900">{key}</dt>
                    <dd className="text-gray-600 mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDetails;