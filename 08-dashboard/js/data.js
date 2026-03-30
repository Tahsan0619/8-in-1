/* ── 08-dashboard Mock Data Store ── */
const DashboardData = {
  currentUser: {
    id: 'u1', name: 'Tahsan Islam', email: 'tahsan@nexgen.io', role: 'Owner',
    avatar: 'TA', org: 'NexGen Labs', timezone: 'UTC+6'
  },

  /* ── KPI ── */
  kpis: [
    { id: 'revenue', label: 'Total Revenue', value: 52400, prefix: '$', change: 12.5, changeLabel: 'vs last month', sparkline: [28,32,25,38,42,35,45,52,48,55,60,52], href: 'finance.html' },
    { id: 'users', label: 'Active Users', value: 2847, prefix: '', change: 8.1, changeLabel: 'vs last month', sparkline: [18,22,20,24,25,23,27,28,26,30,29,28], href: 'analytics.html' },
    { id: 'conversion', label: 'Conversion Rate', value: 3.24, prefix: '', suffix: '%', change: -1.8, changeLabel: 'vs last month', sparkline: [3.8,3.5,3.6,3.2,3.1,3.4,3.6,3.3,3.0,3.2,3.4,3.2], href: 'analytics.html' },
    { id: 'mrr', label: 'Monthly Recurring', value: 18520, prefix: '$', change: 15.3, changeLabel: 'vs last month', sparkline: [10,11,12,13,12,14,15,14,16,17,16,18], href: 'finance.html' },
    { id: 'churn', label: 'Churn Rate', value: 2.1, prefix: '', suffix: '%', change: -0.4, changeLabel: 'vs last month', sparkline: [3.2,2.8,3.0,2.5,2.7,2.4,2.6,2.3,2.5,2.2,2.3,2.1], href: 'analytics.html' },
    { id: 'signups', label: 'New Signups', value: 384, prefix: '', change: 22.6, changeLabel: 'vs last month', sparkline: [15,18,22,20,25,28,30,32,28,35,38,38], href: 'analytics.html' }
  ],

  /* ── Revenue Chart Data ── */
  revenueChart: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    revenue: [32000,35000,28000,42000,38000,45000,48000,52000,47000,55000,58000,52400],
    expenses: [18000,20000,15000,22000,19000,24000,26000,28000,25000,29000,30000,27000],
    profit:   [14000,15000,13000,20000,19000,21000,22000,24000,22000,26000,28000,25400]
  },

  /* ── Activity Distribution ── */
  activityDist: {
    labels: ['Sales','Signups','Support','Features','Billing','Other'],
    data:   [42, 18, 15, 12, 8, 5],
    colors: ['#3B82F6','#8B5CF6','#06B6D4','#22C55E','#EAB308','#F97316']
  },

  /* ── Recent Activity ── */
  recentActivity: [
    { icon: '👤', title: 'New signup', desc: 'Sarah Johnson created an account', time: '2 min ago', type: 'signup' },
    { icon: '💰', title: 'Payment received', desc: 'Invoice #1042 paid by Acme Corp — $7,920', time: '15 min ago', type: 'payment' },
    { icon: '🎫', title: 'Support ticket', desc: 'Ticket #389 opened by Mike Chen', time: '32 min ago', type: 'support' },
    { icon: '📊', title: 'Report generated', desc: 'Monthly analytics report ready', time: '1 hour ago', type: 'system' },
    { icon: '🔀', title: 'Deal moved', desc: 'TechStart deal moved to Proposal', time: '2 hours ago', type: 'crm' },
    { icon: '👤', title: 'New signup', desc: 'David Park created an account', time: '3 hours ago', type: 'signup' },
    { icon: '💰', title: 'Payment received', desc: 'Invoice #1039 paid by CloudNine — $3,200', time: '4 hours ago', type: 'payment' },
    { icon: '⚙️', title: 'Integration connected', desc: 'Slack integration activated', time: '5 hours ago', type: 'system' }
  ],

  /* ── Top Performers ── */
  topPerformers: [
    { rank: 1, name: 'Enterprise Plan', metric: '$12,400', change: '+18%' },
    { rank: 2, name: 'Pro Plan', metric: '$9,800', change: '+12%' },
    { rank: 3, name: 'API Access', metric: '$7,200', change: '+24%' },
    { rank: 4, name: 'Team Plan', metric: '$5,100', change: '+8%' },
    { rank: 5, name: 'Starter Plan', metric: '$3,600', change: '+5%' }
  ],

  /* ── DATA TABLE — Records ── */
  records: [
    { id: 'REC-001', name: 'Alice Johnson', email: 'alice@acme.com', company: 'Acme Corp', status: 'active', category: 'Enterprise', revenue: 12400, joined: '2024-01-15', lastActive: '2 hours ago' },
    { id: 'REC-002', name: 'Bob Williams', email: 'bob@techstart.io', company: 'TechStart', status: 'active', category: 'Pro', revenue: 8200, joined: '2024-02-03', lastActive: '1 day ago' },
    { id: 'REC-003', name: 'Carol Martinez', email: 'carol@bigcorp.net', company: 'BigCorp', status: 'pending', category: 'Enterprise', revenue: 15800, joined: '2023-11-20', lastActive: '3 hours ago' },
    { id: 'REC-004', name: 'David Chen', email: 'david@cloudnine.com', company: 'CloudNine', status: 'active', category: 'Pro', revenue: 6400, joined: '2024-03-08', lastActive: '5 min ago' },
    { id: 'REC-005', name: 'Eva Patel', email: 'eva@startup.co', company: 'StartupCo', status: 'inactive', category: 'Starter', revenue: 2100, joined: '2023-09-14', lastActive: '2 weeks ago' },
    { id: 'REC-006', name: 'Frank Lee', email: 'frank@mediainc.com', company: 'MediaInc', status: 'active', category: 'Team', revenue: 4800, joined: '2024-01-22', lastActive: '6 hours ago' },
    { id: 'REC-007', name: 'Grace Kim', email: 'grace@designhub.io', company: 'DesignHub', status: 'active', category: 'Pro', revenue: 7600, joined: '2023-12-05', lastActive: '1 hour ago' },
    { id: 'REC-008', name: 'Henry Brown', email: 'henry@devtools.co', company: 'DevTools', status: 'pending', category: 'Enterprise', revenue: 18200, joined: '2024-04-01', lastActive: '30 min ago' },
    { id: 'REC-009', name: 'Iris Wang', email: 'iris@globaltech.com', company: 'GlobalTech', status: 'active', category: 'Enterprise', revenue: 22400, joined: '2023-08-18', lastActive: '4 hours ago' },
    { id: 'REC-010', name: 'Jack Davis', email: 'jack@smallbiz.net', company: 'SmallBiz', status: 'inactive', category: 'Starter', revenue: 1200, joined: '2023-10-30', lastActive: '1 month ago' },
    { id: 'REC-011', name: 'Karen Lopez', email: 'karen@nextsol.io', company: 'NextSol', status: 'active', category: 'Team', revenue: 5100, joined: '2024-02-14', lastActive: '2 hours ago' },
    { id: 'REC-012', name: 'Liam Wilson', email: 'liam@megaco.com', company: 'MegaCo', status: 'active', category: 'Enterprise', revenue: 28000, joined: '2023-06-22', lastActive: '10 min ago' },
    { id: 'REC-013', name: 'Mia Thompson', email: 'mia@agency.io', company: 'TheAgency', status: 'pending', category: 'Pro', revenue: 9400, joined: '2024-03-28', lastActive: '1 day ago' },
    { id: 'REC-014', name: 'Noah Garcia', email: 'noah@venture.co', company: 'VentureCo', status: 'active', category: 'Pro', revenue: 7800, joined: '2024-01-08', lastActive: '3 hours ago' },
    { id: 'REC-015', name: 'Olivia Anderson', email: 'olivia@creative.com', company: 'CreativeHQ', status: 'active', category: 'Team', revenue: 4200, joined: '2024-04-10', lastActive: '45 min ago' },
    { id: 'REC-016', name: 'Paul Robinson', email: 'paul@infra.io', company: 'InfraTech', status: 'inactive', category: 'Starter', revenue: 1800, joined: '2023-07-15', lastActive: '3 weeks ago' },
    { id: 'REC-017', name: 'Quinn Foster', email: 'quinn@dataflow.com', company: 'DataFlow', status: 'active', category: 'Enterprise', revenue: 19600, joined: '2023-09-02', lastActive: '20 min ago' },
    { id: 'REC-018', name: 'Rachel Scott', email: 'rachel@bright.io', company: 'BrightAI', status: 'active', category: 'Pro', revenue: 8800, joined: '2024-02-19', lastActive: '5 hours ago' },
    { id: 'REC-019', name: 'Sam Mitchell', email: 'sam@buildco.net', company: 'BuildCo', status: 'pending', category: 'Team', revenue: 3600, joined: '2024-04-22', lastActive: '2 days ago' },
    { id: 'REC-020', name: 'Tara Nguyen', email: 'tara@quantumlabs.io', company: 'QuantumLabs', status: 'active', category: 'Enterprise', revenue: 24800, joined: '2023-05-10', lastActive: '1 hour ago' }
  ],

  /* ── CRM CONTACTS ── */
  contacts: [
    { id: 'c1', name: 'John Doe', email: 'john@acme.com', phone: '+1 555-0123', company: 'Acme Corp', role: 'CEO', status: 'active', value: 45000, tags: ['Enterprise','VIP'], lastContact: '2 days ago', avatar: 'JD',
      activity: [
        { type: 'email', desc: 'Sent proposal follow-up', time: '2 days ago' },
        { type: 'call', desc: 'Discovery call — 30 min', time: '1 week ago' },
        { type: 'note', desc: 'Interested in Enterprise plan', time: '2 weeks ago' }
      ]
    },
    { id: 'c2', name: 'Jane Smith', email: 'jane@techstart.io', phone: '+1 555-0456', company: 'TechStart', role: 'CTO', status: 'active', value: 28000, tags: ['Pro','Tech'], lastContact: '1 day ago', avatar: 'JS',
      activity: [
        { type: 'meeting', desc: 'Product demo scheduled', time: '1 day ago' },
        { type: 'email', desc: 'Sent pricing comparison', time: '3 days ago' }
      ]
    },
    { id: 'c3', name: 'Bob Wilson', email: 'bob@bigcorp.net', phone: '+1 555-0789', company: 'BigCorp', role: 'VP Sales', status: 'active', value: 62000, tags: ['Enterprise','Decision Maker'], lastContact: '5 hours ago', avatar: 'BW',
      activity: [
        { type: 'call', desc: 'Negotiation call — pricing discussion', time: '5 hours ago' },
        { type: 'note', desc: 'Needs approval from board', time: '1 day ago' }
      ]
    },
    { id: 'c4', name: 'Amy Clark', email: 'amy@growth.co', phone: '+1 555-0321', company: 'GrowthCo', role: 'Head of Product', status: 'active', value: 18000, tags: ['Pro'], lastContact: '3 days ago', avatar: 'AC',
      activity: [{ type: 'email', desc: 'Sent onboarding guide', time: '3 days ago' }]
    },
    { id: 'c5', name: 'Tom Baker', email: 'tom@cloudnine.com', phone: '+1 555-0654', company: 'CloudNine', role: 'Founder', status: 'inactive', value: 8500, tags: ['Starter','Churned'], lastContact: '2 weeks ago', avatar: 'TB',
      activity: [{ type: 'note', desc: 'Account cancelled — pricing concerns', time: '2 weeks ago' }]
    },
    { id: 'c6', name: 'Lisa Park', email: 'lisa@mediainc.com', phone: '+1 555-0987', company: 'MediaInc', role: 'Marketing Dir', status: 'active', value: 22000, tags: ['Team','Marketing'], lastContact: '1 day ago', avatar: 'LP',
      activity: [
        { type: 'meeting', desc: 'Quarterly review', time: '1 day ago' },
        { type: 'email', desc: 'Shared case study', time: '4 days ago' }
      ]
    },
    { id: 'c7', name: 'Mike Chen', email: 'mike@devtools.co', phone: '+1 555-1234', company: 'DevTools', role: 'Engineering Lead', status: 'pending', value: 35000, tags: ['Enterprise','Tech'], lastContact: '3 hours ago', avatar: 'MC',
      activity: [{ type: 'call', desc: 'API integration discussion', time: '3 hours ago' }]
    },
    { id: 'c8', name: 'Sarah Kim', email: 'sarah@designhub.io', phone: '+1 555-5678', company: 'DesignHub', role: 'Creative Director', status: 'active', value: 15000, tags: ['Pro','Design'], lastContact: '6 hours ago', avatar: 'SK',
      activity: [{ type: 'email', desc: 'Feature request follow-up', time: '6 hours ago' }]
    }
  ],

  /* ── CRM PIPELINE — Deals ── */
  deals: [
    { id: 'd1', name: 'Acme Corp Enterprise', company: 'Acme Corp', value: 45000, stage: 'negotiation', probability: 70, owner: 'c1', ownerName: 'John Doe', ownerAv: 'JD', daysInStage: 5, priority: 'high', closeDate: '2024-06-15' },
    { id: 'd2', name: 'TechStart Pro Upgrade', company: 'TechStart', value: 28000, stage: 'proposal', probability: 50, owner: 'c2', ownerName: 'Jane Smith', ownerAv: 'JS', daysInStage: 3, priority: 'medium', closeDate: '2024-06-30' },
    { id: 'd3', name: 'BigCorp Enterprise', company: 'BigCorp', value: 62000, stage: 'negotiation', probability: 60, owner: 'c3', ownerName: 'Bob Wilson', ownerAv: 'BW', daysInStage: 8, priority: 'critical', closeDate: '2024-05-31' },
    { id: 'd4', name: 'GrowthCo Team Plan', company: 'GrowthCo', value: 18000, stage: 'qualified', probability: 40, owner: 'c4', ownerName: 'Amy Clark', ownerAv: 'AC', daysInStage: 12, priority: 'medium', closeDate: '2024-07-15' },
    { id: 'd5', name: 'MediaInc Team Plan', company: 'MediaInc', value: 22000, stage: 'lead', probability: 20, owner: 'c6', ownerName: 'Lisa Park', ownerAv: 'LP', daysInStage: 2, priority: 'low', closeDate: '2024-08-01' },
    { id: 'd6', name: 'DevTools Enterprise', company: 'DevTools', value: 35000, stage: 'qualified', probability: 35, owner: 'c7', ownerName: 'Mike Chen', ownerAv: 'MC', daysInStage: 7, priority: 'high', closeDate: '2024-07-01' },
    { id: 'd7', name: 'DesignHub Pro', company: 'DesignHub', value: 15000, stage: 'lead', probability: 15, owner: 'c8', ownerName: 'Sarah Kim', ownerAv: 'SK', daysInStage: 1, priority: 'low', closeDate: '2024-08-15' },
    { id: 'd8', name: 'CloudNine Renewal', company: 'CloudNine', value: 8500, stage: 'lost', probability: 0, owner: 'c5', ownerName: 'Tom Baker', ownerAv: 'TB', daysInStage: 14, priority: 'medium', closeDate: '2024-05-01' },
    { id: 'd9', name: 'DataFlow Enterprise', company: 'DataFlow', value: 38000, stage: 'won', probability: 100, owner: 'c1', ownerName: 'John Doe', ownerAv: 'JD', daysInStage: 0, priority: 'high', closeDate: '2024-04-20' },
    { id: 'd10', name: 'BrightAI Pro', company: 'BrightAI', value: 12000, stage: 'won', probability: 100, owner: 'c2', ownerName: 'Jane Smith', ownerAv: 'JS', daysInStage: 0, priority: 'medium', closeDate: '2024-04-25' },
    { id: 'd11', name: 'NextSol Team', company: 'NextSol', value: 16000, stage: 'proposal', probability: 45, owner: 'c4', ownerName: 'Amy Clark', ownerAv: 'AC', daysInStage: 4, priority: 'medium', closeDate: '2024-06-20' },
    { id: 'd12', name: 'QuantumLabs Ent', company: 'QuantumLabs', value: 52000, stage: 'lead', probability: 10, owner: 'c3', ownerName: 'Bob Wilson', ownerAv: 'BW', daysInStage: 1, priority: 'high', closeDate: '2024-09-01' }
  ],

  /* ── ANALYTICS ── */
  analytics: {
    traffic: {
      labels: ['Week 1','Week 2','Week 3','Week 4'],
      total:  [3200, 2900, 3400, 2900],
      unique: [2100, 1900, 2200, 2000]
    },
    sources: [
      { name: 'Direct', value: 35, color: '#3B82F6' },
      { name: 'Organic Search', value: 28, color: '#8B5CF6' },
      { name: 'Social Media', value: 18, color: '#06B6D4' },
      { name: 'Referral', value: 12, color: '#22C55E' },
      { name: 'Email', value: 7, color: '#EAB308' }
    ],
    topPages: [
      { page: '/', views: 4200, unique: 3100, avgTime: '2:34', bounce: '38%' },
      { page: '/pricing', views: 1800, unique: 1400, avgTime: '3:12', bounce: '22%' },
      { page: '/docs', views: 1200, unique: 980, avgTime: '5:45', bounce: '15%' },
      { page: '/blog', views: 980, unique: 720, avgTime: '4:18', bounce: '42%' },
      { page: '/features', views: 860, unique: 640, avgTime: '2:55', bounce: '35%' },
      { page: '/about', views: 420, unique: 340, avgTime: '1:48', bounce: '55%' },
      { page: '/contact', views: 380, unique: 310, avgTime: '1:22', bounce: '28%' }
    ],
    funnel: [
      { stage: 'Visit', count: 12400, color: '#3B82F6' },
      { stage: 'Signup', count: 2100, color: '#8B5CF6' },
      { stage: 'Trial', count: 840, color: '#06B6D4' },
      { stage: 'Paid', count: 210, color: '#22C55E' },
      { stage: 'Retained', count: 168, color: '#EAB308' }
    ],
    kpis: [
      { label: 'Total Visits', value: '12.4K', change: 14, suffix: '' },
      { label: 'Unique Visitors', value: '8.2K', change: 11, suffix: '' },
      { label: 'Bounce Rate', value: '42.3', change: -3, suffix: '%' },
      { label: 'Avg. Session', value: '3:24', change: 8, suffix: '' }
    ]
  },

  /* ── FINANCE ── */
  finance: {
    summary: { revenue: 524000, expenses: 287000, netIncome: 237000, margin: 45.2, mrr: 18520, arr: 222240, outstanding: 34200 },
    monthlyRevenue: [32000,35000,28000,42000,38000,45000,48000,52000,47000,55000,58000,52400],
    monthlyExpenses: [18000,20000,15000,22000,19000,24000,26000,28000,25000,29000,30000,27000]
  },

  invoices: [
    { id: 'INV-1042', client: 'Acme Corp', clientContact: 'John Doe', clientAddr: '123 Business Ave, New York, NY 10001', amount: 7920, status: 'pending', issued: '2024-04-15', due: '2024-05-15',
      items: [
        { desc: 'Web Application Design', qty: 1, rate: 3000 },
        { desc: 'Frontend Development', qty: 40, rate: 100 },
        { desc: 'Annual Hosting', qty: 1, rate: 200 }
      ], tax: 10, discount: 0, notes: 'Payment due within 30 days. Late payments subject to 1.5% monthly interest.', payments: [] },
    { id: 'INV-1041', client: 'TechStart', clientContact: 'Jane Smith', clientAddr: '456 Tech Blvd, San Francisco, CA 94105', amount: 5400, status: 'paid', issued: '2024-03-20', due: '2024-04-20',
      items: [
        { desc: 'API Integration', qty: 20, rate: 150 },
        { desc: 'Documentation', qty: 1, rate: 800 },
        { desc: 'Training Session', qty: 2, rate: 600 }
      ], tax: 0, discount: 5, notes: 'Thank you for your business.',
      payments: [{ date: '2024-04-18', amount: 5400, method: 'Wire Transfer' }] },
    { id: 'INV-1040', client: 'BigCorp', clientContact: 'Bob Wilson', clientAddr: '789 Corp Drive, Chicago, IL 60601', amount: 15200, status: 'overdue', issued: '2024-02-10', due: '2024-03-10',
      items: [
        { desc: 'Enterprise License', qty: 1, rate: 12000 },
        { desc: 'Custom Integration', qty: 16, rate: 200 }
      ], tax: 0, discount: 0, notes: 'OVERDUE — Please remit payment immediately.', payments: [] },
    { id: 'INV-1039', client: 'CloudNine', clientContact: 'Tom Baker', clientAddr: '321 Cloud St, Austin, TX 73301', amount: 3200, status: 'paid', issued: '2024-03-01', due: '2024-04-01',
      items: [
        { desc: 'Pro Plan (Annual)', qty: 1, rate: 2400 },
        { desc: 'Priority Support', qty: 4, rate: 200 }
      ], tax: 0, discount: 0, notes: '',
      payments: [{ date: '2024-03-28', amount: 3200, method: 'Credit Card' }] },
    { id: 'INV-1038', client: 'MediaInc', clientContact: 'Lisa Park', clientAddr: '555 Media Ln, Los Angeles, CA 90001', amount: 8600, status: 'paid', issued: '2024-02-15', due: '2024-03-15',
      items: [
        { desc: 'Team Plan (Annual)', qty: 1, rate: 6000 },
        { desc: 'Onboarding Package', qty: 1, rate: 1500 },
        { desc: 'Data Migration', qty: 1, rate: 1100 }
      ], tax: 0, discount: 0, notes: '',
      payments: [{ date: '2024-03-10', amount: 8600, method: 'ACH' }] },
    { id: 'INV-1037', client: 'DevTools', clientContact: 'Mike Chen', clientAddr: '100 Dev Way, Seattle, WA 98101', amount: 11400, status: 'draft', issued: '2024-04-28', due: '2024-05-28',
      items: [
        { desc: 'Enterprise Pilot', qty: 1, rate: 8000 },
        { desc: 'API Consulting', qty: 12, rate: 200 },
        { desc: 'Security Audit', qty: 1, rate: 1000 }
      ], tax: 0, discount: 5, notes: 'Draft — pending client approval.', payments: [] },
    { id: 'INV-1036', client: 'DesignHub', clientContact: 'Sarah Kim', clientAddr: '222 Design Sq, Portland, OR 97201', amount: 4800, status: 'paid', issued: '2024-01-20', due: '2024-02-20',
      items: [
        { desc: 'Pro Plan (6 months)', qty: 1, rate: 3600 },
        { desc: 'Custom Theme', qty: 1, rate: 1200 }
      ], tax: 0, discount: 0, notes: '',
      payments: [{ date: '2024-02-15', amount: 4800, method: 'Credit Card' }] },
    { id: 'INV-1035', client: 'GrowthCo', clientContact: 'Amy Clark', clientAddr: '900 Growth Ave, Denver, CO 80201', amount: 6200, status: 'pending', issued: '2024-04-05', due: '2024-05-05',
      items: [
        { desc: 'Team Plan Setup', qty: 1, rate: 4000 },
        { desc: 'Training (Team)', qty: 4, rate: 550 }
      ], tax: 0, discount: 0, notes: '', payments: [] }
  ],

  /* ── TEAM ── */
  team: [
    { id: 't1', name: 'Tahsan Islam', email: 'tahsan@nexgen.io', role: 'owner', status: 'active', lastActive: 'Now', avatar: 'TA', department: 'Executive' },
    { id: 't2', name: 'Sarah Johnson', email: 'sarah@nexgen.io', role: 'admin', status: 'active', lastActive: '5 min ago', avatar: 'SJ', department: 'Engineering' },
    { id: 't3', name: 'Mike Chen', email: 'mike@nexgen.io', role: 'member', status: 'active', lastActive: '1 hour ago', avatar: 'MC', department: 'Engineering' },
    { id: 't4', name: 'Emily Davis', email: 'emily@nexgen.io', role: 'member', status: 'active', lastActive: '30 min ago', avatar: 'ED', department: 'Design' },
    { id: 't5', name: 'Alex Kim', email: 'alex@nexgen.io', role: 'admin', status: 'active', lastActive: '2 hours ago', avatar: 'AK', department: 'Product' },
    { id: 't6', name: 'James Wilson', email: 'james@nexgen.io', role: 'member', status: 'inactive', lastActive: '2 weeks ago', avatar: 'JW', department: 'Marketing' },
    { id: 't7', name: 'Nina Patel', email: 'nina@nexgen.io', role: 'viewer', status: 'active', lastActive: '3 hours ago', avatar: 'NP', department: 'Sales' },
    { id: 't8', name: 'Ryan Cooper', email: 'ryan@nexgen.io', role: 'member', status: 'active', lastActive: '15 min ago', avatar: 'RC', department: 'Engineering' }
  ],

  /* ── NOTIFICATIONS ── */
  notifications: [
    { id: 'n1', type: 'billing', icon: '💰', title: 'Invoice #1040 is overdue', desc: 'BigCorp payment of $15,200 was due on Mar 10', time: '1 hour ago', read: false },
    { id: 'n2', type: 'team', icon: '👤', title: 'New team member joined', desc: 'Ryan Cooper accepted the invitation', time: '3 hours ago', read: false },
    { id: 'n3', type: 'security', icon: '🔒', title: 'New login detected', desc: 'Login from Chrome on Windows — Dhaka, BD', time: '5 hours ago', read: false },
    { id: 'n4', type: 'system', icon: '⚙️', title: 'System maintenance scheduled', desc: 'Planned downtime on May 15, 2:00-4:00 AM UTC', time: '1 day ago', read: true },
    { id: 'n5', type: 'integration', icon: '🔗', title: 'GitHub integration synced', desc: '42 repositories successfully synced', time: '1 day ago', read: true },
    { id: 'n6', type: 'billing', icon: '💰', title: 'Payment received', desc: 'CloudNine paid Invoice #1039 — $3,200', time: '2 days ago', read: true },
    { id: 'n7', type: 'team', icon: '👤', title: 'Role updated', desc: 'Alex Kim was promoted to Admin', time: '3 days ago', read: true },
    { id: 'n8', type: 'system', icon: '📊', title: 'Weekly report ready', desc: 'Your weekly analytics digest is available', time: '4 days ago', read: true },
    { id: 'n9', type: 'security', icon: '🔒', title: 'Password changed', desc: 'Your account password was updated', time: '1 week ago', read: true },
    { id: 'n10', type: 'billing', icon: '💰', title: 'Subscription renewed', desc: 'Pro Plan renewed for $29/mo', time: '1 week ago', read: true }
  ],

  /* ── INTEGRATIONS ── */
  integrations: [
    { name: 'Slack', icon: '💬', desc: 'Send notifications and updates to Slack', connected: true },
    { name: 'GitHub', icon: '🐙', desc: 'Sync repos, issues, and pull requests', connected: true },
    { name: 'Stripe', icon: '💳', desc: 'Process payments and manage subscriptions', connected: true },
    { name: 'Google Analytics', icon: '📊', desc: 'Import traffic and conversion data', connected: false },
    { name: 'Mailchimp', icon: '📧', desc: 'Sync contacts and email campaigns', connected: false },
    { name: 'Zapier', icon: '⚡', desc: 'Automate workflows with 5000+ apps', connected: false },
    { name: 'Jira', icon: '📋', desc: 'Sync project tracking and issues', connected: false },
    { name: 'HubSpot', icon: '🔶', desc: 'CRM and marketing automation', connected: false },
    { name: 'Salesforce', icon: '☁️', desc: 'Enterprise CRM integration', connected: false }
  ],

  /* ── COMMAND PALETTE ITEMS ── */
  commands: [
    { group: 'Navigation', items: [
      { label: 'Dashboard', icon: '📊', action: 'nav', href: 'index.html', shortcut: 'Ctrl+1' },
      { label: 'Data Tables', icon: '📋', action: 'nav', href: 'tables.html', shortcut: 'Ctrl+2' },
      { label: 'Contacts', icon: '👤', action: 'nav', href: 'contacts.html', shortcut: 'Ctrl+3' },
      { label: 'Pipeline', icon: '🔀', action: 'nav', href: 'pipeline.html', shortcut: '' },
      { label: 'Analytics', icon: '📈', action: 'nav', href: 'analytics.html', shortcut: '' },
      { label: 'Finance', icon: '💰', action: 'nav', href: 'finance.html', shortcut: '' },
      { label: 'Invoices', icon: '🧾', action: 'nav', href: 'invoices.html', shortcut: '' },
      { label: 'Settings', icon: '⚙️', action: 'nav', href: 'settings.html', shortcut: '' },
      { label: 'Notifications', icon: '🔔', action: 'nav', href: 'notifications.html', shortcut: '' },
      { label: 'Team', icon: '👥', action: 'nav', href: 'team.html', shortcut: '' }
    ]},
    { group: 'Actions', items: [
      { label: 'Create Invoice', icon: '➕', action: 'toast', msg: 'Opening invoice builder...', shortcut: 'Ctrl+N' },
      { label: 'Add Contact', icon: '➕', action: 'toast', msg: 'Opening contact form...', shortcut: '' },
      { label: 'Export Data', icon: '↗', action: 'toast', msg: 'Exporting data...', shortcut: 'Ctrl+E' },
      { label: 'Toggle Theme', icon: '🌓', action: 'theme', shortcut: '' }
    ]}
  ]
};

/* ── HELPER FUNCTIONS ── */
function formatCurrency(n) {
  return '$' + n.toLocaleString('en-US');
}
function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}
function escapeHTML(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
