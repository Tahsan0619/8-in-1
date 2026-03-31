/* ============================================================
   13-fitness  —  FitZone Gym  ·  Mock Data
   ============================================================ */
const FT = {

  /* ---------- current user ---------- */
  currentUser: {
    id: 'u1',
    name: 'Tahsan Islam',
    email: 'tahsan@fitzone.bd',
    phone: '01712345678',
    role: 'member',
    membershipPlan: 'pro',
    joinDate: '2024-06-15',
    avatar: 'https://ui-avatars.com/api/?name=Tahsan+Islam&background=7C3AED&color=fff&size=128',
    stats: {
      weight: 74,
      height: 175,
      bmi: 24.2,
      streak: 12,
      totalWorkouts: 48,
      classesAttended: 25
    }
  },

  /* ---------- site ---------- */
  site: {
    name: 'FitZone Gym',
    tagline: 'Transform Your Body, Transform Your Life',
    phone: '09666-789012',
    email: 'info@fitzone.bd',
    address: 'Level 3, Jamuna Future Park, Dhaka',
    hours: 'Open 24/7',
    socials: {
      facebook: 'https://facebook.com/fitzonebd',
      instagram: 'https://instagram.com/fitzonebd',
      youtube: 'https://youtube.com/@fitzonebd'
    }
  },

  /* ---------- classes ---------- */
  classes: [
    {
      id: 'cl1', name: 'Inferno HIIT', category: 'HIIT',
      description: 'High-intensity interval training that torches calories and builds explosive power. 30 seconds on, 15 seconds rest — repeat until you conquer.',
      duration: 45, intensity: 'high', trainerId: 't1',
      schedule: [
        { day: 'Mon', time: '07:00', spots: 4, maxSpots: 20 },
        { day: 'Wed', time: '07:00', spots: 8, maxSpots: 20 },
        { day: 'Fri', time: '07:00', spots: 2, maxSpots: 20 }
      ],
      image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600',
      rating: 4.8, reviewCount: 62, equipment: ['Kettlebells', 'Battle Ropes', 'Box']
    },
    {
      id: 'cl2', name: 'Sunrise Yoga', category: 'Yoga',
      description: 'Start your morning with Vinyasa flow sequences that improve flexibility, balance, and mental clarity. All levels welcome.',
      duration: 60, intensity: 'low', trainerId: 't3',
      schedule: [
        { day: 'Mon', time: '06:00', spots: 6, maxSpots: 15 },
        { day: 'Wed', time: '06:00', spots: 3, maxSpots: 15 },
        { day: 'Fri', time: '06:00', spots: 9, maxSpots: 15 },
        { day: 'Sat', time: '08:00', spots: 1, maxSpots: 15 }
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      rating: 4.9, reviewCount: 88, equipment: ['Yoga Mat', 'Blocks', 'Strap']
    },
    {
      id: 'cl3', name: 'Spin Rush', category: 'Spinning',
      description: 'Rhythm-based indoor cycling with hill climbs, sprints, and interval drills set to energising playlists.',
      duration: 40, intensity: 'high', trainerId: 't2',
      schedule: [
        { day: 'Tue', time: '07:30', spots: 5, maxSpots: 25 },
        { day: 'Thu', time: '07:30', spots: 10, maxSpots: 25 },
        { day: 'Sat', time: '09:00', spots: 3, maxSpots: 25 }
      ],
      image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=600',
      rating: 4.7, reviewCount: 54, equipment: ['Spin Bike', 'Heart-Rate Monitor']
    },
    {
      id: 'cl4', name: 'Iron Forge', category: 'Strength',
      description: 'Barbell-focused strength class covering compound lifts — squat, bench, deadlift, overhead press — with progressive overload programming.',
      duration: 55, intensity: 'high', trainerId: 't1',
      schedule: [
        { day: 'Tue', time: '17:00', spots: 7, maxSpots: 16 },
        { day: 'Thu', time: '17:00', spots: 4, maxSpots: 16 },
        { day: 'Sat', time: '10:00', spots: 6, maxSpots: 16 }
      ],
      image: 'https://images.unsplash.com/photo-1533681904393-9ab6ebed60d7?w=600',
      rating: 4.9, reviewCount: 71, equipment: ['Barbell', 'Squat Rack', 'Bench', 'Plates']
    },
    {
      id: 'cl5', name: 'CrossFit WOD', category: 'CrossFit',
      description: 'Workout of the Day featuring functional movements at high intensity. Scales for beginners to advanced athletes.',
      duration: 50, intensity: 'high', trainerId: 't4',
      schedule: [
        { day: 'Mon', time: '17:30', spots: 3, maxSpots: 18 },
        { day: 'Wed', time: '17:30', spots: 6, maxSpots: 18 },
        { day: 'Fri', time: '17:30', spots: 8, maxSpots: 18 }
      ],
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600',
      rating: 4.6, reviewCount: 43, equipment: ['Pull-Up Bar', 'Rings', 'Rower', 'Wall Ball']
    },
    {
      id: 'cl6', name: 'Fight Club Boxing', category: 'Boxing',
      description: 'Learn jab-cross-hook combos on heavy bags. Cardio meets technique for a full-body workout that relieves stress.',
      duration: 45, intensity: 'high', trainerId: 't5',
      schedule: [
        { day: 'Mon', time: '19:00', spots: 5, maxSpots: 20 },
        { day: 'Wed', time: '19:00', spots: 9, maxSpots: 20 },
        { day: 'Sat', time: '11:00', spots: 2, maxSpots: 20 }
      ],
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600',
      rating: 4.8, reviewCount: 57, equipment: ['Heavy Bag', 'Gloves', 'Wraps', 'Speed Bag']
    },
    {
      id: 'cl7', name: 'Zumba Fiesta', category: 'Dance',
      description: 'Latin-inspired dance fitness party. No choreography experience needed — just follow the beat and burn up to 600 calories.',
      duration: 50, intensity: 'medium', trainerId: 't6',
      schedule: [
        { day: 'Tue', time: '18:00', spots: 8, maxSpots: 30 },
        { day: 'Thu', time: '18:00', spots: 12, maxSpots: 30 },
        { day: 'Sat', time: '16:00', spots: 5, maxSpots: 30 }
      ],
      image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600',
      rating: 4.7, reviewCount: 65, equipment: []
    },
    {
      id: 'cl8', name: 'Cardio Blast', category: 'Cardio',
      description: 'Circuit-style cardio featuring jump rope, treadmill intervals, rowing, and plyometric drills for maximum calorie burn.',
      duration: 40, intensity: 'medium', trainerId: 't2',
      schedule: [
        { day: 'Mon', time: '08:00', spots: 10, maxSpots: 22 },
        { day: 'Wed', time: '08:00', spots: 7, maxSpots: 22 },
        { day: 'Fri', time: '08:00', spots: 14, maxSpots: 22 }
      ],
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600',
      rating: 4.5, reviewCount: 39, equipment: ['Jump Rope', 'Treadmill', 'Rower']
    },
    {
      id: 'cl9', name: 'Power Yoga', category: 'Yoga',
      description: 'Dynamic, strength-oriented yoga that builds lean muscle and core stability. Expect arm balances, inversions, and deep holds.',
      duration: 60, intensity: 'medium', trainerId: 't3',
      schedule: [
        { day: 'Tue', time: '19:30', spots: 4, maxSpots: 15 },
        { day: 'Thu', time: '19:30', spots: 7, maxSpots: 15 }
      ],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
      rating: 4.8, reviewCount: 46, equipment: ['Yoga Mat', 'Blocks']
    },
    {
      id: 'cl10', name: 'Strength & Conditioning', category: 'Strength',
      description: 'Periodised training blending heavy compound lifts with accessory work and conditioning finishers. Ideal for intermediate lifters.',
      duration: 60, intensity: 'high', trainerId: 't4',
      schedule: [
        { day: 'Tue', time: '06:30', spots: 3, maxSpots: 14 },
        { day: 'Thu', time: '06:30', spots: 5, maxSpots: 14 },
        { day: 'Sat', time: '07:00', spots: 2, maxSpots: 14 }
      ],
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600',
      rating: 4.9, reviewCount: 37, equipment: ['Barbell', 'Dumbbells', 'Cable Machine', 'Sled']
    }
  ],

  /* ---------- trainers ---------- */
  trainers: [
    {
      id: 't1', name: 'Rafiq Hossain', specialty: 'Strength & HIIT',
      experience: 8, rating: 4.9, reviewCount: 133,
      avatar: 'https://ui-avatars.com/api/?name=Rafiq+Hossain&background=EF4444&color=fff&size=128',
      bio: 'Former national-level powerlifter turned coach. Rafiq has trained 500+ clients and believes progressive overload is the key to lasting results.',
      certifications: ['NASM CPT', 'CSCS', 'Precision Nutrition L1'],
      specialties: ['Powerlifting', 'HIIT', 'Body Recomposition'],
      schedule: {
        Mon: '06:00–12:00', Tue: '16:00–21:00', Wed: '06:00–12:00',
        Thu: '16:00–21:00', Fri: '06:00–12:00', Sat: '08:00–14:00'
      },
      classIds: ['cl1', 'cl4']
    },
    {
      id: 't2', name: 'Nusrat Amin', specialty: 'Spinning & Cardio',
      experience: 5, rating: 4.7, reviewCount: 97,
      avatar: 'https://ui-avatars.com/api/?name=Nusrat+Amin&background=F59E0B&color=fff&size=128',
      bio: 'Certified Schwinn cycling instructor who rode competitively for 3 years. Nusrat designs playlists that make you forget the pain.',
      certifications: ['ACE CPT', 'Schwinn Cycling', 'First Aid/CPR'],
      specialties: ['Indoor Cycling', 'Cardio Programming', 'Weight Loss'],
      schedule: {
        Mon: '07:00–13:00', Tue: '07:00–13:00', Wed: '07:00–13:00',
        Thu: '07:00–13:00', Fri: '07:00–13:00', Sat: '08:00–12:00'
      },
      classIds: ['cl3', 'cl8']
    },
    {
      id: 't3', name: 'Meher Sultana', specialty: 'Yoga & Mindfulness',
      experience: 10, rating: 4.9, reviewCount: 146,
      avatar: 'https://ui-avatars.com/api/?name=Meher+Sultana&background=10B981&color=fff&size=128',
      bio: 'RYT-500 certified yoga teacher who trained in Rishikesh. Meher blends traditional Hatha with modern Vinyasa flow for holistic wellness.',
      certifications: ['RYT-500', 'Yoga Alliance E-RYT', 'Meditation Teacher'],
      specialties: ['Vinyasa Flow', 'Power Yoga', 'Breathwork', 'Meditation'],
      schedule: {
        Mon: '05:30–11:00', Tue: '18:00–21:00', Wed: '05:30–11:00',
        Thu: '18:00–21:00', Fri: '05:30–11:00', Sat: '07:00–12:00'
      },
      classIds: ['cl2', 'cl9']
    },
    {
      id: 't4', name: 'Shafiq Rahman', specialty: 'CrossFit & S&C',
      experience: 7, rating: 4.8, reviewCount: 108,
      avatar: 'https://ui-avatars.com/api/?name=Shafiq+Rahman&background=3B82F6&color=fff&size=128',
      bio: 'CrossFit Level 2 trainer and former Bangladesh Army PT instructor. Shafiq pushes limits while keeping movements safe and scalable.',
      certifications: ['CrossFit L2', 'NASM CPT', 'FMS Level 1'],
      specialties: ['CrossFit', 'Olympic Lifting', 'Functional Training'],
      schedule: {
        Mon: '16:00–21:00', Tue: '06:00–11:00', Wed: '16:00–21:00',
        Thu: '06:00–11:00', Fri: '16:00–21:00', Sat: '07:00–13:00'
      },
      classIds: ['cl5', 'cl10']
    },
    {
      id: 't5', name: 'Kamal Uddin', specialty: 'Boxing & MMA',
      experience: 12, rating: 4.8, reviewCount: 119,
      avatar: 'https://ui-avatars.com/api/?name=Kamal+Uddin&background=8B5CF6&color=fff&size=128',
      bio: 'Three-time national amateur boxing champion. Kamal now channels his ring experience into coaching fighters and fitness enthusiasts alike.',
      certifications: ['USA Boxing Coach', 'ACE CPT', 'Krav Maga Instructor'],
      specialties: ['Boxing', 'Kickboxing', 'Self-Defence', 'Conditioning'],
      schedule: {
        Mon: '17:00–21:00', Tue: '10:00–14:00', Wed: '17:00–21:00',
        Thu: '10:00–14:00', Fri: 'Off', Sat: '10:00–14:00'
      },
      classIds: ['cl6']
    },
    {
      id: 't6', name: 'Farhana Kabir', specialty: 'Dance & Group Fitness',
      experience: 6, rating: 4.7, reviewCount: 91,
      avatar: 'https://ui-avatars.com/api/?name=Farhana+Kabir&background=EC4899&color=fff&size=128',
      bio: 'Licensed Zumba instructor and Bollywood-fusion choreographer. Farhana makes fitness feel like a celebration — every class is a party.',
      certifications: ['Zumba B1 + B2', 'ACE GFI', 'STRONG Nation'],
      specialties: ['Zumba', 'Dance Fitness', 'Aerobics', 'Flexibility'],
      schedule: {
        Mon: '09:00–13:00', Tue: '17:00–21:00', Wed: '09:00–13:00',
        Thu: '17:00–21:00', Fri: '09:00–13:00', Sat: '15:00–18:00'
      },
      classIds: ['cl7']
    }
  ],

  /* ---------- membership plans ---------- */
  membershipPlans: [
    {
      id: 'plan-basic', name: 'Basic', price: 2000, period: 'month',
      yearlyPrice: 19200,
      popular: false,
      features: [
        'Gym floor access (6 AM – 10 PM)',
        'Locker room & showers',
        '2 group classes / week',
        'Basic workout tracking app',
        'Free fitness assessment'
      ]
    },
    {
      id: 'plan-pro', name: 'Pro', price: 3500, period: 'month',
      yearlyPrice: 33600,
      popular: true,
      features: [
        '24/7 gym access',
        'Unlimited group classes',
        'Personal workout plan',
        'Monthly body-composition scan',
        'Nutrition guidance',
        'Sauna & steam room',
        'Guest pass (1/month)',
        'FitZone app premium'
      ]
    },
    {
      id: 'plan-elite', name: 'Elite', price: 5000, period: 'month',
      yearlyPrice: 48000,
      popular: false,
      features: [
        'Everything in Pro',
        '4 PT sessions / month',
        'Priority class booking',
        'Towel & laundry service',
        'Supplement discounts (15%)',
        'Recovery zone (cryo, massage chair)',
        'Unlimited guest passes',
        'Dedicated locker',
        'Quarterly health check-up'
      ]
    }
  ],

  /* ---------- exercises library ---------- */
  exercises: [
    { id: 'ex1',  name: 'Barbell Back Squat',     muscleGroup: 'Legs',      equipment: 'Barbell',         description: 'Compound lower-body lift targeting quads, glutes, and core.' },
    { id: 'ex2',  name: 'Flat Bench Press',        muscleGroup: 'Chest',     equipment: 'Barbell',         description: 'Horizontal press for chest, front delts, and triceps.' },
    { id: 'ex3',  name: 'Conventional Deadlift',   muscleGroup: 'Back',      equipment: 'Barbell',         description: 'Full-body pull from the floor emphasising posterior chain.' },
    { id: 'ex4',  name: 'Overhead Press',          muscleGroup: 'Shoulders', equipment: 'Barbell',         description: 'Standing strict press for deltoids and upper chest.' },
    { id: 'ex5',  name: 'Barbell Row',             muscleGroup: 'Back',      equipment: 'Barbell',         description: 'Bent-over row for lats, rhomboids, and rear delts.' },
    { id: 'ex6',  name: 'Pull-Up',                 muscleGroup: 'Back',      equipment: 'Pull-Up Bar',     description: 'Bodyweight vertical pull targeting lats and biceps.' },
    { id: 'ex7',  name: 'Dumbbell Lunges',         muscleGroup: 'Legs',      equipment: 'Dumbbells',       description: 'Unilateral leg exercise for quads, glutes, and balance.' },
    { id: 'ex8',  name: 'Dumbbell Shoulder Press',  muscleGroup: 'Shoulders', equipment: 'Dumbbells',       description: 'Seated or standing press for shoulder hypertrophy.' },
    { id: 'ex9',  name: 'Dumbbell Curl',           muscleGroup: 'Arms',      equipment: 'Dumbbells',       description: 'Isolation curl for biceps brachii.' },
    { id: 'ex10', name: 'Tricep Dips',             muscleGroup: 'Arms',      equipment: 'Dip Station',     description: 'Bodyweight push for triceps, chest, and front delts.' },
    { id: 'ex11', name: 'Leg Press',               muscleGroup: 'Legs',      equipment: 'Machine',         description: 'Machine-based quad and glute press for heavy volume.' },
    { id: 'ex12', name: 'Lat Pulldown',            muscleGroup: 'Back',      equipment: 'Cable Machine',   description: 'Cable pull for lat width and upper-back development.' },
    { id: 'ex13', name: 'Cable Fly',               muscleGroup: 'Chest',     equipment: 'Cable Machine',   description: 'Constant-tension chest isolation at various angles.' },
    { id: 'ex14', name: 'Romanian Deadlift',       muscleGroup: 'Legs',      equipment: 'Barbell',         description: 'Hip-hinge for hamstrings and glutes with eccentric focus.' },
    { id: 'ex15', name: 'Plank',                   muscleGroup: 'Core',      equipment: 'Bodyweight',      description: 'Isometric hold for deep core stabilisation.' },
    { id: 'ex16', name: 'Hanging Leg Raise',       muscleGroup: 'Core',      equipment: 'Pull-Up Bar',     description: 'Advanced core exercise for lower abs and hip flexors.' },
    { id: 'ex17', name: 'Face Pull',               muscleGroup: 'Shoulders', equipment: 'Cable Machine',   description: 'Rear-delt and rotator-cuff exercise for shoulder health.' },
    { id: 'ex18', name: 'Incline Dumbbell Press',  muscleGroup: 'Chest',     equipment: 'Dumbbells',       description: 'Upper-chest focused press on an incline bench.' },
    { id: 'ex19', name: 'Hip Thrust',              muscleGroup: 'Legs',      equipment: 'Barbell',         description: 'Glute-dominant hip extension with back on bench.' },
    { id: 'ex20', name: 'Kettlebell Swing',        muscleGroup: 'Full Body', equipment: 'Kettlebell',      description: 'Explosive hip-hinge for power, conditioning, and posterior chain.' },
    { id: 'ex21', name: 'Battle Rope Slams',       muscleGroup: 'Full Body', equipment: 'Battle Ropes',    description: 'High-intensity rope waves for cardio and upper-body endurance.' },
    { id: 'ex22', name: 'Box Jump',                muscleGroup: 'Legs',      equipment: 'Plyo Box',        description: 'Plyometric jump for explosive leg power and coordination.' }
  ],

  /* ---------- workout plans ---------- */
  workoutPlans: [
    {
      id: 'wp1', name: 'Push Day', category: 'Strength', difficulty: 'Intermediate',
      duration: 55, description: 'Chest, shoulders, and triceps volume day.',
      exercises: [
        { exerciseId: 'ex2',  sets: 4, reps: 8,  weight: 60, rest: 120 },
        { exerciseId: 'ex18', sets: 3, reps: 10, weight: 18, rest: 90 },
        { exerciseId: 'ex4',  sets: 4, reps: 8,  weight: 40, rest: 120 },
        { exerciseId: 'ex13', sets: 3, reps: 12, weight: 10, rest: 60 },
        { exerciseId: 'ex8',  sets: 3, reps: 12, weight: 14, rest: 60 },
        { exerciseId: 'ex10', sets: 3, reps: 12, weight: 0,  rest: 60 }
      ]
    },
    {
      id: 'wp2', name: 'Pull Day', category: 'Strength', difficulty: 'Intermediate',
      duration: 50, description: 'Back and biceps with horizontal and vertical pulls.',
      exercises: [
        { exerciseId: 'ex3',  sets: 4, reps: 5,  weight: 100, rest: 180 },
        { exerciseId: 'ex5',  sets: 4, reps: 8,  weight: 55,  rest: 120 },
        { exerciseId: 'ex6',  sets: 3, reps: 8,  weight: 0,   rest: 90 },
        { exerciseId: 'ex12', sets: 3, reps: 10, weight: 50,  rest: 90 },
        { exerciseId: 'ex17', sets: 3, reps: 15, weight: 15,  rest: 60 },
        { exerciseId: 'ex9',  sets: 3, reps: 12, weight: 12,  rest: 60 }
      ]
    },
    {
      id: 'wp3', name: 'Leg Day', category: 'Strength', difficulty: 'Intermediate',
      duration: 60, description: 'Quad, hamstring, and glute focused lower-body session.',
      exercises: [
        { exerciseId: 'ex1',  sets: 4, reps: 6,  weight: 80, rest: 180 },
        { exerciseId: 'ex14', sets: 3, reps: 10, weight: 60, rest: 120 },
        { exerciseId: 'ex11', sets: 3, reps: 12, weight: 120, rest: 90 },
        { exerciseId: 'ex19', sets: 3, reps: 12, weight: 60, rest: 90 },
        { exerciseId: 'ex7',  sets: 3, reps: 10, weight: 14, rest: 60 },
        { exerciseId: 'ex22', sets: 3, reps: 8,  weight: 0,  rest: 60 }
      ]
    },
    {
      id: 'wp4', name: 'Cardio & Core', category: 'Conditioning', difficulty: 'Beginner',
      duration: 35, description: 'Heart-rate elevating circuit with core finishers.',
      exercises: [
        { exerciseId: 'ex20', sets: 4, reps: 15, weight: 16, rest: 45 },
        { exerciseId: 'ex21', sets: 3, reps: 30, weight: 0,  rest: 45 },
        { exerciseId: 'ex22', sets: 3, reps: 10, weight: 0,  rest: 45 },
        { exerciseId: 'ex15', sets: 3, reps: 45, weight: 0,  rest: 30 },
        { exerciseId: 'ex16', sets: 3, reps: 12, weight: 0,  rest: 45 }
      ]
    }
  ],

  /* ---------- achievements ---------- */
  achievements: [
    { id: 'ach1', title: 'First Step',      description: 'Complete your first workout',             icon: '🏋️', requirement: '1 workout',       unlockedDate: '2024-06-16' },
    { id: 'ach2', title: 'Week Warrior',     description: 'Maintain a 7-day workout streak',         icon: '🔥', requirement: '7-day streak',     unlockedDate: '2024-07-03' },
    { id: 'ach3', title: 'Iron Month',       description: 'Maintain a 30-day workout streak',        icon: '💪', requirement: '30-day streak',    unlockedDate: null },
    { id: 'ach4', title: 'Class Regular',    description: 'Attend 10 group classes',                 icon: '🎯', requirement: '10 classes',       unlockedDate: '2024-08-22' },
    { id: 'ach5', title: 'Half Century',     description: 'Log 50 total workouts',                   icon: '🏆', requirement: '50 workouts',      unlockedDate: null },
    { id: 'ach6', title: 'Perfect BMI',      description: 'Reach a BMI under 25',                    icon: '⚖️', requirement: 'BMI < 25',         unlockedDate: '2025-01-10' },
    { id: 'ach7', title: 'Heavy Lifter',     description: 'Bench press your bodyweight',             icon: '🏅', requirement: '1× BW bench',      unlockedDate: null },
    { id: 'ach8', title: 'Social Butterfly', description: 'Try 5 different class categories',        icon: '🦋', requirement: '5 categories',     unlockedDate: '2024-11-15' },
    { id: 'ach9', title: 'Early Bird',       description: 'Complete 10 workouts before 7 AM',        icon: '🌅', requirement: '10 early sessions', unlockedDate: '2025-02-28' },
    { id: 'ach10', title: 'Century Club',    description: 'Log 100 total workouts',                  icon: '💯', requirement: '100 workouts',     unlockedDate: null }
  ],

  /* ---------- goals ---------- */
  goals: [
    { id: 'g1', title: 'Lose 5 kg',           target: 5,  current: 3.2, unit: 'kg',       deadline: '2026-06-30', progress: 64 },
    { id: 'g2', title: '100 Workouts',         target: 100, current: 48, unit: 'workouts', deadline: '2026-12-31', progress: 48 },
    { id: 'g3', title: 'Bench Press 80 kg',    target: 80, current: 60, unit: 'kg',        deadline: '2026-09-01', progress: 75 },
    { id: 'g4', title: 'Attend 50 Classes',    target: 50, current: 25, unit: 'classes',   deadline: '2026-12-31', progress: 50 }
  ],

  /* ---------- reviews ---------- */
  reviews: [
    { id: 'rv1', trainerId: 't1', userId: 'u1',  userName: 'Tahsan Islam',   rating: 5, date: '2025-03-10', comment: 'Rafiq completely changed my approach to lifting. Gained serious strength in 3 months.' },
    { id: 'rv2', trainerId: 't3', userId: 'u2',  userName: 'Anika Tabassum', rating: 5, date: '2025-02-18', comment: 'Meher\'s sunrise yoga class is the best way to start the day. Incredibly calming yet challenging.' },
    { id: 'rv3', trainerId: 't2', userId: 'u3',  userName: 'Rashed Karim',   rating: 4, date: '2025-01-25', comment: 'Nusrat\'s spin classes are tough but the music keeps you going. Down 8 kg in 2 months.' },
    { id: 'rv4', trainerId: 't4', userId: 'u4',  userName: 'Sabina Akter',   rating: 5, date: '2025-03-02', comment: 'Shafiq scales every WOD perfectly. I felt welcome even as a CrossFit beginner.' },
    { id: 'rv5', trainerId: 't5', userId: 'u5',  userName: 'Imran Hasan',    rating: 5, date: '2025-02-08', comment: 'Kamal is the real deal. His boxing technique drills are world-class.' },
    { id: 'rv6', trainerId: 't6', userId: 'u6',  userName: 'Priya Das',      rating: 4, date: '2025-01-14', comment: 'Farhana makes every Zumba session feel like a celebration. So much fun!' },
    { id: 'rv7', trainerId: 't1', userId: 'u7',  userName: 'Shakib Uddin',   rating: 5, date: '2025-03-18', comment: 'Best strength coach in Dhaka. Period. My deadlift went from 80 to 140 kg.' },
    { id: 'rv8', trainerId: 't3', userId: 'u8',  userName: 'Maliha Rahman',  rating: 5, date: '2025-02-27', comment: 'Power Yoga with Meher is intense but so rewarding. My flexibility has improved drastically.' }
  ],

  /* ---------- transformations ---------- */
  transformations: [
    {
      id: 'tf1', name: 'Arif Hoque', duration: '6 months',
      weightBefore: 95, weightAfter: 78, weightChange: -17,
      beforeImage: 'https://ui-avatars.com/api/?name=Arif+Before&background=CBD5E1&color=64748B&size=200',
      afterImage: 'https://ui-avatars.com/api/?name=Arif+After&background=7C3AED&color=fff&size=200',
      testimonial: 'FitZone gave me structure. The trainers kept me accountable and the community kept me motivated. I went from barely climbing stairs to running 5K.'
    },
    {
      id: 'tf2', name: 'Nadia Sultana', duration: '4 months',
      weightBefore: 72, weightAfter: 62, weightChange: -10,
      beforeImage: 'https://ui-avatars.com/api/?name=Nadia+Before&background=CBD5E1&color=64748B&size=200',
      afterImage: 'https://ui-avatars.com/api/?name=Nadia+After&background=EC4899&color=fff&size=200',
      testimonial: 'The combination of Zumba and nutrition guidance was life-changing. I feel stronger, more energetic, and genuinely happy — not just thinner.'
    },
    {
      id: 'tf3', name: 'Tanvir Ahmed', duration: '8 months',
      weightBefore: 65, weightAfter: 76, weightChange: 11,
      beforeImage: 'https://ui-avatars.com/api/?name=Tanvir+Before&background=CBD5E1&color=64748B&size=200',
      afterImage: 'https://ui-avatars.com/api/?name=Tanvir+After&background=3B82F6&color=fff&size=200',
      testimonial: 'Came in as a skinny guy who had never touched a barbell. Rafiq\'s Iron Forge programme helped me gain 11 kg of lean muscle. Squat went from 40 to 110 kg.'
    }
  ],

  /* ---------- BMI history ---------- */
  bmiHistory: [
    { date: '2024-07-01', weight: 82, bmi: 26.8 },
    { date: '2024-09-01', weight: 80, bmi: 26.1 },
    { date: '2024-11-01', weight: 78, bmi: 25.5 },
    { date: '2025-01-01', weight: 76, bmi: 24.8 },
    { date: '2025-03-01', weight: 74, bmi: 24.2 },
    { date: '2025-05-01', weight: 73, bmi: 23.8 }
  ],

  /* ---------- workout log ---------- */
  workoutLog: [
    {
      id: 'wl1', date: '2026-03-31', planId: 'wp1', planName: 'Push Day',
      duration: 58, caloriesBurned: 420,
      exercises: [
        { exerciseId: 'ex2',  setsCompleted: 4, reps: [8,8,7,6],  weight: 60 },
        { exerciseId: 'ex18', setsCompleted: 3, reps: [10,10,9],   weight: 18 },
        { exerciseId: 'ex4',  setsCompleted: 4, reps: [8,8,8,7],   weight: 40 },
        { exerciseId: 'ex13', setsCompleted: 3, reps: [12,12,10],  weight: 10 },
        { exerciseId: 'ex10', setsCompleted: 3, reps: [12,11,10],  weight: 0 }
      ]
    },
    {
      id: 'wl2', date: '2026-03-29', planId: 'wp3', planName: 'Leg Day',
      duration: 64, caloriesBurned: 510,
      exercises: [
        { exerciseId: 'ex1',  setsCompleted: 4, reps: [6,6,5,5],   weight: 80 },
        { exerciseId: 'ex14', setsCompleted: 3, reps: [10,10,10],  weight: 60 },
        { exerciseId: 'ex11', setsCompleted: 3, reps: [12,12,11],  weight: 120 },
        { exerciseId: 'ex19', setsCompleted: 3, reps: [12,12,10],  weight: 60 },
        { exerciseId: 'ex7',  setsCompleted: 3, reps: [10,10,8],   weight: 14 }
      ]
    },
    {
      id: 'wl3', date: '2026-03-28', planId: 'wp2', planName: 'Pull Day',
      duration: 52, caloriesBurned: 445,
      exercises: [
        { exerciseId: 'ex3',  setsCompleted: 4, reps: [5,5,5,4],   weight: 100 },
        { exerciseId: 'ex5',  setsCompleted: 4, reps: [8,8,8,7],   weight: 55 },
        { exerciseId: 'ex6',  setsCompleted: 3, reps: [8,7,6],     weight: 0 },
        { exerciseId: 'ex12', setsCompleted: 3, reps: [10,10,10],  weight: 50 },
        { exerciseId: 'ex9',  setsCompleted: 3, reps: [12,12,10],  weight: 12 }
      ]
    },
    {
      id: 'wl4', date: '2026-03-26', planId: 'wp4', planName: 'Cardio & Core',
      duration: 37, caloriesBurned: 380,
      exercises: [
        { exerciseId: 'ex20', setsCompleted: 4, reps: [15,15,15,12], weight: 16 },
        { exerciseId: 'ex21', setsCompleted: 3, reps: [30,30,25],    weight: 0 },
        { exerciseId: 'ex15', setsCompleted: 3, reps: [45,45,40],    weight: 0 },
        { exerciseId: 'ex16', setsCompleted: 3, reps: [12,10,8],     weight: 0 }
      ]
    },
    {
      id: 'wl5', date: '2026-03-25', planId: 'wp1', planName: 'Push Day',
      duration: 55, caloriesBurned: 410,
      exercises: [
        { exerciseId: 'ex2',  setsCompleted: 4, reps: [8,8,8,6],   weight: 57.5 },
        { exerciseId: 'ex18', setsCompleted: 3, reps: [10,10,10],  weight: 16 },
        { exerciseId: 'ex4',  setsCompleted: 4, reps: [8,8,7,6],   weight: 37.5 },
        { exerciseId: 'ex13', setsCompleted: 3, reps: [12,12,12],  weight: 10 }
      ]
    },
    {
      id: 'wl6', date: '2026-03-23', planId: 'wp3', planName: 'Leg Day',
      duration: 62, caloriesBurned: 495,
      exercises: [
        { exerciseId: 'ex1',  setsCompleted: 4, reps: [6,6,6,5],   weight: 77.5 },
        { exerciseId: 'ex14', setsCompleted: 3, reps: [10,10,10],  weight: 57.5 },
        { exerciseId: 'ex11', setsCompleted: 3, reps: [12,12,12],  weight: 115 },
        { exerciseId: 'ex19', setsCompleted: 3, reps: [12,12,12],  weight: 55 }
      ]
    }
  ],

  /* ---------- admin stats ---------- */
  adminStats: {
    activeMembers: 847,
    todayCheckIns: 134,
    monthlyRevenue: 2485000,
    yearlyRevenue: 28200000,
    membershipDistribution: {
      basic: 312,
      pro: 389,
      elite: 146
    },
    classAttendance: {
      thisWeek: 623,
      lastWeek: 591,
      change: 5.4
    },
    popularClasses: ['cl1', 'cl2', 'cl4', 'cl7'],
    trainerUtilisation: 82,
    equipmentStatus: { total: 156, operational: 149, maintenance: 7 },
    newSignupsThisMonth: 38,
    churnRate: 4.2
  }

};
