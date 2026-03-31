/* ============================================================
   09-CMS — Data Layer
   All mock data for the CMS / Website Builder platform
   ============================================================ */

const CMS = {

  name: 'SiteCraft',
  tagline: 'Build beautiful websites without code',
  version: '2.4.0',

  /* ---- Current User ---- */
  currentUser: {
    id: 'u1',
    name: 'Tahsan Islam',
    email: 'tahsan@sitecraft.io',
    avatar: 'TI',
    role: 'Admin',
    plan: 'Pro',
    joinDate: '2024-06-15'
  },

  /* ---- Site Being Managed ---- */
  site: {
    id: 's1',
    name: 'MyPortfolio',
    domain: 'myportfolio.sitecraft.io',
    customDomain: 'www.tahsan.dev',
    favicon: '🎨',
    language: 'en',
    timezone: 'Asia/Dhaka',
    analyticsId: 'SC-00142',
    createdAt: '2024-08-10',
    lastPublished: '2026-03-28T14:30:00',
    status: 'published'
  },

  /* ---- Dashboard Stats ---- */
  dashboardStats: {
    totalPages: 12,
    totalPosts: 24,
    mediaFiles: 87,
    totalVisitors: 4820,
    visitorsChange: 12.5,
    avgTimeOnSite: '2m 34s',
    bounceRate: 38.2,
    topPages: [
      { path: '/', views: 1240 },
      { path: '/about', views: 890 },
      { path: '/portfolio', views: 756 },
      { path: '/blog', views: 621 },
      { path: '/contact', views: 412 }
    ],
    trafficByDay: [
      { day: 'Mon', views: 620 },
      { day: 'Tue', views: 740 },
      { day: 'Wed', views: 680 },
      { day: 'Thu', views: 850 },
      { day: 'Fri', views: 920 },
      { day: 'Sat', views: 540 },
      { day: 'Sun', views: 470 }
    ],
    recentEdits: [
      { page: 'Homepage', user: 'Tahsan', time: '10 min ago', action: 'Updated hero section' },
      { page: 'About', user: 'Tahsan', time: '2 hours ago', action: 'Added team members' },
      { page: 'Blog Post: CSS Grid Guide', user: 'Tahsan', time: '5 hours ago', action: 'Published' },
      { page: 'Contact', user: 'Tahsan', time: '1 day ago', action: 'Updated form fields' },
      { page: 'Portfolio', user: 'Tahsan', time: '2 days ago', action: 'Added 3 new projects' }
    ]
  },

  /* ---- Pages ---- */
  pages: [
    { id: 'p1', title: 'Homepage', slug: '/', status: 'published', template: 'landing', updatedAt: '2026-03-28', author: 'Tahsan', sections: 6 },
    { id: 'p2', title: 'About', slug: '/about', status: 'published', template: 'default', updatedAt: '2026-03-27', author: 'Tahsan', sections: 4 },
    { id: 'p3', title: 'Portfolio', slug: '/portfolio', status: 'published', template: 'gallery', updatedAt: '2026-03-25', author: 'Tahsan', sections: 3 },
    { id: 'p4', title: 'Services', slug: '/services', status: 'published', template: 'default', updatedAt: '2026-03-20', author: 'Tahsan', sections: 5 },
    { id: 'p5', title: 'Blog', slug: '/blog', status: 'published', template: 'blog-index', updatedAt: '2026-03-18', author: 'Tahsan', sections: 2 },
    { id: 'p6', title: 'Contact', slug: '/contact', status: 'published', template: 'contact', updatedAt: '2026-03-15', author: 'Tahsan', sections: 3 },
    { id: 'p7', title: 'Pricing', slug: '/pricing', status: 'draft', template: 'default', updatedAt: '2026-03-10', author: 'Tahsan', sections: 4 },
    { id: 'p8', title: 'Testimonials', slug: '/testimonials', status: 'published', template: 'default', updatedAt: '2026-03-08', author: 'Tahsan', sections: 2 },
    { id: 'p9', title: 'FAQ', slug: '/faq', status: 'draft', template: 'default', updatedAt: '2026-03-05', author: 'Tahsan', sections: 2 },
    { id: 'p10', title: 'Privacy Policy', slug: '/privacy', status: 'published', template: 'legal', updatedAt: '2026-02-20', author: 'Tahsan', sections: 1 },
    { id: 'p11', title: 'Terms of Service', slug: '/terms', status: 'published', template: 'legal', updatedAt: '2026-02-20', author: 'Tahsan', sections: 1 },
    { id: 'p12', title: 'Coming Soon', slug: '/coming-soon', status: 'scheduled', template: 'landing', updatedAt: '2026-03-01', author: 'Tahsan', sections: 2 }
  ],

  /* ---- Blog Posts ---- */
  posts: [
    { id: 'b1', title: 'Mastering CSS Grid Layout', slug: 'mastering-css-grid', status: 'published', category: 'CSS', tags: ['css', 'layout', 'grid'], author: 'Tahsan', publishedAt: '2026-03-28', excerpt: 'A comprehensive guide to building complex layouts with CSS Grid, from basics to advanced techniques.', readTime: '8 min', views: 342, featured: true, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop' },
    { id: 'b2', title: 'JavaScript ES2026 Features', slug: 'js-es2026-features', status: 'published', category: 'JavaScript', tags: ['javascript', 'es2026', 'features'], author: 'Tahsan', publishedAt: '2026-03-25', excerpt: 'Explore the latest JavaScript features coming in ES2026 and how to use them today.', readTime: '6 min', views: 218, featured: false, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop' },
    { id: 'b3', title: 'Building Accessible Forms', slug: 'accessible-forms', status: 'published', category: 'Accessibility', tags: ['a11y', 'forms', 'html'], author: 'Tahsan', publishedAt: '2026-03-22', excerpt: 'Learn how to create forms that everyone can use, following WCAG guidelines.', readTime: '10 min', views: 186, featured: false, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop' },
    { id: 'b4', title: 'Web Performance Optimization', slug: 'web-performance', status: 'published', category: 'Performance', tags: ['performance', 'speed', 'lighthouse'], author: 'Tahsan', publishedAt: '2026-03-18', excerpt: 'Practical tips to make your website load faster and score better on Lighthouse.', readTime: '12 min', views: 425, featured: true, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop' },
    { id: 'b5', title: 'Dark Mode Implementation Guide', slug: 'dark-mode-guide', status: 'published', category: 'CSS', tags: ['dark-mode', 'css', 'ux'], author: 'Tahsan', publishedAt: '2026-03-14', excerpt: 'Step-by-step guide to implementing a proper dark mode with CSS custom properties.', readTime: '7 min', views: 298, featured: false, image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop' },
    { id: 'b6', title: 'Responsive Design Patterns', slug: 'responsive-patterns', status: 'draft', category: 'CSS', tags: ['responsive', 'mobile', 'design'], author: 'Tahsan', publishedAt: null, excerpt: 'Modern responsive design patterns that go beyond simple media queries.', readTime: '9 min', views: 0, featured: false, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop' },
    { id: 'b7', title: 'SVG Animation Techniques', slug: 'svg-animations', status: 'published', category: 'Animation', tags: ['svg', 'animation', 'css'], author: 'Tahsan', publishedAt: '2026-03-05', excerpt: 'Create stunning SVG animations using CSS and JavaScript for modern web experiences.', readTime: '11 min', views: 189, featured: false, image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=400&fit=crop' },
    { id: 'b8', title: 'The Art of CSS Variables', slug: 'css-variables', status: 'published', category: 'CSS', tags: ['css', 'variables', 'theming'], author: 'Tahsan', publishedAt: '2026-02-28', excerpt: 'How CSS custom properties revolutionize theming and dynamic styling.', readTime: '6 min', views: 276, featured: false, image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop' },
    { id: 'b9', title: 'REST API Best Practices', slug: 'rest-api-practices', status: 'scheduled', category: 'Backend', tags: ['api', 'rest', 'backend'], author: 'Tahsan', publishedAt: '2026-04-05', excerpt: 'Design RESTful APIs that developers love to use with these proven practices.', readTime: '8 min', views: 0, featured: false, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop' },
    { id: 'b10', title: 'Introduction to Web Components', slug: 'web-components', status: 'published', category: 'JavaScript', tags: ['web-components', 'custom-elements'], author: 'Tahsan', publishedAt: '2026-02-20', excerpt: 'Build reusable UI components with native Web Components API.', readTime: '9 min', views: 154, featured: false, image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop' }
  ],

  /* ---- Post Categories ---- */
  postCategories: ['CSS', 'JavaScript', 'Accessibility', 'Performance', 'Animation', 'Backend', 'Design', 'Tools'],

  /* ---- Media Library ---- */
  media: [
    { id: 'm1', name: 'hero-banner.jpg', type: 'image/jpeg', size: '2.4 MB', dimensions: '1920×1080', url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop', uploadedAt: '2026-03-25', alt: 'Hero banner', folder: 'banners' },
    { id: 'm2', name: 'profile-photo.jpg', type: 'image/jpeg', size: '845 KB', dimensions: '800×800', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', uploadedAt: '2026-03-20', alt: 'Profile photo', folder: 'avatars' },
    { id: 'm3', name: 'project-dashboard.png', type: 'image/png', size: '1.8 MB', dimensions: '1440×900', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', uploadedAt: '2026-03-18', alt: 'Dashboard project screenshot', folder: 'portfolio' },
    { id: 'm4', name: 'team-meeting.jpg', type: 'image/jpeg', size: '1.2 MB', dimensions: '1200×800', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', uploadedAt: '2026-03-15', alt: 'Team meeting photo', folder: 'about' },
    { id: 'm5', name: 'code-snippet.png', type: 'image/png', size: '560 KB', dimensions: '1024×576', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop', uploadedAt: '2026-03-12', alt: 'Code editor screenshot', folder: 'blog' },
    { id: 'm6', name: 'logo-dark.svg', type: 'image/svg+xml', size: '12 KB', dimensions: 'Vector', url: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&h=300&fit=crop', uploadedAt: '2026-03-10', alt: 'Dark logo', folder: 'brand' },
    { id: 'm7', name: 'logo-light.svg', type: 'image/svg+xml', size: '12 KB', dimensions: 'Vector', url: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=400&h=300&fit=crop', uploadedAt: '2026-03-10', alt: 'Light logo', folder: 'brand' },
    { id: 'm8', name: 'bg-pattern.png', type: 'image/png', size: '340 KB', dimensions: '1920×1920', url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop', uploadedAt: '2026-03-08', alt: 'Background pattern', folder: 'backgrounds' },
    { id: 'm9', name: 'service-web.jpg', type: 'image/jpeg', size: '1.5 MB', dimensions: '1200×800', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop', uploadedAt: '2026-03-05', alt: 'Web development service', folder: 'services' },
    { id: 'm10', name: 'service-design.jpg', type: 'image/jpeg', size: '1.3 MB', dimensions: '1200×800', url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', uploadedAt: '2026-03-05', alt: 'Design service', folder: 'services' },
    { id: 'm11', name: 'testimonial-1.jpg', type: 'image/jpeg', size: '420 KB', dimensions: '400×400', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop', uploadedAt: '2026-02-28', alt: 'Client testimonial photo', folder: 'testimonials' },
    { id: 'm12', name: 'favicon.ico', type: 'image/x-icon', size: '4 KB', dimensions: '32×32', url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop', uploadedAt: '2026-02-20', alt: 'Favicon', folder: 'brand' }
  ],

  mediaFolders: ['all', 'banners', 'avatars', 'portfolio', 'about', 'blog', 'brand', 'backgrounds', 'services', 'testimonials'],

  /* ---- Builder Sections (Drag & Drop blocks) ---- */
  builderSections: [
    { id: 'sec-hero', name: 'Hero Section', category: 'headers', icon: 'layout', description: 'Full-width hero with heading, text, and CTA buttons' },
    { id: 'sec-features', name: 'Features Grid', category: 'content', icon: 'grid', description: '3 or 4 column feature cards with icons' },
    { id: 'sec-text', name: 'Text Block', category: 'content', icon: 'type', description: 'Rich text content area with headings and paragraphs' },
    { id: 'sec-image', name: 'Image Block', category: 'media', icon: 'image', description: 'Single image with optional caption' },
    { id: 'sec-gallery', name: 'Image Gallery', category: 'media', icon: 'images', description: 'Grid gallery with lightbox support' },
    { id: 'sec-video', name: 'Video Embed', category: 'media', icon: 'play', description: 'YouTube or Vimeo video embed' },
    { id: 'sec-cta', name: 'Call to Action', category: 'conversion', icon: 'megaphone', description: 'CTA banner with heading and button' },
    { id: 'sec-testimonials', name: 'Testimonials', category: 'social-proof', icon: 'quote', description: 'Testimonial cards or carousel' },
    { id: 'sec-pricing', name: 'Pricing Table', category: 'conversion', icon: 'credit-card', description: '2-4 column pricing comparison' },
    { id: 'sec-faq', name: 'FAQ Accordion', category: 'content', icon: 'help-circle', description: 'Expandable FAQ section' },
    { id: 'sec-contact', name: 'Contact Form', category: 'forms', icon: 'mail', description: 'Contact form with name, email, message' },
    { id: 'sec-newsletter', name: 'Newsletter Signup', category: 'forms', icon: 'inbox', description: 'Email capture form' },
    { id: 'sec-stats', name: 'Statistics', category: 'content', icon: 'bar-chart', description: 'Animated stat counters' },
    { id: 'sec-team', name: 'Team Members', category: 'content', icon: 'users', description: 'Team member cards grid' },
    { id: 'sec-logo-cloud', name: 'Logo Cloud', category: 'social-proof', icon: 'star', description: 'Client/partner logo row' },
    { id: 'sec-divider', name: 'Divider', category: 'layout', icon: 'minus', description: 'Horizontal divider with optional text' },
    { id: 'sec-spacer', name: 'Spacer', category: 'layout', icon: 'maximize', description: 'Vertical space between sections' },
    { id: 'sec-columns', name: 'Columns', category: 'layout', icon: 'columns', description: '2, 3, or 4 column layout' },
    { id: 'sec-map', name: 'Map Embed', category: 'media', icon: 'map-pin', description: 'Google Maps embed' },
    { id: 'sec-footer', name: 'Footer', category: 'headers', icon: 'layout', description: 'Site footer with links and credits' }
  ],

  sectionCategories: ['all', 'headers', 'content', 'media', 'conversion', 'social-proof', 'forms', 'layout'],

  /* ---- Page Builder — Current Canvas State (Homepage) ---- */
  canvasSections: [
    { instanceId: 'i1', sectionId: 'sec-hero', label: 'Hero Section', props: { heading: 'Welcome to My Portfolio', subheading: 'I build beautiful web experiences', cta1: 'View Work', cta2: 'Contact Me', bgColor: '#6366F1' } },
    { instanceId: 'i2', sectionId: 'sec-features', label: 'Features Grid', props: { columns: 3, items: [{ icon: 'code', title: 'Web Development', text: 'Modern, responsive websites' }, { icon: 'palette', title: 'UI/UX Design', text: 'Intuitive user experiences' }, { icon: 'rocket', title: 'Performance', text: 'Lightning-fast load times' }] } },
    { instanceId: 'i3', sectionId: 'sec-text', label: 'About Section', props: { heading: 'About Me', body: 'I am a passionate developer with 5+ years of experience in building web applications. I specialize in front-end development with modern CSS and JavaScript.' } },
    { instanceId: 'i4', sectionId: 'sec-gallery', label: 'Portfolio Gallery', props: { columns: 3, images: ['m3', 'm9', 'm10'] } },
    { instanceId: 'i5', sectionId: 'sec-testimonials', label: 'Testimonials', props: { items: [{ name: 'Sarah K.', role: 'CEO, TechStart', text: 'Tahsan delivered an exceptional website that exceeded our expectations.', avatar: 'SK' }, { name: 'Rafiq A.', role: 'Founder, DesignHub', text: 'Working with SiteCraft was a breeze. Highly recommended!', avatar: 'RA' }] } },
    { instanceId: 'i6', sectionId: 'sec-cta', label: 'Footer CTA', props: { heading: 'Ready to Start Your Project?', text: 'Let\'s build something amazing together.', buttonText: 'Get in Touch', buttonLink: '/contact' } }
  ],

  /* ---- SEO Data ---- */
  seoPages: [
    { pageId: 'p1', title: 'Tahsan Islam — Portfolio & Web Developer', metaDescription: 'Welcome to my portfolio. I build beautiful, performant websites and web applications.', ogTitle: 'Tahsan Islam — Web Developer', ogDescription: 'View my work and hire me for your next project.', ogImage: 'm1', canonical: 'https://www.tahsan.dev/', indexable: true, score: 92 },
    { pageId: 'p2', title: 'About — Tahsan Islam', metaDescription: 'Learn about my journey, skills, and passion for web development.', ogTitle: 'About Tahsan Islam', ogDescription: 'Developer, designer, and problem solver.', ogImage: 'm4', canonical: 'https://www.tahsan.dev/about', indexable: true, score: 85 },
    { pageId: 'p3', title: 'Portfolio — Recent Projects', metaDescription: 'Browse my recent web development projects and case studies.', ogTitle: 'Portfolio — Tahsan Islam', ogDescription: 'See what I have built.', ogImage: 'm3', canonical: 'https://www.tahsan.dev/portfolio', indexable: true, score: 78 },
    { pageId: 'p4', title: 'Services — Web Development & Design', metaDescription: 'Professional web development, UI/UX design, and optimization services.', ogTitle: 'Services — Tahsan Islam', ogDescription: 'Let me help you build your next website.', ogImage: 'm9', canonical: 'https://www.tahsan.dev/services', indexable: true, score: 88 },
    { pageId: 'p5', title: 'Blog — Web Development Articles', metaDescription: 'Read my articles about CSS, JavaScript, accessibility, and modern web development.', ogTitle: 'Blog — Tahsan Islam', ogDescription: 'Web development tips and tutorials.', ogImage: 'm5', canonical: 'https://www.tahsan.dev/blog', indexable: true, score: 80 },
    { pageId: 'p6', title: 'Contact — Get in Touch', metaDescription: 'Have a project in mind? Get in touch and let\'s discuss how I can help.', ogTitle: 'Contact — Tahsan Islam', ogDescription: 'Reach out for collaborations.', ogImage: '', canonical: 'https://www.tahsan.dev/contact', indexable: true, score: 72 },
    { pageId: 'p7', title: 'Pricing — My Rates', metaDescription: '', ogTitle: '', ogDescription: '', ogImage: '', canonical: '', indexable: false, score: 35 }
  ],

  /* ---- SEO Checklist ---- */
  seoChecklist: [
    { id: 'sc1', check: 'Meta title is set (50-60 chars)', passed: true },
    { id: 'sc2', check: 'Meta description is set (150-160 chars)', passed: true },
    { id: 'sc3', check: 'Open Graph title is set', passed: true },
    { id: 'sc4', check: 'Open Graph image is set', passed: true },
    { id: 'sc5', check: 'Canonical URL is defined', passed: true },
    { id: 'sc6', check: 'All images have alt text', passed: false },
    { id: 'sc7', check: 'Only one H1 per page', passed: true },
    { id: 'sc8', check: 'No broken internal links', passed: true },
    { id: 'sc9', check: 'Page is mobile-friendly', passed: true },
    { id: 'sc10', check: 'Page load time < 3s', passed: true }
  ],

  /* ---- Templates ---- */
  templates: [
    { id: 't1', name: 'Starter Landing', category: 'landing', description: 'Clean landing page with hero, features, CTA', sections: 5, preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop', popular: true },
    { id: 't2', name: 'Portfolio Minimal', category: 'portfolio', description: 'Minimalist portfolio with project grid', sections: 4, preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop', popular: true },
    { id: 't3', name: 'Blog Standard', category: 'blog', description: 'Blog layout with sidebar and post cards', sections: 3, preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop', popular: false },
    { id: 't4', name: 'Business Pro', category: 'business', description: 'Professional business site with services', sections: 6, preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop', popular: true },
    { id: 't5', name: 'Contact Simple', category: 'contact', description: 'Simple contact page with form and map', sections: 3, preview: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=250&fit=crop', popular: false },
    { id: 't6', name: 'Pricing Compare', category: 'pricing', description: 'Pricing table with feature comparison', sections: 4, preview: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop', popular: false },
    { id: 't7', name: 'FAQ Page', category: 'support', description: 'FAQ page with accordion sections', sections: 2, preview: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop', popular: false },
    { id: 't8', name: 'Legal Page', category: 'legal', description: 'Clean layout for privacy policy or terms', sections: 1, preview: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop', popular: false }
  ],

  templateCategories: ['all', 'landing', 'portfolio', 'blog', 'business', 'contact', 'pricing', 'support', 'legal'],

  /* ---- Theme Editor Defaults ---- */
  themeSettings: {
    colors: {
      primary: '#6366F1',
      secondary: '#EC4899',
      accent: '#F59E0B',
      background: '#FFFFFF',
      surface: '#F4F4F5',
      text: '#18181B',
      textMuted: '#71717A',
      border: '#E4E4E7',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      baseSize: 16,
      headingWeight: 700,
      bodyWeight: 400,
      lineHeight: 1.6
    },
    spacing: {
      sectionPadding: 80,
      containerWidth: 1200,
      borderRadius: 8,
      cardPadding: 24,
      buttonPadding: '12px 24px'
    },
    presets: [
      { name: 'Default', primary: '#6366F1', secondary: '#EC4899', bg: '#FFFFFF' },
      { name: 'Ocean', primary: '#0EA5E9', secondary: '#06B6D4', bg: '#F0F9FF' },
      { name: 'Forest', primary: '#16A34A', secondary: '#65A30D', bg: '#F0FDF4' },
      { name: 'Sunset', primary: '#F97316', secondary: '#EF4444', bg: '#FFFBEB' },
      { name: 'Midnight', primary: '#8B5CF6', secondary: '#6366F1', bg: '#0F172A' },
      { name: 'Coral', primary: '#F43F5E', secondary: '#FB7185', bg: '#FFF1F2' }
    ]
  },

  /* ---- Site Settings ---- */
  siteSettings: {
    general: {
      siteName: 'MyPortfolio',
      tagline: 'Web Developer & Designer',
      siteUrl: 'https://www.tahsan.dev',
      language: 'en',
      timezone: 'Asia/Dhaka',
      dateFormat: 'MMM DD, YYYY'
    },
    domain: {
      current: 'myportfolio.sitecraft.io',
      custom: 'www.tahsan.dev',
      ssl: true,
      status: 'connected'
    },
    analytics: {
      enabled: true,
      trackingId: 'SC-00142',
      cookieConsent: true
    },
    customCode: {
      headCode: '<!-- Google Analytics -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>',
      bodyStartCode: '',
      bodyEndCode: '<!-- Custom tracking pixel -->\n<img src="https://pixel.example.com/track" style="display:none" alt="">'
    }
  },

  /* ---- Navigation Menu ---- */
  navMenuItems: [
    { id: 'n1', label: 'Home', link: '/', order: 1, children: [] },
    { id: 'n2', label: 'About', link: '/about', order: 2, children: [] },
    { id: 'n3', label: 'Services', link: '/services', order: 3, children: [
      { id: 'n3a', label: 'Web Development', link: '/services#web' },
      { id: 'n3b', label: 'UI/UX Design', link: '/services#design' },
      { id: 'n3c', label: 'Consulting', link: '/services#consulting' }
    ]},
    { id: 'n4', label: 'Portfolio', link: '/portfolio', order: 4, children: [] },
    { id: 'n5', label: 'Blog', link: '/blog', order: 5, children: [] },
    { id: 'n6', label: 'Contact', link: '/contact', order: 6, children: [] }
  ]
};
