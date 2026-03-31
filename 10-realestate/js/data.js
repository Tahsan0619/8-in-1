/* ============================================
   10-realestate  —  Mock Data
   ============================================ */

const RE = {
  /* ---- Current User ---- */
  currentUser: {
    id: 'u1',
    name: 'Tahsan Islam',
    email: 'tahsan@homescout.bd',
    phone: '+880 1712-345678',
    avatar: null,
    initials: 'TI',
    role: 'buyer',
    savedProperties: ['p1','p3','p7','p10'],
    savedSearches: [
      { id: 'ss1', label: 'Gulshan 3BR under 1Cr', filters: { area: 'Gulshan', beds: 3, maxPrice: 10000000 }, matches: 14, alerts: true },
      { id: 'ss2', label: 'Uttara apartments', filters: { area: 'Uttara', type: 'Apartment' }, matches: 38, alerts: false }
    ],
    compareList: ['p1','p5']
  },

  /* ---- Site Info ---- */
  site: { name: 'HomeScout', tagline: 'Find Your Perfect Home in Bangladesh', currency: 'BDT' },

  /* ---- Areas ---- */
  areas: [
    { id: 'a1', name: 'Gulshan', city: 'Dhaka', listings: 245, avgPrice: 8500000, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { id: 'a2', name: 'Dhanmondi', city: 'Dhaka', listings: 189, avgPrice: 6200000, img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop' },
    { id: 'a3', name: 'Uttara', city: 'Dhaka', listings: 312, avgPrice: 4500000, img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop' },
    { id: 'a4', name: 'Banani', city: 'Dhaka', listings: 156, avgPrice: 7800000, img: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=400&h=300&fit=crop' },
    { id: 'a5', name: 'Bashundhara', city: 'Dhaka', listings: 198, avgPrice: 5100000, img: 'https://images.unsplash.com/photo-1464938050520-ef2571905a76?w=400&h=300&fit=crop' },
    { id: 'a6', name: 'Mirpur', city: 'Dhaka', listings: 274, avgPrice: 3800000, img: 'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=400&h=300&fit=crop' }
  ],

  /* ---- Properties ---- */
  properties: [
    {
      id: 'p1', title: 'Luxury 3-Bedroom Apartment with City View',
      type: 'Apartment', status: 'For Sale', badge: 'Featured',
      price: 8500000, pricePerSqft: 4722,
      beds: 3, baths: 2, area: 1800, floor: 8, totalFloors: 12,
      yearBuilt: 2019, facing: 'South', condition: 'Ready', furnishing: 'Semi-Furnished',
      parking: true, elevator: true,
      location: { area: 'Gulshan', address: 'Road 103, Gulshan-2, Dhaka', lat: 23.7925, lng: 90.4078 },
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop'
      ],
      amenities: ['Gym','Pool','24hr Security','CCTV','Generator','Rooftop','Garden','Community Hall'],
      description: 'Spacious 3-bedroom apartment in the heart of Gulshan, featuring panoramic city views from the 8th floor. Modern finishes throughout with an open-concept living area, Italian marble flooring, and a contemporary kitchen with built-in appliances. The master bedroom includes a walk-in closet and en-suite bathroom.',
      agentId: 'ag1',
      tourRooms: ['Living Room','Kitchen','Master Bedroom','Bathroom','Balcony'],
      views: 342, saves: 28, listed: '2025-01-05'
    },
    {
      id: 'p2', title: 'Modern 2-Bedroom Flat in Dhanmondi',
      type: 'Apartment', status: 'For Sale', badge: 'New',
      price: 4500000, pricePerSqft: 4736,
      beds: 2, baths: 1, area: 950, floor: 5, totalFloors: 9,
      yearBuilt: 2021, facing: 'East', condition: 'Ready', furnishing: 'Unfurnished',
      parking: true, elevator: true,
      location: { area: 'Dhanmondi', address: 'Road 27, Dhanmondi, Dhaka', lat: 23.7465, lng: 90.3760 },
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop'
      ],
      amenities: ['24hr Security','CCTV','Generator','Elevator'],
      description: 'Bright and airy 2-bedroom flat in the cultural hub of Dhanmondi, close to Dhanmondi Lake. Well-planned layout with cross ventilation, modern fixtures, and proximity to schools, hospitals, and shopping centres.',
      agentId: 'ag2',
      tourRooms: ['Living Room','Kitchen','Bedroom 1','Bedroom 2','Balcony'],
      views: 215, saves: 19, listed: '2025-01-10'
    },
    {
      id: 'p3', title: 'Premium 4-Bedroom Penthouse',
      type: 'Apartment', status: 'For Sale', badge: 'Hot',
      price: 18500000, pricePerSqft: 6167,
      beds: 4, baths: 3, area: 3000, floor: 14, totalFloors: 14,
      yearBuilt: 2020, facing: 'South-West', condition: 'Ready', furnishing: 'Fully Furnished',
      parking: true, elevator: true,
      location: { area: 'Gulshan', address: 'Road 95, Gulshan-1, Dhaka', lat: 23.7890, lng: 90.4120 },
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop'
      ],
      amenities: ['Gym','Pool','24hr Security','CCTV','Generator','Rooftop','Garden','Playground','Jacuzzi','Home Theater'],
      description: 'Exclusive penthouse in Gulshan with 360-degree city views. Features a private rooftop terrace, home theater, jacuzzi, and premium Italian marble throughout. This is the epitome of luxury living in Dhaka.',
      agentId: 'ag1',
      tourRooms: ['Grand Living','Kitchen','Master Suite','Terrace','Theater Room'],
      views: 528, saves: 45, listed: '2024-12-20'
    },
    {
      id: 'p4', title: 'Affordable Studio Apartment',
      type: 'Studio', status: 'For Rent', badge: null,
      price: 18000, pricePerSqft: 0,
      beds: 0, baths: 1, area: 450, floor: 3, totalFloors: 7,
      yearBuilt: 2022, facing: 'West', condition: 'Ready', furnishing: 'Furnished',
      parking: false, elevator: true,
      location: { area: 'Uttara', address: 'Sector 10, Uttara, Dhaka', lat: 23.8740, lng: 90.3950 },
      images: [
        'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop'
      ],
      amenities: ['24hr Security','CCTV','Generator','Elevator','Laundry'],
      description: 'Compact and well-designed studio apartment perfect for young professionals. Fully furnished with modern appliances, high-speed internet ready, and just 5 minutes from the Uttara metro station.',
      agentId: 'ag3',
      tourRooms: ['Main Room','Kitchen Area','Bathroom'],
      views: 189, saves: 12, listed: '2025-01-12'
    },
    {
      id: 'p5', title: 'Elegant 3-Bedroom in Banani',
      type: 'Apartment', status: 'For Sale', badge: 'Reduced',
      price: 7200000, pricePerSqft: 4800,
      beds: 3, baths: 2, area: 1500, floor: 6, totalFloors: 10,
      yearBuilt: 2018, facing: 'North', condition: 'Ready', furnishing: 'Semi-Furnished',
      parking: true, elevator: true,
      location: { area: 'Banani', address: 'Road 11, Banani, Dhaka', lat: 23.7940, lng: 90.4020 },
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=500&fit=crop'
      ],
      amenities: ['Gym','24hr Security','CCTV','Generator','Rooftop','Garden'],
      description: 'Price recently reduced! Beautiful 3-bedroom apartment at Banani with a spacious living area, modern kitchen, and dedicated parking space. Walking distance to Banani super market and restaurants.',
      agentId: 'ag2',
      tourRooms: ['Living Room','Kitchen','Master Bedroom','Guest Bedroom','Rooftop'],
      views: 290, saves: 34, listed: '2024-12-15'
    },
    {
      id: 'p6', title: 'Spacious Family Home with Garden',
      type: 'House', status: 'For Sale', badge: null,
      price: 25000000, pricePerSqft: 5000,
      beds: 5, baths: 4, area: 5000, floor: 0, totalFloors: 3,
      yearBuilt: 2017, facing: 'South', condition: 'Ready', furnishing: 'Unfurnished',
      parking: true, elevator: false,
      location: { area: 'Bashundhara', address: 'Block D, Bashundhara R/A, Dhaka', lat: 23.8170, lng: 90.4250 },
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop'
      ],
      amenities: ['Garden','Garage','24hr Security','Generator','Rooftop','Playground'],
      description: 'Stunning independent house in Bashundhara Residential Area with a large private garden. Three-story structure with separate drawing and dining spaces, servants quarters, and a two-car garage.',
      agentId: 'ag4',
      tourRooms: ['Living Hall','Kitchen','Master Suite','Garden','Rooftop'],
      views: 175, saves: 22, listed: '2025-01-01'
    },
    {
      id: 'p7', title: 'Cozy 2-Bed Apartment near Metro',
      type: 'Apartment', status: 'For Rent', badge: 'New',
      price: 25000, pricePerSqft: 0,
      beds: 2, baths: 1, area: 850, floor: 4, totalFloors: 8,
      yearBuilt: 2023, facing: 'East', condition: 'Ready', furnishing: 'Unfurnished',
      parking: false, elevator: true,
      location: { area: 'Uttara', address: 'Sector 3, Uttara, Dhaka', lat: 23.8690, lng: 90.3920 },
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1598928506311-c55ez637a58a?w=800&h=500&fit=crop'
      ],
      amenities: ['24hr Security','CCTV','Generator','Elevator'],
      description: 'Brand new 2-bedroom apartment with easy access to Uttara metro station. Perfect for commuters. Bright interiors with modern fixtures.',
      agentId: 'ag3',
      tourRooms: ['Living Room','Kitchen','Bedroom','Bathroom'],
      views: 145, saves: 8, listed: '2025-01-14'
    },
    {
      id: 'p8', title: 'Commercial Office Space in Motijheel',
      type: 'Commercial', status: 'For Rent', badge: null,
      price: 120000, pricePerSqft: 0,
      beds: 0, baths: 2, area: 2200, floor: 10, totalFloors: 15,
      yearBuilt: 2016, facing: 'North-East', condition: 'Ready', furnishing: 'Unfurnished',
      parking: true, elevator: true,
      location: { area: 'Motijheel', address: 'Dilkusha C/A, Motijheel, Dhaka', lat: 23.7280, lng: 90.4180 },
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop'
      ],
      amenities: ['Elevator','24hr Security','CCTV','Generator','Central AC','Conference Room'],
      description: 'Prime commercial office space in the business district of Motijheel. Open-floor plan ideal for IT companies or corporate offices with central air conditioning.',
      agentId: 'ag4',
      tourRooms: ['Main Hall','Meeting Room','Pantry'],
      views: 98, saves: 5, listed: '2025-01-08'
    },
    {
      id: 'p9', title: 'Land Plot in Purbachal New Town',
      type: 'Land', status: 'For Sale', badge: null,
      price: 12000000, pricePerSqft: 8000,
      beds: 0, baths: 0, area: 1500, floor: 0, totalFloors: 0,
      yearBuilt: 0, facing: 'South', condition: 'Under Development', furnishing: 'N/A',
      parking: false, elevator: false,
      location: { area: 'Purbachal', address: 'Sector 16, Purbachal New Town', lat: 23.8350, lng: 90.4800 },
      images: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop'
      ],
      amenities: ['Road Access','Utility Connection','Boundary Wall'],
      description: 'Premium residential plot in the rapidly developing Purbachal New Town. Excellent investment opportunity with road access on two sides. Government-approved layout.',
      agentId: 'ag5',
      tourRooms: [],
      views: 67, saves: 11, listed: '2025-01-03'
    },
    {
      id: 'p10', title: 'River-View 3-Bedroom Apartment',
      type: 'Apartment', status: 'For Sale', badge: 'Featured',
      price: 9800000, pricePerSqft: 5444,
      beds: 3, baths: 2, area: 1800, floor: 11, totalFloors: 16,
      yearBuilt: 2022, facing: 'West', condition: 'Ready', furnishing: 'Semi-Furnished',
      parking: true, elevator: true,
      location: { area: 'Gulshan', address: 'Hatirjheel Lake View Road, Dhaka', lat: 23.7850, lng: 90.4000 },
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop'
      ],
      amenities: ['Gym','Pool','24hr Security','CCTV','Generator','Rooftop','Lake View'],
      description: 'Stunning lake-view apartment overlooking Hatirjheel. Floor-to-ceiling windows in the living room offer breathtaking views. Premium fittings and finishes throughout.',
      agentId: 'ag1',
      tourRooms: ['Living Room','Kitchen','Master Bedroom','Balcony'],
      views: 410, saves: 38, listed: '2024-12-28'
    },
    {
      id: 'p11', title: 'Budget-Friendly 1-Bed in Mirpur',
      type: 'Apartment', status: 'For Sale', badge: null,
      price: 2800000, pricePerSqft: 4000,
      beds: 1, baths: 1, area: 700, floor: 3, totalFloors: 6,
      yearBuilt: 2020, facing: 'East', condition: 'Ready', furnishing: 'Unfurnished',
      parking: false, elevator: true,
      location: { area: 'Mirpur', address: 'Mirpur DOHS, Dhaka', lat: 23.8080, lng: 90.3680 },
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop'
      ],
      amenities: ['24hr Security','Generator','Elevator'],
      description: 'Affordable 1-bedroom apartment ideal for first-time buyers. Located in the safe neighbourhood of Mirpur DOHS with good transport links.',
      agentId: 'ag5',
      tourRooms: ['Living Room','Bedroom','Kitchen'],
      views: 112, saves: 9, listed: '2025-01-11'
    },
    {
      id: 'p12', title: 'Duplex Apartment in Bashundhara',
      type: 'Apartment', status: 'For Sale', badge: 'Hot',
      price: 14000000, pricePerSqft: 5600,
      beds: 4, baths: 3, area: 2500, floor: 7, totalFloors: 8,
      yearBuilt: 2021, facing: 'South-East', condition: 'Ready', furnishing: 'Semi-Furnished',
      parking: true, elevator: true,
      location: { area: 'Bashundhara', address: 'Block C, Bashundhara R/A', lat: 23.8150, lng: 90.4300 },
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop'
      ],
      amenities: ['Gym','24hr Security','CCTV','Generator','Rooftop','Garden','Duplex Layout'],
      description: 'Stunning duplex apartment spanning two floors with an internal staircase. Double-height living room, modern open kitchen, and a private rooftop space.',
      agentId: 'ag2',
      tourRooms: ['Living Room','Upper Level','Kitchen','Master Suite','Rooftop'],
      views: 320, saves: 30, listed: '2024-12-25'
    }
  ],

  /* ---- Agents ---- */
  agents: [
    {
      id: 'ag1', name: 'Rafiq Ahmed', title: 'Senior Real Estate Advisor',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      initials: 'RA', phone: '+880 1711-111111', email: 'rafiq@homescout.bd',
      specializations: ['Residential','Luxury'],
      areas: ['Gulshan','Banani'], experience: 8, activeListings: 24, totalSold: 120,
      rating: 4.8, reviewCount: 52, responseTime: '< 1 hour',
      bio: 'With over 8 years of experience in the Dhaka luxury real estate market, Rafiq specializes in premium properties in Gulshan and Banani. He has helped over 120 families find their dream homes.',
      reviews: [
        { user: 'Karim Hossain', date: '2025-01-10', rating: 5, text: 'Rafiq was incredibly helpful throughout the entire buying process. He found us the perfect apartment in Gulshan within our budget.' },
        { user: 'Nadia Rahman', date: '2025-01-02', rating: 5, text: 'Professional and knowledgeable. Rafiq knows every corner of Gulshan and Banani.' },
        { user: 'Asif Chowdhury', date: '2024-12-15', rating: 4, text: 'Great service overall. The property viewing scheduling could have been smoother.' }
      ]
    },
    {
      id: 'ag2', name: 'Salma Begum', title: 'Property Consultant',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      initials: 'SB', phone: '+880 1722-222222', email: 'salma@homescout.bd',
      specializations: ['Residential','Rental'],
      areas: ['Dhanmondi','Banani','Bashundhara'], experience: 5, activeListings: 18, totalSold: 75,
      rating: 4.6, reviewCount: 38, responseTime: '< 2 hours',
      bio: 'Salma specializes in mid-range residential properties across Dhanmondi and Banani. Known for her client-first approach and meticulous property matching.',
      reviews: [
        { user: 'Farhan Islam', date: '2025-01-08', rating: 5, text: 'Salma helped us find the perfect family home. Very patient and understanding of our needs.' },
        { user: 'Tasfia Khan', date: '2024-12-20', rating: 4, text: 'Good communication and follow-up. Would recommend.' }
      ]
    },
    {
      id: 'ag3', name: 'Tanvir Hasan', title: 'Rental Specialist',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      initials: 'TH', phone: '+880 1733-333333', email: 'tanvir@homescout.bd',
      specializations: ['Rental','Studio','Affordable'],
      areas: ['Uttara','Mirpur'], experience: 3, activeListings: 32, totalSold: 45,
      rating: 4.5, reviewCount: 29, responseTime: '< 30 min',
      bio: 'Tanvir focuses on Uttara and Mirpur rental properties, helping young professionals and students find affordable yet quality housing options.',
      reviews: [
        { user: 'Rahat Uddin', date: '2025-01-05', rating: 5, text: 'Found a great apartment near the metro station within my budget. Tanvir was very responsive.' }
      ]
    },
    {
      id: 'ag4', name: 'Farzana Akter', title: 'Commercial & Luxury Specialist',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      initials: 'FA', phone: '+880 1744-444444', email: 'farzana@homescout.bd',
      specializations: ['Commercial','Luxury','Land'],
      areas: ['Motijheel','Bashundhara','Gulshan'], experience: 10, activeListings: 15, totalSold: 95,
      rating: 4.9, reviewCount: 41, responseTime: '< 1 hour',
      bio: 'Farzana is a decade-long veteran specializing in commercial properties and luxury homes. She has deep connections in the Dhaka real estate market.',
      reviews: [
        { user: 'Selim Reza', date: '2025-01-12', rating: 5, text: 'Farzana found us the ideal office space in Motijheel. Her market knowledge is unmatched.' },
        { user: 'Ishrat Jahan', date: '2024-12-28', rating: 5, text: 'Exceptional service for luxury properties. Highly recommended.' }
      ]
    },
    {
      id: 'ag5', name: 'Mahbub Alam', title: 'Land & Development Advisor',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      initials: 'MA', phone: '+880 1755-555555', email: 'mahbub@homescout.bd',
      specializations: ['Land','Development','Affordable'],
      areas: ['Purbachal','Mirpur','Uttara'], experience: 6, activeListings: 20, totalSold: 60,
      rating: 4.4, reviewCount: 22, responseTime: '< 3 hours',
      bio: 'Mahbub specializes in land sales and new development projects, particularly in upcoming areas like Purbachal New Town.',
      reviews: [
        { user: 'Jahangir Kabir', date: '2025-01-02', rating: 4, text: 'Good knowledge of the Purbachal area. Helped us choose the right plot.' }
      ]
    }
  ],

  /* ---- Market Data ---- */
  marketTrends: {
    months: ['Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'],
    avgPrice: [5200,5350,5500,5400,5600,5800,5750,5900,6100,6000,6200,6350],
    volume: [180,195,210,190,220,245,230,250,260,240,270,285]
  },

  propertyTypeBreakdown: [
    { type: 'Apartment', count: 680, pct: 55 },
    { type: 'House', count: 245, pct: 20 },
    { type: 'Land', count: 185, pct: 15 },
    { type: 'Commercial', count: 125, pct: 10 }
  ],

  /* ---- Neighborhoods ---- */
  neighborhoods: [
    {
      id: 'n1', name: 'Gulshan', description: 'The diplomatic and upscale residential zone of Dhaka, home to embassies, international businesses, and the finest dining.',
      scores: { schools: 9.2, transit: 8.5, dining: 9.5, safety: 9.0, shopping: 9.3, healthcare: 8.8 },
      avgPrice: 8500000, priceChange: 5.2,
      highlights: ['Embassy Row','Gulshan Lake','Premium Shopping','International Schools'],
      nearby: { schools: ['Scholastica','Aga Khan School'], hospitals: ['United Hospital','Square Hospital'], markets: ['Gulshan DCC Market','Police Plaza Concord'] }
    },
    {
      id: 'n2', name: 'Dhanmondi', description: 'A vibrant residential area famous for Dhanmondi Lake, excellent schools, and a thriving food scene.',
      scores: { schools: 9.0, transit: 7.8, dining: 9.0, safety: 8.5, shopping: 8.0, healthcare: 9.2 },
      avgPrice: 6200000, priceChange: 3.8,
      highlights: ['Dhanmondi Lake','University Area','Cultural Hub','Historic Neighbourhood'],
      nearby: { schools: ['Viquarunnisa','Dhanmondi Tutorial'], hospitals: ['Lab Aid Hospital','Ibn Sina'], markets: ['Star Kabab','Ranna Ghar'] }
    },
    {
      id: 'n3', name: 'Uttara', description: 'A planned residential area with wide roads and metro connectivity, popular among families and young professionals.',
      scores: { schools: 8.5, transit: 9.0, dining: 7.5, safety: 8.8, shopping: 8.5, healthcare: 8.0 },
      avgPrice: 4500000, priceChange: 7.1,
      highlights: ['Metro Access','Airport Proximity','Wide Roads','Growing Area'],
      nearby: { schools: ['Uttara High School','BAF Shaheen'], hospitals: ['Crescent Hospital','Popular'], markets: ['Rajlaxmi Complex','Sector 7 Market'] }
    },
    {
      id: 'n4', name: 'Banani', description: 'A trendy neighbourhood known for its restaurants, boutiques, and vibrant nightlife, sitting adjacent to Gulshan.',
      scores: { schools: 8.0, transit: 8.2, dining: 9.2, safety: 8.5, shopping: 9.0, healthcare: 8.5 },
      avgPrice: 7800000, priceChange: 4.5,
      highlights: ['Restaurant Hub','Boutique Shopping','Banani Lake','Central Location'],
      nearby: { schools: ['BAF Shaheen','Banani Bidyaniketon'], hospitals: ['Apollo Hospital','Square Hospital'], markets: ['Banani Super Market','Kacha Bazar'] }
    }
  ],

  /* ---- Agent Dashboard ---- */
  dashboardStats: {
    activeListings: 24, totalViews: 3842, leadsThisMonth: 18, avgResponseTime: '45 min',
    viewsTrend: [120,145,180,165,200,220,190,240,260,230,280,310],
    months: ['Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan']
  },

  leads: [
    { id: 'l1', name: 'Arif Mahmud', property: 'Luxury 3-BR Apartment', email: 'arif@mail.com', phone: '+880 1700-000001', date: '2025-01-15', status: 'New', source: 'Search' },
    { id: 'l2', name: 'Fatema Akhter', property: 'Premium 4-BR Penthouse', email: 'fatema@mail.com', phone: '+880 1700-000002', date: '2025-01-14', status: 'Contacted', source: 'Direct' },
    { id: 'l3', name: 'Rakib Hossain', property: 'River-View 3-BR', email: 'rakib@mail.com', phone: '+880 1700-000003', date: '2025-01-13', status: 'Converted', source: 'Referral' },
    { id: 'l4', name: 'Shimu Das', property: 'Elegant 3-BR in Banani', email: 'shimu@mail.com', phone: '+880 1700-000004', date: '2025-01-12', status: 'New', source: 'Search' },
    { id: 'l5', name: 'Nazmul Haque', property: 'Duplex in Bashundhara', email: 'nazmul@mail.com', phone: '+880 1700-000005', date: '2025-01-10', status: 'Contacted', source: 'Search' }
  ],

  listingPerformance: [
    { id: 'p1', title: 'Luxury 3-BR Apartment', views: 342, saves: 28, inquiries: 8, status: 'Active' },
    { id: 'p3', title: 'Premium 4-BR Penthouse', views: 528, saves: 45, inquiries: 12, status: 'Active' },
    { id: 'p10', title: 'River-View 3-BR', views: 410, saves: 38, inquiries: 10, status: 'Active' },
    { id: 'p5', title: 'Elegant 3-BR Banani', views: 290, saves: 34, inquiries: 6, status: 'Active' },
    { id: 'p12', title: 'Duplex Bashundhara', views: 320, saves: 30, inquiries: 9, status: 'Draft' }
  ]
};
