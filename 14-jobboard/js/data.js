const JB = {
  site: {
    name: 'JobConnect BD',
    tagline: 'Find Your Dream Career',
    description: 'Bangladesh\'s premier job board connecting talent with opportunity.',
    location: 'Dhaka, Bangladesh',
    phone: '+880 1234-567890',
    email: 'info@jobconnect.bd'
  },

  currentUser: {
    id: 'u1',
    name: 'Tahsan Islam',
    email: 'tahsan@jobconnect.bd',
    phone: '+880 1712-345678',
    location: 'Dhaka, Bangladesh',
    bio: 'Passionate frontend developer with 4+ years of experience building modern web applications. Skilled in React, TypeScript, and UI/UX design.',
    avatar: 'https://ui-avatars.com/api/?name=Tahsan+Islam&background=2563EB&color=fff&size=128',
    role: 'candidate',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Node.js', 'Figma', 'Git', 'REST API'],
    experience: [
      { title: 'Frontend Developer', company: 'WebCraft BD', duration: '2022 - Present', description: 'Building responsive web apps with React and TypeScript.' },
      { title: 'Junior Developer', company: 'PixelLab', duration: '2020 - 2022', description: 'Developed landing pages and e-commerce frontends.' }
    ],
    education: [
      { degree: 'BSc Computer Science', institution: 'BUET', year: '2020' }
    ],
    profileCompletion: 80,
    incompleteItems: ['Add portfolio URL', 'Upload resume'],
    profileViews: 45,
    joinDate: '2024-06-15'
  },

  employer: {
    id: 'emp1',
    name: 'TechCorp Bangladesh',
    companyId: 'c1',
    email: 'hr@techcorp.com.bd'
  },

  stats: { jobs: 5200, companies: 820, hiring: 215, satisfaction: 95 },

  popularSearches: ['Frontend Developer', 'UI Designer', 'Marketing Manager', 'Data Analyst', 'DevOps Engineer', 'Product Manager'],

  categories: [
    { id: 'cat1', name: 'Technology', icon: '💻', count: 1240 },
    { id: 'cat2', name: 'Finance', icon: '📊', count: 680 },
    { id: 'cat3', name: 'Design', icon: '🎨', count: 420 },
    { id: 'cat4', name: 'Marketing', icon: '📈', count: 530 },
    { id: 'cat5', name: 'Engineering', icon: '🏗️', count: 310 },
    { id: 'cat6', name: 'Administration', icon: '📋', count: 290 },
    { id: 'cat7', name: 'Education', icon: '🎓', count: 180 },
    { id: 'cat8', name: 'Healthcare', icon: '🏥', count: 260 }
  ],

  companies: [
    {
      id: 'c1', name: 'TechCorp Bangladesh', industry: 'Technology', location: 'Dhaka',
      logo: 'https://ui-avatars.com/api/?name=TC&background=2563EB&color=fff&size=64',
      employees: '500+', founded: 2015, website: 'www.techcorp.com.bd',
      rating: 4.5, reviewCount: 42,
      description: 'TechCorp Bangladesh is a leading software development company specializing in enterprise solutions, cloud computing, and AI-driven products. We serve clients across South Asia and beyond with cutting-edge technology.',
      mission: 'To make world-class technology accessible to businesses in Bangladesh and Southeast Asia.',
      techStack: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
      benefits: ['🏥 Health Insurance', '🏠 Remote-friendly', '📚 Learning Budget', '🎉 Festival Bonus', '🏋️ Gym Membership', '🚗 Transport Allowance'],
      openJobs: 12,
      ratingBreakdown: { culture: 4.6, salary: 4.2, workLife: 4.4, growth: 4.7 }
    },
    {
      id: 'c2', name: 'FinServ Limited', industry: 'Finance', location: 'Dhaka',
      logo: 'https://ui-avatars.com/api/?name=FS&background=7C3AED&color=fff&size=64',
      employees: '200+', founded: 2018, website: 'www.finserv.com.bd',
      rating: 4.3, reviewCount: 28,
      description: 'FinServ is a fintech company building the next generation of digital payment and banking solutions for Bangladesh.',
      mission: 'Democratizing financial services through technology.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Kubernetes'],
      benefits: ['🏥 Health Insurance', '💰 Performance Bonus', '📚 Training Programs', '🎉 Festival Bonus'],
      openJobs: 8,
      ratingBreakdown: { culture: 4.1, salary: 4.5, workLife: 4.0, growth: 4.4 }
    },
    {
      id: 'c3', name: 'DataInc Analytics', industry: 'Technology', location: 'Chittagong',
      logo: 'https://ui-avatars.com/api/?name=DI&background=16A34A&color=fff&size=64',
      employees: '100+', founded: 2019, website: 'www.datainc.com.bd',
      rating: 4.6, reviewCount: 19,
      description: 'DataInc is a data analytics firm helping businesses make data-driven decisions with advanced analytics and machine learning solutions.',
      mission: 'Turning data into actionable insights for every business.',
      techStack: ['Python', 'TensorFlow', 'Spark', 'AWS', 'Tableau'],
      benefits: ['🏥 Health Insurance', '🏠 Remote-friendly', '📚 Conference Budget', '🎉 Festival Bonus', '🍱 Free Lunch'],
      openJobs: 5,
      ratingBreakdown: { culture: 4.8, salary: 4.3, workLife: 4.7, growth: 4.5 }
    },
    {
      id: 'c4', name: 'CloudBD Solutions', industry: 'Technology', location: 'Dhaka',
      logo: 'https://ui-avatars.com/api/?name=CB&background=0891B2&color=fff&size=64',
      employees: '300+', founded: 2016, website: 'www.cloudbd.com',
      rating: 4.4, reviewCount: 35,
      description: 'CloudBD is a leading cloud infrastructure and DevOps consulting firm helping businesses migrate and scale in the cloud.',
      mission: 'Empowering businesses with scalable cloud solutions.',
      techStack: ['AWS', 'Azure', 'Terraform', 'Go', 'Docker', 'Kubernetes'],
      benefits: ['🏥 Health Insurance', '🏠 Fully Remote', '📚 Learning Budget', '💻 Equipment Allowance', '🎉 Festival Bonus'],
      openJobs: 15,
      ratingBreakdown: { culture: 4.5, salary: 4.3, workLife: 4.6, growth: 4.2 }
    },
    {
      id: 'c5', name: 'DesignHub BD', industry: 'Design', location: 'Dhaka',
      logo: 'https://ui-avatars.com/api/?name=DH&background=D97706&color=fff&size=64',
      employees: '50+', founded: 2020, website: 'www.designhub.com.bd',
      rating: 4.7, reviewCount: 15,
      description: 'DesignHub is a creative agency specializing in UI/UX design, branding, and digital product design for startups and enterprises.',
      mission: 'Creating beautiful, functional designs that users love.',
      techStack: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'CSS', 'React'],
      benefits: ['🏠 Remote-friendly', '🎨 Creative Freedom', '📚 Workshop Budget', '🎉 Festival Bonus', '☕ Unlimited Snacks'],
      openJobs: 4,
      ratingBreakdown: { culture: 4.9, salary: 4.0, workLife: 4.8, growth: 4.5 }
    },
    {
      id: 'c6', name: 'AppLab Technologies', industry: 'Technology', location: 'Sylhet',
      logo: 'https://ui-avatars.com/api/?name=AL&background=DC2626&color=fff&size=64',
      employees: '80+', founded: 2017, website: 'www.applab.com.bd',
      rating: 4.2, reviewCount: 22,
      description: 'AppLab builds mobile and web applications for clients worldwide, specializing in React Native and Flutter development.',
      mission: 'Building apps that solve real-world problems.',
      techStack: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'MongoDB'],
      benefits: ['🏥 Health Insurance', '📚 Training Budget', '🎉 Festival Bonus', '🎮 Game Room'],
      openJobs: 7,
      ratingBreakdown: { culture: 4.3, salary: 3.9, workLife: 4.2, growth: 4.4 }
    }
  ],

  jobs: [
    {
      id: 'j1', companyId: 'c1', title: 'Senior Frontend Developer', category: 'Technology',
      location: 'Dhaka', type: 'Full-time', level: 'Senior', experience: '5+ years',
      salaryMin: 80000, salaryMax: 120000, vacancies: 2, deadline: '2026-02-15',
      posted: '2026-01-10', featured: true,
      skills: ['React', 'TypeScript', 'Node.js', 'CSS', 'REST API'],
      description: 'We are looking for an experienced Senior Frontend Developer to join our product team. You will lead the development of our flagship SaaS platform, mentor junior developers, and drive technical decisions for the frontend architecture.',
      requirements: ['5+ years of experience with React and modern JavaScript', 'Strong TypeScript proficiency', 'Experience with state management (Redux, Zustand)', 'Knowledge of RESTful API design', 'Experience with CI/CD pipelines', 'Excellent communication skills'],
      benefits: ['Competitive salary with annual review', 'Health insurance for family', 'Remote-friendly work policy', 'Learning and conference budget', 'Festival bonus (2x)', 'Transport allowance']
    },
    {
      id: 'j2', companyId: 'c5', title: 'UI/UX Designer', category: 'Design',
      location: 'Remote', type: 'Full-time', level: 'Mid', experience: '3+ years',
      salaryMin: 60000, salaryMax: 90000, vacancies: 1, deadline: '2026-02-20',
      posted: '2026-01-11', featured: true,
      skills: ['Figma', 'Adobe XD', 'CSS', 'Prototyping', 'User Research'],
      description: 'Join DesignHub as a UI/UX Designer and create beautiful, user-centered designs for our clients. You will work on diverse projects from mobile apps to enterprise dashboards.',
      requirements: ['3+ years of UI/UX design experience', 'Expert in Figma and prototyping tools', 'Strong portfolio showcasing web and mobile designs', 'Understanding of design systems and component libraries', 'Knowledge of front-end CSS basics'],
      benefits: ['Fully remote work', 'Creative freedom and ownership', 'Workshop and training budget', 'Festival bonus', 'Flexible hours']
    },
    {
      id: 'j3', companyId: 'c3', title: 'Data Analyst', category: 'Technology',
      location: 'Chittagong', type: 'Full-time', level: 'Mid', experience: '2+ years',
      salaryMin: 50000, salaryMax: 70000, vacancies: 2, deadline: '2026-02-28',
      posted: '2026-01-09', featured: true,
      skills: ['Python', 'SQL', 'Tableau', 'Excel', 'Statistics'],
      description: 'DataInc is seeking a Data Analyst to transform raw data into meaningful business insights. You will build dashboards, automate reports, and collaborate with cross-functional teams.',
      requirements: ['2+ years experience in data analysis', 'Proficiency in Python and SQL', 'Experience with Tableau or Power BI', 'Strong analytical and problem-solving skills', 'BSc in CS, Statistics, or related field'],
      benefits: ['Health insurance', 'Remote work options', 'Conference participation', 'Festival bonus', 'Free lunch provided']
    },
    {
      id: 'j4', companyId: 'c4', title: 'DevOps Engineer', category: 'Technology',
      location: 'Dhaka', type: 'Full-time', level: 'Senior', experience: '4+ years',
      salaryMin: 90000, salaryMax: 130000, vacancies: 1, deadline: '2026-03-01',
      posted: '2026-01-08', featured: true,
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      description: 'CloudBD is looking for a Senior DevOps Engineer to design, build, and maintain our cloud infrastructure. You will work with multiple client environments and implement best practices for scalability and reliability.',
      requirements: ['4+ years DevOps experience', 'Expert in AWS services (EC2, ECS, Lambda, RDS)', 'Strong Docker and Kubernetes skills', 'Experience with Infrastructure as Code (Terraform)', 'Knowledge of monitoring tools (Grafana, Prometheus)'],
      benefits: ['Top-tier salary', 'Fully remote option', 'Equipment allowance', 'Learning budget', 'Festival bonus (2x)']
    },
    {
      id: 'j5', companyId: 'c2', title: 'Product Designer', category: 'Design',
      location: 'Dhaka', type: 'Full-time', level: 'Mid', experience: '3+ years',
      salaryMin: 55000, salaryMax: 85000, vacancies: 1, deadline: '2026-02-25',
      posted: '2026-01-12', featured: false,
      skills: ['Figma', 'User Research', 'Wireframing', 'Design Systems'],
      description: 'FinServ is looking for a Product Designer to shape the user experience of our fintech products. You will conduct user research, create prototypes, and collaborate closely with engineers.',
      requirements: ['3+ years product design experience', 'Strong Figma skills', 'Experience with user research methods', 'Understanding of fintech or banking UX', 'Portfolio with case studies'],
      benefits: ['Health insurance', 'Performance bonus', 'Training programs', 'Festival bonus']
    },
    {
      id: 'j6', companyId: 'c1', title: 'Backend Developer (Node.js)', category: 'Technology',
      location: 'Dhaka', type: 'Full-time', level: 'Mid', experience: '3+ years',
      salaryMin: 70000, salaryMax: 100000, vacancies: 2, deadline: '2026-02-18',
      posted: '2026-01-07', featured: false,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'Docker'],
      description: 'TechCorp is expanding its backend team. You will build scalable APIs, optimize database performance, and contribute to our microservices architecture.',
      requirements: ['3+ years Node.js backend experience', 'Strong PostgreSQL or MySQL skills', 'Experience with REST and GraphQL APIs', 'Knowledge of Docker and containerization', 'Understanding of microservices patterns'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote-friendly', 'Learning budget', 'Festival bonus']
    },
    {
      id: 'j7', companyId: 'c6', title: 'Mobile App Developer', category: 'Technology',
      location: 'Sylhet', type: 'Full-time', level: 'Mid', experience: '2+ years',
      salaryMin: 55000, salaryMax: 80000, vacancies: 1, deadline: '2026-02-22',
      posted: '2026-01-06', featured: false,
      skills: ['React Native', 'JavaScript', 'Firebase', 'REST API', 'Git'],
      description: 'AppLab is looking for a React Native developer to build cross-platform mobile apps for our international clients.',
      requirements: ['2+ years React Native experience', 'Published apps on App Store or Play Store', 'Experience with Firebase or similar BaaS', 'Understanding of mobile UX patterns', 'Git proficiency'],
      benefits: ['Health insurance', 'Training budget', 'Festival bonus', 'Game room access']
    },
    {
      id: 'j8', companyId: 'c4', title: 'Cloud Solutions Architect', category: 'Technology',
      location: 'Remote', type: 'Full-time', level: 'Lead', experience: '7+ years',
      salaryMin: 130000, salaryMax: 180000, vacancies: 1, deadline: '2026-03-10',
      posted: '2026-01-05', featured: false,
      skills: ['AWS', 'Azure', 'System Design', 'Terraform', 'Security'],
      description: 'Lead cloud architecture design for enterprise clients. You will create scalable, secure, and cost-optimized solutions on major cloud platforms.',
      requirements: ['7+ years in cloud engineering', 'AWS Solutions Architect certification', 'Experience with multi-cloud environments', 'Strong system design skills', 'Client-facing communication skills'],
      benefits: ['Premium salary', 'Fully remote', 'Equipment allowance', 'Conference travel budget', 'Festival bonus']
    },
    {
      id: 'j9', companyId: 'c2', title: 'Financial Analyst', category: 'Finance',
      location: 'Dhaka', type: 'Full-time', level: 'Entry', experience: '0-2 years',
      salaryMin: 35000, salaryMax: 50000, vacancies: 3, deadline: '2026-02-28',
      posted: '2026-01-13', featured: false,
      skills: ['Excel', 'Financial Modeling', 'SQL', 'Power BI'],
      description: 'Join FinServ as a Financial Analyst and help analyze market trends, build financial models, and support strategic decision-making.',
      requirements: ['BBA/MBA in Finance or Accounting', 'Strong Excel and financial modeling skills', 'Basic SQL knowledge', 'Analytical mindset', 'Good communication skills'],
      benefits: ['Health insurance', 'Training programs', 'Performance bonus', 'Festival bonus']
    },
    {
      id: 'j10', companyId: 'c1', title: 'QA Engineer', category: 'Technology',
      location: 'Dhaka', type: 'Full-time', level: 'Mid', experience: '2+ years',
      salaryMin: 50000, salaryMax: 75000, vacancies: 1, deadline: '2026-02-20',
      posted: '2026-01-04', featured: false,
      skills: ['Selenium', 'Cypress', 'Jest', 'API Testing', 'Agile'],
      description: 'TechCorp needs a QA Engineer to ensure product quality through automated and manual testing strategies.',
      requirements: ['2+ years QA experience', 'Proficiency in Selenium or Cypress', 'API testing with Postman or similar', 'Understanding of Agile/Scrum', 'Attention to detail'],
      benefits: ['Health insurance', 'Remote-friendly', 'Learning budget', 'Festival bonus']
    },
    {
      id: 'j11', companyId: 'c5', title: 'Graphic Designer', category: 'Design',
      location: 'Dhaka', type: 'Part-time', level: 'Entry', experience: '1+ years',
      salaryMin: 20000, salaryMax: 35000, vacancies: 2, deadline: '2026-02-15',
      posted: '2026-01-14', featured: false,
      skills: ['Photoshop', 'Illustrator', 'Canva', 'Branding'],
      description: 'DesignHub is seeking a part-time Graphic Designer for social media content, marketing collateral, and brand identity projects.',
      requirements: ['1+ years graphic design experience', 'Proficiency in Adobe Creative Suite', 'Strong sense of typography and color', 'Portfolio showcasing diverse work'],
      benefits: ['Flexible hours', 'Creative freedom', 'Festival bonus']
    },
    {
      id: 'j12', companyId: 'c3', title: 'Machine Learning Engineer', category: 'Technology',
      location: 'Chittagong', type: 'Full-time', level: 'Senior', experience: '4+ years',
      salaryMin: 100000, salaryMax: 150000, vacancies: 1, deadline: '2026-03-05',
      posted: '2026-01-03', featured: false,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      description: 'DataInc is looking for an ML Engineer to build and deploy machine learning models for production systems.',
      requirements: ['4+ years ML engineering experience', 'Strong Python and ML framework skills', 'Experience deploying models at scale', 'Knowledge of NLP or Computer Vision', 'MSc/PhD preferred'],
      benefits: ['Health insurance', 'Remote options', 'Conference budget', 'Festival bonus', 'Free lunch']
    },
    {
      id: 'j13', companyId: 'c4', title: 'Technical Writer', category: 'Technology',
      location: 'Remote', type: 'Contract', level: 'Mid', experience: '2+ years',
      salaryMin: 40000, salaryMax: 60000, vacancies: 1, deadline: '2026-02-10',
      posted: '2026-01-02', featured: false,
      skills: ['Technical Writing', 'API Documentation', 'Markdown', 'Git'],
      description: 'CloudBD needs a Technical Writer to create and maintain documentation for our cloud products and APIs.',
      requirements: ['2+ years technical writing experience', 'Ability to explain complex concepts clearly', 'Experience with API documentation', 'Familiarity with Git and Markdown'],
      benefits: ['Fully remote', 'Flexible schedule', 'Equipment allowance']
    },
    {
      id: 'j14', companyId: 'c6', title: 'Flutter Developer', category: 'Technology',
      location: 'Sylhet', type: 'Full-time', level: 'Entry', experience: '1+ years',
      salaryMin: 35000, salaryMax: 55000, vacancies: 2, deadline: '2026-02-28',
      posted: '2026-01-15', featured: false,
      skills: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Git'],
      description: 'AppLab is hiring Flutter developers to build beautiful cross-platform apps. Great opportunity for junior developers to grow.',
      requirements: ['1+ years Flutter experience', 'Understanding of Dart language', 'Basic Firebase knowledge', 'Published at least 1 app', 'Eager to learn'],
      benefits: ['Health insurance', 'Training budget', 'Mentorship', 'Festival bonus']
    },
    {
      id: 'j15', companyId: 'c1', title: 'Marketing Manager', category: 'Marketing',
      location: 'Dhaka', type: 'Full-time', level: 'Senior', experience: '5+ years',
      salaryMin: 75000, salaryMax: 110000, vacancies: 1, deadline: '2026-02-18',
      posted: '2026-01-01', featured: false,
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics', 'Team Leadership'],
      description: 'TechCorp is looking for a Marketing Manager to lead our digital marketing efforts, grow brand awareness, and drive lead generation.',
      requirements: ['5+ years in digital marketing', 'Experience with SEO and SEM', 'Strong content strategy skills', 'Data-driven approach with analytics', 'Team management experience'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote-friendly', 'Festival bonus']
    },
    {
      id: 'j16', companyId: 'c2', title: 'Compliance Officer', category: 'Finance',
      location: 'Dhaka', type: 'Full-time', level: 'Mid', experience: '3+ years',
      salaryMin: 60000, salaryMax: 85000, vacancies: 1, deadline: '2026-02-25',
      posted: '2026-01-11', featured: false,
      skills: ['Regulatory Compliance', 'Risk Assessment', 'AML/KYC', 'Banking Regulations'],
      description: 'FinServ needs a Compliance Officer to ensure our fintech products adhere to Bangladesh Bank regulations and international standards.',
      requirements: ['3+ years compliance experience in fintech or banking', 'Knowledge of AML/KYC regulations', 'Understanding of Bangladesh Bank guidelines', 'Strong analytical skills'],
      benefits: ['Health insurance', 'Performance bonus', 'Festival bonus']
    },
    {
      id: 'j17', companyId: 'c5', title: 'Frontend Developer Intern', category: 'Technology',
      location: 'Dhaka', type: 'Internship', level: 'Entry', experience: '0 years',
      salaryMin: 10000, salaryMax: 15000, vacancies: 3, deadline: '2026-03-15',
      posted: '2026-01-15', featured: false,
      skills: ['HTML', 'CSS', 'JavaScript', 'React Basics'],
      description: 'DesignHub is offering a 3-month paid internship for aspiring frontend developers. Learn from senior designers and developers in a creative environment.',
      requirements: ['Currently studying CS or related field', 'Basic HTML/CSS/JS knowledge', 'Interest in UI development', 'Portfolio or GitHub profile preferred'],
      benefits: ['Paid internship', 'Mentorship', 'Certificate', 'Potential full-time offer']
    },
    {
      id: 'j18', companyId: 'c3', title: 'Business Analyst', category: 'Finance',
      location: 'Chittagong', type: 'Full-time', level: 'Mid', experience: '3+ years',
      salaryMin: 55000, salaryMax: 80000, vacancies: 1, deadline: '2026-02-20',
      posted: '2026-01-10', featured: false,
      skills: ['Business Analysis', 'SQL', 'Jira', 'Requirements Gathering', 'Agile'],
      description: 'DataInc seeks a Business Analyst to bridge the gap between clients and technical teams, gathering requirements and translating them into actionable specifications.',
      requirements: ['3+ years BA experience', 'Strong SQL skills', 'Experience with Agile/Scrum', 'Excellent communication skills', 'Understanding of data analytics domain preferred'],
      benefits: ['Health insurance', 'Remote options', 'Festival bonus', 'Free lunch']
    }
  ],

  applications: [
    { id: 'app1', jobId: 'j1', companyId: 'c1', status: 'interview', appliedDate: '2026-01-12', notes: 'Technical interview scheduled for Jan 25' },
    { id: 'app2', jobId: 'j2', companyId: 'c5', status: 'screening', appliedDate: '2026-01-13', notes: 'Portfolio under review' },
    { id: 'app3', jobId: 'j3', companyId: 'c3', status: 'applied', appliedDate: '2026-01-14', notes: '' },
    { id: 'app4', jobId: 'j6', companyId: 'c1', status: 'offer', appliedDate: '2026-01-05', notes: 'Offer letter received! ৳85,000/mo' },
    { id: 'app5', jobId: 'j9', companyId: 'c2', status: 'rejected', appliedDate: '2025-12-20', notes: 'Position filled' },
    { id: 'app6', jobId: 'j5', companyId: 'c2', status: 'applied', appliedDate: '2026-01-14', notes: '' },
    { id: 'app7', jobId: 'j7', companyId: 'c6', status: 'screening', appliedDate: '2026-01-11', notes: 'Skills assessment sent' },
    { id: 'app8', jobId: 'j10', companyId: 'c1', status: 'interview', appliedDate: '2026-01-08', notes: 'HR round completed' },
    { id: 'app9', jobId: 'j4', companyId: 'c4', status: 'applied', appliedDate: '2026-01-15', notes: '' },
    { id: 'app10', jobId: 'j15', companyId: 'c1', status: 'rejected', appliedDate: '2025-12-28', notes: 'Not shortlisted' },
    { id: 'app11', jobId: 'j12', companyId: 'c3', status: 'screening', appliedDate: '2026-01-09', notes: 'Review in progress' },
    { id: 'app12', jobId: 'j8', companyId: 'c4', status: 'interview', appliedDate: '2026-01-03', notes: 'System design round on Jan 22' }
  ],

  savedJobs: ['j4', 'j8', 'j12', 'j13', 'j14', 'j17', 'j18', 'j5'],

  companyReviews: {
    c1: [
      { id: 'r1', role: 'Frontend Developer', date: '2025-12-15', rating: 5, pros: 'Great tech stack, supportive team, excellent learning opportunities. Management truly cares about employee growth.', cons: 'Can be fast-paced during release cycles.', metrics: { culture: 5, salary: 4, workLife: 4, growth: 5 } },
      { id: 'r2', role: 'Backend Developer', date: '2025-11-20', rating: 4, pros: 'Modern tech, good salary, flexible work hours. The remote policy is genuinely supportive.', cons: 'Office space could be bigger. Sometimes meetings run long.', metrics: { culture: 4, salary: 5, workLife: 4, growth: 4 } },
      { id: 'r3', role: 'QA Engineer', date: '2025-10-05', rating: 4, pros: 'Good processes, friendly colleagues, festival bonuses are generous.', cons: 'Testing infrastructure could be improved.', metrics: { culture: 5, salary: 4, workLife: 5, growth: 4 } }
    ],
    c2: [
      { id: 'r4', role: 'Product Manager', date: '2025-12-01', rating: 4, pros: 'Exciting fintech products, competitive pay, great performance bonuses.', cons: 'Long working hours during product launches.', metrics: { culture: 4, salary: 5, workLife: 3, growth: 4 } },
      { id: 'r5', role: 'Java Developer', date: '2025-11-10', rating: 4, pros: 'Strong engineering culture, interesting problems to solve.', cons: 'Legacy code in some projects.', metrics: { culture: 4, salary: 4, workLife: 4, growth: 5 } }
    ],
    c3: [
      { id: 'r6', role: 'Data Scientist', date: '2025-12-20', rating: 5, pros: 'Incredible learning environment, cutting-edge ML projects, supportive leadership.', cons: 'Chittagong location limits social life options.', metrics: { culture: 5, salary: 4, workLife: 5, growth: 5 } }
    ],
    c4: [
      { id: 'r7', role: 'DevOps Engineer', date: '2025-11-25', rating: 4, pros: 'Fully remote, great tools, interesting multi-cloud projects.', cons: 'Can feel isolated working remotely. Time zone differences with some clients.', metrics: { culture: 4, salary: 4, workLife: 5, growth: 4 } },
      { id: 'r8', role: 'Solutions Architect', date: '2025-10-15', rating: 5, pros: 'Top-tier compensation, equipment allowance, challenging architecture problems.', cons: 'Client management can be stressful.', metrics: { culture: 5, salary: 5, workLife: 4, growth: 5 } }
    ],
    c5: [
      { id: 'r9', role: 'UI Designer', date: '2025-12-10', rating: 5, pros: 'Most creative workplace I\'ve experienced. Real design freedom and amazing team culture.', cons: 'Salary could be higher compared to tech companies.', metrics: { culture: 5, salary: 4, workLife: 5, growth: 5 } }
    ],
    c6: [
      { id: 'r10', role: 'Mobile Developer', date: '2025-11-30', rating: 4, pros: 'Good for learning mobile development, fun team, flexible hours.', cons: 'Benefits package is basic compared to bigger companies.', metrics: { culture: 4, salary: 3, workLife: 4, growth: 4 } }
    ]
  },

  salaryData: {
    roles: [
      { id: 'sr1', title: 'Frontend Developer', avg: 85000, min: 40000, max: 150000, byExperience: { entry: 40000, mid: 70000, senior: 110000, lead: 140000 }, trend: [72000, 74000, 75000, 77000, 78000, 80000, 81000, 82000, 83000, 84000, 85000, 85000] },
      { id: 'sr2', title: 'Backend Developer', avg: 90000, min: 45000, max: 160000, byExperience: { entry: 45000, mid: 75000, senior: 115000, lead: 150000 }, trend: [78000, 79000, 80000, 82000, 83000, 85000, 86000, 87000, 88000, 89000, 90000, 90000] },
      { id: 'sr3', title: 'UI/UX Designer', avg: 65000, min: 30000, max: 120000, byExperience: { entry: 30000, mid: 55000, senior: 85000, lead: 110000 }, trend: [55000, 56000, 57000, 58000, 59000, 60000, 61000, 62000, 63000, 64000, 65000, 65000] },
      { id: 'sr4', title: 'Data Analyst', avg: 60000, min: 30000, max: 100000, byExperience: { entry: 30000, mid: 50000, senior: 75000, lead: 95000 }, trend: [50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 60000, 60000] },
      { id: 'sr5', title: 'DevOps Engineer', avg: 95000, min: 50000, max: 170000, byExperience: { entry: 50000, mid: 80000, senior: 120000, lead: 160000 }, trend: [82000, 83000, 85000, 86000, 88000, 89000, 90000, 91000, 93000, 94000, 95000, 95000] },
      { id: 'sr6', title: 'Product Manager', avg: 100000, min: 55000, max: 180000, byExperience: { entry: 55000, mid: 85000, senior: 130000, lead: 170000 }, trend: [88000, 89000, 90000, 92000, 93000, 95000, 96000, 97000, 98000, 99000, 100000, 100000] },
      { id: 'sr7', title: 'Machine Learning Engineer', avg: 110000, min: 60000, max: 200000, byExperience: { entry: 60000, mid: 90000, senior: 140000, lead: 185000 }, trend: [95000, 96000, 98000, 99000, 101000, 103000, 105000, 106000, 107000, 108000, 110000, 110000] },
      { id: 'sr8', title: 'Mobile Developer', avg: 70000, min: 35000, max: 120000, byExperience: { entry: 35000, mid: 60000, senior: 90000, lead: 115000 }, trend: [60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000, 70000, 70000] }
    ],
    locations: ['All', 'Dhaka', 'Chittagong', 'Sylhet', 'Remote'],
    experiences: ['All', 'Entry', 'Mid', 'Senior', 'Lead'],
    topPaying: [
      { company: 'CloudBD Solutions', avgSalary: 120000, industry: 'Technology' },
      { company: 'TechCorp Bangladesh', avgSalary: 105000, industry: 'Technology' },
      { company: 'DataInc Analytics', avgSalary: 95000, industry: 'Technology' },
      { company: 'FinServ Limited', avgSalary: 85000, industry: 'Finance' },
      { company: 'AppLab Technologies', avgSalary: 65000, industry: 'Technology' },
      { company: 'DesignHub BD', avgSalary: 60000, industry: 'Design' }
    ]
  },

  resources: [
    { id: 'res1', title: 'How to Write a Standout Resume in 2026', category: 'Resume Tips', excerpt: 'Your resume is your first impression. Learn the latest formatting trends, keyword optimization, and ATS-friendly techniques to get noticed by recruiters.', readTime: '5 min', date: '2026-01-10', image: 'https://placehold.co/400x200/2563EB/fff?text=Resume+Tips' },
    { id: 'res2', title: 'Mastering the Technical Interview', category: 'Interview Prep', excerpt: 'From data structures to system design, here\'s your complete guide to acing technical interviews at top Bangladeshi tech companies.', readTime: '8 min', date: '2026-01-08', image: 'https://placehold.co/400x200/7C3AED/fff?text=Interview+Prep' },
    { id: 'res3', title: 'Salary Negotiation: Get What You Deserve', category: 'Career Growth', excerpt: 'Learn proven negotiation strategies to maximize your salary offer. Including Bangladesh-specific market insights and cultural considerations.', readTime: '6 min', date: '2026-01-05', image: 'https://placehold.co/400x200/16A34A/fff?text=Career+Growth' },
    { id: 'res4', title: 'The Rise of Remote Work in Bangladesh', category: 'Industry Insights', excerpt: 'How Bangladesh\'s tech industry is embracing remote work. Statistics, trends, and what it means for job seekers and employers.', readTime: '7 min', date: '2026-01-03', image: 'https://placehold.co/400x200/D97706/fff?text=Industry+Insights' },
    { id: 'res5', title: 'Building a Portfolio That Gets Hired', category: 'Resume Tips', excerpt: 'A strong portfolio can make or break your job application. Here\'s how to showcase your work effectively for the Bangladeshi market.', readTime: '5 min', date: '2026-01-01', image: 'https://placehold.co/400x200/0891B2/fff?text=Portfolio+Tips' },
    { id: 'res6', title: 'Top 10 In-Demand Skills for 2026', category: 'Career Growth', excerpt: 'From AI/ML to cloud computing, discover the most sought-after skills in Bangladesh\'s job market and how to acquire them.', readTime: '6 min', date: '2025-12-28', image: 'https://placehold.co/400x200/DC2626/fff?text=Skills+2026' },
    { id: 'res7', title: 'Behavioral Interview Questions Decoded', category: 'Interview Prep', excerpt: 'Master the STAR method and prepare for common behavioral questions asked by top companies in Bangladesh.', readTime: '7 min', date: '2025-12-25', image: 'https://placehold.co/400x200/7C3AED/fff?text=Behavioral+Interview' },
    { id: 'res8', title: 'Freelancing vs Full-Time in Bangladesh', category: 'Industry Insights', excerpt: 'Weighing the pros and cons of freelancing versus traditional employment in the Bangladeshi context. Income, stability, growth.', readTime: '8 min', date: '2025-12-20', image: 'https://placehold.co/400x200/2563EB/fff?text=Freelance+vs+FT' },
    { id: 'res9', title: 'LinkedIn Profile Optimization Guide', category: 'Resume Tips', excerpt: 'Turn your LinkedIn profile into a recruiter magnet. Headline formulas, summary templates, and networking strategies that work.', readTime: '5 min', date: '2025-12-18', image: 'https://placehold.co/400x200/16A34A/fff?text=LinkedIn+Tips' }
  ],

  applicants: [
    { id: 'ap1', name: 'Rahim Ahmed', email: 'rahim@mail.com', role: 'Senior Frontend Developer', jobId: 'j1', date: '2026-01-12', status: 'new', resume: 'rahim_cv.pdf' },
    { id: 'ap2', name: 'Fatima Khan', email: 'fatima@mail.com', role: 'Senior Frontend Developer', jobId: 'j1', date: '2026-01-13', status: 'screening', resume: 'fatima_cv.pdf' },
    { id: 'ap3', name: 'Kamal Hossain', email: 'kamal@mail.com', role: 'Backend Developer', jobId: 'j6', date: '2026-01-10', status: 'interview', resume: 'kamal_cv.pdf' },
    { id: 'ap4', name: 'Nusrat Jahan', email: 'nusrat@mail.com', role: 'Senior Frontend Developer', jobId: 'j1', date: '2026-01-11', status: 'new', resume: 'nusrat_cv.pdf' },
    { id: 'ap5', name: 'Imran Chowdhury', email: 'imran@mail.com', role: 'QA Engineer', jobId: 'j10', date: '2026-01-09', status: 'offer', resume: 'imran_cv.pdf' },
    { id: 'ap6', name: 'Sadia Rahman', email: 'sadia@mail.com', role: 'Backend Developer', jobId: 'j6', date: '2026-01-08', status: 'screening', resume: 'sadia_cv.pdf' },
    { id: 'ap7', name: 'Arif Mahmud', email: 'arif@mail.com', role: 'Marketing Manager', jobId: 'j15', date: '2026-01-07', status: 'new', resume: 'arif_cv.pdf' },
    { id: 'ap8', name: 'Tamanna Akter', email: 'tamanna@mail.com', role: 'Senior Frontend Developer', jobId: 'j1', date: '2026-01-14', status: 'interview', resume: 'tamanna_cv.pdf' },
    { id: 'ap9', name: 'Jubayer Islam', email: 'jubayer@mail.com', role: 'QA Engineer', jobId: 'j10', date: '2026-01-06', status: 'hired', resume: 'jubayer_cv.pdf' },
    { id: 'ap10', name: 'Maliha Noor', email: 'maliha@mail.com', role: 'Backend Developer', jobId: 'j6', date: '2026-01-12', status: 'new', resume: 'maliha_cv.pdf' }
  ],

  employerJobs: [
    { jobId: 'j1', status: 'active', applications: 15 },
    { jobId: 'j6', status: 'active', applications: 12 },
    { jobId: 'j10', status: 'active', applications: 8 },
    { jobId: 'j15', status: 'closed', applications: 22 }
  ],

  employerStats: {
    activeJobs: 3,
    totalApplications: 57,
    thisMonth: 32,
    applicationsTrend: [8, 12, 5, 15, 10, 18, 22, 14, 9, 16, 20, 25, 11, 17, 13, 19, 21, 7, 14, 23, 16, 12, 18, 20, 15, 24, 17, 19, 22, 32]
  },

  resourceCategories: ['All', 'Resume Tips', 'Interview Prep', 'Career Growth', 'Industry Insights']
};
