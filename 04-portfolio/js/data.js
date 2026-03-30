const PORTFOLIO = {
  name: 'Tahsan Ahmed',
  title: 'Creative Developer & Designer',
  roles: ['Full Stack Developer', 'UI/UX Designer', 'Creative Thinker', 'Problem Solver'],
  intro: 'I craft digital experiences that blend thoughtful design with solid engineering. Passionate about building things that look great and work even better.',
  email: 'hello@tahsan.dev',
  phone: '+880 1234 567890',
  location: 'Dhaka, Bangladesh',
  experience: '5+',
  available: true,
  socials: {
    github: '#', linkedin: '#', twitter: '#', dribbble: '#', behance: '#'
  },

  about: {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=667&fit=crop',
    bio: [
      "I'm a multi-disciplinary developer and designer with over 5 years of experience crafting digital products. I believe in the power of clean code and thoughtful design to create meaningful user experiences.",
      "My approach combines technical expertise with creative thinking — whether I'm building a complex web application, designing a brand identity, or capturing stories through photography.",
      "When I'm not coding, you'll find me exploring the city with my camera, experimenting with new design tools, or contributing to open-source projects."
    ]
  },

  skills: {
    frontend: [
      { name: 'React / Next.js', level: 95, primary: true },
      { name: 'TypeScript', level: 90, primary: true },
      { name: 'CSS / Tailwind', level: 92, primary: true },
      { name: 'Vue.js', level: 80 },
      { name: 'Three.js', level: 65 },
      { name: 'Framer Motion', level: 78 }
    ],
    backend: [
      { name: 'Node.js', level: 88, primary: true },
      { name: 'Python / Django', level: 82 },
      { name: 'PostgreSQL', level: 85. },
      { name: 'GraphQL', level: 75 },
      { name: 'Redis', level: 70 }
    ],
    design: [
      { name: 'Figma', level: 90, primary: true },
      { name: 'Adobe XD', level: 78 },
      { name: 'Photoshop', level: 85 },
      { name: 'Lightroom', level: 88 },
      { name: 'Illustrator', level: 72 }
    ],
    tools: [
      { name: 'Git / GitHub', level: 92, primary: true },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 88 },
      { name: 'CI/CD', level: 80 }
    ]
  },

  experience: [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechVista Labs',
      date: '2023 — Present',
      desc: 'Leading development of enterprise SaaS products serving 50K+ users. Architected microservices infrastructure and mentored a team of 5 developers.'
    },
    {
      role: 'Frontend Developer & UI Designer',
      company: 'PixelCraft Studio',
      date: '2021 — 2023',
      desc: 'Designed and built responsive web applications for 20+ clients. Specialized in React and animation-heavy interfaces with 98% client satisfaction rate.'
    },
    {
      role: 'Junior Developer',
      company: 'StartupBD',
      date: '2019 — 2021',
      desc: 'Built MVP products for early-stage startups. Wore many hats — from backend APIs to landing page design. Shipped 8 products in 2 years.'
    },
    {
      role: 'Freelance Designer',
      company: 'Self-employed',
      date: '2018 — 2019',
      desc: 'Freelance web and graphic design for local businesses. Built my first portfolio and discovered the intersection of code and creativity.'
    }
  ],

  education: [
    { degree: 'B.Sc. in Computer Science', school: 'University of Dhaka', year: '2019', note: 'Graduated with honors, Dean\'s List' },
    { degree: 'UI/UX Design Certification', school: 'Google / Coursera', year: '2020', note: 'Professional Certificate' }
  ],

  projects: [
    {
      id: 'flavr-ecommerce',
      title: 'FLAVR — Food E-Commerce',
      category: 'web',
      client: 'FLAVR Inc.',
      year: '2024',
      role: 'Lead Developer',
      tech: ['React', 'Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      overview: 'A premium food delivery and gourmet e-commerce platform with real-time order tracking, personalized recommendations, and a seamless checkout experience.',
      challenge: 'The client needed a platform that could handle peak traffic during flash sales while maintaining sub-200ms response times and a luxurious user experience.',
      approach: 'We built a headless e-commerce architecture using Next.js for the frontend with ISR for product pages, PostgreSQL for the database layer, and implemented edge caching with Cloudflare Workers.',
      features: ['Real-time order tracking with WebSocket', 'AI-powered food recommendations', 'Flash sale system with queue management', 'Multi-vendor marketplace support', 'Progressive Web App with offline menu'],
      screenshots: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1522542550221-31fd8e36df78?w=600&h=375&fit=crop'
      ],
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop',
        after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop'
      }
    },
    {
      id: 'nexgen-agency',
      title: 'NexGen — Agency Platform',
      category: 'web',
      client: 'NexGen Digital',
      year: '2024',
      role: 'Full Stack Developer',
      tech: ['React', 'Node.js', 'MongoDB', 'Figma'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      overview: 'A modern corporate website for a digital agency featuring dynamic case studies, interactive service showcases, and a content management system.',
      challenge: 'Creating a website that would win design awards while being fully accessible and performing well on all devices.',
      approach: 'Designed mobile-first with GSAP animations, implemented accessibility auditing in CI/CD, and built a custom CMS for the marketing team.',
      features: ['Scroll-triggered animations', 'Dynamic case study builder', 'Integrated blog with CMS', 'Performance score 98/100', 'WCAG 2.1 AA compliant'],
      screenshots: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=375&fit=crop'
      ]
    },
    {
      id: 'mindful-app',
      title: 'Mindful — Wellness App',
      category: 'mobile',
      client: 'WellTech',
      year: '2023',
      role: 'UI/UX Designer & Developer',
      tech: ['React Native', 'Firebase', 'Figma'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      overview: 'A meditation and wellness mobile app with guided sessions, mood tracking, and personalized wellness plans.',
      challenge: 'Designing a calming, distraction-free interface that encourages daily engagement without addictive patterns.',
      approach: 'Used a minimal color palette with soft gradients, haptic feedback for interactions, and gentle notification system that respects user preferences.',
      features: ['Guided meditation with ambient sounds', 'Mood journal with analytics', 'Sleep tracking integration', 'Offline-first architecture', 'Daily wellness score'],
      screenshots: [
        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=375&fit=crop'
      ]
    },
    {
      id: 'artisan-brand',
      title: 'Artisan — Brand Identity',
      category: 'design',
      client: 'Artisan Coffee Co.',
      year: '2023',
      role: 'Brand Designer',
      tech: ['Figma', 'Illustrator', 'Photoshop'],
      image: 'https://images.unsplash.com/photo-1524683745036-b46f52b8505a?w=800&h=500&fit=crop',
      liveUrl: '#',
      featured: true,
      overview: 'Complete brand identity design for a specialty coffee chain — from logo and typography to packaging and environmental graphics.',
      challenge: 'Creating a premium brand that feels artisanal and authentic without being pretentious, appealing to both coffee connoisseurs and casual drinkers.',
      approach: 'Extensive research into craft coffee culture, developed a design system around hand-drawn illustrations and warm earth tones with modern typography.',
      features: ['Logo system with 6 variations', 'Custom illustration library', 'Packaging design for 12 products', 'Brand guidelines document', 'Social media template kit'],
      screenshots: [
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=375&fit=crop'
      ]
    },
    {
      id: 'learnhub-platform',
      title: 'LearnHub — EdTech Platform',
      category: 'web',
      client: 'EduTech BD',
      year: '2023',
      role: 'Full Stack Developer',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      overview: 'An online learning platform with live classes, recorded courses, assignments, and a student community forum.',
      challenge: 'Building a reliable live classroom experience that works across varying internet speeds common in South Asia.',
      approach: 'Implemented adaptive bitrate streaming with WebRTC fallbacks, offline mode for course materials, and a lightweight PWA for mobile students.',
      features: ['Live classes with whiteboard', 'Course builder for instructors', 'Progress tracking dashboard', 'Peer discussion forums', 'Certificate generation'],
      screenshots: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=375&fit=crop'
      ]
    },
    {
      id: 'pulse-dashboard',
      title: 'Pulse — Analytics Dashboard',
      category: 'web',
      client: 'DataPulse',
      year: '2022',
      role: 'Frontend Developer',
      tech: ['React', 'D3.js', 'TypeScript', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      overview: 'A real-time analytics dashboard with customizable widgets, interactive charts, and automated reporting for business intelligence teams.',
      challenge: 'Rendering thousands of data points smoothly while allowing real-time updates and custom chart configurations.',
      approach: 'Used D3.js with canvas rendering for large datasets, WebSocket for real-time updates, and implemented virtual scrolling for data tables.',
      features: ['Drag-and-drop dashboard builder', 'Real-time data streaming', '15+ chart types', 'Automated PDF reports', 'Team collaboration tools'],
      screenshots: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=375&fit=crop'
      ]
    },
    {
      id: 'wanderlust-travel',
      title: 'Wanderlust — Travel Blog',
      category: 'design',
      client: 'Personal Project',
      year: '2022',
      role: 'Designer & Developer',
      tech: ['Gatsby', 'GraphQL', 'Figma', 'Contentful'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
      liveUrl: '#',
      overview: 'A visually rich travel blog with immersive storytelling, interactive maps, and a curated photography collection from travels across Asia.',
      challenge: 'Creating an editorial experience that makes readers feel transported to each destination while maintaining fast load times with image-heavy content.',
      approach: 'Leveraged Gatsby\'s image optimization pipeline, implemented lazy-loaded masonry galleries, and used Contentful for content management.',
      features: ['Interactive trip maps', 'Masonry photo galleries', 'Reading time estimates', 'Related destinations', 'Save for later bookmarks'],
      screenshots: [
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=375&fit=crop'
      ]
    },
    {
      id: 'shopper-mobile',
      title: 'Shopper — Mobile Commerce',
      category: 'mobile',
      client: 'RetailTech',
      year: '2022',
      role: 'UI/UX Designer',
      tech: ['Figma', 'Principle', 'Swift UI'],
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop',
      liveUrl: '#',
      overview: 'A sleek mobile shopping experience with AR try-on features, one-tap checkout, and personalized product feeds powered by machine learning.',
      challenge: 'Reducing checkout friction to under 30 seconds while maintaining security and providing a delightful shopping experience.',
      approach: 'Designed a conversational checkout flow, integrated Apple Pay/Google Pay, and created micro-interactions that make shopping feel effortless.',
      features: ['AR product try-on', 'One-tap checkout', 'Visual search', 'Personalized feed', 'Size recommendation AI'],
      screenshots: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=375&fit=crop',
        'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=375&fit=crop'
      ]
    }
  ],

  photography: {
    albums: [
      { id: 'portrait', name: 'Portraits', cover: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop', count: 6 },
      { id: 'landscape', name: 'Landscapes', cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', count: 5 },
      { id: 'street', name: 'Street', cover: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop', count: 5 },
      { id: 'events', name: 'Events', cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop', count: 4 }
    ],
    photos: [
      { id: 1, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop', album: 'portrait', caption: 'Golden hour portrait', location: 'Dhaka' },
      { id: 2, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop', album: 'portrait', caption: 'Natural light study', location: 'Studio' },
      { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop', album: 'landscape', caption: 'Mountain sunrise', location: 'Cox\'s Bazar' },
      { id: 4, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=900&fit=crop', album: 'street', caption: 'City reflections', location: 'Dhaka' },
      { id: 5, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop', album: 'landscape', caption: 'Misty morning forest', location: 'Sylhet' },
      { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&h=470&fit=crop', album: 'events', caption: 'Music festival lights', location: 'Dhaka' },
      { id: 7, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop', album: 'portrait', caption: 'Studio portrait', location: 'Studio' },
      { id: 8, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=850&fit=crop', album: 'street', caption: 'Evening commute', location: 'Chittagong' },
      { id: 9, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop', album: 'landscape', caption: 'Peak sunset', location: 'Bandarban' },
      { id: 10, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=700&h=500&fit=crop', album: 'events', caption: 'Art exhibition opening', location: 'Dhaka' },
      { id: 11, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=750&fit=crop', album: 'portrait', caption: 'Street portrait', location: 'Old Dhaka' },
      { id: 12, src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=900&fit=crop', album: 'street', caption: 'Neon nights', location: 'Tokyo' },
      { id: 13, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop', album: 'landscape', caption: 'Beach horizon', location: "Cox's Bazar" },
      { id: 14, src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=700&h=500&fit=crop', album: 'events', caption: 'Cultural dance', location: 'Rangamati' },
      { id: 15, src: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&h=800&fit=crop', album: 'portrait', caption: 'Environmental portrait', location: 'Rajshahi' },
      { id: 16, src: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=450&fit=crop', album: 'landscape', caption: 'Stormy skies', location: 'Sundarbans' },
      { id: 17, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&h=500&fit=crop', album: 'events', caption: 'Conference keynote', location: 'Dhaka' },
      { id: 18, src: 'https://images.unsplash.com/photo-1474293507621-2e4dc7a5e8d2?w=600&h=850&fit=crop', album: 'street', caption: 'Market morning', location: 'Old Dhaka' },
      { id: 19, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop', album: 'portrait', caption: 'Candid moment', location: 'Dhaka' },
      { id: 20, src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=900&fit=crop', album: 'street', caption: 'Urban geometry', location: 'Dhaka' }
    ]
  },

  testimonials: [
    {
      quote: "Tahsan is a rare find — someone who truly understands both design and engineering. He delivered a product that exceeded our expectations in every way.",
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechVista Labs',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      stars: 5
    },
    {
      quote: "Working with Tahsan was an absolute pleasure. His attention to detail and creative problem-solving made our brand identity truly stand out in a crowded market.",
      name: 'James Rodriguez',
      role: 'Founder',
      company: 'Artisan Coffee Co.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      stars: 5
    },
    {
      quote: "The analytics dashboard Tahsan built for us processes millions of data points seamlessly. His technical skills are matched only by his collaborative spirit.",
      name: 'Priya Sharma',
      role: 'CTO',
      company: 'DataPulse',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      stars: 5
    },
    {
      quote: "Tahsan transformed our vision into a beautiful, functional mobile app. Our users love it, and our retention rates have doubled since launch.",
      name: 'Michael Chen',
      role: 'Product Director',
      company: 'WellTech',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      stars: 5
    },
    {
      quote: "Exceptional work on our e-learning platform. Tahsan navigated complex technical challenges with ease and always kept the user experience front and center.",
      name: 'Anika Rahman',
      role: 'Head of Product',
      company: 'EduTech BD',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      stars: 5
    }
  ],

  calendarSlots: [
    { day: 2, available: true }, { day: 3, available: true }, { day: 5, available: true },
    { day: 9, available: true }, { day: 10, available: true }, { day: 12, available: true },
    { day: 16, available: true }, { day: 17, available: true }, { day: 19, available: true },
    { day: 23, available: true }, { day: 24, available: true }, { day: 26, available: true },
    { day: 30, available: true }
  ]
};
