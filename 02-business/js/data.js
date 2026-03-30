/* ============================================================
   02-BUSINESS — MOCK DATA
   ============================================================ */
const SITE = {
  name: 'NexGen',
  tagline: 'Digital Solutions That Drive Growth',
  phone: '+880 1234-567890',
  email: 'hello@nexgen.co',
  address: '123 Business Bay, Gulshan-2, Dhaka 1212',
  hours: 'Mon – Fri, 9:00 AM – 6:00 PM',
  socials: [
    { name: 'LinkedIn', icon: 'in', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
  ],

  services: [
    {
      id: 'web-development',
      icon: '🌐',
      title: 'Web Development',
      short: 'Custom web applications built with modern technologies for performance and scalability.',
      description: 'We design and develop high-performance web applications tailored to your business needs. From responsive marketing sites to complex SaaS platforms, our team delivers solutions that are fast, accessible, and built to scale.',
      approach: 'We follow an agile methodology with two-week sprints, continuous integration, and close client collaboration. Every project begins with discovery workshops and ends with thorough QA testing.',
      deliverables: ['Responsive web application', 'API integration', 'CMS setup & training', 'Performance optimization', '90-day support'],
      benefits: ['Lightning-fast load times', 'Mobile-first responsive design', 'SEO optimized from day one', 'Scalable architecture', 'Ongoing maintenance support'],
      faqs: [
        { q: 'What technologies do you use?', a: 'We primarily work with React, Next.js, Node.js, and Python. We choose the best stack for each project\'s specific requirements.' },
        { q: 'How long does a typical project take?', a: 'Most web development projects take 8-16 weeks from kickoff to launch, depending on complexity.' },
        { q: 'Do you provide hosting?', a: 'We can set up and manage hosting on AWS, Vercel, or other platforms. We recommend the best solution based on your needs.' },
        { q: 'What about maintenance?', a: 'All projects include 90 days of post-launch support. We also offer ongoing retainer packages for long-term maintenance.' },
      ]
    },
    {
      id: 'ui-ux-design',
      icon: '🎨',
      title: 'UI/UX Design',
      short: 'User-centered design that balances aesthetics with intuitive functionality.',
      description: 'Our design process starts with understanding your users. We create interfaces that are not just beautiful but intuitive, accessible, and conversion-focused. Every pixel serves a purpose.',
      approach: 'Research → Wireframes → High-fi Prototypes → User Testing → Iteration. We believe design is never done—it evolves with user feedback.',
      deliverables: ['User research report', 'Wireframes & user flows', 'High-fidelity prototypes', 'Design system & component library', 'Developer handoff package'],
      benefits: ['Research-driven decisions', 'Accessibility-first approach', 'Consistent design language', 'Interactive prototypes', 'Smooth developer handoff'],
      faqs: [
        { q: 'Do you conduct user research?', a: 'Absolutely. Every project includes user interviews, competitive analysis, and usability testing to inform our design decisions.' },
        { q: 'What tools do you use?', a: 'We design in Figma and prototype with Figma\'s built-in prototyping features. We also use Maze for usability testing.' },
        { q: 'Can you work with our existing brand?', a: 'Yes, we regularly work within existing brand guidelines while enhancing the digital experience.' },
      ]
    },
    {
      id: 'digital-strategy',
      icon: '📊',
      title: 'Digital Strategy',
      short: 'Data-driven strategies that align technology with your business goals.',
      description: 'We help businesses navigate digital transformation. From market analysis to technology roadmaps, we provide strategic guidance that turns challenges into opportunities.',
      approach: 'Audit → Research → Strategy → Roadmap → Execution Support. We work as an extension of your team to ensure strategies are implemented effectively.',
      deliverables: ['Digital audit report', 'Market & competitor analysis', 'Strategic roadmap', 'Technology recommendations', 'Quarterly review sessions'],
      benefits: ['Clear strategic direction', 'Data-backed decisions', 'Competitive advantage', 'Technology roadmap', 'Measurable KPIs'],
      faqs: [
        { q: 'What does a digital strategy engagement look like?', a: 'It typically starts with a 2-week discovery phase, followed by strategy development and a detailed implementation roadmap.' },
        { q: 'Do you help with implementation?', a: 'Yes, we can either implement the strategy ourselves or work alongside your team to execute it.' },
      ]
    },
    {
      id: 'mobile-development',
      icon: '📱',
      title: 'Mobile Apps',
      short: 'Native and cross-platform mobile experiences that users love.',
      description: 'We build mobile applications that deliver seamless experiences across iOS and Android. Whether you need a native app or a cross-platform solution, we balance performance with development efficiency.',
      approach: 'We evaluate each project to determine the best approach—React Native for cross-platform efficiency or Swift/Kotlin for native performance.',
      deliverables: ['iOS & Android applications', 'App Store optimization', 'Push notification system', 'Analytics integration', 'Post-launch support'],
      benefits: ['Cross-platform efficiency', 'Native-like performance', 'Offline capability', 'Push notifications', 'App Store optimization'],
      faqs: [
        { q: 'React Native or native development?', a: 'We recommend React Native for most projects as it offers 90% code sharing between platforms. For performance-critical apps, we go native.' },
      ]
    },
    {
      id: 'cloud-solutions',
      icon: '☁️',
      title: 'Cloud Solutions',
      short: 'Reliable cloud infrastructure designed for performance and security.',
      description: 'From cloud migration to DevOps automation, we help businesses leverage cloud technologies to improve reliability, reduce costs, and accelerate deployment cycles.',
      approach: 'Assessment → Architecture Design → Migration → Optimization → Monitoring. We ensure zero-downtime transitions.',
      deliverables: ['Cloud architecture design', 'Migration execution', 'CI/CD pipeline setup', 'Monitoring & alerting', 'Cost optimization report'],
      benefits: ['99.99% uptime SLA', 'Auto-scaling infrastructure', 'Reduced operational costs', 'Enhanced security', 'Disaster recovery'],
      faqs: [
        { q: 'Which cloud providers do you work with?', a: 'We work with AWS, Google Cloud, and Azure. We recommend the best provider based on your specific needs and existing infrastructure.' },
      ]
    },
    {
      id: 'brand-identity',
      icon: '✨',
      title: 'Brand Identity',
      short: 'Distinctive brand identities that tell your story and connect with audiences.',
      description: 'We craft brand identities that go beyond logos. From visual systems to brand voice, we build cohesive identities that resonate with your target audience and differentiate you in the market.',
      approach: 'Discovery → Brand Strategy → Visual Identity → Brand Guidelines → Launch Support.',
      deliverables: ['Logo & visual identity', 'Brand guidelines document', 'Stationery design', 'Social media templates', 'Brand voice guidelines'],
      benefits: ['Memorable brand identity', 'Cohesive visual language', 'Brand consistency tools', 'Market differentiation', 'Emotional connection'],
      faqs: [
        { q: 'How long does branding take?', a: 'A full brand identity project typically takes 6-8 weeks from discovery to final deliverables.' },
      ]
    },
  ],

  stats: [
    { number: 150, suffix: '+', label: 'Projects Completed' },
    { number: 80, suffix: '+', label: 'Happy Clients' },
    { number: 12, suffix: '', label: 'Years Experience' },
    { number: 15, suffix: '', label: 'Countries Served' },
  ],

  testimonials: [
    { quote: 'NexGen transformed our outdated platform into a modern, scalable application that our users love. Their attention to detail and strategic thinking set them apart.', name: 'Sarah Mitchell', role: 'CTO, FinanceHub', avatar: '👩‍💼' },
    { quote: 'Working with NexGen felt like having an extension of our own team. They understood our vision from day one and delivered beyond our expectations.', name: 'David Chen', role: 'CEO, TechStart Inc.', avatar: '👨‍💻' },
    { quote: 'The brand identity NexGen created perfectly captures who we are. Our customers consistently comment on how professional and trustworthy our brand feels.', name: 'Amara Okafor', role: 'Founder, GreenLeaf', avatar: '👩‍🎨' },
    { quote: 'Their strategic approach to our digital transformation saved us months of trial and error. Clear roadmap, excellent execution, and measurable results.', name: 'James Wilson', role: 'VP Digital, RetailMax', avatar: '👨‍💼' },
  ],

  clientLogos: ['Stripe', 'Linear', 'Notion', 'Vercel', 'Figma', 'Shopify'],

  team: [
    { name: 'Rahman Ahmed', role: 'Founder & CEO', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', bio: 'Serial entrepreneur with 15+ years in digital.' },
    { name: 'Priya Sharma', role: 'Design Director', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop', bio: 'Award-winning designer, former Google.' },
    { name: 'Alex Thompson', role: 'Tech Lead', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', bio: 'Full-stack architect, open source contributor.' },
    { name: 'Luna Park', role: 'Strategy Lead', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', bio: 'Former McKinsey consultant, MBA from Wharton.' },
    { name: 'Omar Hassan', role: 'Mobile Lead', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', bio: '10+ apps in top charts.' },
    { name: 'Mei Zhang', role: 'UX Researcher', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', bio: 'Human-computer interaction PhD.' },
    { name: 'Carlos Rivera', role: 'DevOps Engineer', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', bio: 'AWS certified, infrastructure wizard.' },
    { name: 'Emily Watson', role: 'Content Strategist', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', bio: 'Storyteller, brand voice specialist.' },
  ],

  timeline: [
    { year: '2012', title: 'Founded', desc: 'Started as a two-person freelance team with a shared vision for better digital experiences.' },
    { year: '2014', title: 'First Major Client', desc: 'Landed our first enterprise contract and grew the team to 8 members.' },
    { year: '2016', title: 'Design Award', desc: 'Won regional design excellence award for innovative e-commerce platform.' },
    { year: '2018', title: 'International Expansion', desc: 'Opened our first international office and started serving clients in 5 countries.' },
    { year: '2020', title: 'Remote-First', desc: 'Transitioned to fully remote operations, tripling our talent pool globally.' },
    { year: '2023', title: '100th Project', desc: 'Celebrated our 100th successfully delivered project with a 97% client satisfaction rate.' },
    { year: '2025', title: 'AI Integration', desc: 'Launched AI-powered solutions and expanded into machine learning consulting.' },
  ],

  projects: [
    { id: 'fintech-dashboard', title: 'FinanceHub Dashboard', category: 'Web', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', client: 'FinanceHub',
      industry: 'FinTech', duration: '14 weeks', teamSize: 5,
      challenge: 'FinanceHub needed to replace their legacy dashboard with a modern, real-time analytics platform that could handle millions of data points without compromising on speed or user experience.',
      solution: 'We built a React-based dashboard with WebSocket connections for real-time data streaming, custom D3.js visualizations, and a micro-services backend architecture that ensures sub-second response times.',
      results: [{ number: '+150%', label: 'User Engagement' }, { number: '-40%', label: 'Bounce Rate' }, { number: '3x', label: 'Data Processing Speed' }],
      testimonial: 'The new dashboard exceeded every metric we set. Our users spend 3x more time on the platform and our support tickets dropped by 60%.', testimonialAuthor: 'Sarah Mitchell, CTO'
    },
    { id: 'ecommerce-redesign', title: 'RetailMax E-Commerce', category: 'Web', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', client: 'RetailMax',
      industry: 'Retail', duration: '16 weeks', teamSize: 7,
      challenge: 'RetailMax was losing market share due to a slow, outdated e-commerce platform with poor mobile experience and low conversion rates.',
      solution: 'Complete platform redesign with Next.js, headless CMS, AI-powered product recommendations, and a streamlined 2-step checkout process.',
      results: [{ number: '+85%', label: 'Conversion Rate' }, { number: '+200%', label: 'Mobile Sales' }, { number: '-2.5s', label: 'Load Time' }],
      testimonial: 'Our revenue increased by 40% in the first quarter after launch. The mobile experience is now our fastest-growing channel.', testimonialAuthor: 'James Wilson, VP Digital'
    },
    { id: 'health-app', title: 'MediTrack App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop', client: 'MediTrack',
      industry: 'Healthcare', duration: '20 weeks', teamSize: 6,
      challenge: 'Building a HIPAA-compliant health tracking application that needed to sync across devices, integrate with wearable sensors, and present complex health data in an approachable way.',
      solution: 'React Native cross-platform app with end-to-end encryption, HealthKit/Google Fit integration, and custom data visualization components.',
      results: [{ number: '50K+', label: 'Downloads' }, { number: '4.8', label: 'App Store Rating' }, { number: '89%', label: 'Daily Active Users' }],
      testimonial: 'NexGen understood the healthcare space deeply. The app is trusted by doctors and loved by patients.', testimonialAuthor: 'Dr. Lisa Park, CEO'
    },
    { id: 'greenleaf-brand', title: 'GreenLeaf Rebrand', category: 'Branding', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop', client: 'GreenLeaf',
      industry: 'Sustainability', duration: '8 weeks', teamSize: 3,
      challenge: 'GreenLeaf needed a complete brand overhaul to position themselves as a premium sustainable products company rather than a budget-friendly alternative.',
      solution: 'Full brand identity redesign including logo, visual system, packaging, and brand guidelines that communicate quality and environmental commitment.',
      results: [{ number: '+60%', label: 'Brand Recognition' }, { number: '+35%', label: 'Premium Perception' }, { number: '2x', label: 'Social Following' }],
      testimonial: 'The brand identity NexGen created perfectly captures who we are.', testimonialAuthor: 'Amara Okafor, Founder'
    },
    { id: 'saas-platform', title: 'TaskFlow SaaS', category: 'Web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', client: 'TaskFlow',
      industry: 'Productivity', duration: '24 weeks', teamSize: 8,
      challenge: 'Build a project management SaaS from the ground up that could compete with established players through superior UX and innovative collaboration features.',
      solution: 'Custom-built SaaS with real-time collaboration, Kanban/List/Calendar views, AI-powered task prioritization, and seamless third-party integrations.',
      results: [{ number: '10K+', label: 'Active Teams' }, { number: '96%', label: 'Retention Rate' }, { number: '#1', label: 'Product Hunt Launch' }],
      testimonial: 'NexGen built more than a product — they helped us define what modern project management should look like.', testimonialAuthor: 'Tom Bradley, CPO'
    },
    { id: 'travel-mobile', title: 'WanderLust App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop', client: 'WanderLust',
      industry: 'Travel', duration: '18 weeks', teamSize: 5,
      challenge: 'Create a personalized travel planning app that works offline and provides authentic local recommendations beyond typical tourist attractions.',
      solution: 'Native iOS & Android app with ML-powered recommendations, offline maps, AR landmark detection, and a community-driven content platform.',
      results: [{ number: '100K+', label: 'Downloads' }, { number: '4.7', label: 'Rating' }, { number: '45min', label: 'Avg Session' }],
      testimonial: 'WanderLust has changed how people explore cities. NexGen made our ambitious vision a reality.', testimonialAuthor: 'Sofia Rossi, Co-founder'
    },
    { id: 'cloud-migration', title: 'DataCore Migration', category: 'Cloud', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop', client: 'DataCore',
      industry: 'Enterprise', duration: '12 weeks', teamSize: 4,
      challenge: 'Migrate a legacy on-premise infrastructure to AWS with zero downtime for a company processing millions of transactions daily.',
      solution: 'Phased migration strategy with blue-green deployments, automated CI/CD pipelines, and comprehensive monitoring dashboards.',
      results: [{ number: '-60%', label: 'Infra Costs' }, { number: '99.99%', label: 'Uptime' }, { number: '10x', label: 'Deploy Speed' }],
      testimonial: 'Zero downtime migration — we didn\'t think it was possible. NexGen proved us wrong.', testimonialAuthor: 'Mark Reynolds, CIO'
    },
    { id: 'marketing-site', title: 'Eleva Marketing', category: 'Branding', image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop', client: 'Eleva',
      industry: 'Marketing', duration: '6 weeks', teamSize: 3,
      challenge: 'Eleva needed a stunning marketing website that would position them as a premium agency and convert high-value leads.',
      solution: 'Story-driven website with scroll animations, interactive case studies, and a strategic content hierarchy designed for conversion.',
      results: [{ number: '+120%', label: 'Lead Quality' }, { number: '+300%', label: 'Time on Site' }, { number: '-50%', label: 'Bounce Rate' }],
      testimonial: 'Our website is now our best salesperson. The leads coming in are exactly the clients we want.', testimonialAuthor: 'Nina Brooks, Managing Director'
    },
  ],

  blogPosts: [
    {
      id: 'future-of-web-dev',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      category: 'Technology',
      excerpt: 'From AI-powered development tools to edge computing, explore the technologies reshaping how we build for the web.',
      author: 'Alex Thompson', authorAvatar: '👨‍💻',
      date: 'Jan 15, 2025', readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop',
      content: `<p>The web development landscape is evolving at an unprecedented pace. As we step into 2025, several key trends are reshaping how developers build, deploy, and maintain web applications.</p><h2>1. AI-Assisted Development</h2><p>AI coding assistants have moved from novelty to necessity. Tools like GitHub Copilot and Claude are now integral parts of the development workflow, handling boilerplate code and suggesting optimizations.</p><blockquote>The best developers in 2025 aren't those who write the most code — they're the ones who know how to leverage AI to solve problems creatively.</blockquote><h2>2. Edge Computing Goes Mainstream</h2><p>With frameworks like Next.js and Cloudflare Workers, edge computing is no longer experimental. Applications are being deployed closer to users than ever before, resulting in near-instant load times.</p><h2>3. WebAssembly Adoption</h2><p>WASM is finally finding its stride. From running complex simulations in the browser to porting desktop applications to the web, WebAssembly is opening new possibilities.</p><h2>4. Design Systems as Infrastructure</h2><p>Design systems are evolving from style guides into living infrastructure that bridges design and development, ensuring consistency at scale.</p>`
    },
    {
      id: 'design-thinking-business',
      title: 'How Design Thinking Transforms Business Outcomes',
      category: 'Business',
      excerpt: 'Discover how applying design thinking principles can lead to better products, happier customers, and stronger business metrics.',
      author: 'Priya Sharma', authorAvatar: '👩‍🎨',
      date: 'Jan 8, 2025', readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=450&fit=crop',
      content: `<p>Design thinking isn't just for designers. When applied across an organization, it becomes a powerful framework for innovation and problem-solving that directly impacts business outcomes.</p><h2>The Five Stages</h2><p>Empathize, Define, Ideate, Prototype, Test — these five stages create a structured approach to understanding users and building solutions that truly matter.</p><h2>Real Business Impact</h2><p>Companies that embrace design thinking see measurable improvements in customer satisfaction, employee engagement, and revenue growth. It's not about making things pretty — it's about making things work.</p>`
    },
    {
      id: 'scaling-engineering-teams',
      title: 'Scaling Engineering Teams Without Losing Culture',
      category: 'Business',
      excerpt: 'Lessons learned from growing our team from 2 to 50 while maintaining the creative, collaborative culture that defines us.',
      author: 'Rahman Ahmed', authorAvatar: '👨‍💼',
      date: 'Dec 28, 2024', readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
      content: `<p>Every founder fears the same thing: that the culture they built with 5 people will dissolve when they hit 50. Here's what we learned about scaling without losing soul.</p><h2>Hire for Values, Train for Skills</h2><p>Technical skills can be learned. Cultural alignment cannot. Every hire at NexGen goes through a values interview in addition to technical assessment.</p><h2>Document Everything</h2><p>Oral traditions don't scale. We invested heavily in documentation early — from coding standards to decision-making frameworks.</p>`
    },
    {
      id: 'accessible-design-guide',
      title: 'A Practical Guide to Accessible Web Design',
      category: 'Design',
      excerpt: 'Accessibility isn\'t a feature — it\'s a fundamental requirement. Here\'s how to bake it into your design process from day one.',
      author: 'Mei Zhang', authorAvatar: '👩‍🔬',
      date: 'Dec 20, 2024', readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=450&fit=crop',
      content: `<p>Over 1 billion people worldwide have some form of disability. Designing for accessibility isn't just ethically right — it's good business and often legally required.</p><h2>Color Contrast Matters</h2><p>Ensure a minimum contrast ratio of 4.5:1 for body text and 3:1 for large text. Tools like the WebAIM contrast checker make this easy.</p><h2>Keyboard Navigation</h2><p>Every interactive element must be accessible via keyboard. Test your site by putting your mouse away and navigating with Tab, Enter, and arrow keys.</p>`
    },
    {
      id: 'cloud-migration-checklist',
      title: 'The Complete Cloud Migration Checklist for 2025',
      category: 'Technology',
      excerpt: 'Planning a cloud migration? This comprehensive checklist covers everything from assessment to post-migration optimization.',
      author: 'Carlos Rivera', authorAvatar: '👨‍🔧',
      date: 'Dec 12, 2024', readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop',
      content: `<p>Cloud migration is one of the most impactful decisions a business can make, but it's also one of the most complex. This checklist breaks down the process into manageable phases.</p><h2>Phase 1: Assessment</h2><p>Before migrating anything, understand what you have. Audit your current infrastructure, identify dependencies, and classify workloads by migration complexity.</p><h2>Phase 2: Planning</h2><p>Create a detailed migration plan with clear milestones, rollback procedures, and success criteria for each workload.</p>`
    },
    {
      id: 'branding-startup-guide',
      title: 'Building a Brand That Lasts: A Startup Guide',
      category: 'Design',
      excerpt: 'Your brand is more than a logo. Learn how to create a brand identity that resonates with your audience and stands the test of time.',
      author: 'Emily Watson', authorAvatar: '👩‍✏️',
      date: 'Dec 5, 2024', readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop',
      content: `<p>Startups often treat branding as an afterthought — something to figure out after product-market fit. But the most successful startups build their brand alongside their product.</p><h2>Start with Why</h2><p>Your brand should communicate why you exist, not just what you do. Purpose drives connection.</p>`
    },
  ],

  pricing: [
    {
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 23,
      desc: 'Perfect for small projects and startups',
      features: [
        { text: 'Up to 3 pages', included: true },
        { text: 'Responsive design', included: true },
        { text: 'Basic SEO setup', included: true },
        { text: 'Contact form', included: true },
        { text: 'CMS integration', included: false },
        { text: 'E-commerce features', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom animations', included: false },
      ]
    },
    {
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 63,
      desc: 'Best for growing businesses',
      popular: true,
      features: [
        { text: 'Up to 10 pages', included: true },
        { text: 'Responsive design', included: true },
        { text: 'Advanced SEO', included: true },
        { text: 'Contact form', included: true },
        { text: 'CMS integration', included: true },
        { text: 'E-commerce (basic)', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom animations', included: false },
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      desc: 'For large-scale custom projects',
      features: [
        { text: 'Unlimited pages', included: true },
        { text: 'Responsive design', included: true },
        { text: 'Full SEO suite', included: true },
        { text: 'Advanced forms', included: true },
        { text: 'Custom CMS', included: true },
        { text: 'Full e-commerce', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Custom animations', included: true },
      ]
    },
  ],
};
