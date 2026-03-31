/* ============================================================
   12-restaurant  —  Khadok Kitchen  ·  Mock Data
   ============================================================ */

const RT = {

  /* ---------- Auth ---------- */
  currentUser: {
    id: 'u1', name: 'Tahsan Islam', email: 'tahsan@khadok.bd',
    phone: '01712345678', address: 'House 42, Road 11, Gulshan-2, Dhaka 1212',
    role: 'customer', avatar: 'https://ui-avatars.com/api/?name=Tahsan+Islam&background=C2410C&color=fff&size=128'
  },

  site: { name: 'Khadok Kitchen', tagline: 'Authentic Flavors, Modern Dining', phone: '09666-456789', address: 'House 15, Road 7, Dhanmondi 27, Dhaka 1209', hours: 'Daily 11:00 AM – 11:00 PM', delivery: '30-45 min average', est: 2015 },

  /* ---------- Menu Categories ---------- */
  categories: [
    { id: 'cat1', name: 'Biriyani', icon: '🍚', count: 5 },
    { id: 'cat2', name: 'Grills', icon: '🍗', count: 4 },
    { id: 'cat3', name: 'Curries', icon: '🍛', count: 5 },
    { id: 'cat4', name: 'Appetizers', icon: '🥗', count: 4 },
    { id: 'cat5', name: 'Desserts', icon: '🍮', count: 3 },
    { id: 'cat6', name: 'Beverages', icon: '🥤', count: 4 },
    { id: 'cat7', name: 'Combos', icon: '🍱', count: 3 }
  ],

  /* ---------- Menu Items ---------- */
  dishes: [
    { id: 'd1', name: 'Kacchi Biriyani', category: 'cat1', description: 'Authentic Dhaka-style kacchi with aromatic basmati rice, tender mutton, and a special spice blend slow-cooked in sealed pot.', price: 450, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600', rating: 4.8, reviewCount: 120, spicy: 2, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 450 }, { name: 'Large', price: 650 }, { name: 'Family', price: 1200 }], addOns: [{ name: 'Extra Meat', price: 150 }, { name: 'Borhani', price: 60 }, { name: 'Salad', price: 40 }] },
    { id: 'd2', name: 'Tehari', category: 'cat1', description: 'Fragrant beef tehari with potatoes, bay leaf, and whole spices. A Puran Dhaka classic loved across Bangladesh.', price: 280, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600', rating: 4.5, reviewCount: 80, spicy: 1, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 280 }, { name: 'Large', price: 400 }], addOns: [{ name: 'Extra Potato', price: 30 }, { name: 'Egg', price: 20 }] },
    { id: 'd3', name: 'Morog Polao', category: 'cat1', description: 'Chicken polao with aromatic ghee rice, caramelized onions, and tender chicken pieces. Perfect for celebrations.', price: 350, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600', rating: 4.7, reviewCount: 95, spicy: 1, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 350 }, { name: 'Large', price: 520 }], addOns: [{ name: 'Extra Chicken', price: 120 }, { name: 'Raita', price: 40 }] },
    { id: 'd4', name: 'Vegetable Biriyani', category: 'cat1', description: 'Colorful vegetable biriyani with paneer, mixed vegetables, and saffron-infused rice. A vegetarian delight.', price: 250, image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600', rating: 4.4, reviewCount: 45, spicy: 1, vegetarian: true, chefPick: false, isNew: true, sizes: [{ name: 'Regular', price: 250 }, { name: 'Large', price: 380 }], addOns: [{ name: 'Extra Paneer', price: 80 }, { name: 'Raita', price: 40 }] },
    { id: 'd5', name: 'Mutton Biriyani', category: 'cat1', description: 'Rich mutton biriyani with saffron rice, fried onions, and aromatic spices. Slow-cooked to perfection.', price: 520, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600', rating: 4.6, reviewCount: 68, spicy: 2, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 520 }, { name: 'Large', price: 750 }], addOns: [{ name: 'Extra Meat', price: 180 }, { name: 'Borhani', price: 60 }] },

    { id: 'd6', name: 'Grilled Chicken', category: 'cat2', description: 'Juicy full chicken marinated in special spice paste, char-grilled to smoky perfection. Served with naan.', price: 350, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600', rating: 4.7, reviewCount: 88, spicy: 2, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Half', price: 350 }, { name: 'Full', price: 650 }], addOns: [{ name: 'Naan', price: 40 }, { name: 'Green Chutney', price: 25 }] },
    { id: 'd7', name: 'Seekh Kebab', category: 'cat2', description: 'Hand-rolled minced beef kebabs with herbs and spices, grilled on skewers over charcoal.', price: 320, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600', rating: 4.6, reviewCount: 62, spicy: 2, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: '4 pcs', price: 320 }, { name: '8 pcs', price: 600 }], addOns: [{ name: 'Mint Sauce', price: 25 }, { name: 'Rumali Roti', price: 35 }] },
    { id: 'd8', name: 'Tandoori Fish', category: 'cat2', description: 'Fresh Rui fish marinated in tandoori masala, yogurt, and lemon, cooked in clay oven until flaky.', price: 420, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', rating: 4.5, reviewCount: 40, spicy: 1, vegetarian: false, chefPick: false, isNew: true, sizes: [{ name: 'Regular', price: 420 }], addOns: [{ name: 'Tartar Sauce', price: 30 }, { name: 'Lemon Wedge', price: 10 }] },
    { id: 'd9', name: 'Mixed Grill Platter', category: 'cat2', description: 'Ultimate platter with chicken tikka, seekh kebab, grilled prawns, and lamb chops. Serves 2-3.', price: 850, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600', rating: 4.8, reviewCount: 55, spicy: 2, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 850 }, { name: 'Large', price: 1350 }], addOns: [{ name: 'Extra Sauce', price: 40 }, { name: 'Naan (2)', price: 70 }] },

    { id: 'd10', name: 'Prawn Malai Curry', category: 'cat3', description: 'Jumbo prawns in rich coconut cream curry with a touch of mustard. A Bengali delicacy.', price: 550, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600', rating: 4.9, reviewCount: 72, spicy: 1, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 550 }, { name: 'Large', price: 820 }], addOns: [{ name: 'Extra Prawn', price: 200 }, { name: 'Steamed Rice', price: 50 }] },
    { id: 'd11', name: 'Beef Bhuna', category: 'cat3', description: 'Slow-cooked beef in thick onion and tomato gravy with whole spices. Rich and deeply flavored.', price: 380, image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=600', rating: 4.6, reviewCount: 90, spicy: 2, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 380 }, { name: 'Large', price: 560 }], addOns: [{ name: 'Plain Rice', price: 50 }, { name: 'Paratha', price: 25 }] },
    { id: 'd12', name: 'Chicken Korma', category: 'cat3', description: 'Tender chicken in creamy yogurt and nut-based sauce. Mild and aromatic for all palates.', price: 320, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600', rating: 4.5, reviewCount: 65, spicy: 0, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 320 }, { name: 'Large', price: 480 }], addOns: [{ name: 'Naan', price: 40 }, { name: 'Plain Rice', price: 50 }] },
    { id: 'd13', name: 'Shorshe Ilish', category: 'cat3', description: 'Hilsa fish cooked in pungent mustard paste — the national dish of Bangladesh at its finest.', price: 480, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600', rating: 4.7, reviewCount: 58, spicy: 2, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 480 }], addOns: [{ name: 'Steamed Rice', price: 50 }, { name: 'Green Chili', price: 10 }] },
    { id: 'd14', name: 'Dal Tadka', category: 'cat3', description: 'Yellow lentils tempered with garlic, cumin, and dried red chilies. Comfort food at its best.', price: 150, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600', rating: 4.3, reviewCount: 35, spicy: 1, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 150 }, { name: 'Large', price: 220 }], addOns: [{ name: 'Plain Rice', price: 50 }, { name: 'Ghee', price: 20 }] },

    { id: 'd15', name: 'Chicken Samosa', category: 'cat4', description: 'Crispy pastry triangles filled with spiced minced chicken, onions, and herbs. Served with green chutney.', price: 120, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', rating: 4.4, reviewCount: 55, spicy: 1, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: '4 pcs', price: 120 }, { name: '8 pcs', price: 220 }], addOns: [{ name: 'Mint Chutney', price: 20 }] },
    { id: 'd16', name: 'Vegetable Pakora', category: 'cat4', description: 'Mixed vegetable fritters in chickpea batter, deep-fried to golden crunch. Perfect rainy day snack.', price: 90, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', rating: 4.2, reviewCount: 30, spicy: 1, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 90 }, { name: 'Large', price: 150 }], addOns: [{ name: 'Tamarind Sauce', price: 15 }] },
    { id: 'd17', name: 'Prawn Tempura', category: 'cat4', description: 'Batter-fried prawns with light, crispy coating. Served with sweet chili dip.', price: 280, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600', rating: 4.6, reviewCount: 42, spicy: 0, vegetarian: false, chefPick: true, isNew: true, sizes: [{ name: '6 pcs', price: 280 }, { name: '12 pcs', price: 520 }], addOns: [{ name: 'Sweet Chili Sauce', price: 25 }] },
    { id: 'd18', name: 'Chicken Wings', category: 'cat4', description: 'Smoky buffalo chicken wings tossed in hot sauce, served with ranch dip and celery sticks.', price: 250, image: 'https://images.unsplash.com/photo-1608039829572-9b0b5c47bbec?w=600', rating: 4.5, reviewCount: 48, spicy: 3, vegetarian: false, chefPick: false, isNew: false, sizes: [{ name: '6 pcs', price: 250 }, { name: '12 pcs', price: 460 }], addOns: [{ name: 'Ranch Dip', price: 30 }, { name: 'Blue Cheese Dip', price: 35 }] },

    { id: 'd19', name: 'Firni', category: 'cat5', description: 'Traditional rice pudding with cardamom, saffron, and pistachios. Served chilled in clay pot.', price: 100, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600', rating: 4.4, reviewCount: 38, spicy: 0, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 100 }, { name: 'Large', price: 160 }], addOns: [] },
    { id: 'd20', name: 'Gulab Jamun', category: 'cat5', description: 'Soft milk-solid dumplings soaked in fragrant rose-cardamom sugar syrup. Ultimate sweet treat.', price: 120, image: 'https://images.unsplash.com/photo-1666190020785-46a25bde87a4?w=600', rating: 4.6, reviewCount: 50, spicy: 0, vegetarian: true, chefPick: true, isNew: false, sizes: [{ name: '4 pcs', price: 120 }, { name: '8 pcs', price: 220 }], addOns: [{ name: 'Ice Cream Scoop', price: 60 }] },
    { id: 'd21', name: 'Mishti Doi', category: 'cat5', description: 'Caramelized sweetened yogurt from Bogra. Creamy, sweet, and the perfect meal ender.', price: 80, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600', rating: 4.5, reviewCount: 42, spicy: 0, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 80 }], addOns: [] },

    { id: 'd22', name: 'Mango Lassi', category: 'cat6', description: 'Thick and creamy yogurt smoothie blended with ripe Rajshahi mangoes and a hint of cardamom.', price: 120, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600', rating: 4.7, reviewCount: 70, spicy: 0, vegetarian: true, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 120 }, { name: 'Large', price: 180 }], addOns: [] },
    { id: 'd23', name: 'Fresh Lemon Soda', category: 'cat6', description: 'Refreshing fresh-squeezed lemon with soda, mint, and a touch of black salt.', price: 80, image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=600', rating: 4.3, reviewCount: 45, spicy: 0, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 80 }, { name: 'Large', price: 120 }], addOns: [] },
    { id: 'd24', name: 'Borhani', category: 'cat6', description: 'Traditional spiced yogurt drink, the perfect companion for biriyani. Cool and digestive.', price: 60, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600', rating: 4.5, reviewCount: 85, spicy: 1, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 60 }, { name: 'Large', price: 90 }], addOns: [] },
    { id: 'd25', name: 'Masala Chai', category: 'cat6', description: 'Rich tea boiled with ginger, cinnamon, cardamom, and cloves. The ultimate warm beverage.', price: 50, image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600', rating: 4.4, reviewCount: 60, spicy: 0, vegetarian: true, chefPick: false, isNew: false, sizes: [{ name: 'Regular', price: 50 }, { name: 'Large', price: 80 }], addOns: [{ name: 'Extra Ginger', price: 10 }] },

    { id: 'd26', name: 'Biriyani Feast', category: 'cat7', description: 'Kacchi Biriyani + Borhani + Salad + Firni. The ultimate biriyani experience.', price: 550, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600', rating: 4.8, reviewCount: 40, spicy: 2, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Single', price: 550 }, { name: 'Double', price: 1050 }], addOns: [{ name: 'Upgrade to Large Kacchi', price: 200 }] },
    { id: 'd27', name: 'Grill Combo', category: 'cat7', description: 'Grilled Chicken (Half) + Seekh Kebab (4pcs) + Naan (2) + Green Chutney + Lemon Soda.', price: 680, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600', rating: 4.6, reviewCount: 35, spicy: 2, vegetarian: false, chefPick: false, isNew: true, sizes: [{ name: 'Regular', price: 680 }], addOns: [{ name: 'Extra Naan', price: 40 }] },
    { id: 'd28', name: 'Family Platter', category: 'cat7', description: 'Morog Polao (Family) + Chicken Korma + Dal + Salad + 4 Drinks. For 4-5 people.', price: 1800, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600', rating: 4.7, reviewCount: 25, spicy: 1, vegetarian: false, chefPick: true, isNew: false, sizes: [{ name: 'Regular', price: 1800 }], addOns: [{ name: 'Extra Drinks', price: 200 }] }
  ],

  /* ---------- Promo Codes ---------- */
  promoCodes: [
    { code: 'WELCOME10', discount: 10, type: 'percent', minOrder: 300, description: '10% off for new customers' },
    { code: 'KHADOK20', discount: 20, type: 'percent', minOrder: 500, description: '20% off on orders above ৳500' },
    { code: 'FLAT100', discount: 100, type: 'flat', minOrder: 400, description: '৳100 off on orders above ৳400' },
    { code: 'BIRIYANI50', discount: 50, type: 'flat', minOrder: 300, description: '৳50 off on biriyani orders' }
  ],

  /* ---------- Reviews ---------- */
  reviews: [
    { id: 'rv1', dishId: 'd1', author: 'Farhan Chowdhury', date: '2025-01-10', rating: 5, text: 'Best kacchi biriyani in Dhaka! The meat is so tender and the rice is perfectly aromatic. Worth every taka.', dish: 'Kacchi Biriyani', verified: true },
    { id: 'rv2', dishId: 'd1', author: 'Nabila Akter', date: '2025-01-07', rating: 5, text: 'My family\'s favorite! We order every weekend. The borhani is the perfect complement.', dish: 'Kacchi Biriyani', verified: true },
    { id: 'rv3', dishId: 'd10', author: 'Rahim Uddin', date: '2025-01-05', rating: 5, text: 'The prawn malai curry is absolutely divine. Huge prawns, creamy coconut sauce. Restaurant quality at home.', dish: 'Prawn Malai Curry', verified: true },
    { id: 'rv4', dishId: 'd6', author: 'Sumaiya Rahman', date: '2025-01-03', rating: 4, text: 'Very juicy grilled chicken with great smoky flavor. The naan could be a bit warmer but overall excellent.', dish: 'Grilled Chicken', verified: true },
    { id: 'rv5', dishId: 'd9', author: 'Kamal Hossain', date: '2024-12-28', rating: 5, text: 'The mixed grill platter is perfect for entertaining guests. Every item was cooked to perfection.', dish: 'Mixed Grill Platter', verified: true },
    { id: 'rv6', dishId: 'd22', author: 'Mitu Sarker', date: '2024-12-25', rating: 5, text: 'Thick, creamy, and perfectly sweet mango lassi. Takes me back to summer in Rajshahi!', dish: 'Mango Lassi', verified: false },
    { id: 'rv7', dishId: 'd13', author: 'Jahanara Begum', date: '2024-12-20', rating: 4, text: 'Authentic shorshe ilish that fills the house with amazing aroma. Just like my mother used to make.', dish: 'Shorshe Ilish', verified: true },
    { id: 'rv8', dishId: 'd20', author: 'Tanvir Hassan', date: '2024-12-15', rating: 5, text: 'The gulab jamun is the best dessert on the menu. Perfectly soft and soaked in sugar syrup.', dish: 'Gulab Jamun', verified: true }
  ],

  /* ---------- Tables (for reservation) ---------- */
  tables: [
    { id: 't1', number: 1, capacity: 2, location: 'window', status: 'available' },
    { id: 't2', number: 2, capacity: 2, location: 'window', status: 'available' },
    { id: 't3', number: 3, capacity: 2, location: 'center', status: 'booked' },
    { id: 't4', number: 4, capacity: 4, location: 'window', status: 'available' },
    { id: 't5', number: 5, capacity: 4, location: 'center', status: 'available' },
    { id: 't6', number: 6, capacity: 6, location: 'corner', status: 'available' },
    { id: 't7', number: 7, capacity: 6, location: 'center', status: 'available' },
    { id: 't8', number: 8, capacity: 8, location: 'private', status: 'booked' },
    { id: 't9', number: 9, capacity: 4, location: 'patio', status: 'available' }
  ],

  /* ---------- Orders ---------- */
  orders: [
    { id: 'ORD-2026-0042', userId: 'u1', items: [{ dishId: 'd1', name: 'Kacchi Biriyani', size: 'Large', addOns: ['Extra Meat', 'Borhani'], spice: 'medium', qty: 1, price: 860 }, { dishId: 'd6', name: 'Grilled Chicken', size: 'Half', addOns: [], spice: 'medium', qty: 2, price: 700 }, { dishId: 'd22', name: 'Mango Lassi', size: 'Regular', addOns: [], spice: null, qty: 1, price: 120 }], subtotal: 1680, deliveryFee: 60, discount: 168, total: 1572, promoCode: 'WELCOME10', status: 'preparing', delivery: { type: 'delivery', name: 'Tahsan Islam', phone: '01712345678', address: 'House 42, Road 11, Gulshan-2', estimatedTime: '8:15 PM' }, timeline: [{ status: 'placed', time: '7:30 PM', done: true }, { status: 'confirmed', time: '7:31 PM', done: true }, { status: 'preparing', time: '7:35 PM', done: true }, { status: 'ready', time: null, done: false }, { status: 'delivery', time: null, done: false }, { status: 'delivered', time: null, done: false }], date: '2025-01-15' },
    { id: 'ORD-2026-0041', userId: 'u1', items: [{ dishId: 'd10', name: 'Prawn Malai Curry', size: 'Regular', addOns: ['Steamed Rice'], spice: 'mild', qty: 2, price: 1200 }], subtotal: 1200, deliveryFee: 60, discount: 0, total: 1260, promoCode: null, status: 'delivered', delivery: { type: 'delivery', name: 'Tahsan Islam', phone: '01712345678', address: 'House 42, Road 11, Gulshan-2', estimatedTime: '1:00 PM' }, timeline: [{ status: 'placed', time: '12:10 PM', done: true }, { status: 'confirmed', time: '12:11 PM', done: true }, { status: 'preparing', time: '12:15 PM', done: true }, { status: 'ready', time: '12:35 PM', done: true }, { status: 'delivery', time: '12:45 PM', done: true }, { status: 'delivered', time: '1:05 PM', done: true }], date: '2025-01-14' },
    { id: 'ORD-2026-0040', userId: 'u1', items: [{ dishId: 'd9', name: 'Mixed Grill Platter', size: 'Regular', addOns: ['Extra Sauce', 'Naan (2)'], spice: 'medium', qty: 1, price: 960 }], subtotal: 960, deliveryFee: 0, discount: 0, total: 960, promoCode: null, status: 'delivered', delivery: { type: 'pickup', name: 'Tahsan Islam', phone: '01712345678', address: '', estimatedTime: '7:00 PM' }, timeline: [{ status: 'placed', time: '6:30 PM', done: true }, { status: 'confirmed', time: '6:31 PM', done: true }, { status: 'preparing', time: '6:35 PM', done: true }, { status: 'ready', time: '6:55 PM', done: true }, { status: 'delivery', time: null, done: false }, { status: 'delivered', time: '7:05 PM', done: true }], date: '2025-01-12' }
  ],

  /* ---------- Reservations ---------- */
  reservations: [
    { id: 'res1', userId: 'u1', date: '2025-01-20', time: '7:30 PM', guests: 4, tableId: 't5', occasion: 'dinner', name: 'Tahsan Islam', phone: '01712345678', email: 'tahsan@khadok.bd', specialRequests: 'Window seat preferred', status: 'confirmed' },
    { id: 'res2', userId: 'u1', date: '2025-02-14', time: '8:00 PM', guests: 2, tableId: 't1', occasion: 'anniversary', name: 'Tahsan Islam', phone: '01712345678', email: 'tahsan@khadok.bd', specialRequests: 'Candlelight setup please', status: 'pending' }
  ],

  /* ---------- Gallery ---------- */
  gallery: [
    { id: 'g1', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', caption: 'Main Dining Hall', category: 'interior' },
    { id: 'g2', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', caption: 'Private Dining Room', category: 'interior' },
    { id: 'g3', src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600', caption: 'Signature Kacchi Biriyani', category: 'food' },
    { id: 'g4', src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600', caption: 'Mixed Grill Platter', category: 'food' },
    { id: 'g5', src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', caption: 'Outdoor Patio Seating', category: 'interior' },
    { id: 'g6', src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600', caption: 'Fresh Seafood Selection', category: 'food' },
    { id: 'g7', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600', caption: 'Chef\'s Special Presentation', category: 'food' },
    { id: 'g8', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600', caption: 'Eid Celebration Event', category: 'events' },
    { id: 'g9', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600', caption: 'Corporate Dinner Event', category: 'events' },
    { id: 'g10', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600', caption: 'Our Kitchen in Action', category: 'kitchen' },
    { id: 'g11', src: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600', caption: 'Tandoor Oven Preparation', category: 'kitchen' },
    { id: 'g12', src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600', caption: 'Prawn Malai Curry', category: 'food' }
  ],

  /* ---------- Admin Stats ---------- */
  adminStats: {
    todayOrders: 28, pendingReservations: 5, todayRevenue: 48200, activeOrders: 8,
    weeklyRevenue: [28500, 32100, 41000, 38200, 45600, 48200, 35000],
    popularDishes: ['d1', 'd6', 'd10', 'd9', 'd22']
  }
};
