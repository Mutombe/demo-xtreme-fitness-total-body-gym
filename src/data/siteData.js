export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Xtreme Fitness Total Body Gym",
    legalName: "Xtreme Fitness Total Body Gym",
    tagline: "No Limits. No Excuses. Just Results.",
    description: "Xtreme Fitness Total Body Gym is Harare's high-intensity training destination. Premium equipment, expert trainers, and an atmosphere that pushes you beyond what you thought possible.",
    phone: "+263 77 483 2357",
    phoneRaw: "+263774832357",
    whatsappNumber: "263774832357",
    email: "xtremefitnesstotalbodygym@gmail.com",
    address: "Cnr Tongogara and, Fifth St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 6,
    established: "2018",
    yearsExperience: "7+",
    projectsCompleted: "1200+",
    employees: "12+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "xtreme-fitness-total-body-gym-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Xtreme", logoLine2: "Fitness Total Body Gym" },

  hero: {
    badge: "Harare's High-Intensity Gym",
    titleParts: [
      { text: "WHERE LIMITS " },
      { text: "GET", highlight: true },
      { text: " DESTROYED." },
    ],
    subtitle: "1,200+ members. Premium equipment. Expert trainers. An atmosphere designed for people who train with purpose and refuse to accept anything less than their best.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "1000+ Active Members",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "1000+", label: "Active Members" },
    { number: "5+", label: "Years Strong" },
    { number: "20+", label: "Certified Trainers" },
    { number: "50+", label: "Weekly Classes" },
  ],

  servicesPreview: [
    { title: "Strength Training", desc: "State-of-the-art free weights and resistance machines for building muscle, increasing strength, and sculpting the body you have always wanted.", icon: "Star" },
    { title: "Cardio Zone", desc: "Premium treadmills, ellipticals, and rowing machines with personal entertainment screens to make every session fly by.", icon: "Heart" },
    { title: "Group Classes", desc: "From high-intensity interval training to yoga and Zumba, our group classes are led by certified instructors who make fitness fun.", icon: "Buildings" },
    { title: "Personal Training", desc: "One-on-one coaching from certified trainers who design custom programs around your goals, schedule, and fitness level.", icon: "Lightbulb" },
    { title: "Nutrition Coaching", desc: "Expert nutritional guidance that complements your training. Meal plans, macro tracking, and supplement advice tailored to your body.", icon: "Leaf" },
    { title: "Recovery Zone", desc: "Sauna, steam room, and stretching areas designed for optimal recovery. Because the gains happen when you rest.", icon: "Briefcase" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Strength Training", slug: "strength-training", desc: "State-of-the-art free weights and resistance machines for building muscle, increasing strength, and sculpting the body you have always wanted.", features: ["Free Weights", "Machines", "Powerlifting", "Bodybuilding", "Functional Training", "Olympic Lifting"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Cardio Zone", slug: "cardio-zone", desc: "Premium treadmills, ellipticals, and rowing machines with personal entertainment screens to make every session fly by.", features: ["Treadmills", "Ellipticals", "Rowing Machines", "Spin Bikes", "Stair Climbers", "Entertainment"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
      { title: "Group Classes", slug: "group-classes", desc: "From high-intensity interval training to yoga and Zumba, our group classes are led by certified instructors who make fitness fun.", features: ["HIIT", "Yoga", "Zumba", "Spinning", "Boxing", "Pilates"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Personal Training", slug: "personal-training", desc: "One-on-one coaching from certified trainers who design custom programs around your goals, schedule, and fitness level.", features: ["Custom Programs", "Progress Tracking", "Certified Trainers", "Flexible Hours", "Goal Setting", "Accountability"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
      { title: "Nutrition Coaching", slug: "nutrition-coaching", desc: "Expert nutritional guidance that complements your training. Meal plans, macro tracking, and supplement advice tailored to your body.", features: ["Meal Plans", "Macro Tracking", "Supplements", "Body Composition", "Dietary Guidance", "Weight Management"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Recovery Zone", slug: "recovery-zone", desc: "Sauna, steam room, and stretching areas designed for optimal recovery. Because the gains happen when you rest.", features: ["Sauna", "Steam Room", "Stretching Area", "Foam Rolling", "Cold Plunge", "Massage"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Transformation", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Strength Training", "Cardio Zone"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "Competition", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Strength Training", "Cardio Zone"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Wellness", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Strength Training", "Cardio Zone"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Group", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Strength Training", "Cardio Zone"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Transformation", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Strength Training", "Cardio Zone"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "Competition", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Strength Training", "Cardio Zone"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Three years in and I have never been in better shape. The trainers genuinely care about your progress.", name: "Kudzai Sibanda", role: "Member, 3 Years", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "Prepared for two national competitions here. The equipment and coaching are world-class for Zimbabwe.", name: "Nyasha Karimanzira", role: "Competition Athlete", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Lost 25kg in eight months with their nutrition program and personal training. Life-changing experience.", name: "Chiedza Mapuranga", role: "Weight Loss Journey", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "My personal trainer designed a program that works around my injuries. Smart, patient, and effective coaching.", name: "Thomas Chirinda", role: "Personal Training Client", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "Three years in and I have never been in better shape. The trainers genuinely care about your progress.", name: "Kudzai Sibanda", role: "Member, 3 Years", rating: 5 },
      { text: "Prepared for two national competitions here. The equipment and coaching are world-class for Zimbabwe.", name: "Nyasha Karimanzira", role: "Competition Athlete", rating: 5 },
      { text: "Lost 25kg in eight months with their nutrition program and personal training. Life-changing experience.", name: "Chiedza Mapuranga", role: "Weight Loss Journey", rating: 5 },
      { text: "My personal trainer designed a program that works around my injuries. Smart, patient, and effective coaching.", name: "Thomas Chirinda", role: "Personal Training Client", rating: 5 },
      { text: "The group classes are the highlight of my week. Great energy, great music, and instructors who push you just right.", name: "Rumbidzai Sande", role: "Group Class Regular", rating: 5 },
      { text: "The community here is what keeps me coming back. Everyone supports each other. It is more than a gym.", name: "Patrick Makoni", role: "Marathon Runner", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Xtreme Fitness opened in 2018 on the corner of Tongogara and Fifth Street with a mission to create a gym that matches the intensity of its members. No gimmicks, no fluff -- just serious training.",
      "Our equipment is top-tier, our trainers are certified, and our community is built on mutual respect and shared ambition. This is where Harare comes to get strong.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Xtreme Fitness Total Body Gym on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "Cnr Tongogara and, Fifth St, Harare, Zimbabwe", phone: "+263 77 483 2357", email: "xtremefitnesstotalbodygym@gmail.com" },
    ],
  },

  homeCta: {
    title: "PUSH YOUR\nLIMITS",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Xtreme Fitness Total Body Gym! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85",
  },

  footer: {
    description: "Xtreme Fitness Total Body Gym is Harare's high-intensity training destination. Premium equipment, expert trainers, and a...",
    copyright: "Xtreme Fitness Total Body Gym",
  },
};

export default siteData;
