/* ============================================
   LEARNHUB — Mock Data
   ============================================ */

const DATA = {
  brand: 'LearnHub',
  tagline: 'Learn Without Limits',

  categories: [
    { id: 'dev', name: 'Development', icon: '💻', count: 1240 },
    { id: 'design', name: 'Design', icon: '🎨', count: 860 },
    { id: 'business', name: 'Business', icon: '📈', count: 720 },
    { id: 'marketing', name: 'Marketing', icon: '📣', count: 540 },
    { id: 'data', name: 'Data Science', icon: '📊', count: 480 },
    { id: 'music', name: 'Music', icon: '🎵', count: 320 },
    { id: 'photo', name: 'Photography', icon: '📷', count: 290 },
    { id: 'health', name: 'Health & Fitness', icon: '🏋️', count: 210 }
  ],

  stats: [
    { num: 25000, label: 'Students', suffix: '+' },
    { num: 500, label: 'Courses', suffix: '+' },
    { num: 120, label: 'Instructors', suffix: '+' },
    { num: 98, label: 'Satisfaction', suffix: '%' }
  ],

  howItWorks: [
    { step: 1, title: 'Browse Courses', desc: 'Explore our vast library of courses across dozens of categories and skill levels.' },
    { step: 2, title: 'Enroll & Learn', desc: 'Enroll in courses at your own pace with lifetime access to video lectures and resources.' },
    { step: 3, title: 'Get Certified', desc: 'Complete courses, pass quizzes, and earn certificates to showcase your achievements.' }
  ],

  courses: [
    {
      id: 'react-complete',
      title: 'The Complete React Developer Course',
      subtitle: 'Master React 18, Hooks, Context API, Redux, Next.js — Build 5 Real-World Projects from Scratch',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop',
      category: 'dev',
      badge: 'Bestseller',
      instructor: { name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', title: 'Senior React Developer at Meta', courses: 12, students: 45000, rating: 4.8, bio: 'John has been building React applications for 8 years and previously worked at Facebook on the React core team. He is passionate about teaching and has helped over 45,000 students master modern web development.' },
      rating: 4.8,
      ratingCount: 1234,
      students: 8500,
      price: 49.99,
      originalPrice: 99.99,
      duration: '20h 30m',
      level: 'All Levels',
      language: 'English',
      lastUpdated: 'January 2026',
      whatYoullLearn: ['Build powerful React applications from scratch', 'Master React Hooks (useState, useEffect, useContext, useReducer)', 'State management with Redux Toolkit and Context API', 'Server-side rendering with Next.js', 'Testing React components with Jest and React Testing Library', 'Build 5 complete real-world projects', 'Deploy applications to Vercel and Netlify', 'TypeScript integration with React'],
      requirements: ['Basic JavaScript knowledge (ES6+)', 'HTML & CSS fundamentals', 'A computer with internet access', 'No prior React experience needed'],
      curriculum: [
        { title: 'Getting Started with React', lessons: [
          { title: 'Welcome to the Course', type: 'video', duration: '5:00', free: true },
          { title: 'Environment Setup', type: 'video', duration: '12:00', free: true },
          { title: 'Your First React App', type: 'video', duration: '15:00' },
          { title: 'Quiz: React Basics', type: 'quiz' }
        ]},
        { title: 'Components & Props', lessons: [
          { title: 'Understanding Components', type: 'video', duration: '18:00' },
          { title: 'Props & Data Flow', type: 'video', duration: '14:00' },
          { title: 'Component Composition', type: 'video', duration: '20:00' },
          { title: 'Practical Exercise', type: 'assignment' },
          { title: 'Quiz: Components', type: 'quiz' }
        ]},
        { title: 'State & Hooks', lessons: [
          { title: 'useState Deep Dive', type: 'video', duration: '22:00' },
          { title: 'useEffect & Side Effects', type: 'video', duration: '25:00' },
          { title: 'useContext for Global State', type: 'video', duration: '18:00' },
          { title: 'Custom Hooks', type: 'video', duration: '20:00' }
        ]},
        { title: 'Advanced Patterns', locked: true, lessons: [
          { title: 'Render Props & HOC', type: 'video', duration: '15:00' },
          { title: 'Performance Optimization', type: 'video', duration: '20:00' },
          { title: 'Error Boundaries', type: 'video', duration: '12:00' },
          { title: 'Suspense & Lazy Loading', type: 'video', duration: '16:00' },
          { title: 'Quiz: Advanced React', type: 'quiz' }
        ]},
        { title: 'Real-World Projects', locked: true, lessons: [
          { title: 'Project 1: Task Manager', type: 'video', duration: '45:00' },
          { title: 'Project 2: E-Commerce Store', type: 'video', duration: '60:00' },
          { title: 'Project 3: Social Dashboard', type: 'video', duration: '50:00' },
          { title: 'Project Resources', type: 'resource' },
          { title: 'Final Quiz', type: 'quiz' }
        ]}
      ],
      includes: ['20 hours on-demand video', '15 articles', '5 quizzes', 'Certificate of completion', 'Mobile & TV access', 'Lifetime access'],
      reviews: [
        { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', rating: 5, date: '2 weeks ago', text: 'Hands down the best React course I have taken! John explains complex concepts in a way that just makes sense. The projects are challenging but incredibly rewarding.' },
        { name: 'Michael Park', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', rating: 5, date: '1 month ago', text: 'Great course for both beginners and experienced developers. The custom hooks section was a game-changer for me. Highly recommended!' },
        { name: 'Emily Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', rating: 4, date: '1 month ago', text: 'Excellent content and well-structured. I took away a lot from this course. Only wish there was more content on testing.' },
        { name: 'Arjun Patel', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', rating: 5, date: '2 months ago', text: 'John is an amazing instructor. His enthusiasm for React is contagious. Completed all 5 projects and landed a React developer job!' }
      ],
      ratingDist: { 5: 78, 4: 15, 3: 4, 2: 2, 1: 1 }
    },
    {
      id: 'python-ml',
      title: 'Python for Machine Learning & Data Science',
      subtitle: 'Learn Python, NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow — Complete Data Science Bootcamp',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=340&fit=crop',
      category: 'data',
      badge: 'Bestseller',
      instructor: { name: 'Dr. Sarah Williams', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', title: 'Data Scientist at Google', courses: 8, students: 32000, rating: 4.9, bio: 'Dr. Williams holds a PhD in Machine Learning from MIT and has spent 6 years at Google working on cutting-edge ML models.' },
      rating: 4.9,
      ratingCount: 2156,
      students: 12400,
      price: 59.99,
      originalPrice: 129.99,
      duration: '32h 15m',
      level: 'Beginner',
      language: 'English',
      lastUpdated: 'December 2025',
      whatYoullLearn: ['Master Python programming from zero to advanced', 'Data analysis with NumPy and Pandas', 'Data visualization with Matplotlib and Seaborn', 'Machine Learning with Scikit-Learn', 'Deep Learning with TensorFlow and Keras', 'Build 10 real ML projects'],
      requirements: ['No programming experience needed', 'Basic math knowledge', 'A computer with at least 8GB RAM'],
      curriculum: [
        { title: 'Python Fundamentals', lessons: [
          { title: 'Introduction to Python', type: 'video', duration: '10:00', free: true },
          { title: 'Variables & Data Types', type: 'video', duration: '20:00' },
          { title: 'Control Flow', type: 'video', duration: '18:00' },
          { title: 'Functions', type: 'video', duration: '22:00' }
        ]},
        { title: 'Data Analysis', lessons: [
          { title: 'NumPy Arrays', type: 'video', duration: '25:00' },
          { title: 'Pandas DataFrames', type: 'video', duration: '30:00' },
          { title: 'Data Cleaning', type: 'video', duration: '28:00' },
          { title: 'Practice Dataset', type: 'assignment' }
        ]},
        { title: 'Machine Learning', locked: true, lessons: [
          { title: 'Linear Regression', type: 'video', duration: '35:00' },
          { title: 'Classification', type: 'video', duration: '30:00' },
          { title: 'Decision Trees', type: 'video', duration: '25:00' },
          { title: 'Neural Networks', type: 'video', duration: '40:00' }
        ]}
      ],
      includes: ['32 hours on-demand video', '20 articles', '8 quizzes', 'Certificate of completion', 'Lifetime access'],
      reviews: [
        { name: 'Liam O\'Connor', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face', rating: 5, date: '1 week ago', text: 'Dr. Williams makes machine learning accessible to anyone. The projects are phenomenal and I built a real portfolio.' },
        { name: 'Priya Sharma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', rating: 5, date: '3 weeks ago', text: 'Best ML course available. Clear explanations, great pacing, and the hands-on projects cemented my understanding.' }
      ],
      ratingDist: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 }
    },
    {
      id: 'ui-design',
      title: 'UI/UX Design Masterclass: From Figma to Production',
      subtitle: 'Learn User Interface Design, User Experience Principles, Figma Advanced Techniques, Design Systems',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop',
      category: 'design',
      badge: 'New',
      instructor: { name: 'Anna Kim', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face', title: 'Lead Designer at Airbnb', courses: 5, students: 18000, rating: 4.7, bio: 'Anna has led design teams at Airbnb and Spotify for over 10 years. She specializes in design systems and user-centered design.' },
      rating: 4.7,
      ratingCount: 856,
      students: 6200,
      price: 44.99,
      originalPrice: 89.99,
      duration: '18h 45m',
      level: 'Intermediate',
      language: 'English',
      lastUpdated: 'January 2026',
      whatYoullLearn: ['Master Figma from beginner to advanced', 'Design principles and color theory', 'Create responsive design systems', 'User research and usability testing', 'Build a complete design portfolio', 'Hand-off designs to developers'],
      requirements: ['No design experience needed', 'Figma account (free)', 'Creative mindset'],
      curriculum: [
        { title: 'Design Fundamentals', lessons: [
          { title: 'Welcome & Course Overview', type: 'video', duration: '8:00', free: true },
          { title: 'Design Principles', type: 'video', duration: '20:00' },
          { title: 'Color Theory', type: 'video', duration: '18:00' },
          { title: 'Typography Essentials', type: 'video', duration: '15:00' }
        ]},
        { title: 'Figma Mastery', lessons: [
          { title: 'Figma Interface Tour', type: 'video', duration: '12:00' },
          { title: 'Components & Variants', type: 'video', duration: '25:00' },
          { title: 'Auto Layout', type: 'video', duration: '20:00' },
          { title: 'Prototyping', type: 'video', duration: '22:00' }
        ]},
        { title: 'Real Projects', locked: true, lessons: [
          { title: 'Mobile App Design', type: 'video', duration: '45:00' },
          { title: 'Dashboard Design', type: 'video', duration: '40:00' },
          { title: 'Design System Creation', type: 'video', duration: '50:00' }
        ]}
      ],
      includes: ['18 hours on-demand video', '12 design resources', '3 quizzes', 'Certificate of completion', 'Lifetime access'],
      reviews: [
        { name: 'David Lee', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face', rating: 5, date: '5 days ago', text: 'Anna is an incredible instructor. Her Figma tips alone were worth the price. The design system project was amazing.' }
      ],
      ratingDist: { 5: 70, 4: 20, 3: 6, 2: 3, 1: 1 }
    },
    {
      id: 'node-api',
      title: 'Node.js API Development: RESTful Services & GraphQL',
      subtitle: 'Build Scalable Backend APIs with Node.js, Express, MongoDB, GraphQL, JWT Authentication',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=340&fit=crop',
      category: 'dev',
      badge: null,
      instructor: { name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face', title: 'Backend Lead at Stripe', courses: 6, students: 22000, rating: 4.6, bio: 'James has been building backend systems for fintech companies for 10 years. He currently leads the API team at Stripe.' },
      rating: 4.6,
      ratingCount: 678,
      students: 5100,
      price: 39.99,
      originalPrice: 79.99,
      duration: '24h 10m',
      level: 'Intermediate',
      language: 'English',
      lastUpdated: 'November 2025',
      whatYoullLearn: ['Build RESTful APIs with Express.js', 'MongoDB & Mongoose for databases', 'GraphQL API development', 'JWT authentication & authorization', 'API testing with Jest', 'Docker deployment'],
      requirements: ['JavaScript fundamentals', 'Basic understanding of HTTP', 'Command line basics'],
      curriculum: [
        { title: 'Node.js Basics', lessons: [
          { title: 'What is Node.js?', type: 'video', duration: '10:00', free: true },
          { title: 'Node.js Architecture', type: 'video', duration: '15:00' },
          { title: 'Express.js Setup', type: 'video', duration: '20:00' }
        ]},
        { title: 'REST API Design', lessons: [
          { title: 'RESTful Principles', type: 'video', duration: '18:00' },
          { title: 'CRUD Operations', type: 'video', duration: '25:00' },
          { title: 'Middleware', type: 'video', duration: '20:00' },
          { title: 'Error Handling', type: 'video', duration: '15:00' }
        ]},
        { title: 'GraphQL', locked: true, lessons: [
          { title: 'GraphQL Introduction', type: 'video', duration: '20:00' },
          { title: 'Schemas & Resolvers', type: 'video', duration: '30:00' },
          { title: 'Mutations & Subscriptions', type: 'video', duration: '25:00' }
        ]}
      ],
      includes: ['24 hours on-demand video', '10 articles', '4 quizzes', 'Certificate of completion', 'Lifetime access'],
      reviews: [
        { name: 'Carlos Rivera', avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=80&h=80&fit=crop&crop=face', rating: 4, date: '2 weeks ago', text: 'Solid course for backend development. The GraphQL section was particularly well done.' }
      ],
      ratingDist: { 5: 62, 4: 25, 3: 8, 2: 3, 1: 2 }
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery: SEO, Social Media & Ads',
      subtitle: 'Complete Digital Marketing Strategy — Google Ads, Facebook Ads, Instagram, SEO, Email Marketing',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
      category: 'marketing',
      badge: 'Hot',
      instructor: { name: 'Lisa Thompson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face', title: 'Marketing Director', courses: 4, students: 15000, rating: 4.5, bio: 'Lisa has managed multi-million dollar marketing budgets and helped 100+ brands grow their online presence.' },
      rating: 4.5,
      ratingCount: 542,
      students: 4800,
      price: 34.99,
      originalPrice: 69.99,
      duration: '16h 20m',
      level: 'Beginner',
      language: 'English',
      lastUpdated: 'December 2025',
      whatYoullLearn: ['Google Ads campaign management', 'Facebook & Instagram advertising', 'SEO optimization techniques', 'Email marketing automation', 'Content marketing strategy', 'Analytics and ROI tracking'],
      requirements: ['No marketing experience needed', 'Basic computer skills'],
      curriculum: [
        { title: 'Marketing Fundamentals', lessons: [
          { title: 'Digital Marketing Overview', type: 'video', duration: '12:00', free: true },
          { title: 'Understanding Your Audience', type: 'video', duration: '18:00' },
          { title: 'Marketing Funnel', type: 'video', duration: '15:00' }
        ]},
        { title: 'SEO Mastery', lessons: [
          { title: 'Keyword Research', type: 'video', duration: '20:00' },
          { title: 'On-Page SEO', type: 'video', duration: '25:00' },
          { title: 'Link Building', type: 'video', duration: '18:00' }
        ]},
        { title: 'Paid Advertising', locked: true, lessons: [
          { title: 'Google Ads', type: 'video', duration: '30:00' },
          { title: 'Facebook Ads', type: 'video', duration: '25:00' },
          { title: 'Retargeting', type: 'video', duration: '15:00' }
        ]}
      ],
      includes: ['16 hours on-demand video', '8 articles', '3 quizzes', 'Certificate of completion', 'Lifetime access'],
      reviews: [
        { name: 'Rachel Green', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face', rating: 5, date: '1 week ago', text: 'Incredibly practical course. Applied the SEO techniques immediately and saw results within weeks!' }
      ],
      ratingDist: { 5: 58, 4: 28, 3: 9, 2: 3, 1: 2 }
    },
    {
      id: 'photography',
      title: 'Photography Masterclass: Complete Guide to Photography',
      subtitle: 'Learn Digital Photography, Portrait, Landscape, Street Photography — Camera Settings Explained',
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=340&fit=crop',
      category: 'photo',
      badge: null,
      instructor: { name: 'Mark Stevens', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', title: 'Professional Photographer', courses: 3, students: 9500, rating: 4.7, bio: 'Mark is an award-winning photographer whose work has been featured in National Geographic, Time, and Vogue.' },
      rating: 4.7,
      ratingCount: 423,
      students: 3200,
      price: 29.99,
      originalPrice: 59.99,
      duration: '14h 50m',
      level: 'All Levels',
      language: 'English',
      lastUpdated: 'October 2025',
      whatYoullLearn: ['Master camera settings (ISO, aperture, shutter speed)', 'Portrait photography techniques', 'Landscape composition rules', 'Street photography ethics and tips', 'Photo editing with Lightroom', 'Build a photography portfolio'],
      requirements: ['A camera (DSLR, mirrorless, or smartphone)', 'No prior experience needed'],
      curriculum: [
        { title: 'Camera Basics', lessons: [
          { title: 'Understanding Your Camera', type: 'video', duration: '15:00', free: true },
          { title: 'Exposure Triangle', type: 'video', duration: '20:00' },
          { title: 'Composition Rules', type: 'video', duration: '18:00' }
        ]},
        { title: 'Portrait Photography', lessons: [
          { title: 'Lighting for Portraits', type: 'video', duration: '22:00' },
          { title: 'Posing Techniques', type: 'video', duration: '20:00' },
          { title: 'Environmental Portraits', type: 'video', duration: '15:00' }
        ]}
      ],
      includes: ['14 hours on-demand video', '6 articles', '2 quizzes', 'Certificate of completion', 'Lifetime access'],
      reviews: [
        { name: 'Julia Martinez', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face', rating: 5, date: '3 weeks ago', text: 'Finally understand my camera settings! Mark explains everything so clearly.' }
      ],
      ratingDist: { 5: 72, 4: 18, 3: 6, 2: 3, 1: 1 }
    },
    {
      id: 'js-fundamentals',
      title: 'JavaScript: The Complete Guide (ES6+)',
      subtitle: 'Modern JavaScript from Beginner to Advanced — ES6, Async/Await, OOP, DOM, Projects',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=340&fit=crop',
      category: 'dev',
      badge: 'Free',
      instructor: { name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', title: 'Senior React Developer at Meta', courses: 12, students: 45000, rating: 4.8, bio: 'John has been teaching JavaScript for 8 years.' },
      rating: 4.6,
      ratingCount: 3420,
      students: 22000,
      price: 0,
      originalPrice: 49.99,
      duration: '12h 00m',
      level: 'Beginner',
      language: 'English',
      lastUpdated: 'October 2025',
      whatYoullLearn: ['JavaScript fundamentals', 'ES6+ modern syntax', 'DOM manipulation', 'Async programming', 'OOP in JavaScript', 'Build 3 projects'],
      requirements: ['Basic HTML & CSS', 'A code editor'],
      curriculum: [
        { title: 'JavaScript Basics', lessons: [
          { title: 'Introduction', type: 'video', duration: '8:00', free: true },
          { title: 'Variables & Data Types', type: 'video', duration: '15:00', free: true },
          { title: 'Operators & Expressions', type: 'video', duration: '12:00' }
        ]},
        { title: 'Functions & Scope', lessons: [
          { title: 'Function Declarations', type: 'video', duration: '20:00' },
          { title: 'Arrow Functions', type: 'video', duration: '15:00' },
          { title: 'Closures', type: 'video', duration: '18:00' }
        ]}
      ],
      includes: ['12 hours on-demand video', '8 articles', '3 quizzes', 'Lifetime access'],
      reviews: [],
      ratingDist: { 5: 60, 4: 22, 3: 10, 2: 5, 1: 3 }
    },
    {
      id: 'business-strategy',
      title: 'Business Strategy & Entrepreneurship',
      subtitle: 'Start, Scale, and Lead a Successful Business — Strategy, Finance, Leadership, Growth Hacking',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=340&fit=crop',
      category: 'business',
      badge: 'New',
      instructor: { name: 'Robert Zhang', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face', title: 'Serial Entrepreneur & MBA Professor', courses: 7, students: 28000, rating: 4.8, bio: 'Robert has founded 3 successful startups and teaches MBA courses at Stanford.' },
      rating: 4.8,
      ratingCount: 912,
      students: 7300,
      price: 54.99,
      originalPrice: 109.99,
      duration: '22h 00m',
      level: 'All Levels',
      language: 'English',
      lastUpdated: 'January 2026',
      whatYoullLearn: ['Business model canvas', 'Financial planning & budgeting', 'Leadership & team management', 'Growth hacking strategies', 'Startup fundraising', 'Market analysis'],
      requirements: ['Entrepreneurial mindset', 'No business background needed'],
      curriculum: [
        { title: 'Business Foundations', lessons: [
          { title: 'Welcome', type: 'video', duration: '5:00', free: true },
          { title: 'Business Model Canvas', type: 'video', duration: '25:00' },
          { title: 'Market Research', type: 'video', duration: '20:00' }
        ]},
        { title: 'Growth & Scale', locked: true, lessons: [
          { title: 'Growth Hacking', type: 'video', duration: '30:00' },
          { title: 'Fundraising', type: 'video', duration: '25:00' },
          { title: 'Scaling Operations', type: 'video', duration: '22:00' }
        ]}
      ],
      includes: ['22 hours on-demand video', '15 case studies', '5 quizzes', 'Certificate of completion', 'Lifetime access'],
      reviews: [
        { name: 'Nina Chang', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', rating: 5, date: '1 week ago', text: 'Robert shares real-world experience that you cannot find in textbooks. This course gave me the confidence to launch my startup.' }
      ],
      ratingDist: { 5: 75, 4: 17, 3: 5, 2: 2, 1: 1 }
    }
  ],

  testimonials: [
    { name: 'Tahsan Islam', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', text: 'LearnHub transformed my career. I went from knowing basic HTML to landing a React developer job in just 6 months. The course quality is incredible.', rating: 5 },
    { name: 'Maria Santos', role: 'UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', text: 'The design courses are top-notch. I learned Figma from scratch and now I am leading design projects at my company. The instructors are world-class.', rating: 5 },
    { name: 'Alex Turner', role: 'Data Scientist', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', text: 'The Python ML course was exactly what I needed to transition into data science. The hands-on projects helped me build a strong portfolio.', rating: 5 }
  ],

  // Student dashboard data
  enrolledCourses: [
    { courseId: 'react-complete', progress: 65, currentLesson: 'Custom Hooks', enrollDate: 'Nov 15, 2025' },
    { courseId: 'python-ml', progress: 40, currentLesson: 'Pandas DataFrames', enrollDate: 'Dec 1, 2025' },
    { courseId: 'ui-design', progress: 100, currentLesson: 'Completed', enrollDate: 'Aug 20, 2025', completedDate: 'Oct 15, 2025' },
    { courseId: 'js-fundamentals', progress: 100, currentLesson: 'Completed', enrollDate: 'Jun 1, 2025', completedDate: 'Aug 10, 2025' }
  ],

  certificates: [
    { courseId: 'ui-design', courseName: 'UI/UX Design Masterclass', studentName: 'Tahsan Islam', completedDate: 'October 15, 2025', certId: 'LH-CERT-2025-UI-4829' },
    { courseId: 'js-fundamentals', courseName: 'JavaScript: The Complete Guide', studentName: 'Tahsan Islam', completedDate: 'August 10, 2025', certId: 'LH-CERT-2025-JS-3721' }
  ],

  quizResults: [
    { quiz: 'React Basics', course: 'The Complete React Developer Course', score: 9, total: 10, grade: 'A', date: 'Jan 5, 2026', passed: true },
    { quiz: 'Components', course: 'The Complete React Developer Course', score: 8, total: 10, grade: 'B+', date: 'Jan 12, 2026', passed: true },
    { quiz: 'Design Principles', course: 'UI/UX Design Masterclass', score: 10, total: 10, grade: 'A+', date: 'Sep 20, 2025', passed: true },
    { quiz: 'JS Fundamentals', course: 'JavaScript: The Complete Guide', score: 7, total: 10, grade: 'B', date: 'Jul 15, 2025', passed: true }
  ],

  // Quiz data for the quiz page
  quizData: {
    courseTitle: 'The Complete React Developer Course',
    quizTitle: 'React Fundamentals',
    timeLimit: 900, // seconds (15 min)
    questions: [
      { q: 'What is the correct way to create a React component?', options: ['function MyComponent() { return <div /> }', 'class MyComponent { render() { return <div /> } }', 'const MyComponent = <div />', 'React.create(MyComponent)'], answer: 0 },
      { q: 'Which hook is used for managing state in a functional component?', options: ['useEffect', 'useState', 'useContext', 'useReducer'], answer: 1 },
      { q: 'What hook is used for side effects in React?', options: ['useState', 'useEffect', 'useContext', 'useReducer'], answer: 1 },
      { q: 'What is JSX?', options: ['A JavaScript framework', 'A syntax extension for JavaScript', 'A CSS preprocessor', 'A testing library'], answer: 1 },
      { q: 'How do you pass data from parent to child in React?', options: ['Using state', 'Using props', 'Using context', 'Using refs'], answer: 1 },
      { q: 'What is the Virtual DOM?', options: ['A copy of the browser DOM', 'A lightweight representation of the actual DOM', 'A CSS rendering engine', 'A JavaScript runtime'], answer: 1 },
      { q: 'Which method is used to render a React app to the DOM?', options: ['React.render()', 'ReactDOM.createRoot().render()', 'document.render()', 'React.mount()'], answer: 1 },
      { q: 'What does useEffect return?', options: ['A state value', 'A cleanup function', 'A ref object', 'Nothing'], answer: 1 },
      { q: 'React is a framework.', options: ['True', 'False'], answer: 1 },
      { q: 'Which company developed React?', options: ['Google', 'Facebook (Meta)', 'Amazon', 'Microsoft'], answer: 1 }
    ]
  },

  // Instructor dashboard data
  instructorData: {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    title: 'Senior React Developer',
    kpis: [
      { label: 'Total Students', value: '45,230', trend: '+12%', direction: 'up', icon: '👥', color: 'purple' },
      { label: 'Total Revenue', value: '$128,450', trend: '+8%', direction: 'up', icon: '💰', color: 'green' },
      { label: 'Avg Rating', value: '4.8', trend: '+0.2', direction: 'up', icon: '⭐', color: 'amber' },
      { label: 'Active Courses', value: '12', trend: '+2', direction: 'up', icon: '📚', color: 'blue' }
    ],
    myCourses: [
      { id: 'react-complete', title: 'The Complete React Developer Course', students: 8500, rating: 4.8, revenue: 42500, status: 'Published' },
      { id: 'js-fundamentals', title: 'JavaScript: The Complete Guide', students: 22000, rating: 4.6, revenue: 0, status: 'Published' },
      { id: 'react-native', title: 'React Native: Mobile App Development', students: 3200, rating: 4.7, revenue: 28800, status: 'Published' }
    ],
    revenueData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      values: [8200, 9100, 7800, 11200, 10500, 12400, 14200, 13800, 15100, 16800, 14500, 18200]
    },
    enrollmentData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      values: [320, 450, 380, 520, 480, 620, 780, 710, 850, 920, 780, 1050]
    },
    recentStudents: [
      { name: 'Tahsan Islam', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face', course: 'React Developer Course', progress: 65, date: 'Jan 15, 2026' },
      { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face', course: 'React Developer Course', progress: 88, date: 'Jan 12, 2026' },
      { name: 'Michael Park', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face', course: 'JavaScript Guide', progress: 42, date: 'Jan 10, 2026' },
      { name: 'Emily Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face', course: 'React Developer Course', progress: 100, date: 'Jan 8, 2026' },
      { name: 'Arjun Patel', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face', course: 'React Native', progress: 30, date: 'Jan 5, 2026' }
    ]
  },

  // School mode data
  school: {
    grade: 'Grade 10',
    timetable: [
      { time: '8:00', mon: { subject: 'Math', room: 'R-101', cls: 'math' }, tue: { subject: 'English', room: 'R-205', cls: 'eng' }, wed: { subject: 'Physics', room: 'Lab-1', cls: 'phys' }, thu: { subject: 'Math', room: 'R-101', cls: 'math' }, fri: { subject: 'Chemistry', room: 'Lab-2', cls: 'chem' } },
      { time: '9:00', mon: { subject: 'English', room: 'R-205', cls: 'eng' }, tue: { subject: 'Math', room: 'R-101', cls: 'math' }, wed: { subject: 'Chemistry', room: 'Lab-2', cls: 'chem' }, thu: { subject: 'English', room: 'R-205', cls: 'eng' }, fri: { subject: 'Math', room: 'R-101', cls: 'math' } },
      { time: '10:00', isBreak: true },
      { time: '10:30', mon: { subject: 'Physics', room: 'Lab-1', cls: 'phys' }, tue: { subject: 'Biology', room: 'Lab-3', cls: 'bio' }, wed: { subject: 'Math', room: 'R-101', cls: 'math' }, thu: { subject: 'Comp. Sci', room: 'CS-Lab', cls: 'cs' }, fri: { subject: 'English', room: 'R-205', cls: 'eng' } },
      { time: '11:30', mon: { subject: 'Comp. Sci', room: 'CS-Lab', cls: 'cs' }, tue: { subject: 'Physics', room: 'Lab-1', cls: 'phys' }, wed: { subject: 'Biology', room: 'Lab-3', cls: 'bio' }, thu: { subject: 'Chemistry', room: 'Lab-2', cls: 'chem' }, fri: { subject: 'Physics', room: 'Lab-1', cls: 'phys' } },
      { time: '12:30', isBreak: true, label: 'Lunch' },
      { time: '1:30', mon: { subject: 'Biology', room: 'Lab-3', cls: 'bio' }, tue: { subject: 'Comp. Sci', room: 'CS-Lab', cls: 'cs' }, wed: { subject: 'English', room: 'R-205', cls: 'eng' }, thu: { subject: 'Biology', room: 'Lab-3', cls: 'bio' }, fri: { subject: 'Comp. Sci', room: 'CS-Lab', cls: 'cs' } }
    ],
    currentClass: { subject: 'Physics', room: 'Room 203', teacher: 'Mr. Rahman' },
    assignments: [
      { id: 1, subject: 'Math', cls: 'math', title: 'Quadratic Equations Worksheet', due: 'Jan 22, 2026', status: 'pending' },
      { id: 2, subject: 'Physics', cls: 'phys', title: 'Newton\'s Laws Lab Report', due: 'Jan 20, 2026', status: 'submitted' },
      { id: 3, subject: 'English', cls: 'eng', title: 'Essay: Climate Change', due: 'Jan 18, 2026', status: 'overdue' },
      { id: 4, subject: 'Comp. Sci', cls: 'cs', title: 'Python Sorting Exercise', due: 'Jan 25, 2026', status: 'pending' },
      { id: 5, subject: 'Chemistry', cls: 'chem', title: 'Periodic Table Quiz Prep', due: 'Jan 28, 2026', status: 'submitted' },
      { id: 6, subject: 'Biology', cls: 'bio', title: 'Cell Division Diagram', due: 'Jan 15, 2026', status: 'overdue' }
    ],
    messages: [
      { id: 1, name: 'Mr. Rahman', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face', preview: 'Don\'t forget tomorrow\'s lab.', unread: true, messages: [
        { text: 'Hi class, please bring your lab notebooks tomorrow.', time: '2:30 PM', sent: false },
        { text: 'Don\'t forget tomorrow\'s lab.', time: '2:35 PM', sent: false },
        { text: 'Yes sir, will do!', time: '3:00 PM', sent: true }
      ]},
      { id: 2, name: 'Ms. Fatima', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face', preview: 'Great essay, Tahsan!', unread: false, messages: [
        { text: 'I\'ve reviewed your essay on climate change.', time: '11:00 AM', sent: false },
        { text: 'Great essay, Tahsan!', time: '11:02 AM', sent: false },
        { text: 'Thank you, Ms. Fatima!', time: '11:30 AM', sent: true }
      ]},
      { id: 3, name: 'Study Group', avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=60&h=60&fit=crop&crop=face', preview: 'Meeting at 4pm today?', unread: true, messages: [
        { text: 'Hey everyone, math exam next week!', time: '1:00 PM', sent: false },
        { text: 'Meeting at 4pm today?', time: '1:15 PM', sent: false },
        { text: 'I\'ll be there!', time: '1:20 PM', sent: true },
        { text: 'Me too, see you all!', time: '1:22 PM', sent: false }
      ]}
    ],
    notices: [
      { id: 1, title: 'Annual Science Fair — Registration Open', text: 'Register your teams for the annual science fair by January 30th. Each team can have up to 4 members.', date: 'Jan 16, 2026', badge: 'Event', urgent: false },
      { id: 2, title: 'Mid-Term Exam Schedule Released', text: 'Mid-term exams will begin on February 10th. Please check the detailed schedule on the school portal.', date: 'Jan 14, 2026', badge: 'Exams', urgent: true },
      { id: 3, title: 'Holiday Announcement — Pohela Falgun', text: 'School will remain closed on February 13th for Pohela Falgun celebration.', date: 'Jan 12, 2026', badge: 'Holiday', urgent: false },
      { id: 4, title: 'Library New Arrivals', text: 'The library has received 50 new books on programming, science fiction, and history. Visit during library hours.', date: 'Jan 10, 2026', badge: 'Info', urgent: false }
    ]
  },

  // Learning player video data (mock)
  playerData: {
    courseId: 'react-complete',
    videoSrc: '',
    videoPlaceholder: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=675&fit=crop',
    currentSection: 0,
    currentLesson: 2,
    completedLessons: ['0-0', '0-1'],
    notes: [
      { timestamp: '2:15', text: 'useState accepts initial value and returns [state, setter]' },
      { timestamp: '8:42', text: 'useEffect cleanup runs before next effect and on unmount' },
      { timestamp: '14:20', text: 'Custom hooks must start with "use" prefix' }
    ],
    qna: [
      { name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face', time: '2 days ago', text: 'Does useEffect run on every render by default?', replies: [
        { name: 'John Doe (Instructor)', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face', time: '1 day ago', text: 'Yes! Without a dependency array, useEffect runs after every render. Add [] to run only on mount.' }
      ]},
      { name: 'Sophie Park', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face', time: '5 days ago', text: 'What is the difference between useEffect and useLayoutEffect?', replies: [] }
    ]
  }
};
