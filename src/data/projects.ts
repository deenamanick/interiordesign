export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  location: string;
  year: number;
  client: string;
  mainImage: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Minimalist Urban Loft',
    description: 'A modern loft space transformed with clean lines and thoughtful details for urban living.',
    fullDescription: 'This urban loft renovation embraces minimalist design principles while maintaining warmth and functionality. The open floor plan is enhanced by strategic placement of furniture and lighting to define living spaces without walls. Custom built-ins maximize storage while maintaining clean lines. The color palette features warm neutrals with subtle texture variations, creating visual interest without clutter.',
    category: 'Residential',
    location: 'New York, NY',
    year: 2024,
    client: 'Private Residence',
    mainImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    ],
    tags: ['Minimalist', 'Urban', 'Modern', 'Open Concept'],
  },
  {
    id: 2,
    title: 'Coastal Retreat',
    description: 'A beachfront property redesigned to maximize views and create an elegant, relaxing atmosphere.',
    fullDescription: 'This coastal home was reimagined to create a sophisticated retreat that embraces its oceanfront setting. The design prioritizes the breathtaking views with an open layout and strategic window placement. The interior features a palette inspired by the natural surroundings—soft blues, sandy neutrals, and touches of weathered wood. Custom furnishings balance comfort with elegance, while durable, low-maintenance materials stand up to beach living.',
    category: 'Residential',
    location: 'Malibu, CA',
    year: 2023,
    client: 'Private Residence',
    mainImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/2476637/pexels-photo-2476637.jpeg',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
    ],
    tags: ['Coastal', 'Elegant', 'Beachfront', 'Open Views'],
  },
  {
    id: 3,
    title: 'Creative Office Hub',
    description: 'A collaborative workspace designed to foster creativity and productivity for a tech startup.',
    fullDescription: 'This office redesign for a growing tech company balances open collaboration spaces with private work areas to support various work styles. The central hub features modular furniture that can be reconfigured for team meetings or individual work. Strategic use of color and biophilic elements enhance creativity and wellbeing. The design incorporates state-of-the-art technology seamlessly integrated into the architecture for efficient workflows.',
    category: 'Commercial',
    location: 'San Francisco, CA',
    year: 2024,
    client: 'TechStart Inc.',
    mainImage: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
    images: [
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg',
      'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg',
    ],
    tags: ['Commercial', 'Creative', 'Collaborative', 'Tech'],
  },
  {
    id: 4,
    title: 'Modern Farmhouse',
    description: 'A contemporary take on traditional farmhouse design, blending rustic elements with modern functionality.',
    fullDescription: 'This modern farmhouse design creates a perfect balance between rustic charm and contemporary comfort. The open-concept main floor features soaring ceilings with exposed reclaimed wood beams and walls of windows that flood the space with natural light. The kitchen combines classic shaker cabinetry with state-of-the-art appliances and striking marble countertops. Throughout the home, the design respects traditional farmhouse aesthetics while updating them for modern living.',
    category: 'Residential',
    location: 'Hudson Valley, NY',
    year: 2023,
    client: 'Private Residence',
    mainImage: 'https://images.pexels.com/photos/3824234/pexels-photo-3824234.jpeg',
    images: [
      'https://images.pexels.com/photos/3824234/pexels-photo-3824234.jpeg',
      'https://images.pexels.com/photos/3773577/pexels-photo-3773577.png',
      'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    ],
    tags: ['Farmhouse', 'Rustic', 'Modern', 'Country'],
  },
  {
    id: 5,
    title: 'Luxury Boutique Hotel',
    description: 'A boutique hotel with distinct personality, combining luxury amenities with unique design experiences.',
    fullDescription: 'This boutique hotel project involved transforming a historic building into a luxury hospitality destination. Each of the 36 guest rooms features a unique design theme inspired by local history and culture. The lobby creates a dramatic first impression with a blend of restored architectural details and bold contemporary elements. Custom lighting fixtures, locally commissioned artwork, and handcrafted furniture pieces create a distinctive experience that sets this hotel apart from chain competitors.',
    category: 'Commercial',
    location: 'Chicago, IL',
    year: 2023,
    client: 'Prestige Hospitality Group',
    mainImage: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
    images: [
      'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
      'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg',
      'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg',
      'https://images.pexels.com/photos/4217/hotel-bed-bedroom-room.jpg',
    ],
    tags: ['Hotel', 'Luxury', 'Boutique', 'Historic Renovation'],
  },
  {
    id: 6,
    title: 'Scandinavian Apartment',
    description: 'A small urban apartment transformed with clean Scandinavian design principles and space-saving solutions.',
    fullDescription: 'This compact urban apartment showcases how thoughtful design can maximize limited space without sacrificing style. The renovation embraces Scandinavian principles of clean lines, functional minimalism, and ample natural light. Custom millwork provides abundant storage while maintaining an airy feel. The neutral palette is warmed by natural wood tones and textural elements. Every inch is optimized with multi-functional furniture and built-in solutions that transform to accommodate different needs throughout the day.',
    category: 'Residential',
    location: 'Boston, MA',
    year: 2024,
    client: 'Private Residence',
    mainImage: 'https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg',
    images: [
      'https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg',
    ],
    tags: ['Scandinavian', 'Small Space', 'Minimal', 'Functional'],
  },
];