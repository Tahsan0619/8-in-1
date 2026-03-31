const NP = {
  site: {
    name: 'HopeBridge',
    tagline: 'Together, We Can Change Lives',
    description: 'A nonprofit platform connecting donors, volunteers, and communities to create lasting impact across Bangladesh.',
    location: 'Dhaka, Bangladesh',
    phone: '+880 1711-223344',
    email: 'info@hopebridge.org'
  },

  currentUser: {
    id: 'u1',
    name: 'Tahsan Islam',
    email: 'tahsan@hopebridge.org',
    phone: '+880 1712-345678',
    avatar: 'https://ui-avatars.com/api/?name=Tahsan+Islam&background=059669&color=fff&size=128',
    role: 'admin',
    totalDonated: 42000,
    donationCount: 12,
    volunteerHours: 85,
    joinedDate: '2024-03-15'
  },

  stats: {
    totalRaised: 2500000,
    livesChanged: 15000,
    projectsCompleted: 50,
    regionsServed: 12,
    activeVolunteers: 200,
    totalVolunteerHours: 12000,
    districtsCovered: 15,
    activeCampaigns: 8,
    thisMonth: 180000
  },

  categories: [
    { id: 'water', label: 'Water', icon: '💧', color: '#3B82F6' },
    { id: 'education', label: 'Education', icon: '📚', color: '#059669' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥', color: '#8B5CF6' },
    { id: 'emergency', label: 'Emergency', icon: '🆘', color: '#EF4444' }
  ],

  campaigns: [
    {
      id: 'c1', title: 'Clean Water for Sylhet', category: 'water',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&h=400&fit=crop',
      description: 'Thousands of families in Sylhet lack access to clean drinking water. Our project will install 50 tube wells and 5 water purification systems to serve over 5,000 people.',
      goal: 1000000, raised: 820000, donors: 142, daysLeft: 18, status: 'active', featured: true,
      impactTiers: [
        { amount: 500, desc: 'Water for 1 family for 1 month' },
        { amount: 2000, desc: 'One tube well installation' },
        { amount: 10000, desc: 'Water purification system' }
      ],
      updates: [
        { date: '2026-01-10', title: '30 tube wells installed!', text: 'We reached a major milestone — 30 tube wells are now operational across 12 villages in Sylhet.', photo: true },
        { date: '2025-12-20', title: 'Construction started in 3 villages', text: 'Teams are on-site in Kanaighat, Jaintapur, and Golapganj to begin installation.' },
        { date: '2025-12-01', title: 'Campaign launched!', text: 'Thank you for supporting clean water access in Sylhet. Every contribution matters!' }
      ],
      createdAt: '2025-11-15'
    },
    {
      id: 'c2', title: 'School Supplies for Rural Children', category: 'education',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
      description: 'Providing textbooks, notebooks, and stationery to 3,000 rural students in Rangpur who cannot afford basic school supplies.',
      goal: 500000, raised: 325000, donors: 89, daysLeft: 32, status: 'active', featured: true,
      impactTiers: [
        { amount: 300, desc: 'Supply pack for 1 student' },
        { amount: 1500, desc: 'Supply pack for 5 students' },
        { amount: 5000, desc: 'Classroom library setup' }
      ],
      updates: [
        { date: '2026-01-05', title: 'Distribution started', text: '800 supply packs distributed in Kurigram district.' },
        { date: '2025-12-15', title: 'Supplies procured', text: 'We have sourced all textbooks and materials from local publishers.' }
      ],
      createdAt: '2025-11-20'
    },
    {
      id: 'c3', title: 'Mobile Medical Camp — Char Areas', category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      description: 'Running 5 mobile medical camps in remote char (river island) areas of Jamalpur, providing free checkups, medicine, and health education to 4,000 people.',
      goal: 500000, raised: 175000, donors: 61, daysLeft: 45, status: 'active', featured: true,
      impactTiers: [
        { amount: 200, desc: 'Medicine for 1 patient' },
        { amount: 1000, desc: 'Full checkup for 5 families' },
        { amount: 5000, desc: 'One complete medical camp' }
      ],
      updates: [
        { date: '2025-12-28', title: 'First camp completed', text: '850 patients treated in Islampur char area. Next camp scheduled for January.' }
      ],
      createdAt: '2025-12-01'
    },
    {
      id: 'c4', title: 'Flood Relief — Northern Bangladesh', category: 'emergency',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&h=400&fit=crop',
      description: 'Providing emergency relief including food, shelter, and medical aid to families affected by severe flooding in Kurigram and Lalmonirhat.',
      goal: 750000, raised: 680000, donors: 234, daysLeft: 5, status: 'active', featured: false,
      impactTiers: [
        { amount: 500, desc: 'Emergency food pack for 1 family' },
        { amount: 2000, desc: 'Temporary shelter for 1 family' },
        { amount: 10000, desc: 'Full relief for 5 families' }
      ],
      updates: [
        { date: '2026-01-12', title: 'Relief reaching 500+ families', text: 'Our team has distributed 500 food packs and 200 shelter kits.' },
        { date: '2026-01-08', title: 'Emergency fund activated', text: 'Urgent response team deployed to affected areas.' }
      ],
      createdAt: '2026-01-05'
    },
    {
      id: 'c5', title: 'Girls\' Education Scholarship Fund', category: 'education',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      description: 'Sponsoring 200 girls from low-income families to continue secondary education. Covers tuition, books, uniforms, and transportation.',
      goal: 800000, raised: 560000, donors: 178, daysLeft: 60, status: 'active', featured: false,
      impactTiers: [
        { amount: 1000, desc: 'One month\'s support for 1 girl' },
        { amount: 4000, desc: 'One semester scholarship' },
        { amount: 12000, desc: 'Full year scholarship for 1 girl' }
      ],
      updates: [
        { date: '2026-01-02', title: '150 scholarships awarded', text: 'First batch of 150 girls enrolled for the new academic year.' }
      ],
      createdAt: '2025-10-10'
    },
    {
      id: 'c6', title: 'Safe Drinking Water — Cox\'s Bazar', category: 'water',
      image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&h=400&fit=crop',
      description: 'Installing arsenic-free deep tube wells in Cox\'s Bazar coastal communities where groundwater contamination is a serious health risk.',
      goal: 600000, raised: 600000, donors: 198, daysLeft: 0, status: 'completed', featured: false,
      impactTiers: [
        { amount: 500, desc: 'Water testing for 1 village' },
        { amount: 3000, desc: 'One deep tube well' },
        { amount: 15000, desc: 'Water treatment plant' }
      ],
      updates: [
        { date: '2025-12-30', title: 'Campaign fully funded!', text: 'Thank you! All 20 tube wells have been installed and are operational.' },
        { date: '2025-12-01', title: 'Installation 80% complete', text: '16 out of 20 tube wells installed.' }
      ],
      createdAt: '2025-08-15'
    },
    {
      id: 'c7', title: 'Winter Clothing Drive', category: 'emergency',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop',
      description: 'Distributing warm blankets, jackets, and winter kits to cold-affected families in northern Bangladesh.',
      goal: 300000, raised: 210000, donors: 95, daysLeft: 8, status: 'active', featured: false,
      impactTiers: [
        { amount: 300, desc: 'Blanket for 1 family' },
        { amount: 1000, desc: 'Winter kit for 1 family' },
        { amount: 5000, desc: 'Winter kits for 5 families' }
      ],
      updates: [
        { date: '2026-01-11', title: 'Distribution in progress', text: '200 families in Thakurgaon have received winter kits.' }
      ],
      createdAt: '2025-12-01'
    },
    {
      id: 'c8', title: 'Child Nutrition Program', category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      description: 'Providing nutritious meals and nutrition education to 1,000 malnourished children in urban slums of Dhaka.',
      goal: 400000, raised: 145000, donors: 52, daysLeft: 55, status: 'active', featured: false,
      impactTiers: [
        { amount: 150, desc: 'Nutritious meals for 1 child for 1 week' },
        { amount: 600, desc: 'One month nutrition pack' },
        { amount: 3000, desc: 'Full 6-month program for 1 child' }
      ],
      updates: [
        { date: '2026-01-08', title: 'Program kickoff', text: 'Nutrition centers established in 3 slum areas of Mirpur.' }
      ],
      createdAt: '2025-12-10'
    }
  ],

  donations: [
    { id: 'd1', campaignId: 'c1', userId: 'u1', name: 'Tahsan Islam', amount: 5000, anonymous: false, dedication: '', date: '2026-01-14T10:30:00', receipt: 'DON-2026-0142' },
    { id: 'd2', campaignId: 'c1', userId: null, name: 'Anonymous', amount: 1000, anonymous: true, dedication: '', date: '2026-01-14T07:15:00', receipt: 'DON-2026-0141' },
    { id: 'd3', campaignId: 'c1', userId: 'u3', name: 'Nadia Rahman', amount: 2500, anonymous: false, dedication: 'In honor of my mother', date: '2026-01-13T14:00:00', receipt: 'DON-2026-0140' },
    { id: 'd4', campaignId: 'c2', userId: 'u4', name: 'Karim Ahmed', amount: 3000, anonymous: false, dedication: '', date: '2026-01-13T09:00:00', receipt: 'DON-2026-0139' },
    { id: 'd5', campaignId: 'c4', userId: null, name: 'Anonymous', amount: 10000, anonymous: true, dedication: '', date: '2026-01-12T20:00:00', receipt: 'DON-2026-0138' },
    { id: 'd6', campaignId: 'c2', userId: 'u1', name: 'Tahsan Islam', amount: 1500, anonymous: false, dedication: '', date: '2026-01-12T11:00:00', receipt: 'DON-2026-0137' },
    { id: 'd7', campaignId: 'c5', userId: 'u5', name: 'Sadia Jahan', amount: 4000, anonymous: false, dedication: '', date: '2026-01-11T16:00:00', receipt: 'DON-2026-0136' },
    { id: 'd8', campaignId: 'c3', userId: 'u6', name: 'Rafiq Uddin', amount: 2000, anonymous: false, dedication: '', date: '2026-01-10T08:00:00', receipt: 'DON-2026-0135' },
    { id: 'd9', campaignId: 'c7', userId: null, name: 'Anonymous', amount: 5000, anonymous: true, dedication: '', date: '2026-01-09T13:00:00', receipt: 'DON-2026-0134' },
    { id: 'd10', campaignId: 'c4', userId: 'u7', name: 'Minhaz Ali', amount: 2000, anonymous: false, dedication: 'For the flood victims', date: '2026-01-08T10:00:00', receipt: 'DON-2026-0133' },
    { id: 'd11', campaignId: 'c1', userId: 'u8', name: 'Farhan Hossain', amount: 1000, anonymous: false, dedication: '', date: '2026-01-07T15:00:00', receipt: 'DON-2026-0132' },
    { id: 'd12', campaignId: 'c8', userId: 'u1', name: 'Tahsan Islam', amount: 600, anonymous: false, dedication: '', date: '2026-01-06T12:00:00', receipt: 'DON-2026-0131' }
  ],

  stories: [
    {
      id: 's1', title: 'A New Beginning for Fatima\'s Children',
      beneficiary: 'Fatima Begum', location: 'Sylhet',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      quote: 'Thanks to your help, my children can now go to school without worrying about clean water.',
      body: 'Fatima is a mother of three living in a remote village in Sylhet. Before HopeBridge installed a tube well near her home, her family had to walk 3 kilometers daily to fetch water from a contaminated pond. Her youngest daughter frequently fell ill from waterborne diseases. Now, with clean water just steps away, her children attend school regularly and the entire community has seen a dramatic drop in illness.',
      campaignId: 'c1', featured: true, date: '2026-01-05'
    },
    {
      id: 's2', title: 'From Dropout to Top Student',
      beneficiary: 'Rashida Khatun', location: 'Rangpur',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      quote: 'The scholarship changed my life. I went from working in a garment factory to becoming the top student in my class.',
      body: 'Rashida was forced to drop out of school at age 14 to work in a local garment factory to support her family. Through the Girls\' Education Scholarship Fund, she received full tuition support and returned to school. Within a year, she became the top student in her class and now dreams of becoming a doctor.',
      campaignId: 'c5', featured: false, date: '2025-12-20'
    },
    {
      id: 's3', title: 'Life-Saving Medical Camp',
      beneficiary: 'Abdul Karim', location: 'Jamalpur',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      quote: 'The doctors found my diabetes early. Without the medical camp, I would never have known.',
      body: 'Abdul Karim, 55, lives on a char island in Jamalpur where the nearest hospital is a 4-hour boat ride away. During a HopeBridge mobile medical camp, doctors diagnosed him with early-stage diabetes and provided medication and dietary guidance. Regular follow-up visits have helped him manage his condition effectively.',
      campaignId: 'c3', featured: false, date: '2025-12-10'
    },
    {
      id: 's4', title: 'Rebuilding After the Flood',
      beneficiary: 'Nurul Islam', location: 'Kurigram',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&h=400&fit=crop',
      quote: 'We lost everything in the flood. HopeBridge gave us food, shelter, and most importantly — hope.',
      body: 'When unprecedented flooding hit Kurigram in 2025, Nurul\'s family of six lost their home, livestock, and all possessions. HopeBridge\'s emergency response team provided immediate food packs, temporary shelter, and connected them with long-term rehabilitation support. Today, Nurul has rebuilt a small home and started a poultry farm with a micro-grant.',
      campaignId: 'c4', featured: false, date: '2026-01-08'
    }
  ],

  events: [
    {
      id: 'e1', title: 'Charity Gala Dinner 2026',
      date: '2026-02-14T18:00:00', location: 'Dhaka Sheraton Hotel',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      description: 'An elegant evening of fine dining, live music, and an auction to raise funds for our water projects. Join us for inspiration and impact.',
      type: 'Gala', goal: 500000, raised: 360000, capacity: 200, registered: 145, status: 'upcoming'
    },
    {
      id: 'e2', title: 'Marathon for Education',
      date: '2026-03-21T06:00:00', location: 'Hatirjheel, Dhaka',
      image: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=600&h=400&fit=crop',
      description: 'Run 5K, 10K, or half marathon to raise funds for rural education. All registration fees go directly to our scholarship fund.',
      type: 'Sports', goal: 300000, raised: 165000, capacity: 500, registered: 280, status: 'upcoming'
    },
    {
      id: 'e3', title: 'Art for Change Exhibition',
      date: '2026-04-05T10:00:00', location: 'Bengal Gallery, Dhaka',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop',
      description: 'Local artists showcase and auction their work to benefit healthcare projects. Meet the artists and bid on inspiring pieces.',
      type: 'Exhibition', goal: 200000, raised: 0, capacity: 150, registered: 42, status: 'upcoming'
    },
    {
      id: 'e4', title: 'Annual Volunteer Meetup',
      date: '2026-01-20T15:00:00', location: 'HopeBridge Office, Gulshan',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      description: 'A gathering of our amazing volunteer community. Share experiences, network, and plan upcoming projects together.',
      type: 'Meetup', goal: 0, raised: 0, capacity: 100, registered: 78, status: 'upcoming'
    },
    {
      id: 'e5', title: 'Winter Relief Drive 2025',
      date: '2025-12-15T09:00:00', location: 'Rangpur City',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop',
      description: 'Our annual winter blanket and clothing distribution in northern Bangladesh. 500 families received warm clothing and supplies.',
      type: 'Relief', goal: 200000, raised: 200000, capacity: 0, registered: 0, status: 'past'
    }
  ],

  volunteers: [
    {
      id: 'v1', title: 'Field Coordinator', project: 'Sylhet Water Project',
      location: 'Sylhet', type: 'Field Work', hours: '10 hrs/week', duration: 'Jan — Mar 2026',
      skills: ['Leadership', 'Bengali', 'Driving'], description: 'Lead field operations for tube well installation. Coordinate with local communities and contractors.',
      urgent: false, remote: false, spots: 3
    },
    {
      id: 'v2', title: 'Social Media Volunteer', project: 'Communications Team',
      location: 'Remote', type: 'Online', hours: '5 hrs/week', duration: 'Ongoing',
      skills: ['Content Writing', 'Canva', 'Social Media'], description: 'Create engaging social media content to raise awareness and attract donors.',
      urgent: false, remote: true, spots: 5
    },
    {
      id: 'v3', title: 'Teaching Assistant', project: 'Girls Education Program',
      location: 'Rangpur', type: 'Field Work', hours: '15 hrs/week', duration: 'Feb — Jun 2026',
      skills: ['Teaching', 'Bengali', 'Patience'], description: 'Assist classroom teachers in rural schools. Help students with reading and math.',
      urgent: true, remote: false, spots: 8
    },
    {
      id: 'v4', title: 'Event Coordinator', project: 'Charity Gala 2026',
      location: 'Dhaka', type: 'Events', hours: '8 hrs/week', duration: 'Jan — Feb 2026',
      skills: ['Event Planning', 'Communication', 'MS Office'], description: 'Help organize our flagship charity gala. Manage vendors, invitations, and logistics.',
      urgent: true, remote: false, spots: 2
    },
    {
      id: 'v5', title: 'Data Entry & Reporting', project: 'Admin Support',
      location: 'Remote', type: 'Admin', hours: '3 hrs/week', duration: 'Ongoing',
      skills: ['Excel', 'Data Entry', 'Detail-Oriented'], description: 'Enter donation records and volunteer hours into our tracking system.',
      urgent: false, remote: true, spots: 4
    },
    {
      id: 'v6', title: 'Medical Camp Assistant', project: 'Mobile Medical Camps',
      location: 'Jamalpur', type: 'Field Work', hours: '20 hrs/week', duration: 'Weekends',
      skills: ['First Aid', 'Bengali', 'Empathy'], description: 'Assist doctors during mobile medical camps in char areas. Help with patient registration and crowd management.',
      urgent: false, remote: false, spots: 6
    }
  ],

  team: [
    { name: 'Anika Rahman', role: 'Executive Director', bio: 'Leading HopeBridge since 2020 with 15+ years in nonprofit management.', avatar: 'https://ui-avatars.com/api/?name=Anika+Rahman&background=059669&color=fff' },
    { name: 'Farhan Ahmed', role: 'Program Director', bio: 'Oversees all field operations and campaign implementation across Bangladesh.', avatar: 'https://ui-avatars.com/api/?name=Farhan+Ahmed&background=047857&color=fff' },
    { name: 'Sadia Jahan', role: 'Head of Fundraising', bio: 'Driving donor engagement and innovative fundraising strategies.', avatar: 'https://ui-avatars.com/api/?name=Sadia+Jahan&background=F59E0B&color=fff' },
    { name: 'Rafiq Uddin', role: 'Finance Manager', bio: 'Ensuring financial transparency and accountability in all operations.', avatar: 'https://ui-avatars.com/api/?name=Rafiq+Uddin&background=3B82F6&color=fff' },
    { name: 'Nusrat Imrose', role: 'Volunteer Coordinator', bio: 'Managing and supporting our growing community of 200+ volunteers.', avatar: 'https://ui-avatars.com/api/?name=Nusrat+Imrose&background=8B5CF6&color=fff' },
    { name: 'Tahsan Islam', role: 'Technology Lead', bio: 'Building digital solutions to maximize HopeBridge\'s impact and transparency.', avatar: 'https://ui-avatars.com/api/?name=Tahsan+Islam&background=059669&color=fff' }
  ],

  partners: [
    'UNICEF Bangladesh', 'BRAC', 'WaterAid', 'Save the Children', 'ActionAid', 'Grameenphone'
  ],

  timeline: [
    { year: '2018', title: 'Founded', text: 'HopeBridge established as a registered NGO in Dhaka.' },
    { year: '2019', title: 'First Water Project', text: 'Installed 10 tube wells in Sylhet serving 1,000 people.' },
    { year: '2020', title: 'Education Program Launch', text: 'Girls\' scholarship fund created — 50 scholarships awarded.' },
    { year: '2021', title: 'Healthcare Expansion', text: 'Mobile medical camps started serving char communities.' },
    { year: '2022', title: '৳1M Milestone', text: 'Total fundraising crossed ৳1 million — 5,000 lives impacted.' },
    { year: '2023', title: 'Emergency Response', text: 'Rapid response deployed during Bangladesh floods — 2,000 families aided.' },
    { year: '2024', title: '10,000 Lives', text: 'Cumulative impact reached 10,000 lives changed across 10 districts.' },
    { year: '2025', title: 'Digital Platform', text: 'Launched online donation platform with full transparency dashboard.' }
  ],

  fundAllocation: [
    { category: 'Water', percentage: 35, received: 875000, spent: 820000, color: '#3B82F6' },
    { category: 'Education', percentage: 28, received: 700000, spent: 650000, color: '#059669' },
    { category: 'Healthcare', percentage: 22, received: 550000, spent: 510000, color: '#8B5CF6' },
    { category: 'Emergency', percentage: 15, received: 375000, spent: 350000, color: '#EF4444' }
  ],

  donationTrend: [
    { month: 'Feb', amount: 120000 },
    { month: 'Mar', amount: 145000 },
    { month: 'Apr', amount: 135000 },
    { month: 'May', amount: 160000 },
    { month: 'Jun', amount: 190000 },
    { month: 'Jul', amount: 175000 },
    { month: 'Aug', amount: 210000 },
    { month: 'Sep', amount: 195000 },
    { month: 'Oct', amount: 230000 },
    { month: 'Nov', amount: 250000 },
    { month: 'Dec', amount: 280000 },
    { month: 'Jan', amount: 310000 }
  ],

  impactByCategory: [
    { category: 'Water', icon: '💧', projects: 20, peopleHelped: 5000 },
    { category: 'Education', icon: '📚', projects: 8, peopleHelped: 3000 },
    { category: 'Healthcare', icon: '🏥', projects: 5, peopleHelped: 4000 },
    { category: 'Emergency', icon: '🆘', projects: 3, peopleHelped: 3000 }
  ],

  donationAmounts: [500, 1000, 2500, 5000, 10000],

  adminDonationTrend: [
    { day: 'Jan 1', amount: 8500 }, { day: 'Jan 2', amount: 6200 }, { day: 'Jan 3', amount: 12000 },
    { day: 'Jan 4', amount: 5800 }, { day: 'Jan 5', amount: 9300 }, { day: 'Jan 6', amount: 7100 },
    { day: 'Jan 7', amount: 11500 }, { day: 'Jan 8', amount: 8900 }, { day: 'Jan 9', amount: 14200 },
    { day: 'Jan 10', amount: 6700 }, { day: 'Jan 11', amount: 10800 }, { day: 'Jan 12', amount: 13500 },
    { day: 'Jan 13', amount: 9200 }, { day: 'Jan 14', amount: 11000 }
  ]
};
