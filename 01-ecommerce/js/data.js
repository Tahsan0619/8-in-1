// ============================================
//  E-COMMERCE — Mock Data
//  Realistic product data for portfolio demo
// ============================================

const STORE = {
  name: "FLAVR",
  tagline: "Curated Lifestyle Essentials",
  currency: "৳",
  categories: [
    { id: 1, name: "Men", slug: "men", icon: "👔", subcategories: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Sneakers", "Watches", "Accessories"] },
    { id: 2, name: "Women", slug: "women", icon: "👗", subcategories: ["Dresses", "Tops", "Jeans", "Bags", "Heels", "Jewelry", "Accessories"] },
    { id: 3, name: "Electronics", slug: "electronics", icon: "📱", subcategories: ["Phones", "Laptops", "Headphones", "Cameras", "Tablets", "Smart Watch"] },
    { id: 4, name: "Home", slug: "home", icon: "🏠", subcategories: ["Furniture", "Lighting", "Decor", "Kitchen", "Bedding", "Bathroom"] },
    { id: 5, name: "Sports", slug: "sports", icon: "⚽", subcategories: ["Running", "Training", "Yoga", "Outdoor", "Swimming", "Equipment"] },
    { id: 6, name: "Beauty", slug: "beauty", icon: "✨", subcategories: ["Skincare", "Makeup", "Fragrance", "Haircare", "Body Care", "Tools"] },
  ],

  products: [
    {
      id: 1, name: "Premium Cotton Crew Neck", category: "Men", subcategory: "T-Shirts",
      price: 2490, originalPrice: 3200, badge: "sale",
      rating: 4.5, reviews: 128, sold: 342,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800"
      ],
      colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#1A1A1A" }, { name: "Navy", hex: "#1E3A5F" }, { name: "Grey", hex: "#9CA3AF" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      stock: 45,
      description: "Experience premium comfort with our signature crew neck t-shirt. Crafted from 100% Egyptian cotton with a 180 GSM weight for the perfect balance of softness and structure. Features reinforced stitching and a contemporary relaxed fit.",
      specs: { "Material": "100% Egyptian Cotton", "Weight": "180 GSM", "Fit": "Relaxed", "Care": "Machine Wash Cold", "Origin": "Bangladesh" }
    },
    {
      id: 2, name: "Wireless Noise-Canceling Headphones", category: "Electronics", subcategory: "Headphones",
      price: 8990, originalPrice: 12500, badge: "hot",
      rating: 4.8, reviews: 256, sold: 890,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800"
      ],
      colors: [{ name: "Matte Black", hex: "#2D2D2D" }, { name: "Silver", hex: "#C0C0C0" }, { name: "Midnight Blue", hex: "#191970" }],
      sizes: ["One Size"],
      stock: 18,
      description: "Immerse yourself in premium sound with our flagship noise-canceling headphones. Featuring hybrid ANC technology, 40mm custom drivers, and up to 30 hours of battery life. Bluetooth 5.2 ensures seamless connectivity with crystal-clear audio.",
      specs: { "Driver": "40mm Beryllium", "ANC": "Hybrid Active", "Battery": "30 Hours", "Bluetooth": "5.2", "Weight": "250g" }
    },
    {
      id: 3, name: "Leather Minimalist Watch", category: "Men", subcategory: "Watches",
      price: 5490, originalPrice: null, badge: "new",
      rating: 4.6, reviews: 89, sold: 215,
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        "https://images.unsplash.com/photo-1434056886845-dbe89f0b9571?w=800"
      ],
      colors: [{ name: "Brown", hex: "#8B4513" }, { name: "Black", hex: "#1A1A1A" }, { name: "Tan", hex: "#D2B48C" }],
      sizes: ["One Size"],
      stock: 32,
      description: "Timeless elegance meets modern minimalism. Swiss quartz movement housed in a 40mm brushed stainless steel case with genuine Italian leather strap. Water-resistant to 50 meters with sapphire crystal glass.",
      specs: { "Movement": "Swiss Quartz", "Case": "40mm Steel", "Glass": "Sapphire Crystal", "Water Resistance": "50m", "Strap": "Italian Leather" }
    },
    {
      id: 4, name: "Floral Wrap Midi Dress", category: "Women", subcategory: "Dresses",
      price: 3890, originalPrice: 4500, badge: "sale",
      rating: 4.4, reviews: 67, sold: 156,
      images: [
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800"
      ],
      colors: [{ name: "Floral Blue", hex: "#6495ED" }, { name: "Rose", hex: "#FF007F" }, { name: "Sage", hex: "#9CAF88" }],
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: 28,
      description: "Effortlessly chic wrap dress in a stunning floral print. Made from flowing viscose fabric with a flattering V-neckline, adjustable waist tie, and midi length. Perfect for both casual outings and special occasions.",
      specs: { "Material": "100% Viscose", "Length": "Midi (42\")", "Closure": "Wrap Tie", "Care": "Hand Wash", "Lining": "Yes" }
    },
    {
      id: 5, name: "Ergonomic Office Chair", category: "Home", subcategory: "Furniture",
      price: 18990, originalPrice: 24000, badge: "sale",
      rating: 4.7, reviews: 203, sold: 478,
      images: [
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800",
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
      ],
      colors: [{ name: "Graphite", hex: "#383838" }, { name: "Pearl White", hex: "#F0EAD6" }],
      sizes: ["Standard"],
      stock: 12,
      description: "Designed for comfort during long work sessions. Features adjustable lumbar support, 4D armrests, breathable mesh back, and a high-density foam seat cushion. Supports up to 150kg with a certified gas lift cylinder.",
      specs: { "Material": "Mesh + Foam", "Max Load": "150kg", "Armrests": "4D Adjustable", "Recline": "90°-135°", "Warranty": "5 Years" }
    },
    {
      id: 6, name: "Ultra-Light Running Shoes", category: "Sports", subcategory: "Running",
      price: 6990, originalPrice: 8500, badge: "hot",
      rating: 4.6, reviews: 312, sold: 723,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
      ],
      colors: [{ name: "Volt Green", hex: "#CCFF00" }, { name: "Core Black", hex: "#1A1A1A" }, { name: "Cloud White", hex: "#F8F8FF" }, { name: "Solar Red", hex: "#E63946" }],
      sizes: ["7", "8", "9", "10", "11", "12"],
      stock: 56,
      description: "Engineered for speed and comfort. Featuring responsive midsole foam technology, breathable knit upper, and a carbon fiber plate for energy return. Weighs only 215g, making it one of the lightest performance shoes available.",
      specs: { "Upper": "Engineered Knit", "Midsole": "React Foam", "Weight": "215g", "Drop": "8mm", "Outsole": "Continental Rubber" }
    },
    {
      id: 7, name: "Vitamin C Glow Serum", category: "Beauty", subcategory: "Skincare",
      price: 1990, originalPrice: 2500, badge: "new",
      rating: 4.3, reviews: 178, sold: 567,
      images: [
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800"
      ],
      colors: [{ name: "30ml", hex: "#FFD700" }],
      sizes: ["30ml", "50ml"],
      stock: 89,
      description: "Brighten and even your skin tone with our potent 20% Vitamin C serum. Formulated with hyaluronic acid and vitamin E for maximum absorption and hydration. Dermatologically tested and suitable for all skin types.",
      specs: { "Active": "20% L-Ascorbic Acid", "Size": "30ml", "Skin Type": "All Types", "Formulation": "Water-Based", "Cruelty Free": "Yes" }
    },
    {
      id: 8, name: "Crossbody Leather Bag", category: "Women", subcategory: "Bags",
      price: 4290, originalPrice: null, badge: null,
      rating: 4.5, reviews: 94, sold: 289,
      images: [
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800"
      ],
      colors: [{ name: "Cognac", hex: "#9A5B13" }, { name: "Black", hex: "#1A1A1A" }, { name: "Burgundy", hex: "#800020" }],
      sizes: ["One Size"],
      stock: 34,
      description: "Handcrafted from full-grain vegetable-tanned leather. Features a spacious main compartment, interior zip pocket, card slots, and adjustable crossbody strap. Gets better with age, developing a unique patina over time.",
      specs: { "Material": "Full-Grain Leather", "Dimensions": "25 × 18 × 7cm", "Strap Drop": "50-58cm", "Closure": "Magnetic Snap", "Interior": "Cotton Lined" }
    },
    {
      id: 9, name: "Smart Fitness Tracker", category: "Electronics", subcategory: "Smart Watch",
      price: 3490, originalPrice: 4200, badge: "sale",
      rating: 4.2, reviews: 156, sold: 445,
      images: [
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800"
      ],
      colors: [{ name: "Midnight", hex: "#191970" }, { name: "Rose Gold", hex: "#B76E79" }, { name: "Silver", hex: "#C0C0C0" }],
      sizes: ["One Size"],
      stock: 67,
      description: "Track your health 24/7 with continuous heart rate monitoring, SpO2, sleep tracking, and 20+ workout modes. Features a vibrant AMOLED display, 7-day battery life, and 5ATM water resistance.",
      specs: { "Display": "1.4\" AMOLED", "Battery": "7 Days", "Sensors": "HR + SpO2", "Water Rating": "5ATM", "Connectivity": "BLE 5.0" }
    },
    {
      id: 10, name: "Ceramic Pour-Over Set", category: "Home", subcategory: "Kitchen",
      price: 2890, originalPrice: null, badge: "new",
      rating: 4.9, reviews: 45, sold: 132,
      images: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800",
        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
      ],
      colors: [{ name: "Matte White", hex: "#F5F5F5" }, { name: "Charcoal", hex: "#36454F" }],
      sizes: ["2 Cup", "4 Cup"],
      stock: 41,
      description: "Elevate your coffee ritual with our handcrafted ceramic pour-over set. Includes a precision dripper with spiral ridges for optimal extraction and a double-wall carafe that keeps coffee hot while staying cool to the touch.",
      specs: { "Material": "High-Fired Ceramic", "Capacity": "400ml / 600ml", "Filter": "#2 / #4 Paper", "Dishwasher Safe": "Yes", "Includes": "Dripper + Carafe" }
    },
    {
      id: 11, name: "Slim Fit Stretch Jeans", category: "Men", subcategory: "Jeans",
      price: 3290, originalPrice: 3800, badge: null,
      rating: 4.4, reviews: 211, sold: 534,
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
        "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800",
        "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800",
        "https://images.unsplash.com/photo-1475178626620-a4d074967571?w=800"
      ],
      colors: [{ name: "Indigo", hex: "#3F5277" }, { name: "Dark Wash", hex: "#2F4058" }, { name: "Light Blue", hex: "#87CEEB" }],
      sizes: ["28", "30", "32", "34", "36", "38"],
      stock: 78,
      description: "Modern slim-fit jeans with 2% elastane for all-day comfort. Features classic 5-pocket styling, sustainable organic cotton, and a versatile mid-rise waist. Fade-resistant wash for long-lasting color.",
      specs: { "Material": "98% Cotton, 2% Elastane", "Rise": "Mid", "Fit": "Slim", "Care": "Machine Wash", "Sustainable": "GOTS Certified" }
    },
    {
      id: 12, name: "Yoga Mat Pro", category: "Sports", subcategory: "Yoga",
      price: 4490, originalPrice: 5200, badge: "hot",
      rating: 4.7, reviews: 167, sold: 389,
      images: [
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800"
      ],
      colors: [{ name: "Ocean Teal", hex: "#20B2AA" }, { name: "Sage", hex: "#9CAF88" }, { name: "Dusty Rose", hex: "#DCAE96" }, { name: "Charcoal", hex: "#36454F" }],
      sizes: ["Standard (183×61cm)", "XL (198×68cm)"],
      stock: 43,
      description: "Professional-grade yoga mat with 6mm natural rubber base and microfiber suede top. Provides exceptional grip that improves with moisture. Eco-friendly, biodegradable, and free from PVC, latex, and toxic dyes.",
      specs: { "Material": "Natural Rubber + Suede", "Thickness": "6mm", "Weight": "2.5kg", "Dimensions": "183 × 61cm", "Eco": "PVC-Free, Biodegradable" }
    },
    {
      id: 13, name: "Canvas Sneakers Classic", category: "Men", subcategory: "Sneakers",
      price: 2990, originalPrice: null, badge: null,
      rating: 4.3, reviews: 142, sold: 456,
      images: [
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
        "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
      ],
      colors: [{ name: "Off White", hex: "#FAF0E6" }, { name: "Navy", hex: "#1E3A5F" }, { name: "Black", hex: "#1A1A1A" }],
      sizes: ["7", "8", "9", "10", "11", "12"],
      stock: 92,
      description: "Timeless canvas sneakers with vulcanized rubber sole. Features breathable organic cotton upper, cushioned insole, and classic low-top silhouette. A wardrobe essential that pairs with everything.",
      specs: { "Upper": "Organic Cotton Canvas", "Sole": "Vulcanized Rubber", "Insole": "OrthoLite Cushion", "Weight": "340g", "Vegan": "Yes" }
    },
    {
      id: 14, name: "Pendant Ceiling Light", category: "Home", subcategory: "Lighting",
      price: 7490, originalPrice: 8900, badge: null,
      rating: 4.6, reviews: 58, sold: 167,
      images: [
        "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800",
        "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800",
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800",
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800"
      ],
      colors: [{ name: "Brass", hex: "#B5A642" }, { name: "Matte Black", hex: "#2D2D2D" }],
      sizes: ["Small (30cm)", "Large (45cm)"],
      stock: 19,
      description: "Statement pendant light with a hand-blown glass shade and solid brass hardware. Creates warm, ambient lighting perfect for dining areas or living rooms. Compatible with dimmable LED bulbs up to 60W.",
      specs: { "Material": "Brass + Glass", "Cord": "150cm Adjustable", "Bulb": "E27 (not included)", "Max Wattage": "60W", "Installation": "Hardwire" }
    },
    {
      id: 15, name: "Hydrating Face Moisturizer", category: "Beauty", subcategory: "Skincare",
      price: 1690, originalPrice: 2100, badge: null,
      rating: 4.5, reviews: 234, sold: 678,
      images: [
        "https://images.unsplash.com/photo-1570194065650-d99fb4b38b3a?w=800",
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800",
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800",
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800"
      ],
      colors: [{ name: "50ml", hex: "#E0F7FA" }],
      sizes: ["50ml", "100ml"],
      stock: 120,
      description: "Lightweight gel-cream moisturizer with ceramides, squalane, and hyaluronic acid. Strengthens the skin barrier while providing 72-hour hydration. Non-comedogenic formula suitable for sensitive and acne-prone skin.",
      specs: { "Size": "50ml", "Key Ingredients": "Ceramides, Squalane, HA", "Skin Type": "All, Sensitive", "SPF": "None", "Fragrance": "Free" }
    },
    {
      id: 16, name: "Wireless Charging Pad", category: "Electronics", subcategory: "Phones",
      price: 1490, originalPrice: null, badge: null,
      rating: 4.1, reviews: 89, sold: 234,
      images: [
        "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=800",
        "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800",
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800",
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800"
      ],
      colors: [{ name: "Space Grey", hex: "#4A4A4A" }, { name: "White", hex: "#FFFFFF" }],
      sizes: ["One Size"],
      stock: 156,
      description: "Sleek 15W fast wireless charging pad compatible with all Qi-enabled devices. Features intelligent temperature control, foreign object detection, and LED indicator. Slim aluminum design that complements any desk setup.",
      specs: { "Output": "15W Max", "Standard": "Qi", "Material": "Aluminum + Silicone", "Cable": "USB-C (included)", "Safety": "FOD, OTP, OVP" }
    }
  ],

  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
      title: "New Season Essentials",
      subtitle: "Discover our curated collection of premium lifestyle products. Quality you can feel, style you can see.",
      cta: "Shop Now", link: "shop.html"
    },
    {
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600",
      title: "Up to 40% Off Everything",
      subtitle: "Limited time flash sale on our most popular items. Don't miss out on incredible savings.",
      cta: "Shop Sale", link: "shop.html?sale=true"
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600",
      title: "Elevated Everyday Style",
      subtitle: "From essentials to statement pieces — find what inspires you.",
      cta: "Explore", link: "shop.html"
    }
  ],

  coupons: [
    { code: "WELCOME10", discount: 10, type: "percent", minOrder: 1000, active: true },
    { code: "SAVE500", discount: 500, type: "fixed", minOrder: 3000, active: true },
    { code: "FLASH20", discount: 20, type: "percent", minOrder: 2000, active: true },
  ],

  flashSaleEnd: new Date(Date.now() + 86400000 * 3),

  orders: [
    { id: "ORD-2024-001", date: "2024-12-15", status: "delivered", items: 3, total: 15970, tracking: "DHL-BD-78234" },
    { id: "ORD-2024-002", date: "2025-01-02", status: "shipped", items: 1, total: 8990, tracking: "FDX-BD-91823" },
    { id: "ORD-2024-003", date: "2025-01-18", status: "processing", items: 2, total: 6380, tracking: null },
    { id: "ORD-2024-004", date: "2025-01-25", status: "placed", items: 1, total: 18990, tracking: null },
  ],

  addresses: [
    { id: 1, label: "Home", name: "Tahsan Ahmed", phone: "+880 1712-345678", address: "House 12, Road 5, Dhanmondi R/A, Dhaka 1205" },
    { id: 2, label: "Office", name: "Tahsan Ahmed", phone: "+880 1812-456789", address: "Level 8, Tower B, Navana Heights, Gulshan-2, Dhaka 1212" },
  ],

  reviews: [
    { user: "Rahim K.", avatar: "RK", rating: 5, date: "2025-01-15", text: "Absolutely love the quality! The fabric is soft and the fit is perfect. Already ordered two more colors.", helpful: 12 },
    { user: "Nadia S.", avatar: "NS", rating: 4, date: "2025-01-10", text: "Great product overall. The stitching is solid and it washes well. Took one star off because delivery was a day late.", helpful: 8 },
    { user: "Farhan M.", avatar: "FM", rating: 5, date: "2025-01-05", text: "Best purchase I've made this year. Premium feel at a reasonable price. Highly recommend to anyone looking for quality basics.", helpful: 15 },
    { user: "Tania R.", avatar: "TR", rating: 4, date: "2024-12-28", text: "Nice t-shirt, fits true to size. The color is exactly as shown in the pictures. Would buy again.", helpful: 6 },
    { user: "Imran H.", avatar: "IH", rating: 3, date: "2024-12-20", text: "Decent quality for the price but I expected it to be a bit thicker. Still comfortable though.", helpful: 3 },
  ],

  adminStats: {
    revenue: { value: 2847500, trend: 12.5, label: "Total Revenue" },
    orders: { value: 1847, trend: 8.3, label: "Total Orders" },
    customers: { value: 12453, trend: 15.2, label: "Customers" },
    avgOrder: { value: 1542, trend: -2.1, label: "Avg. Order Value" },
    revenueChart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [189000, 215000, 198000, 245000, 268000, 232000, 287000, 265000, 298000, 312000, 342000, 356000]
    },
    topProducts: [
      { name: "Wireless Headphones", sold: 890, revenue: 7991100 },
      { name: "Running Shoes", sold: 723, revenue: 5053770 },
      { name: "Face Moisturizer", sold: 678, revenue: 1145220 },
      { name: "Vitamin C Serum", sold: 567, revenue: 1128330 },
      { name: "Jeans Slim Fit", sold: 534, revenue: 1756860 },
    ],
    recentOrders: [
      { id: "ORD-2025-187", customer: "Rahim Khan", items: 2, total: 11480, status: "placed", date: "2 min ago" },
      { id: "ORD-2025-186", customer: "Nadia Sultana", items: 1, total: 4290, status: "processing", date: "18 min ago" },
      { id: "ORD-2025-185", customer: "Farhan Miah", items: 3, total: 8770, status: "shipped", date: "1 hr ago" },
      { id: "ORD-2025-184", customer: "Tania Rahman", items: 1, total: 18990, status: "delivered", date: "3 hrs ago" },
      { id: "ORD-2025-183", customer: "Imran Hossain", items: 2, total: 5980, status: "shipped", date: "5 hrs ago" },
    ]
  }
};

// Export for use
if (typeof module !== 'undefined') module.exports = STORE;
