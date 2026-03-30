/* ========================================
   03-BLOG — "The Inkwell" Mock Data
   ======================================== */

const BLOG = {
  name: 'The Inkwell',
  tagline: 'Stories, Ideas & Insights',
  breakingNews: 'AI-Powered Development Tools Are Reshaping How We Code in 2025 — Full Analysis Inside',

  categories: [
    { slug: 'technology', name: 'Technology', color: 'tech', description: 'Deep dives into the technologies shaping our future.', count: 42 },
    { slug: 'design', name: 'Design', color: 'design', description: 'Visual thinking, UX patterns, and design culture.', count: 28 },
    { slug: 'culture', name: 'Culture', color: 'culture', description: 'How technology intersects with society and culture.', count: 19 },
    { slug: 'business', name: 'Business', color: 'business', description: 'Strategy, startups, and the business of tech.', count: 24 },
    { slug: 'science', name: 'Science', color: 'science', description: 'Scientific discoveries and research breakthroughs.', count: 15 },
    { slug: 'lifestyle', name: 'Lifestyle', color: 'lifestyle', description: 'Balancing life, work, creativity, and well-being.', count: 12 }
  ],

  tags: ['JavaScript','React','AI','Design Systems','UX Research','Startups','Remote Work','CSS','Web3','Machine Learning','Accessibility','TypeScript','Node.js','Product','Leadership','Open Source','Mobile','Performance','Security','Climate Tech'],

  authors: [
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      role: 'Senior Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      bio: 'Sarah covers the intersection of technology and society. Previously at Wired and MIT Technology Review, she brings a decade of experience unpacking complex tech stories for curious minds.',
      articles: 42,
      totalReads: '1.2M',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      id: 'marcus-johnson',
      name: 'Marcus Johnson',
      role: 'Design Columnist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Marcus is a design thinker and writer exploring how good design shapes products and experiences. He uses research to challenge how we approach design in the digital age.',
      articles: 28,
      totalReads: '680K',
      socials: { twitter: '#', dribbble: '#' }
    },
    {
      id: 'amira-patel',
      name: 'Amira Patel',
      role: 'Culture & Tech Writer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      bio: 'Amira explores the cultural impact of emerging technologies. Her essays have appeared in The Atlantic and Aeon.',
      articles: 19,
      totalReads: '420K',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      role: 'Business & Strategy Editor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      bio: 'David covers startups, venture capital, and business strategy. Former consultant turned journalist with a passion for data-driven storytelling.',
      articles: 24,
      totalReads: '530K',
      socials: { twitter: '#', linkedin: '#' }
    }
  ],

  posts: [
    {
      id: 'future-of-web-development-2025',
      title: 'The Future of Web Development: What Changes in 2025',
      excerpt: 'From server components to AI-assisted coding, the web development landscape is undergoing a fundamental shift. Here\'s what experienced developers need to know.',
      category: 'technology',
      tags: ['JavaScript', 'React', 'AI'],
      author: 'sarah-chen',
      date: 'Jan 22, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
      featured: true,
      trending: true,
      content: `<p class="drop-cap">The web development ecosystem has always evolved rapidly, but 2025 feels different. We're not just getting new frameworks or libraries — the fundamental way we build for the web is shifting beneath our feet.</p>
<p>Server components, edge computing, and AI-assisted development aren't just buzzwords anymore. They're reshaping daily workflows for millions of developers worldwide.</p>
<h2 id="server-components">The Rise of Server Components</h2>
<p>React Server Components have matured significantly. The ability to render components on the server while maintaining interactivity on the client has changed how we think about architecture. The boundary between frontend and backend continues to blur.</p>
<p>Frameworks like Next.js and Remix have embraced this paradigm, offering developers a unified model that reduces client-side JavaScript while improving performance.</p>
<h2 id="ai-coding">AI-Assisted Development</h2>
<p>GitHub Copilot was just the beginning. In 2025, AI coding assistants understand entire codebases, suggest architectural patterns, and can even detect security vulnerabilities in real-time. The developer's role is evolving from writing every line to directing and reviewing AI-generated code.</p>
<blockquote>The best developers in 2025 aren't necessarily the fastest coders — they're the ones who ask the best questions and make the best architectural decisions.</blockquote>
<h2 id="edge-computing">Edge Computing Goes Mainstream</h2>
<p>With platforms like Cloudflare Workers, Deno Deploy, and Vercel Edge Functions, running code at the edge is no longer experimental. Response times measured in single-digit milliseconds are becoming the norm, not the exception.</p>
<h2 id="whats-next">What's Next</h2>
<p>The developers who thrive will be those who embrace these changes while maintaining a strong foundation in web fundamentals. HTML, CSS, and JavaScript aren't going anywhere — but how we orchestrate them is evolving dramatically.</p>`,
      headings: [
        { id: 'server-components', text: 'The Rise of Server Components', level: 2 },
        { id: 'ai-coding', text: 'AI-Assisted Development', level: 2 },
        { id: 'edge-computing', text: 'Edge Computing Goes Mainstream', level: 2 },
        { id: 'whats-next', text: "What's Next", level: 2 }
      ]
    },
    {
      id: 'design-systems-at-scale',
      title: 'Building Design Systems That Actually Scale',
      excerpt: 'Most design systems fail not because of technical limitations, but because of organizational ones. Here\'s a battle-tested approach to building systems that grow with your team.',
      category: 'design',
      tags: ['Design Systems', 'CSS', 'UX Research'],
      author: 'marcus-johnson',
      date: 'Jan 20, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop',
      featured: false,
      trending: true,
      content: `<p class="drop-cap">After helping build design systems at three different companies, I've learned that the technology is the easy part. The hard part is getting people to actually use the system — and keep using it as the organization evolves.</p>
<p>Too many teams build a beautiful component library, launch it with fanfare, and then watch adoption plateau within months. The pattern is so common it should have a name.</p>
<h2 id="start-small">Start Embarrassingly Small</h2>
<p>The biggest mistake I see is trying to systematize everything at once. Start with your 5 most-used components. Get those absolutely right. Perfect the API, the documentation, the accessibility.</p>
<h2 id="governance">Governance Without Bureaucracy</h2>
<p>Every design system needs governance, but too many rules kill adoption faster than no rules at all. The sweet spot is a lightweight contribution model with clear ownership.</p>
<blockquote>A design system is only as good as its worst component. Better to have 20 excellent components than 200 mediocre ones.</blockquote>
<h2 id="measuring-success">Measuring What Matters</h2>
<p>Component adoption rate is just vanity. Measure time-to-build for new features, accessibility compliance, and designer-developer handoff friction. These metrics tell you if the system is actually working.</p>`,
      headings: [
        { id: 'start-small', text: 'Start Embarrassingly Small', level: 2 },
        { id: 'governance', text: 'Governance Without Bureaucracy', level: 2 },
        { id: 'measuring-success', text: 'Measuring What Matters', level: 2 }
      ]
    },
    {
      id: 'remote-work-culture-shift',
      title: 'The Great Remote Work Culture Shift Nobody Talks About',
      excerpt: 'Five years into the remote work revolution, the biggest changes aren\'t about Zoom fatigue or hybrid schedules — they\'re about how we define professional identity.',
      category: 'culture',
      tags: ['Remote Work', 'Leadership'],
      author: 'amira-patel',
      date: 'Jan 18, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
      featured: false,
      trending: true,
      content: `<p class="drop-cap">When the pandemic forced millions into remote work, the conversation centered on logistics: video calls, home offices, time zones. Five years later, a more profound shift has quietly taken root — one that touches the very core of how we think about work and identity.</p>
<h2 id="identity-shift">The Identity Decoupling</h2>
<p>For generations, "what do you do?" was answered with a company name. Now, increasingly, it's answered with a craft, a mission, or a portfolio of projects. The employer-as-identity model is eroding.</p>
<h2 id="async-culture">The Async-First Mindset</h2>
<p>The most effective remote teams have stopped trying to replicate the office online. Instead, they've embraced asynchronous communication as the default, reserving synchronous time for the moments that truly need it.</p>
<blockquote>The future of work isn't remote vs. office. It's intentional vs. accidental. The best teams are deliberate about when, where, and how they come together.</blockquote>
<h2 id="new-rituals">Building New Rituals</h2>
<p>Every culture needs rituals. Remote-first companies are inventing new ones: virtual coffee roulette, async standup threads, quarterly in-person offsites. The ritual matters less than the intention behind it.</p>`,
      headings: [
        { id: 'identity-shift', text: 'The Identity Decoupling', level: 2 },
        { id: 'async-culture', text: 'The Async-First Mindset', level: 2 },
        { id: 'new-rituals', text: 'Building New Rituals', level: 2 }
      ]
    },
    {
      id: 'startup-fundraising-2025',
      title: 'The New Rules of Startup Fundraising in 2025',
      excerpt: 'VC dynamics have fundamentally changed. Revenue-first thinking is back, and the metrics investors care about might surprise you.',
      category: 'business',
      tags: ['Startups', 'Leadership'],
      author: 'david-kim',
      date: 'Jan 16, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop',
      featured: false,
      trending: true,
      content: `<p class="drop-cap">The fundraising playbook that worked in 2021 is now a cautionary tale. Founders raising in 2025 face a fundamentally different landscape — one that, paradoxically, might produce better companies.</p>
<h2 id="revenue-first">Revenue Is the New Growth</h2>
<p>Investors have rediscovered an ancient concept: profitable growth. Burn multiples above 2x will get you ghosted. Efficient growth — measured by the "magic number" and payback periods — is what opens checkbooks.</p>
<h2 id="ai-premium">The AI Premium (and Its Limits)</h2>
<p>AI startups still command premium valuations, but investors have gotten smarter. They're distinguishing between AI-native products and GPT wrappers. Deep technical moats matter more than ever.</p>
<h2 id="founder-market-fit">Founder-Market Fit Matters More Than Ever</h2>
<p>Why you? This question, always important, has become the first filter. Domain expertise, unique insights, and a demonstrated obsession with the problem space separate funded founders from unfunded ones.</p>`,
      headings: [
        { id: 'revenue-first', text: 'Revenue Is the New Growth', level: 2 },
        { id: 'ai-premium', text: 'The AI Premium (and Its Limits)', level: 2 },
        { id: 'founder-market-fit', text: 'Founder-Market Fit Matters More Than Ever', level: 2 }
      ]
    },
    {
      id: 'css-has-selector-guide',
      title: 'CSS :has() Selector: A Complete Practical Guide',
      excerpt: 'The "parent selector" we\'ve wanted for decades is finally here. Let\'s explore real-world use cases that go far beyond selecting parent elements.',
      category: 'technology',
      tags: ['CSS', 'JavaScript'],
      author: 'sarah-chen',
      date: 'Jan 14, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">CSS developers have dreamed of a parent selector for over two decades. With :has(), that dream is not only realized — it's exceeded. This selector is far more powerful than just "select the parent."</p>
<h2 id="basics">The Basics</h2>
<p>At its simplest, :has() selects an element based on its descendants. But thinking of it as just a parent selector undersells its power.</p>
<pre><code>/* Style a card that contains an image */
.card:has(img) {
  padding: 0;
}

/* Style a form group with a required invalid input */
.form-group:has(input:invalid) {
  border-color: red;
}</code></pre>
<h2 id="advanced">Advanced Patterns</h2>
<p>Where :has() truly shines is in combination with other selectors and pseudo-classes. You can create responsive layouts that adapt based on content, not just viewport size.</p>
<h2 id="performance">Performance Considerations</h2>
<p>Complex :has() selectors can impact rendering performance. Browser engines have optimized significantly, but it's wise to keep your selectors as specific as possible.</p>`,
      headings: [
        { id: 'basics', text: 'The Basics', level: 2 },
        { id: 'advanced', text: 'Advanced Patterns', level: 2 },
        { id: 'performance', text: 'Performance Considerations', level: 2 }
      ]
    },
    {
      id: 'accessible-design-patterns',
      title: 'Accessible Design Patterns Every Developer Should Know',
      excerpt: 'Accessibility isn\'t an afterthought — it\'s a design pattern. These patterns will make your apps more usable for everyone, not just users with disabilities.',
      category: 'design',
      tags: ['Accessibility', 'UX Research', 'CSS'],
      author: 'marcus-johnson',
      date: 'Jan 12, 2025',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">Accessibility is often treated as a checklist — add ARIA labels, ensure contrast ratios, test with a screen reader. But true accessibility is a design mindset, not a compliance exercise.</p>
<h2 id="focus-management">Focus Management</h2>
<p>The most overlooked accessibility pattern is focus management. When content changes dynamically — modals opening, pages loading, form submissions — where does keyboard focus go?</p>
<h2 id="semantic-html">Semantic HTML: Your Secret Weapon</h2>
<p>Before reaching for ARIA, ask: is there a native HTML element that does this? Buttons, links, headings, landmarks — semantic HTML gives you accessibility for free.</p>
<blockquote>The best ARIA attribute is the one you don't need to use. Semantic HTML is always preferable.</blockquote>
<h2 id="testing">Testing With Real Users</h2>
<p>Automated testing catches about 30% of accessibility issues. The rest require human judgment. Include people with disabilities in your testing process — their insights are irreplaceable.</p>`,
      headings: [
        { id: 'focus-management', text: 'Focus Management', level: 2 },
        { id: 'semantic-html', text: 'Semantic HTML: Your Secret Weapon', level: 2 },
        { id: 'testing', text: 'Testing With Real Users', level: 2 }
      ]
    },
    {
      id: 'ai-content-creation-ethics',
      title: 'The Ethics of AI in Content Creation: Where Do We Draw the Line?',
      excerpt: 'As AI-generated content floods the internet, creators, publishers, and platforms face uncomfortable questions about authenticity, attribution, and value.',
      category: 'culture',
      tags: ['AI', 'Leadership'],
      author: 'amira-patel',
      date: 'Jan 10, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">When a major publication was caught running AI-generated articles without disclosure, the backlash was swift and severe. But the incident raised a more nuanced question: what role should AI play in content creation?</p>
<h2 id="spectrum">The Spectrum of AI Assistance</h2>
<p>There's a vast difference between using AI to brainstorm headlines and publishing an entirely AI-written article. The challenge is that most content falls somewhere in between, and we lack clear norms for disclosure.</p>
<h2 id="attribution">The Attribution Problem</h2>
<p>If an AI model trained on millions of human-written articles generates a paragraph, who deserves credit? The question of attribution becomes especially thorny when AI outputs closely resemble specific sources.</p>
<h2 id="path-forward">A Path Forward</h2>
<p>Transparency is the minimum standard. Publishers should disclose AI involvement. But beyond disclosure, we need new frameworks for thinking about value creation in an AI-augmented world.</p>`,
      headings: [
        { id: 'spectrum', text: 'The Spectrum of AI Assistance', level: 2 },
        { id: 'attribution', text: 'The Attribution Problem', level: 2 },
        { id: 'path-forward', text: 'A Path Forward', level: 2 }
      ]
    },
    {
      id: 'typescript-5-features',
      title: 'TypeScript 5: Features That Will Change How You Code',
      excerpt: 'The latest TypeScript release brings decorators, const type parameters, and refinement that make the type system more expressive than ever.',
      category: 'technology',
      tags: ['TypeScript', 'JavaScript'],
      author: 'sarah-chen',
      date: 'Jan 8, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">TypeScript 5 is not a revolution — it's a refinement. And that's exactly what mature languages need. The improvements are subtle but powerful, making the type system more expressive while reducing overhead.</p>
<h2 id="decorators">Standard Decorators</h2>
<p>After years of experimental decorator support, TypeScript 5 finally aligns with the TC39 Stage 3 decorators proposal. This means your decorators will work the same in TypeScript as they will (eventually) in vanilla JavaScript.</p>
<h2 id="const-params">Const Type Parameters</h2>
<p>The new const modifier for type parameters lets you infer literal types without the awkward "as const" assertions everywhere.</p>
<h2 id="speed">Speed Improvements</h2>
<p>TypeScript 5 is significantly faster — both in compilation and editor responsiveness. The team migrated to modules from namespaces internally, resulting in measurable performance gains.</p>`,
      headings: [
        { id: 'decorators', text: 'Standard Decorators', level: 2 },
        { id: 'const-params', text: 'Const Type Parameters', level: 2 },
        { id: 'speed', text: 'Speed Improvements', level: 2 }
      ]
    },
    {
      id: 'product-led-growth-playbook',
      title: 'Product-Led Growth: A Practical Playbook for SaaS Founders',
      excerpt: 'PLG isn\'t just about offering a free tier. It\'s a fundamental rethinking of how you acquire, activate, and retain users through product experience.',
      category: 'business',
      tags: ['Startups', 'Product'],
      author: 'david-kim',
      date: 'Jan 6, 2025',
      readTime: '14 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">Product-led growth has become the default go-to-market strategy for modern SaaS. But despite its popularity, most companies implement it poorly — treating it as "add a free plan" rather than a fundamental business model shift.</p>
<h2 id="plg-defined">What PLG Actually Means</h2>
<p>At its core, PLG means your product is the primary driver of acquisition, conversion, and expansion. Marketing and sales support the product experience — not the other way around.</p>
<h2 id="activation">The Activation Moment</h2>
<p>Every successful PLG company has identified their "aha moment" — the point where a user first experiences core value. Finding and optimizing this moment is the single most important thing you can do.</p>
<h2 id="monetization">Monetization: When Free Becomes Paid</h2>
<p>The free-to-paid conversion is an art. The best PLG companies create natural upgrade triggers — moments where the user wants more, not where they hit an arbitrary wall.</p>`,
      headings: [
        { id: 'plg-defined', text: 'What PLG Actually Means', level: 2 },
        { id: 'activation', text: 'The Activation Moment', level: 2 },
        { id: 'monetization', text: 'Monetization: When Free Becomes Paid', level: 2 }
      ]
    },
    {
      id: 'climate-tech-innovation',
      title: 'Climate Tech: The Innovations That Could Actually Make a Difference',
      excerpt: 'Beyond the hype, these are the climate technologies with genuine potential to bend the emissions curve.',
      category: 'science',
      tags: ['Climate Tech', 'Machine Learning'],
      author: 'amira-patel',
      date: 'Jan 4, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">Climate tech investment hit $40 billion in 2024, but not all innovations are created equal. Some are genuinely transformative; others are expensive distractions. Let's separate signal from noise.</p>
<h2 id="energy-storage">Next-Gen Energy Storage</h2>
<p>Lithium-ion batteries changed the game, but they're not the endgame. Iron-air batteries, solid-state technologies, and gravity-based storage systems offer the long-duration storage the grid desperately needs.</p>
<h2 id="carbon-capture">Direct Air Capture: Promise vs. Reality</h2>
<p>Carbon capture technology works. The question is whether it can scale economically. Current costs of $400-600 per ton need to drop to $100 for meaningful impact.</p>
<h2 id="green-hydrogen">The Green Hydrogen Economy</h2>
<p>Green hydrogen — produced from renewable electricity — could decarbonize industries that electricity alone can't: steel, cement, shipping, aviation. The infrastructure buildout is massive but underway.</p>`,
      headings: [
        { id: 'energy-storage', text: 'Next-Gen Energy Storage', level: 2 },
        { id: 'carbon-capture', text: 'Direct Air Capture: Promise vs. Reality', level: 2 },
        { id: 'green-hydrogen', text: 'The Green Hydrogen Economy', level: 2 }
      ]
    },
    {
      id: 'mindful-productivity',
      title: 'Mindful Productivity: Working Less, Achieving More',
      excerpt: 'The paradox of productivity: the harder you chase it, the more it eludes you. Here\'s a different approach rooted in intention, not intensity.',
      category: 'lifestyle',
      tags: ['Remote Work', 'Leadership'],
      author: 'amira-patel',
      date: 'Jan 2, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">We've been sold a lie about productivity. More hours don't equal more output. More tools don't equal more focus. The most productive people I know share one trait: they're ruthless about what they don't do.</p>
<h2 id="energy-management">Energy Management Over Time Management</h2>
<p>Your day has natural rhythms. Deep work in the morning, routine tasks after lunch, creative thinking in the evening. Working with your energy — not against it — is the foundation of mindful productivity.</p>
<h2 id="single-tasking">The Power of Single-Tasking</h2>
<p>Context switching costs 23 minutes per switch. In a day full of meetings and messages, you might never fully focus. Blocking 2-3 hours for single-tasking can transform your output.</p>
<h2 id="rest">Rest as a Productivity Strategy</h2>
<p>Deliberate rest — walks, naps, disconnection — isn't the opposite of productivity. It's the foundation of it. Your brain does its best synthesis and creative work during downtime.</p>`,
      headings: [
        { id: 'energy-management', text: 'Energy Management Over Time Management', level: 2 },
        { id: 'single-tasking', text: 'The Power of Single-Tasking', level: 2 },
        { id: 'rest', text: 'Rest as a Productivity Strategy', level: 2 }
      ]
    },
    {
      id: 'web-performance-budgets',
      title: 'Performance Budgets: How to Set Them and Actually Stick to Them',
      excerpt: 'Every kilobyte matters. Learn how to establish meaningful performance budgets and build guardrails that prevent regression.',
      category: 'technology',
      tags: ['Performance', 'JavaScript'],
      author: 'sarah-chen',
      date: 'Dec 30, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      featured: false,
      trending: false,
      content: `<p class="drop-cap">Performance budgets are like dietary budgets — everyone agrees they're important, few people actually maintain them. The problem isn't awareness; it's accountability and process.</p>
<h2 id="setting-budgets">Setting Meaningful Budgets</h2>
<p>Don't start with industry benchmarks. Start with your users. What devices do they use? What networks? A performance budget for a US B2B SaaS is very different from a consumer app targeting emerging markets.</p>
<h2 id="ci-enforcement">Enforcing in CI/CD</h2>
<p>A budget without enforcement is just a suggestion. Integrate Lighthouse CI, bundlesize, or similar tools into your CI pipeline. Fail the build when budgets are exceeded.</p>
<h2 id="culture">Building a Performance Culture</h2>
<p>Tools enforce compliance. Culture prevents violations in the first place. Make performance visible: dashboards, weekly reports, performance reviews in sprint retrospectives.</p>`,
      headings: [
        { id: 'setting-budgets', text: 'Setting Meaningful Budgets', level: 2 },
        { id: 'ci-enforcement', text: 'Enforcing in CI/CD', level: 2 },
        { id: 'culture', text: 'Building a Performance Culture', level: 2 }
      ]
    }
  ],

  podcast: {
    name: 'The Inkwell Podcast',
    description: 'Weekly conversations about technology, design, and the culture around building digital products. Join our editors as they unpack the stories behind the stories.',
    cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop',
    episodes: [
      { id: 'ep-12', number: 12, title: 'Why Every Developer Should Learn Design', date: 'Jan 20, 2025', duration: '42:15', description: 'Marcus Johnson joins to discuss the growing overlap between development and design, and why cross-functional skills matter more than ever.' },
      { id: 'ep-11', number: 11, title: 'The State of Remote Work in 2025', date: 'Jan 13, 2025', duration: '38:40', description: 'Amira Patel shares insights from her reporting on how remote work culture has evolved since the pandemic.' },
      { id: 'ep-10', number: 10, title: 'AI Code Assistants: Friend or Foe?', date: 'Jan 6, 2025', duration: '51:20', description: 'Sarah Chen and David Kim debate whether AI coding tools are making us better or lazier developers.' },
      { id: 'ep-9', number: 9, title: 'Building Products That Last', date: 'Dec 30, 2024', duration: '45:00', description: 'What separates products that endure from those that flame out? We explore durability in software.' },
      { id: 'ep-8', number: 8, title: 'The Climate Tech Bet', date: 'Dec 23, 2024', duration: '36:50', description: 'A deep dive into the technologies and companies trying to solve the climate crisis through innovation.' },
      { id: 'ep-7', number: 7, title: 'Typography on the Web: Past, Present, Future', date: 'Dec 16, 2024', duration: '33:10', description: 'From web-safe fonts to variable fonts and beyond. How typography on the web has evolved.' }
    ]
  },

  comments: [
    { id: 'c1', postId: 'future-of-web-development-2025', name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=80&h=80&fit=crop&crop=face', text: 'Great analysis! I\'ve been using server components for 6 months now and the DX improvement is real. The mental model takes getting used to though.', time: '2 hours ago', likes: 12, replies: [
      { id: 'c1r1', name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', text: 'Thanks Alex! Agree on the mental model — it\'s a paradigm shift. Have you tried the new streaming patterns?', time: '1 hour ago', likes: 5 }
    ]},
    { id: 'c2', postId: 'future-of-web-development-2025', name: 'Priya Sharma', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face', text: 'I wonder how this affects smaller teams. These new paradigms seem to favor larger orgs with dedicated infrastructure teams.', time: '4 hours ago', likes: 8, replies: [] },
    { id: 'c3', postId: 'future-of-web-development-2025', name: 'Tom Watson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', text: 'The AI section resonates. I\'ve gone from being skeptical to using Copilot daily. It doesn\'t write perfect code, but it eliminates boilerplate incredibly well.', time: '6 hours ago', likes: 15, replies: [] },
    { id: 'c4', postId: 'future-of-web-development-2025', name: 'Maya Lin', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', text: 'Edge computing is where it gets really interesting. We deployed our API to the edge and saw P95 latency drop from 200ms to 12ms globally.', time: '8 hours ago', likes: 22, replies: [
      { id: 'c4r1', name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', text: 'Those numbers are impressive! What platform are you using?', time: '7 hours ago', likes: 3 }
    ]},
    { id: 'c5', postId: 'future-of-web-development-2025', name: 'Jordan Brooks', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', text: 'Solid overview. I\'d add WebAssembly to the list — it\'s going to be huge for compute-heavy web apps in 2025.', time: '12 hours ago', likes: 9, replies: [] }
  ]
};
