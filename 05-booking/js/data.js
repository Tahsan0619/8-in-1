const DATA = {
  brand: 'BookIt',
  tagline: 'Book Anything, Anywhere',
  heroDesc: 'Find and book the best local services, restaurants, clinics, and more — all in one place.',
  categories: [
    { id: 'spa', name: 'Spa & Wellness', icon: '🧖', count: 48 },
    { id: 'fitness', name: 'Fitness', icon: '💪', count: 36 },
    { id: 'dining', name: 'Dining', icon: '🍽️', count: 124 },
    { id: 'medical', name: 'Medical', icon: '🏥', count: 52 },
    { id: 'beauty', name: 'Beauty', icon: '💇', count: 64 },
    { id: 'repair', name: 'Home Services', icon: '🔧', count: 41 },
    { id: 'education', name: 'Tutoring', icon: '📚', count: 29 },
    { id: 'photography', name: 'Photography', icon: '📷', count: 18 }
  ],
  howItWorks: [
    { step: 1, title: 'Search & Discover', desc: 'Browse through hundreds of local services or search by category, location, and availability.' },
    { step: 2, title: 'Pick a Time', desc: 'Choose your preferred date and time slot. See real-time availability and book instantly.' },
    { step: 3, title: 'Confirm & Go', desc: 'Receive instant confirmation via SMS. Show up and enjoy your experience.' }
  ],
  services: [
    {
      id: 'serenity-spa',
      name: 'Serenity Day Spa',
      category: 'spa',
      provider: { name: 'Maya Chen', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop', since: 'Member since 2021', response: 'Usually responds in 15 min' },
      rating: 4.9, reviews: 128,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop'
      ],
      badge: 'Top Rated',
      location: { lat: 23.7808, lng: 90.4065, address: 'Gulshan-2, Dhaka' },
      distance: '1.2 km',
      desc: 'Experience the ultimate relaxation at Serenity Day Spa. Our expert therapists combine traditional techniques with modern wellness practices for a truly transformative experience.',
      features: ['Certified therapists', 'Premium organic products', 'Private treatment rooms', 'Complimentary herbal tea', 'Free parking'],
      pricing: [
        { id: 'swedish', name: 'Swedish Massage', duration: '60 min', price: 3500 },
        { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '90 min', price: 5000 },
        { id: 'hot-stone', name: 'Hot Stone Therapy', duration: '75 min', price: 4500 },
        { id: 'couples', name: 'Couples Package', duration: '120 min', price: 8000 }
      ],
      addons: [
        { name: 'Aromatherapy', price: 500 },
        { name: 'Scalp Treatment', price: 800 }
      ],
      availableDates: [3,4,5,7,8,10,11,12,14,15,17,18,19,21,22,24,25,26,28,29],
      slots: {
        morning: ['09:00','09:30','10:00','10:30','11:00','11:30'],
        afternoon: ['13:00','13:30','14:00','14:30','15:00','15:30','16:00'],
        evening: ['17:00','17:30','18:00','18:30','19:00']
      },
      bookedSlots: ['10:00','14:00','17:30'],
      reviewList: [
        { name: 'Sarah K.', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', stars: 5, date: '2 weeks ago', text: 'Absolutely amazing experience! Maya is incredibly skilled. The hot stone therapy was the best I\'ve ever had.' },
        { name: 'James L.', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', stars: 5, date: '1 month ago', text: 'Beautiful ambiance, professional service, and great value. Will definitely be coming back.' },
        { name: 'Priya R.', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', stars: 4, date: '1 month ago', text: 'Great massage, only wish it was a bit longer. The complimentary tea was a nice touch!' }
      ],
      ratingDist: { 5: 72, 4: 38, 3: 12, 2: 4, 1: 2 }
    },
    {
      id: 'elite-fitness',
      name: 'Elite Fitness Studio',
      category: 'fitness',
      provider: { name: 'Rahim Ahmed', photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop', since: 'Member since 2020', response: 'Usually responds in 30 min' },
      rating: 4.7, reviews: 89,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop'
      ],
      badge: 'Popular',
      location: { lat: 23.7715, lng: 90.4060, address: 'Banani, Dhaka' },
      distance: '2.4 km',
      desc: 'State-of-the-art fitness facility with personal training, group classes, and nutrition counseling. Transform your body and mind.',
      features: ['Personal trainers', 'Group classes', 'Nutrition plans', 'Shower & locker rooms', 'First session free'],
      pricing: [
        { id: 'pt-single', name: 'Personal Training (1-on-1)', duration: '60 min', price: 2500 },
        { id: 'group', name: 'Group HIIT Class', duration: '45 min', price: 800 },
        { id: 'yoga', name: 'Yoga Session', duration: '60 min', price: 1200 },
        { id: 'nutrition', name: 'Nutrition Consultation', duration: '30 min', price: 1500 }
      ],
      addons: [
        { name: 'Body Composition Analysis', price: 300 },
        { name: 'Recovery Shake', price: 200 }
      ],
      availableDates: [2,3,4,5,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25],
      slots: {
        morning: ['06:00','06:30','07:00','07:30','08:00','08:30','09:00'],
        afternoon: ['12:00','12:30','13:00','14:00','14:30','15:00'],
        evening: ['17:00','17:30','18:00','18:30','19:00','19:30','20:00']
      },
      bookedSlots: ['07:00','12:30','18:00'],
      reviewList: [
        { name: 'Tom B.', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', stars: 5, date: '1 week ago', text: 'Coach Rahim really knows his stuff. Lost 10kg in 3 months with his program!' },
        { name: 'Nina S.', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', stars: 4, date: '3 weeks ago', text: 'Great facility, clean equipment. The group classes are really fun and motivating.' }
      ],
      ratingDist: { 5: 48, 4: 28, 3: 8, 2: 3, 1: 2 }
    },
    {
      id: 'glow-beauty',
      name: 'Glow Beauty Lounge',
      category: 'beauty',
      provider: { name: 'Fatima Akter', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop', since: 'Member since 2022', response: 'Usually responds in 10 min' },
      rating: 4.8, reviews: 95,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop'
      ],
      badge: 'Featured',
      location: { lat: 23.7945, lng: 90.4140, address: 'Baridhara, Dhaka' },
      distance: '3.1 km',
      desc: 'Your one-stop beauty destination. From haircuts to facials, our talented team ensures you leave looking and feeling your best.',
      features: ['Expert stylists', 'Imported products', 'Air-conditioned rooms', 'Online booking discount 10%', 'Bridal packages'],
      pricing: [
        { id: 'haircut', name: 'Haircut & Styling', duration: '45 min', price: 1500 },
        { id: 'facial', name: 'Gold Facial', duration: '60 min', price: 3000 },
        { id: 'mani-pedi', name: 'Mani-Pedi Combo', duration: '90 min', price: 2500 },
        { id: 'bridal', name: 'Bridal Makeup Package', duration: '180 min', price: 15000 }
      ],
      addons: [
        { name: 'Hair Spa Treatment', price: 1000 },
        { name: 'Eyebrow Threading', price: 200 }
      ],
      availableDates: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27],
      slots: {
        morning: ['10:00','10:30','11:00','11:30'],
        afternoon: ['13:00','13:30','14:00','14:30','15:00','15:30','16:00'],
        evening: ['17:00','17:30','18:00','18:30']
      },
      bookedSlots: ['11:00','15:00'],
      reviewList: [
        { name: 'Aisha M.', photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop', stars: 5, date: '3 days ago', text: 'Fatima did an incredible job on my wedding makeup. Everyone was complimenting me all day!' },
        { name: 'Luna P.', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop', stars: 5, date: '2 weeks ago', text: 'Best facial I\'ve ever had. My skin felt so refreshed and glowing for days.' }
      ],
      ratingDist: { 5: 58, 4: 25, 3: 8, 2: 3, 1: 1 }
    },
    {
      id: 'shutterbug',
      name: 'ShutterBug Studios',
      category: 'photography',
      provider: { name: 'Karim Hasan', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop', since: 'Member since 2019', response: 'Usually responds in 1 hour' },
      rating: 4.9, reviews: 67,
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=400&h=300&fit=crop'
      ],
      badge: 'Premium',
      location: { lat: 23.7508, lng: 90.3920, address: 'Dhanmondi, Dhaka' },
      distance: '4.6 km',
      desc: 'Professional photography and videography services for weddings, events, portraits, and commercial projects. Award-winning quality.',
      features: ['Award-winning photographer', '4K video', 'Drone shots', 'Same-day preview', 'Online gallery delivery'],
      pricing: [
        { id: 'portrait', name: 'Portrait Session', duration: '60 min', price: 5000 },
        { id: 'event', name: 'Event Coverage', duration: '4 hours', price: 25000 },
        { id: 'wedding', name: 'Wedding Photography', duration: 'Full day', price: 75000 },
        { id: 'product', name: 'Product Photography', duration: '2 hours', price: 10000 }
      ],
      addons: [
        { name: 'Extra Hour Coverage', price: 5000 },
        { name: 'Photo Album (30 pages)', price: 8000 }
      ],
      availableDates: [5,6,7,12,13,14,19,20,21,26,27,28],
      slots: {
        morning: ['09:00','10:00','11:00'],
        afternoon: ['13:00','14:00','15:00','16:00'],
        evening: ['17:00','18:00']
      },
      bookedSlots: ['10:00','14:00'],
      reviewList: [
        { name: 'Rifat & Sadia', photo: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?w=100&h=100&fit=crop', stars: 5, date: '1 week ago', text: 'Karim captured our wedding beautifully. Every photo tells a story. We are so grateful!' },
        { name: 'David H.', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', stars: 5, date: '2 months ago', text: 'Absolutely professional. The product shots he took increased our online sales by 40%!' }
      ],
      ratingDist: { 5: 52, 4: 10, 3: 3, 2: 1, 1: 1 }
    },
    {
      id: 'fixmaster',
      name: 'FixMaster Home Services',
      category: 'repair',
      provider: { name: 'Arif Rahman', photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop', since: 'Member since 2020', response: 'Usually responds in 20 min' },
      rating: 4.6, reviews: 214,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop'
      ],
      badge: 'Verified',
      location: { lat: 23.7550, lng: 90.3760, address: 'Mirpur, Dhaka' },
      distance: '5.8 km',
      desc: 'Reliable and affordable home repair and maintenance services. Plumbing, electrical, carpentry, painting — we fix it all.',
      features: ['Licensed technicians', 'Same-day service', '90-day warranty', 'Transparent pricing', 'Background-checked staff'],
      pricing: [
        { id: 'plumbing', name: 'Plumbing Repair', duration: 'Per visit', price: 1500 },
        { id: 'electrical', name: 'Electrical Work', duration: 'Per visit', price: 1200 },
        { id: 'painting', name: 'Room Painting', duration: 'Per room', price: 8000 },
        { id: 'ac-service', name: 'AC Servicing', duration: '60 min', price: 2000 }
      ],
      addons: [
        { name: 'Emergency Surcharge', price: 500 },
        { name: 'Parts & Materials', price: 0 }
      ],
      availableDates: [1,2,3,4,5,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30],
      slots: {
        morning: ['08:00','08:30','09:00','09:30','10:00','10:30','11:00'],
        afternoon: ['12:00','12:30','13:00','13:30','14:00','14:30','15:00'],
        evening: ['16:00','16:30','17:00']
      },
      bookedSlots: ['09:00','13:00','16:30'],
      reviewList: [
        { name: 'Kamal S.', photo: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=100&h=100&fit=crop', stars: 5, date: '5 days ago', text: 'Called at 9am, technician arrived by 11am. Fixed the leak in no time. Very professional!' },
        { name: 'Meher N.', photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop', stars: 4, date: '2 weeks ago', text: 'Good service overall. AC works like new again. Fair pricing compared to others.' }
      ],
      ratingDist: { 5: 110, 4: 64, 3: 24, 2: 10, 1: 6 }
    },
    {
      id: 'brainboost',
      name: 'BrainBoost Tutoring',
      category: 'education',
      provider: { name: 'Dr. Hasina Begum', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop', since: 'Member since 2021', response: 'Usually responds in 45 min' },
      rating: 4.8, reviews: 56,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop'
      ],
      badge: 'Expert',
      location: { lat: 23.7890, lng: 90.4000, address: 'Mohakhali, Dhaka' },
      distance: '1.8 km',
      desc: 'Expert private tutoring for O-Level, A-Level, and university entrance exams. Proven track record of student success with personalized learning plans.',
      features: ['PhD-qualified tutors', 'Personalized curriculum', 'Progress tracking', 'Free assessment test', 'Online & in-person'],
      pricing: [
        { id: 'single', name: '1-on-1 Tutoring', duration: '60 min', price: 2000 },
        { id: 'group', name: 'Group Session (max 5)', duration: '90 min', price: 1000 },
        { id: 'test-prep', name: 'Test Prep Intensive', duration: '120 min', price: 3500 },
        { id: 'assessment', name: 'Academic Assessment', duration: '45 min', price: 0 }
      ],
      addons: [
        { name: 'Study Materials Package', price: 500 },
        { name: 'Progress Report', price: 300 }
      ],
      availableDates: [1,2,4,5,7,8,9,11,12,14,15,16,18,19,21,22,23,25,26,28,29,30],
      slots: {
        morning: ['09:00','10:00','11:00'],
        afternoon: ['14:00','15:00','16:00'],
        evening: ['17:00','18:00','19:00','20:00']
      },
      bookedSlots: ['10:00','16:00','19:00'],
      reviewList: [
        { name: 'Mr. & Mrs. Khan', photo: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=100&h=100&fit=crop', stars: 5, date: '1 week ago', text: 'Our son\'s grades improved dramatically. Dr. Hasina\'s teaching method is exceptional.' },
        { name: 'Tanvir A.', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', stars: 5, date: '1 month ago', text: 'Got into my dream university! The test prep sessions were incredibly focused and effective.' }
      ],
      ratingDist: { 5: 38, 4: 12, 3: 4, 2: 1, 1: 1 }
    }
  ],
  restaurants: [
    {
      id: 'spice-garden',
      name: 'Spice Garden',
      cuisine: 'Bengali & Indian',
      rating: 4.7,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
      deliveryTime: '30-40 min',
      deliveryFee: 60,
      minOrder: 300,
      address: 'Gulshan-1, Dhaka',
      tables: [
        { id: 't1', seats: 2, available: true },
        { id: 't2', seats: 4, available: true },
        { id: 't3', seats: 4, available: false },
        { id: 't4', seats: 6, available: true },
        { id: 't5', seats: 8, available: false }
      ],
      menu: {
        starters: [
          { id: 'm1', name: 'Chicken Tikka', desc: 'Tender marinated chicken pieces grilled in tandoor', price: 320, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop', popular: true },
          { id: 'm2', name: 'Vegetable Samosa (4pc)', desc: 'Crispy pastry filled with spiced potatoes and peas', price: 150, image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=200&h=200&fit=crop', popular: false },
          { id: 'm3', name: 'Fish Pakora', desc: 'Battered and fried fish with mint chutney', price: 280, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop', popular: false },
          { id: 'm4', name: 'Paneer Tikka', desc: 'Grilled cottage cheese with bell peppers', price: 290, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200&h=200&fit=crop', popular: true }
        ],
        mains: [
          { id: 'm5', name: 'Butter Chicken', desc: 'Rich and creamy tomato-based curry with tender chicken', price: 450, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop', popular: true },
          { id: 'm6', name: 'Mutton Biryani', desc: 'Fragrant basmati rice layered with spiced mutton', price: 520, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop', popular: true },
          { id: 'm7', name: 'Hilsha Fish Curry', desc: 'Traditional Bengali hilsha in mustard gravy', price: 580, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop', popular: false },
          { id: 'm8', name: 'Palak Paneer', desc: 'Cottage cheese in creamy spinach sauce', price: 380, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop', popular: false },
          { id: 'm9', name: 'Chicken Korma', desc: 'Mild and aromatic yogurt based chicken curry', price: 420, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=200&fit=crop', popular: false }
        ],
        sides: [
          { id: 'm10', name: 'Garlic Naan', desc: 'Soft naan bread with garlic and butter', price: 80, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=200&fit=crop', popular: true },
          { id: 'm11', name: 'Steamed Basmati Rice', desc: 'Fluffy long-grain basmati rice', price: 100, image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=200&h=200&fit=crop', popular: false },
          { id: 'm12', name: 'Raita', desc: 'Cooling yogurt with cucumber and spices', price: 80, image: 'https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?w=200&h=200&fit=crop', popular: false }
        ],
        desserts: [
          { id: 'm13', name: 'Gulab Jamun (3pc)', desc: 'Deep-fried milk dumplings soaked in sugar syrup', price: 180, image: 'https://images.unsplash.com/photo-1666190070039-b576b05ea16c?w=200&h=200&fit=crop', popular: true },
          { id: 'm14', name: 'Mango Lassi', desc: 'Chilled yogurt drink with fresh mango', price: 150, image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=200&h=200&fit=crop', popular: false },
          { id: 'm15', name: 'Mishti Doi', desc: 'Traditional Bengali sweet yogurt', price: 120, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop', popular: false }
        ]
      }
    }
  ],
  doctors: [
    {
      id: 'dr-khan',
      name: 'Dr. Anwar Khan',
      specialty: 'General Medicine',
      qualifications: 'MBBS, MD (Internal Medicine)',
      experience: '15 years',
      languages: ['English', 'Bengali'],
      fee: 1500,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
      available: true,
      nextSlot: '10:30 AM Today',
      bio: 'Dr. Anwar Khan is a highly experienced internal medicine specialist with expertise in chronic disease management, preventive health, and diagnostic medicine.',
      slots: {
        Sun: ['10:00','10:30','11:00','11:30','15:00','15:30','16:00'],
        Mon: ['10:00','10:30','11:00','15:00','15:30','16:00','16:30'],
        Tue: ['09:00','09:30','10:00','10:30','14:00','14:30','15:00'],
        Wed: ['10:00','10:30','11:00','11:30','15:00','15:30','16:00'],
        Thu: ['09:00','09:30','10:00','14:00','14:30','15:00']
      },
      bookedSlots: ['10:30','15:00'],
      reviewList: [
        { name: 'Rasel M.', stars: 5, text: 'Very thorough and caring doctor. Takes time to explain everything clearly.' },
        { name: 'Nasima B.', stars: 5, text: 'Dr. Khan helped manage my diabetes effectively. Highly recommended!' }
      ]
    },
    {
      id: 'dr-sultana',
      name: 'Dr. Taslima Sultana',
      specialty: 'Dermatology',
      qualifications: 'MBBS, DDV, Fellowship (Cosmetic Dermatology)',
      experience: '12 years',
      languages: ['English', 'Bengali', 'Hindi'],
      fee: 2000,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
      available: true,
      nextSlot: '2:00 PM Today',
      bio: 'Dr. Sultana specializes in medical and cosmetic dermatology, treating conditions from acne to complex skin disorders with the latest techniques.',
      slots: {
        Sun: ['14:00','14:30','15:00','15:30','16:00','16:30'],
        Mon: ['10:00','10:30','11:00','14:00','14:30','15:00'],
        Tue: [],
        Wed: ['14:00','14:30','15:00','15:30','16:00'],
        Thu: ['10:00','10:30','11:00','14:00','14:30']
      },
      bookedSlots: ['14:30','10:30'],
      reviewList: [
        { name: 'Ayesha T.', stars: 5, text: 'My acne cleared up completely with her treatment plan. She is incredibly knowledgeable.' },
        { name: 'Faisal R.', stars: 4, text: 'Good consultation, minimal waiting time. Treatment is effective.' }
      ]
    },
    {
      id: 'dr-hossain',
      name: 'Dr. Iqbal Hossain',
      specialty: 'Cardiology',
      qualifications: 'MBBS, MD (Cardiology), FACC',
      experience: '20 years',
      languages: ['English', 'Bengali'],
      fee: 2500,
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop',
      available: true,
      nextSlot: 'Tomorrow 9:00 AM',
      bio: 'One of the leading cardiologists in the country. Dr. Hossain specializes in interventional cardiology and has performed over 5,000 procedures.',
      slots: {
        Sun: ['09:00','09:30','10:00','10:30'],
        Mon: ['09:00','09:30','10:00'],
        Tue: ['09:00','09:30','10:00','10:30','14:00','14:30'],
        Wed: [],
        Thu: ['09:00','09:30','10:00','14:00','14:30']
      },
      bookedSlots: ['09:30'],
      reviewList: [
        { name: 'Jahan I.', stars: 5, text: 'Dr. Hossain literally saved my life. His expertise in cardiac care is unmatched.' },
        { name: 'Rupa K.', stars: 5, text: 'Very experienced and reassuring. Explained every detail of my treatment plan.' }
      ]
    },
    {
      id: 'dr-nahar',
      name: 'Dr. Lubna Nahar',
      specialty: 'Pediatrics',
      qualifications: 'MBBS, DCH, MD (Pediatrics)',
      experience: '10 years',
      languages: ['English', 'Bengali'],
      fee: 1200,
      rating: 4.7,
      reviews: 224,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
      available: true,
      nextSlot: '11:00 AM Today',
      bio: 'Dr. Nahar is a compassionate pediatrician dedicated to children\'s health and development. She provides comprehensive care from newborns to adolescents.',
      slots: {
        Sun: ['09:00','09:30','10:00','10:30','11:00','15:00','15:30','16:00'],
        Mon: ['09:00','09:30','10:00','10:30','11:00','15:00','15:30'],
        Tue: ['09:00','09:30','10:00','15:00','15:30','16:00'],
        Wed: ['09:00','09:30','10:00','10:30','11:00','15:00','15:30','16:00'],
        Thu: ['09:00','09:30','10:00','10:30']
      },
      bookedSlots: ['10:00','15:30'],
      reviewList: [
        { name: 'Tahmina K.', stars: 5, text: 'Dr. Nahar is wonderful with kids. My daughter actually looks forward to her checkups!' },
        { name: 'Sumon H.', stars: 4, text: 'Great with children, very patient and thorough. Slightly long wait times sometimes.' }
      ]
    }
  ],
  testimonials: [
    { text: 'BookIt made finding a great spa so easy! I booked a couples massage in under 2 minutes. The experience was perfect.', name: 'Nusrat Jahan', role: 'Regular User', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', stars: 5 },
    { text: 'As a service provider, BookIt has doubled my bookings. The platform is intuitive and the customer support is excellent.', name: 'Rahim Ahmed', role: 'Fitness Trainer', photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop', stars: 5 },
    { text: 'I love ordering from Spice Garden through BookIt. The restaurant mode with table reservation is a game-changer!', name: 'Meher Afroz', role: 'Food Lover', photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop', stars: 4 },
    { text: 'Booked my wedding photographer through BookIt. The reviews were genuine and helped me make the right choice.', name: 'Tanvir Hasan', role: 'Newlywed', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', stars: 5 }
  ],
  userBookings: [
    { id: 'BK-2024-001', service: 'Serenity Day Spa', serviceId: 'serenity-spa', option: 'Deep Tissue Massage', date: 'Jan 15, 2025', time: '10:30 AM', status: 'confirmed', price: 5000, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=200&h=120&fit=crop' },
    { id: 'BK-2024-002', service: 'Elite Fitness Studio', serviceId: 'elite-fitness', option: 'Personal Training', date: 'Jan 18, 2025', time: '07:30 AM', status: 'confirmed', price: 2500, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=120&fit=crop' },
    { id: 'BK-2024-003', service: 'Glow Beauty Lounge', serviceId: 'glow-beauty', option: 'Gold Facial', date: 'Jan 10, 2025', time: '02:00 PM', status: 'completed', price: 3000, image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=120&fit=crop' },
    { id: 'BK-2024-004', service: 'FixMaster Home Services', serviceId: 'fixmaster', option: 'AC Servicing', date: 'Dec 28, 2024', time: '09:00 AM', status: 'completed', price: 2000, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=120&fit=crop' },
    { id: 'BK-2024-005', service: 'ShutterBug Studios', serviceId: 'shutterbug', option: 'Portrait Session', date: 'Jan 5, 2025', time: '03:00 PM', status: 'cancelled', price: 5000, image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=200&h=120&fit=crop' }
  ],
  notifications: [
    { id: 'n1', icon: '✅', title: 'Booking Confirmed', body: 'Your appointment at Serenity Day Spa on Jan 15 is confirmed.', time: '2 hours ago', unread: true },
    { id: 'n2', icon: '⭐', title: 'Rate Your Experience', body: 'How was your visit to Glow Beauty Lounge? Leave a review!', time: '2 days ago', unread: true },
    { id: 'n3', icon: '🎉', title: 'Special Offer', body: 'Get 20% off your next booking at Elite Fitness Studio!', time: '3 days ago', unread: false },
    { id: 'n4', icon: '📅', title: 'Upcoming Appointment', body: 'Reminder: Personal Training session tomorrow at 7:30 AM.', time: '5 days ago', unread: false },
    { id: 'n5', icon: '❌', title: 'Booking Cancelled', body: 'Your Portrait Session at ShutterBug Studios has been cancelled.', time: '1 week ago', unread: false }
  ],
  providerData: {
    name: 'Maya Chen',
    business: 'Serenity Day Spa',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    kpis: {
      todayBookings: 8,
      weekRevenue: 42500,
      totalClients: 384,
      avgRating: 4.9
    },
    todaySchedule: [
      { time: '09:00 AM', client: 'Sarah K.', service: 'Swedish Massage', duration: '60 min', status: 'completed' },
      { time: '10:30 AM', client: 'James L.', service: 'Deep Tissue Massage', duration: '90 min', status: 'in-progress' },
      { time: '01:00 PM', client: 'Priya R.', service: 'Hot Stone Therapy', duration: '75 min', status: 'upcoming' },
      { time: '02:30 PM', client: 'Aisha M.', service: 'Couples Package', duration: '120 min', status: 'upcoming' },
      { time: '05:00 PM', client: 'Luna P.', service: 'Swedish Massage', duration: '60 min', status: 'upcoming' },
      { time: '06:30 PM', client: 'Nusrat J.', service: 'Hot Stone Therapy', duration: '75 min', status: 'upcoming' }
    ],
    weekAvailability: {
      Sun: { start: '09:00', end: '19:00', active: true },
      Mon: { start: '09:00', end: '19:00', active: true },
      Tue: { start: '09:00', end: '19:00', active: true },
      Wed: { start: '', end: '', active: false },
      Thu: { start: '09:00', end: '19:00', active: true },
      Fri: { start: '10:00', end: '18:00', active: true },
      Sat: { start: '10:00', end: '16:00', active: true }
    },
    earningsChart: [35000, 42500, 38000, 45000, 41000, 42500, 39000, 44000, 47000, 43000, 46000, 42500]
  }
};
