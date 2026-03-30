/* =============================================
   COMMUNITY PLATFORM — DATA STORE
   Mock data for all 6 modules + users
   ============================================= */

const CommunityData = {
  // Current logged-in user
  currentUser: {
    id: 'u1',
    name: 'Tahsan Ahmed',
    username: 'tahsan',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tahsan',
    bio: 'Full-stack developer & community builder. Turning ideas into pixels.',
    location: 'Dhaka, Bangladesh',
    website: 'https://tahsan.dev',
    reputation: 2450,
    level: 'Master',
    joinDate: '2023-01-15',
    badges: ['Early Adopter', 'Top Contributor', 'Bug Hunter', 'Mentor', 'Event Organizer'],
    stats: { posts: 142, answers: 89, reviews: 23, jobs: 5, events: 8 },
    bookmarks: [],
    notifications: [],
    settings: { theme: 'system', emailDigest: true, pushNotifications: true, showOnline: true }
  },

  users: [
    { id: 'u1', name: 'Tahsan Ahmed', username: 'tahsan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tahsan', reputation: 2450, level: 'Master', online: true },
    { id: 'u2', name: 'Sarah Chen', username: 'sarahc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah', reputation: 5200, level: 'Legend', online: true },
    { id: 'u3', name: 'Alex Rivera', username: 'arivera', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex', reputation: 980, level: 'Expert', online: false },
    { id: 'u4', name: 'Priya Sharma', username: 'priyas', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya', reputation: 340, level: 'Contributor', online: true },
    { id: 'u5', name: 'Marcus Johnson', username: 'mjohnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus', reputation: 1200, level: 'Expert', online: false },
    { id: 'u6', name: 'Emily Park', username: 'emilyp', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily', reputation: 75, level: 'Newcomer', online: true },
    { id: 'u7', name: 'Omar Hassan', username: 'omarh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=omar', reputation: 4600, level: 'Master', online: false },
    { id: 'u8', name: 'Lisa Wong', username: 'lisawong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa', reputation: 160, level: 'Contributor', online: true }
  ],

  // ========== JOBS MODULE ==========
  jobs: [
    {
      id: 'j1', title: 'Senior Frontend Engineer', company: 'Quantum Labs', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=quantum',
      location: 'San Francisco, CA', remote: true, type: 'Full-time', salary: '$140k – $180k',
      tags: ['React', 'TypeScript', 'GraphQL'], postedBy: 'u2', postedDate: '2024-01-10',
      description: 'We are looking for a senior frontend engineer to lead our design system team. You will be responsible for building reusable components, improving developer experience, and mentoring junior developers.',
      requirements: ['5+ years React experience', 'Strong TypeScript skills', 'Design system experience', 'GraphQL knowledge', 'Mentoring ability'],
      benefits: ['Remote-first', 'Unlimited PTO', 'Health & dental', '401(k) match', 'Learning budget $5k/yr', 'Home office stipend'],
      companyInfo: { size: '50-200', founded: 2019, website: 'https://quantumlabs.io', about: 'Quantum Labs builds developer tools for the next generation of web applications.' },
      applicants: 24, views: 342, urgent: false, saved: false
    },
    {
      id: 'j2', title: 'Full Stack Developer', company: 'CloudPeak Solutions', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=cloudpeak',
      location: 'Austin, TX', remote: true, type: 'Full-time', salary: '$120k – $150k',
      tags: ['Node.js', 'React', 'PostgreSQL', 'AWS'], postedBy: 'u5', postedDate: '2024-01-08',
      description: 'Join our growing engineering team to build scalable cloud-native applications. Work on our core platform that serves millions of users worldwide.',
      requirements: ['3+ years full stack experience', 'Node.js & React proficiency', 'Database design', 'AWS experience', 'CI/CD knowledge'],
      benefits: ['Hybrid work', 'Stock options', 'Health insurance', 'Gym membership', 'Conference budget'],
      companyInfo: { size: '200-500', founded: 2017, website: 'https://cloudpeak.io', about: 'CloudPeak delivers enterprise cloud solutions.' },
      applicants: 56, views: 890, urgent: false, saved: false
    },
    {
      id: 'j3', title: 'UI/UX Designer', company: 'PixelForge', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=pixelforge',
      location: 'Remote', remote: true, type: 'Contract', salary: '$80/hr',
      tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'], postedBy: 'u7', postedDate: '2024-01-12',
      description: 'Contract opportunity to redesign our entire SaaS product. Looking for a product designer who can own the full design process from research to handoff.',
      requirements: ['4+ years product design', 'Figma expert', 'Design system creation', 'User research skills', 'Portfolio required'],
      benefits: ['Flexible hours', 'Remote work', 'Equipment provided', 'Potential full-time conversion'],
      companyInfo: { size: '10-50', founded: 2021, website: 'https://pixelforge.co', about: 'PixelForge crafts beautiful digital experiences.' },
      applicants: 18, views: 245, urgent: true, saved: false
    },
    {
      id: 'j4', title: 'DevOps Engineer', company: 'InfraCore', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=infracore',
      location: 'New York, NY', remote: false, type: 'Full-time', salary: '$130k – $165k',
      tags: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD'], postedBy: 'u3', postedDate: '2024-01-05',
      description: 'Build and maintain our infrastructure at scale. Manage Kubernetes clusters, CI/CD pipelines, and ensure 99.99% uptime across all services.',
      requirements: ['4+ years DevOps/SRE', 'Kubernetes expertise', 'Infrastructure as Code', 'Monitoring & alerting', 'On-call rotation'],
      benefits: ['Competitive salary', 'RSUs', 'Health coverage', 'Commuter benefits', 'Team retreats'],
      companyInfo: { size: '500+', founded: 2015, website: 'https://infracore.io', about: 'InfraCore provides infrastructure automation at enterprise scale.' },
      applicants: 32, views: 567, urgent: false, saved: false
    },
    {
      id: 'j5', title: 'Mobile Developer (React Native)', company: 'AppWave', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=appwave',
      location: 'London, UK', remote: true, type: 'Full-time', salary: '£65k – £85k',
      tags: ['React Native', 'TypeScript', 'iOS', 'Android'], postedBy: 'u4', postedDate: '2024-01-11',
      description: 'Develop cross-platform mobile applications for our fintech product. Work closely with design and backend teams to deliver seamless mobile experiences.',
      requirements: ['3+ years React Native', 'Published apps on stores', 'TypeScript', 'Native module experience', 'Performance optimization'],
      benefits: ['Remote-first', '25 days PTO', 'Pension', 'Private health', 'Share options'],
      companyInfo: { size: '50-200', founded: 2020, website: 'https://appwave.io', about: 'AppWave builds the future of mobile banking.' },
      applicants: 41, views: 612, urgent: false, saved: false
    },
    {
      id: 'j6', title: 'Junior Backend Developer', company: 'DataStream', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=datastream',
      location: 'Berlin, Germany', remote: false, type: 'Full-time', salary: '€45k – €55k',
      tags: ['Python', 'Django', 'Redis', 'PostgreSQL'], postedBy: 'u8', postedDate: '2024-01-09',
      description: 'Great opportunity for junior developers to join our data engineering team. You will work on building APIs and data processing pipelines.',
      requirements: ['1+ years Python', 'Basic SQL knowledge', 'API development', 'Willingness to learn', 'Computer Science degree preferred'],
      benefits: ['Mentorship program', 'Training budget', 'Office lunch', 'Team events', 'Visa sponsorship'],
      companyInfo: { size: '50-200', founded: 2018, website: 'https://datastream.io', about: 'DataStream powers real-time data analytics for enterprises.' },
      applicants: 89, views: 1200, urgent: false, saved: false
    },
    {
      id: 'j7', title: 'Technical Writer', company: 'DocuPro', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=docupro',
      location: 'Remote', remote: true, type: 'Part-time', salary: '$50/hr',
      tags: ['Documentation', 'API Docs', 'Markdown', 'Technical Writing'], postedBy: 'u2', postedDate: '2024-01-13',
      description: 'Help us create world-class developer documentation. Write API references, tutorials, and guides that developers actually enjoy reading.',
      requirements: ['2+ years tech writing', 'Developer background preferred', 'Markdown/MDX', 'API documentation', 'Strong English'],
      benefits: ['Flexible schedule', 'Remote work', 'Async-first', 'Writing workshops'],
      companyInfo: { size: '10-50', founded: 2022, website: 'https://docupro.io', about: 'DocuPro provides documentation-as-a-service for tech companies.' },
      applicants: 15, views: 189, urgent: false, saved: false
    },
    {
      id: 'j8', title: 'Data Scientist', company: 'NeuralPath', companyLogo: 'https://api.dicebear.com/7.x/identicon/svg?seed=neuralpath',
      location: 'Toronto, Canada', remote: true, type: 'Full-time', salary: 'CAD $110k – $140k',
      tags: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], postedBy: 'u7', postedDate: '2024-01-07',
      description: 'Apply machine learning models to solve real-world business problems. Work with large datasets and deploy ML pipelines in production.',
      requirements: ['MSc in related field', '3+ years ML experience', 'Python & SQL', 'Model deployment', 'Communication skills'],
      benefits: ['Remote-friendly', 'Stock options', 'Health & dental', 'Home office setup', 'Conference allowance'],
      companyInfo: { size: '50-200', founded: 2019, website: 'https://neuralpath.ai', about: 'NeuralPath brings AI solutions to healthcare and finance.' },
      applicants: 67, views: 934, urgent: true, saved: false
    }
  ],

  // ========== FORUM / Q&A MODULE ==========
  threads: [
    {
      id: 't1', title: 'How to implement infinite scroll with Intersection Observer?',
      body: 'I\'m trying to build an infinite scroll feature for a feed-style layout. I know about Intersection Observer API but I\'m not sure how to properly implement it with dynamic content loading. Can someone share a clean implementation?\n\n```javascript\nconst observer = new IntersectionObserver((entries) => {\n  // What goes here?\n});\n```\n\nShould I debounce the callback? How do I handle loading states?',
      author: 'u6', createdAt: '2024-01-13T10:30:00', tags: ['JavaScript', 'DOM', 'Performance'],
      votes: 24, answers: 3, views: 342, solved: true, bookmarked: false,
      answersList: [
        { id: 'a1', author: 'u2', body: 'Here\'s a clean pattern using Intersection Observer:\n\n```javascript\nconst sentinel = document.querySelector("#load-more");\nconst observer = new IntersectionObserver(\n  (entries) => {\n    if (entries[0].isIntersecting) {\n      loadMoreItems();\n    }\n  },\n  { threshold: 0.1, rootMargin: "200px" }\n);\nobserver.observe(sentinel);\n```\n\nThe rootMargin creates a buffer so content loads before the user reaches the bottom. You shouldn\'t need debouncing since IO is already efficient.', votes: 18, accepted: true, createdAt: '2024-01-13T11:15:00', comments: [{ author: 'u6', body: 'Perfect, the rootMargin trick is exactly what I needed!', createdAt: '2024-01-13T11:30:00' }] },
        { id: 'a2', author: 'u5', body: 'You can also add a loading state to prevent duplicate requests:\n\n```javascript\nlet isLoading = false;\nasync function loadMoreItems() {\n  if (isLoading) return;\n  isLoading = true;\n  // fetch and append items\n  isLoading = false;\n}\n```', votes: 8, accepted: false, createdAt: '2024-01-13T12:00:00', comments: [] },
        { id: 'a3', author: 'u3', body: 'Consider using a virtual scroll library for very large lists. Libraries like react-virtual or tanstack-virtual handle DOM recycling which prevents memory issues with thousands of elements.', votes: 5, accepted: false, createdAt: '2024-01-13T14:45:00', comments: [] }
      ]
    },
    {
      id: 't2', title: 'Best practices for CSS Grid layout in 2024?',
      body: 'I\'ve been using flexbox for everything but want to level up my CSS Grid game. What are the current best practices? When should I use grid over flexbox? Any gotchas to watch out for?',
      author: 'u4', createdAt: '2024-01-12T09:00:00', tags: ['CSS', 'Layout', 'Best Practices'],
      votes: 31, answers: 4, views: 567, solved: false, bookmarked: false,
      answersList: [
        { id: 'a4', author: 'u7', body: '**Grid vs Flexbox rule of thumb:**\n- Grid = 2D layouts (rows AND columns)\n- Flexbox = 1D layouts (row OR column)\n\n**Best practices:**\n1. Use `grid-template-areas` for page layouts — much more readable\n2. `minmax()` with `auto-fill`/`auto-fit` for responsive grids without media queries\n3. Use `gap` instead of margins — it\'s cleaner\n4. Named lines for complex layouts\n\n```css\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n```', votes: 22, accepted: false, createdAt: '2024-01-12T10:30:00', comments: [{ author: 'u4', body: 'The auto-fill tip is great. What about subgrid support?', createdAt: '2024-01-12T11:00:00' }] },
        { id: 'a5', author: 'u1', body: 'Subgrid is now supported in all major browsers! Use it for aligning nested grid children to the parent grid:\n\n```css\n.card { display: grid; grid-template-rows: subgrid; grid-row: span 3; }\n```', votes: 15, accepted: false, createdAt: '2024-01-12T13:00:00', comments: [] }
      ]
    },
    {
      id: 't3', title: 'Understanding JavaScript closures — can someone explain simply?',
      body: 'I keep seeing closures mentioned but I struggle to understand them intuitively. Can someone explain with simple, practical examples? Not the typical "counter" example please.',
      author: 'u8', createdAt: '2024-01-11T16:00:00', tags: ['JavaScript', 'Fundamentals', 'Learning'],
      votes: 45, answers: 5, views: 1234, solved: true, bookmarked: false,
      answersList: [
        { id: 'a6', author: 'u2', body: 'Think of a closure as a **backpack** that a function carries around. When a function is created inside another function, it packs up all the variables from its surrounding scope into this backpack.\n\n```javascript\nfunction createGreeter(greeting) {\n  // greeting is packed into the backpack\n  return function(name) {\n    return `${greeting}, ${name}!`;\n  };\n}\n\nconst sayHello = createGreeter("Hello");\nsayHello("World"); // "Hello, World!"\n```\n\n`sayHello` still has access to `greeting` even though `createGreeter` finished running. That\'s the closure.', votes: 38, accepted: true, createdAt: '2024-01-11T16:45:00', comments: [{ author: 'u8', body: 'The backpack analogy is brilliant! Finally clicks.', createdAt: '2024-01-11T17:00:00' }] }
      ]
    },
    {
      id: 't4', title: 'How do you handle authentication in single-page applications?',
      body: 'Building a SPA and confused about the best approach for auth. JWT vs sessions? Where to store tokens? How to handle refresh tokens? Looking for a practical overview.',
      author: 'u3', createdAt: '2024-01-10T14:00:00', tags: ['Security', 'Authentication', 'SPA'],
      votes: 28, answers: 3, views: 890, solved: false, bookmarked: false,
      answersList: [
        { id: 'a7', author: 'u7', body: '**The modern SPA auth approach:**\n\n1. **Use HttpOnly cookies** for token storage — NOT localStorage\n2. **Short-lived access tokens** (15 min) + **refresh tokens** (7 days)\n3. **CSRF protection** with SameSite cookies + anti-CSRF tokens\n4. **Refresh silently** before access token expires\n\nAvoid storing JWTs in localStorage — they\'re vulnerable to XSS attacks.', votes: 20, accepted: false, createdAt: '2024-01-10T15:30:00', comments: [] }
      ]
    },
    {
      id: 't5', title: 'What\'s my web performance bottleneck? (Lighthouse score 45)',
      body: 'My site is getting a terrible Lighthouse score. LCP is 4.2s, CLS is 0.25, and FID is 380ms. I\'ve optimized images and minified CSS/JS. What else can I do to improve these scores?',
      author: 'u5', createdAt: '2024-01-09T11:00:00', tags: ['Performance', 'Web Vitals', 'Optimization'],
      votes: 19, answers: 4, views: 456, solved: true, bookmarked: false,
      answersList: []
    },
    {
      id: 't6', title: 'Microservices vs Monolith — when to choose what?',
      body: 'Starting a new project and my team is debating architecture. CTO wants microservices but we\'re only 4 developers. What are the tradeoffs and when does each architecture make sense?',
      author: 'u4', createdAt: '2024-01-08T09:30:00', tags: ['Architecture', 'Backend', 'System Design'],
      votes: 52, answers: 6, views: 2100, solved: false, bookmarked: false,
      answersList: []
    },
    {
      id: 't7', title: 'Tailwind CSS vs vanilla CSS for large projects?',
      body: 'Our team is starting a new enterprise project. Some devs prefer Tailwind for speed, others want vanilla CSS with BEM for maintainability. What\'s the consensus for large-scale projects?',
      author: 'u6', createdAt: '2024-01-07T13:00:00', tags: ['CSS', 'Tailwind', 'Architecture'],
      votes: 37, answers: 5, views: 1800, solved: false, bookmarked: false,
      answersList: []
    },
    {
      id: 't8', title: 'How to structure a large JavaScript project without a framework?',
      body: 'Building a complex app with vanilla JS (no React/Vue). How do you organize code, manage state, and handle component-like patterns without a framework?',
      author: 'u1', createdAt: '2024-01-06T10:00:00', tags: ['JavaScript', 'Architecture', 'Vanilla JS'],
      votes: 41, answers: 4, views: 1560, solved: true, bookmarked: false,
      answersList: []
    }
  ],

  // ========== DIRECTORY MODULE ==========
  listings: [
    {
      id: 'l1', name: 'The Code Cafe', category: 'Cafe', subcategory: 'Coworking Cafe',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
      images: ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop'],
      address: '123 Tech Street, Innovation District', lat: 23.7937, lng: 90.4066,
      phone: '+880-1234-5678', website: 'https://codecafe.com',
      rating: 4.7, reviewCount: 89, priceRange: '$$',
      description: 'A cozy cafe designed for developers and remote workers. Fast WiFi, plenty of outlets, standing desks, and the best espresso in the district.',
      amenities: ['WiFi', 'Power Outlets', 'Standing Desks', 'Meeting Rooms', 'Espresso Bar', 'Quiet Zone'],
      hours: { mon: '7:00 AM – 10:00 PM', tue: '7:00 AM – 10:00 PM', wed: '7:00 AM – 10:00 PM', thu: '7:00 AM – 10:00 PM', fri: '7:00 AM – 11:00 PM', sat: '8:00 AM – 11:00 PM', sun: '8:00 AM – 8:00 PM' },
      isOpen: true, owner: 'u5', featured: true
    },
    {
      id: 'l2', name: 'Pixel Studio', category: 'Coworking', subcategory: 'Creative Space',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'],
      address: '456 Creative Avenue, Arts Quarter', lat: 23.7500, lng: 90.3920,
      phone: '+880-2345-6789', website: 'https://pixelstudio.co',
      rating: 4.5, reviewCount: 54, priceRange: '$$$',
      description: 'Premium coworking space with photography studio, podcast room, and event space. Perfect for creative professionals and startups.',
      amenities: ['WiFi', 'Photo Studio', 'Podcast Room', 'Event Space', 'Kitchen', 'Lockers', '24/7 Access'],
      hours: { mon: '8:00 AM – 8:00 PM', tue: '8:00 AM – 8:00 PM', wed: '8:00 AM – 8:00 PM', thu: '8:00 AM – 8:00 PM', fri: '8:00 AM – 6:00 PM', sat: '10:00 AM – 4:00 PM', sun: 'Closed' },
      isOpen: true, owner: 'u2', featured: false
    },
    {
      id: 'l3', name: 'Stack Overflow Bookstore', category: 'Bookstore', subcategory: 'Tech Books',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop',
      images: ['https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop'],
      address: '789 Knowledge Lane, University Area', lat: 23.7280, lng: 90.3985,
      phone: '+880-3456-7890', website: 'https://stackbooks.com',
      rating: 4.8, reviewCount: 120, priceRange: '$$',
      description: 'The largest collection of programming and tech books in the city. Regular author meetups and book clubs for developers.',
      amenities: ['Reading Area', 'WiFi', 'Author Events', 'Book Club', 'Online Orders', 'Gift Cards'],
      hours: { mon: '9:00 AM – 9:00 PM', tue: '9:00 AM – 9:00 PM', wed: '9:00 AM – 9:00 PM', thu: '9:00 AM – 9:00 PM', fri: '9:00 AM – 10:00 PM', sat: '10:00 AM – 10:00 PM', sun: '10:00 AM – 6:00 PM' },
      isOpen: true, owner: 'u7', featured: true
    },
    {
      id: 'l4', name: 'LaunchPad Hub', category: 'Incubator', subcategory: 'Startup Space',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'],
      address: '101 Startup Blvd, Tech Park', lat: 23.8100, lng: 90.4150,
      phone: '+880-4567-8901', website: 'https://launchpadhub.io',
      rating: 4.3, reviewCount: 37, priceRange: '$$$',
      description: 'Incubator and accelerator space for tech startups. Mentorship programs, investor networking, and all the resources you need to launch.',
      amenities: ['Mentorship', 'Investor Access', 'Meeting Rooms', 'Demo Stage', 'WiFi', 'Kitchen', 'Mail Service'],
      hours: { mon: '8:00 AM – 10:00 PM', tue: '8:00 AM – 10:00 PM', wed: '8:00 AM – 10:00 PM', thu: '8:00 AM – 10:00 PM', fri: '8:00 AM – 8:00 PM', sat: '10:00 AM – 6:00 PM', sun: 'Closed' },
      isOpen: false, owner: 'u3', featured: false
    },
    {
      id: 'l5', name: 'Byte Kitchen', category: 'Restaurant', subcategory: 'Tech-Themed',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'],
      address: '222 Food Court, Downtown', lat: 23.7650, lng: 90.4000,
      phone: '+880-5678-9012', website: 'https://bytekitchen.com',
      rating: 4.1, reviewCount: 63, priceRange: '$$',
      description: 'Tech-themed restaurant with great food and coding-inspired menu items. Popular spot for team lunches and casual meetups.',
      amenities: ['WiFi', 'Group Tables', 'Outdoor Seating', 'Delivery', 'Catering', 'Reservations'],
      hours: { mon: '11:00 AM – 10:00 PM', tue: '11:00 AM – 10:00 PM', wed: '11:00 AM – 10:00 PM', thu: '11:00 AM – 10:00 PM', fri: '11:00 AM – 11:00 PM', sat: '10:00 AM – 11:00 PM', sun: '10:00 AM – 9:00 PM' },
      isOpen: true, owner: 'u8', featured: false
    },
    {
      id: 'l6', name: 'Debug Gym', category: 'Fitness', subcategory: 'Developer Gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop'],
      address: '333 Health Ave, Midtown', lat: 23.7800, lng: 90.3850,
      phone: '+880-6789-0123', website: 'https://debuggym.com',
      rating: 4.6, reviewCount: 45, priceRange: '$$',
      description: 'A gym built for tech workers. Ergonomic training, posture correction classes, and stress-relief programs designed for desk workers.',
      amenities: ['Ergonomic Training', 'Posture Classes', 'Sauna', 'Lockers', 'Personal Training', 'Smoothie Bar'],
      hours: { mon: '6:00 AM – 10:00 PM', tue: '6:00 AM – 10:00 PM', wed: '6:00 AM – 10:00 PM', thu: '6:00 AM – 10:00 PM', fri: '6:00 AM – 9:00 PM', sat: '7:00 AM – 8:00 PM', sun: '8:00 AM – 6:00 PM' },
      isOpen: true, owner: 'u4', featured: false
    }
  ],

  // ========== EVENTS MODULE ==========
  events: [
    {
      id: 'e1', title: 'Frontend Conf 2024', category: 'Conference',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      date: '2024-02-15', endDate: '2024-02-16', time: '9:00 AM – 6:00 PM',
      location: 'Tech Convention Center, Dhaka', lat: 23.7950, lng: 90.4050,
      organizer: 'u2', description: 'The biggest frontend conference in South Asia. Two days of talks, workshops, and networking with industry leaders. Learn about the latest in React, CSS, Performance, and Web APIs.',
      schedule: [
        { time: '9:00 AM', title: 'Registration & Coffee', speaker: '' },
        { time: '10:00 AM', title: 'Keynote: The Future of the Web Platform', speaker: 'Sarah Chen' },
        { time: '11:30 AM', title: 'CSS Container Queries in Production', speaker: 'Alex Rivera' },
        { time: '1:00 PM', title: 'Lunch & Networking', speaker: '' },
        { time: '2:00 PM', title: 'Building Accessible Components', speaker: 'Priya Sharma' },
        { time: '3:30 PM', title: 'Web Performance Deep Dive', speaker: 'Marcus Johnson' },
        { time: '5:00 PM', title: 'Panel: Frontend in 2025', speaker: 'Multiple' }
      ],
      speakers: [
        { name: 'Sarah Chen', role: 'Staff Engineer, Quantum Labs', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
        { name: 'Alex Rivera', role: 'CSS Working Group', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex' },
        { name: 'Priya Sharma', role: 'Accessibility Lead, Netflix', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya' },
        { name: 'Marcus Johnson', role: 'Performance Engineer, Meta', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus' }
      ],
      tickets: { free: 0, standard: 50, vip: 120 },
      attendees: 234, maxAttendees: 300, rsvp: false, tags: ['Frontend', 'CSS', 'JavaScript', 'Performance']
    },
    {
      id: 'e2', title: 'Startup Pitch Night', category: 'Networking',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop',
      date: '2024-01-25', time: '6:00 PM – 9:00 PM',
      location: 'LaunchPad Hub, Tech Park', lat: 23.8100, lng: 90.4150,
      organizer: 'u3', description: 'Monthly startup pitch night. 8 startups pitch to a panel of investors and mentors. Followed by networking and refreshments. Great opportunity to meet founders and investors.',
      schedule: [
        { time: '6:00 PM', title: 'Doors Open & Networking', speaker: '' },
        { time: '6:30 PM', title: 'Pitches Begin (8 startups × 5 min)', speaker: '' },
        { time: '8:00 PM', title: 'Investor Panel Q&A', speaker: '' },
        { time: '8:30 PM', title: 'Networking & Refreshments', speaker: '' }
      ],
      speakers: [],
      tickets: { free: 0, standard: 15 },
      attendees: 78, maxAttendees: 100, rsvp: false, tags: ['Startup', 'Networking', 'Investing']
    },
    {
      id: 'e3', title: 'React Workshop: Building a Full-Stack App', category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop',
      date: '2024-02-03', time: '10:00 AM – 4:00 PM',
      location: 'Pixel Studio, Arts Quarter', lat: 23.7500, lng: 90.3920,
      organizer: 'u7', description: 'Hands-on workshop building a full-stack React application from scratch. Covers React 18, Server Components, Next.js 14, and deployment. Bring your laptop and a willingness to learn!',
      schedule: [
        { time: '10:00 AM', title: 'Setup & Project Architecture', speaker: 'Omar Hassan' },
        { time: '11:30 AM', title: 'Building Components & State', speaker: 'Omar Hassan' },
        { time: '12:30 PM', title: 'Lunch Break', speaker: '' },
        { time: '1:30 PM', title: 'API Routes & Database', speaker: 'Omar Hassan' },
        { time: '3:00 PM', title: 'Deployment & Q&A', speaker: 'Omar Hassan' }
      ],
      speakers: [{ name: 'Omar Hassan', role: 'Senior Engineer, Vercel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=omar' }],
      tickets: { standard: 35 },
      attendees: 28, maxAttendees: 30, rsvp: false, tags: ['React', 'Workshop', 'Full-Stack']
    },
    {
      id: 'e4', title: 'Women in Tech Meetup', category: 'Meetup',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=400&fit=crop',
      date: '2024-01-28', time: '4:00 PM – 7:00 PM',
      location: 'The Code Cafe, Innovation District', lat: 23.7937, lng: 90.4066,
      organizer: 'u4', description: 'Monthly gathering for women in technology. This month\'s theme: "Breaking into Tech Leadership." Panel followed by networking and mentorship circles.',
      schedule: [
        { time: '4:00 PM', title: 'Welcome & Introductions', speaker: 'Priya Sharma' },
        { time: '4:30 PM', title: 'Panel: Breaking into Tech Leadership', speaker: 'Multiple' },
        { time: '5:30 PM', title: 'Mentorship Circles', speaker: '' },
        { time: '6:30 PM', title: 'Open Networking', speaker: '' }
      ],
      speakers: [
        { name: 'Priya Sharma', role: 'Engineering Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya' },
        { name: 'Lisa Wong', role: 'Startup Founder', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa' }
      ],
      tickets: { free: 0 },
      attendees: 42, maxAttendees: 50, rsvp: false, tags: ['Women in Tech', 'Leadership', 'Networking']
    }
  ],

  // ========== REVIEWS MODULE ==========
  reviews: [
    {
      id: 'r1', listingId: 'l1', listingName: 'The Code Cafe', author: 'u1', rating: 5,
      title: 'Best coworking cafe in the city!', body: 'I\'ve been coming here for 6 months and it never disappoints. The WiFi is blazing fast, the espresso is incredible, and the quiet zone is perfect for deep focus work. Staff is super friendly and understanding of remote workers who camp out for hours.',
      photos: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop'],
      helpful: 23, notHelpful: 1, createdAt: '2024-01-10',
      ownerResponse: { body: 'Thank you so much for the kind words, Tahsan! We love having you here. The new standing desks should be arriving next week! ☕', date: '2024-01-11' }
    },
    {
      id: 'r2', listingId: 'l3', listingName: 'Stack Overflow Bookstore', author: 'u4', rating: 5,
      title: 'Paradise for tech book lovers', body: 'Incredible selection of programming books. Found rare titles I couldn\'t find online. The monthly book club is a great way to meet fellow developers. Highly recommend the reading area with the comfiest chairs ever.',
      photos: [], helpful: 18, notHelpful: 0, createdAt: '2024-01-08',
      ownerResponse: null
    },
    {
      id: 'r3', listingId: 'l2', listingName: 'Pixel Studio', author: 'u7', rating: 4,
      title: 'Great space but pricey', body: 'The facilities are top-notch — podcast room and photo studio are professional quality. Interiors are beautifully designed. The only downside is the price, which might be steep for freelancers starting out. Weekend hours could be better too.',
      photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'],
      helpful: 12, notHelpful: 3, createdAt: '2024-01-05',
      ownerResponse: { body: 'Thanks for the honest feedback, Omar! We\'re introducing a freelancer plan next month at a lower price point. Stay tuned!', date: '2024-01-06' }
    },
    {
      id: 'r4', listingId: 'l5', listingName: 'Byte Kitchen', author: 'u6', rating: 3,
      title: 'Fun concept, food is average', body: 'Love the tech-themed decor and menu names (the "404 Not Found" dessert is hilarious). But the actual food quality is just okay — nothing to write home about. Good for a casual team lunch but not a foodie destination.',
      photos: [], helpful: 8, notHelpful: 5, createdAt: '2024-01-03',
      ownerResponse: null
    },
    {
      id: 'r5', listingId: 'l6', listingName: 'Debug Gym', author: 'u5', rating: 5,
      title: 'Fixed my developer posture!', body: 'After 5 years of desk work, my back and neck were a mess. The posture correction program here has been life-changing. The trainers understand the specific issues tech workers face. The ergonomic training sessions are worth every penny.',
      photos: [], helpful: 31, notHelpful: 0, createdAt: '2024-01-01',
      ownerResponse: { body: 'So glad to hear about your progress, Marcus! Your consistency has been impressive. Keep it up! 💪', date: '2024-01-02' }
    },
    {
      id: 'r6', listingId: 'l4', listingName: 'LaunchPad Hub', author: 'u8', rating: 4,
      title: 'Good incubator, needs more mentors', body: 'Great resources and space for early-stage startups. The investor networking events are valuable. However, I wish there were more technical mentors available, especially in AI/ML. The demo stage setup is professional and great for practice.',
      photos: [], helpful: 9, notHelpful: 2, createdAt: '2023-12-28',
      ownerResponse: null
    }
  ],

  // ========== SOCIAL FEED ITEMS ==========
  feedItems: [
    { id: 'f1', type: 'job', refId: 'j1', author: 'u2', text: 'We\'re hiring a Senior Frontend Engineer at Quantum Labs! Remote-friendly, great comp. 🚀', createdAt: '2024-01-13T16:00:00', likes: 12, comments: 3, bookmarked: false },
    { id: 'f2', type: 'thread', refId: 't1', author: 'u6', text: 'Just asked about Intersection Observer for infinite scroll. If you\'ve implemented this, I\'d love your input!', createdAt: '2024-01-13T10:30:00', likes: 8, comments: 5, bookmarked: false },
    { id: 'f3', type: 'event', refId: 'e1', author: 'u2', text: 'Frontend Conf 2024 is coming up! Early bird tickets available. Two days of amazing talks. 🎤', createdAt: '2024-01-12T14:00:00', likes: 34, comments: 8, bookmarked: false },
    { id: 'f4', type: 'review', refId: 'r1', author: 'u1', text: 'Left a 5-star review for The Code Cafe — seriously the best spot to code in the city ☕', createdAt: '2024-01-10T12:00:00', likes: 15, comments: 4, bookmarked: false },
    { id: 'f5', type: 'thread', refId: 't3', author: 'u8', text: 'Can someone explain JavaScript closures in simple terms? (Not the typical counter example please 😅)', createdAt: '2024-01-11T16:00:00', likes: 22, comments: 7, bookmarked: false },
    { id: 'f6', type: 'listing', refId: 'l1', author: 'u5', text: 'Just joined The Code Cafe on our community directory! Check it out if you\'re looking for a great coworking spot.', createdAt: '2024-01-09T11:00:00', likes: 6, comments: 2, bookmarked: false },
    { id: 'f7', type: 'job', refId: 'j3', author: 'u7', text: '🔥 Urgent: Looking for a UI/UX Designer at PixelForge. Contract role, fully remote.', createdAt: '2024-01-12T10:00:00', likes: 19, comments: 6, bookmarked: false },
    { id: 'f8', type: 'event', refId: 'e4', author: 'u4', text: 'Women in Tech Meetup this Sunday! Theme: Breaking into Tech Leadership. All welcome! 💜', createdAt: '2024-01-11T09:00:00', likes: 28, comments: 5, bookmarked: false }
  ],

  // ========== NOTIFICATIONS ==========
  notifications: [
    { id: 'n1', type: 'upvote', from: 'u2', message: 'Sarah Chen upvoted your answer', link: 'thread.html?id=t2', time: '2 min ago', read: false },
    { id: 'n2', type: 'answer', from: 'u7', message: 'Omar Hassan answered your question', link: 'thread.html?id=t8', time: '15 min ago', read: false },
    { id: 'n3', type: 'mention', from: 'u4', message: 'Priya Sharma mentioned you in a comment', link: 'thread.html?id=t2', time: '1 hr ago', read: false },
    { id: 'n4', type: 'event', from: 'u2', message: 'Frontend Conf 2024 starts in 3 days!', link: 'event.html?id=e1', time: '3 hrs ago', read: true },
    { id: 'n5', type: 'badge', from: 'system', message: 'You earned the "Top Contributor" badge! 🏆', link: 'profile.html', time: '1 day ago', read: true },
    { id: 'n6', type: 'review', from: 'u5', message: 'Owner replied to your review of The Code Cafe', link: 'listing.html?id=l1', time: '2 days ago', read: true }
  ],

  // ========== TRENDING / LEADERBOARD ==========
  trendingTopics: [
    { tag: '#WebComponents', count: 128 },
    { tag: '#TypeScript5', count: 94 },
    { tag: '#CSSSubgrid', count: 76 },
    { tag: '#RemoteWork', count: 65 },
    { tag: '#AITools', count: 58 },
    { tag: '#OpenSource', count: 52 }
  ],

  leaderboard: [
    { userId: 'u2', score: 5200 },
    { userId: 'u7', score: 4600 },
    { userId: 'u1', score: 2450 },
    { userId: 'u5', score: 1200 },
    { userId: 'u3', score: 980 }
  ],

  communityStats: {
    members: 2847,
    posts: 12450,
    jobs: 156,
    events: 42
  },

  directoryCategories: ['All', 'Cafe', 'Coworking', 'Bookstore', 'Restaurant', 'Fitness', 'Incubator'],
  jobTypes: ['All', 'Full-time', 'Part-time', 'Contract', 'Freelance'],
  forumCategories: ['All', 'JavaScript', 'CSS', 'Performance', 'Architecture', 'Security', 'Career']
};

// Helper: get user by ID
function getUser(id) {
  return CommunityData.users.find(u => u.id === id) || CommunityData.currentUser;
}

// Helper: get reputation badge class
function getRepClass(level) {
  const map = { Newcomer: 'rep-newcomer', Contributor: 'rep-contributor', Expert: 'rep-expert', Master: 'rep-master', Legend: 'rep-legend' };
  return map[level] || 'rep-newcomer';
}

// Helper: format relative time
function timeAgo(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Helper: generate stars
function starsHTML(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += i <= rating ? '★' : '☆';
  return s;
}
