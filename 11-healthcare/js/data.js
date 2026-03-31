/* ============================================================
   11-healthcare  —  MediCare Hospital  ·  Mock Data
   ============================================================ */

const HC = {

  /* ---------- Auth ---------- */
  currentUser: {
    id: 'u1', name: 'Tahsan Islam', email: 'tahsan@medicare.bd',
    phone: '01712345678', dob: '1995-06-15', bloodGroup: 'O+',
    allergies: ['Penicillin'], emergencyContact: { name: 'Rima Islam', phone: '01798765432', relation: 'Spouse' },
    role: 'patient', avatar: 'https://ui-avatars.com/api/?name=Tahsan+Islam&background=0284C7&color=fff&size=128'
  },

  site: { name: 'MediCare Hospital', tagline: 'Your Health, Our Priority', phone: '09666-123456', emergency: '999', address: 'House 42, Road 11, Gulshan-2, Dhaka 1212' },

  /* ---------- Departments ---------- */
  departments: [
    { id: 'd1', name: 'Cardiology', icon: '🫀', description: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation.', conditions: ['Heart Attack', 'Arrhythmia', 'Heart Failure', 'Hypertension', 'Valve Disease'], doctorCount: 12, color: '#DC2626' },
    { id: 'd2', name: 'Neurology', icon: '🧠', description: 'Expert care for brain, spinal cord, and nervous system disorders with advanced diagnostics.', conditions: ['Stroke', 'Epilepsy', 'Migraine', 'Parkinson\'s', 'Multiple Sclerosis'], doctorCount: 8, color: '#7C3AED' },
    { id: 'd3', name: 'Orthopedics', icon: '🦴', description: 'Musculoskeletal care including joint replacement, sports medicine, and spine surgery.', conditions: ['Fractures', 'Arthritis', 'Back Pain', 'Sports Injuries', 'Joint Replacement'], doctorCount: 10, color: '#0284C7' },
    { id: 'd4', name: 'Pediatrics', icon: '👶', description: 'Complete child healthcare from newborn care to adolescent medicine.', conditions: ['Growth Disorders', 'Childhood Infections', 'Vaccination', 'Asthma', 'Allergies'], doctorCount: 6, color: '#059669' },
    { id: 'd5', name: 'Dermatology', icon: '🧴', description: 'Skin, hair, and nail care with cosmetic and medical dermatology services.', conditions: ['Acne', 'Eczema', 'Psoriasis', 'Skin Cancer', 'Hair Loss'], doctorCount: 5, color: '#D97706' },
    { id: 'd6', name: 'Ophthalmology', icon: '👁️', description: 'Complete eye care including LASIK, cataract surgery, and retinal treatments.', conditions: ['Cataracts', 'Glaucoma', 'Refractive Errors', 'Retinal Diseases', 'Dry Eye'], doctorCount: 7, color: '#2563EB' },
    { id: 'd7', name: 'Gynecology', icon: '🩺', description: 'Women\'s health services including obstetrics, fertility, and preventive care.', conditions: ['Pregnancy Care', 'Infertility', 'PCOS', 'Menstrual Disorders', 'Menopause'], doctorCount: 9, color: '#EC4899' },
    { id: 'd8', name: 'ENT', icon: '👂', description: 'Ear, nose, and throat specialist care including surgeries and hearing diagnostics.', conditions: ['Sinusitis', 'Hearing Loss', 'Tonsillitis', 'Sleep Apnea', 'Vertigo'], doctorCount: 4, color: '#14B8A6' }
  ],

  /* ---------- Doctors ---------- */
  doctors: [
    { id: 'doc1', name: 'Dr. Aminul Haque', credentials: 'MBBS, FCPS (Cardiology)', specialty: 'Cardiology', departmentId: 'd1', experience: 15, fee: 1500, rating: 4.9, reviewCount: 80, gender: 'male', avatar: 'https://ui-avatars.com/api/?name=Aminul+Haque&background=DC2626&color=fff&size=128', bio: 'Dr. Haque is a senior consultant cardiologist specializing in interventional cardiology with over 15 years of experience. He has performed 5000+ angioplasty procedures and is known for his patient-centric approach.', languages: ['Bangla', 'English', 'Hindi'], education: [{ degree: 'MBBS', institution: 'Dhaka Medical College', year: 2005 }, { degree: 'FCPS (Cardiology)', institution: 'BSMMU', year: 2012 }], schedule: { Sun: ['10:00-14:00', '16:00-20:00'], Mon: null, Tue: ['10:00-14:00', '16:00-20:00'], Wed: ['10:00-14:00', '16:00-20:00'], Thu: null, Fri: ['10:00-13:00'], Sat: ['10:00-14:00'] }, nextAvailable: 'Tomorrow 10:00 AM' },
    { id: 'doc2', name: 'Dr. Fatima Rahman', credentials: 'MBBS, MD (Neurology)', specialty: 'Neurology', departmentId: 'd2', experience: 12, fee: 1200, rating: 4.8, reviewCount: 65, gender: 'female', avatar: 'https://ui-avatars.com/api/?name=Fatima+Rahman&background=7C3AED&color=fff&size=128', bio: 'Dr. Rahman specializes in stroke management and epilepsy treatment. She trained at NIMHANS Bangalore and has published extensively on neurological disorders in South Asia.', languages: ['Bangla', 'English'], education: [{ degree: 'MBBS', institution: 'Sir Salimullah Medical College', year: 2008 }, { degree: 'MD (Neurology)', institution: 'NIMHANS, Bangalore', year: 2014 }], schedule: { Sun: ['09:00-13:00'], Mon: ['09:00-13:00', '15:00-19:00'], Tue: null, Wed: ['09:00-13:00', '15:00-19:00'], Thu: ['09:00-13:00'], Fri: null, Sat: ['10:00-14:00'] }, nextAvailable: 'Today 3:30 PM' },
    { id: 'doc3', name: 'Dr. Kamal Uddin', credentials: 'MBBS, MS (Orthopedics)', specialty: 'Orthopedics', departmentId: 'd3', experience: 18, fee: 1300, rating: 4.7, reviewCount: 42, gender: 'male', avatar: 'https://ui-avatars.com/api/?name=Kamal+Uddin&background=0284C7&color=fff&size=128', bio: 'Dr. Uddin is a renowned orthopedic surgeon specializing in knee and hip replacement surgeries. He trained in Japan and has pioneered minimally invasive techniques in Bangladesh.', languages: ['Bangla', 'English', 'Japanese'], education: [{ degree: 'MBBS', institution: 'Mymensingh Medical College', year: 2002 }, { degree: 'MS (Orthopedics)', institution: 'BSMMU', year: 2009 }], schedule: { Sun: ['10:00-14:00', '16:00-19:00'], Mon: ['10:00-14:00'], Tue: ['10:00-14:00', '16:00-19:00'], Wed: null, Thu: ['10:00-14:00', '16:00-19:00'], Fri: null, Sat: ['10:00-13:00'] }, nextAvailable: 'Today 4:00 PM' },
    { id: 'doc4', name: 'Dr. Nusrat Jahan', credentials: 'MBBS, DCH (Pediatrics)', specialty: 'Pediatrics', departmentId: 'd4', experience: 10, fee: 1000, rating: 4.9, reviewCount: 95, gender: 'female', avatar: 'https://ui-avatars.com/api/?name=Nusrat+Jahan&background=059669&color=fff&size=128', bio: 'Dr. Jahan is a pediatric specialist with expertise in neonatal care and childhood developmental disorders. She is loved by young patients for her gentle and caring approach.', languages: ['Bangla', 'English'], education: [{ degree: 'MBBS', institution: 'Dhaka Medical College', year: 2010 }, { degree: 'DCH', institution: 'BICH', year: 2016 }], schedule: { Sun: ['09:00-14:00', '16:00-20:00'], Mon: ['09:00-14:00'], Tue: ['09:00-14:00', '16:00-20:00'], Wed: ['09:00-14:00'], Thu: ['09:00-14:00', '16:00-20:00'], Fri: null, Sat: ['10:00-14:00'] }, nextAvailable: 'Tomorrow 9:00 AM' },
    { id: 'doc5', name: 'Dr. Rezaul Karim', credentials: 'MBBS, DDV (Dermatology)', specialty: 'Dermatology', departmentId: 'd5', experience: 8, fee: 800, rating: 4.6, reviewCount: 38, gender: 'male', avatar: 'https://ui-avatars.com/api/?name=Rezaul+Karim&background=D97706&color=fff&size=128', bio: 'Dr. Karim specializes in clinical and cosmetic dermatology. He offers laser treatments, acne management, and skin cancer screening.', languages: ['Bangla', 'English'], education: [{ degree: 'MBBS', institution: 'Chittagong Medical College', year: 2012 }, { degree: 'DDV', institution: 'BSMMU', year: 2018 }], schedule: { Sun: ['10:00-14:00'], Mon: ['10:00-14:00', '16:00-19:00'], Tue: ['10:00-14:00'], Wed: null, Thu: ['10:00-14:00', '16:00-19:00'], Fri: ['10:00-13:00'], Sat: null }, nextAvailable: 'Tomorrow 10:00 AM' },
    { id: 'doc6', name: 'Dr. Sharmin Akter', credentials: 'MBBS, FCPS (Ophthalmology)', specialty: 'Ophthalmology', departmentId: 'd6', experience: 14, fee: 1100, rating: 4.8, reviewCount: 55, gender: 'female', avatar: 'https://ui-avatars.com/api/?name=Sharmin+Akter&background=2563EB&color=fff&size=128', bio: 'Dr. Akter is a leading eye surgeon specializing in LASIK, cataract surgery, and retinal treatments. She has restored vision to thousands of patients.', languages: ['Bangla', 'English'], education: [{ degree: 'MBBS', institution: 'Raj. Medical College', year: 2006 }, { degree: 'FCPS (Ophthalmology)', institution: 'BSMMU', year: 2013 }], schedule: { Sun: ['09:00-13:00', '15:00-18:00'], Mon: null, Tue: ['09:00-13:00', '15:00-18:00'], Wed: ['09:00-13:00'], Thu: null, Fri: ['09:00-13:00', '15:00-18:00'], Sat: ['10:00-13:00'] }, nextAvailable: 'Today 3:00 PM' },
    { id: 'doc7', name: 'Dr. Rafiqul Islam', credentials: 'MBBS, FCPS (Gynecology)', specialty: 'Gynecology', departmentId: 'd7', experience: 20, fee: 1400, rating: 4.7, reviewCount: 70, gender: 'male', avatar: 'https://ui-avatars.com/api/?name=Rafiqul+Islam&background=EC4899&color=fff&size=128', bio: 'Dr. Islam is one of the most experienced obstetricians in Bangladesh. He specializes in high-risk pregnancies and fertility treatments.', languages: ['Bangla', 'English', 'Arabic'], education: [{ degree: 'MBBS', institution: 'Dhaka Medical College', year: 2000 }, { degree: 'FCPS (Gynecology)', institution: 'BSMMU', year: 2008 }], schedule: { Sun: ['10:00-14:00', '17:00-20:00'], Mon: ['10:00-14:00'], Tue: null, Wed: ['10:00-14:00', '17:00-20:00'], Thu: ['10:00-14:00'], Fri: null, Sat: ['10:00-13:00'] }, nextAvailable: 'Tomorrow 10:00 AM' },
    { id: 'doc8', name: 'Dr. Tahmina Begum', credentials: 'MBBS, DLO (ENT)', specialty: 'ENT', departmentId: 'd8', experience: 9, fee: 900, rating: 4.5, reviewCount: 28, gender: 'female', avatar: 'https://ui-avatars.com/api/?name=Tahmina+Begum&background=14B8A6&color=fff&size=128', bio: 'Dr. Begum specializes in ear, nose, and throat disorders with expertise in endoscopic sinus surgery and hearing restoration procedures.', languages: ['Bangla', 'English'], education: [{ degree: 'MBBS', institution: 'Sylhet MAG Osmani Medical College', year: 2011 }, { degree: 'DLO', institution: 'BSMMU', year: 2017 }], schedule: { Sun: ['10:00-14:00'], Mon: ['10:00-14:00', '16:00-19:00'], Tue: ['10:00-14:00'], Wed: ['10:00-14:00', '16:00-19:00'], Thu: null, Fri: ['10:00-13:00'], Sat: null }, nextAvailable: 'Today 10:00 AM' }
  ],

  /* ---------- Reviews ---------- */
  reviews: [
    { id: 'r1', doctorId: 'doc1', author: 'Hasib Uddin', date: '2025-01-08', rating: 5, text: 'Excellent cardiologist! Dr. Haque explained my condition thoroughly and his treatment plan worked perfectly. Highly recommended.', verified: true },
    { id: 'r2', doctorId: 'doc1', author: 'Salma Khatun', date: '2025-01-02', rating: 5, text: 'Very caring doctor. Took time to answer all my questions about my heart condition. The staff was also very professional.', verified: true },
    { id: 'r3', doctorId: 'doc1', author: 'Rakib Hassan', date: '2024-12-28', rating: 4, text: 'Good experience overall. Had to wait a bit longer than expected but the consultation was thorough.', verified: true },
    { id: 'r4', doctorId: 'doc2', author: 'Mithila Akter', date: '2025-01-05', rating: 5, text: 'Dr. Rahman diagnosed my mother\'s condition accurately when other doctors couldn\'t. We are forever grateful.', verified: true },
    { id: 'r5', doctorId: 'doc2', author: 'Tanvir Ahmed', date: '2024-12-20', rating: 4, text: 'Very knowledgeable neurologist. She took her time to explain the MRI results in detail.', verified: false },
    { id: 'r6', doctorId: 'doc4', author: 'Ritu Parvin', date: '2025-01-10', rating: 5, text: 'My daughter loves Dr. Jahan! She is so gentle and makes the kids feel comfortable. Best pediatrician in Dhaka.', verified: true },
    { id: 'r7', doctorId: 'doc3', author: 'Jahangir Alam', date: '2024-12-15', rating: 5, text: 'After my knee replacement by Dr. Uddin, I can walk without pain for the first time in years. Outstanding surgeon.', verified: true },
    { id: 'r8', doctorId: 'doc6', author: 'Monira Begum', date: '2025-01-06', rating: 5, text: 'Had LASIK surgery with Dr. Akter. The procedure was quick and painless. My vision is now perfect!', verified: true }
  ],

  /* ---------- Appointments ---------- */
  appointments: [
    { id: 'a1', doctorId: 'doc1', patientId: 'u1', date: '2025-01-15', time: '10:00', status: 'confirmed', symptoms: 'Chest pain during exercise', notes: '', prescription: null },
    { id: 'a2', doctorId: 'doc2', patientId: 'u1', date: '2025-01-22', time: '15:30', status: 'pending', symptoms: 'Recurring headaches', notes: '', prescription: null },
    { id: 'a3', doctorId: 'doc1', patientId: 'u1', date: '2024-12-20', time: '10:00', status: 'completed', symptoms: 'Annual checkup', notes: 'All vitals normal. Continue current medication.', prescription: 'rx1' },
    { id: 'a4', doctorId: 'doc4', patientId: 'u1', date: '2024-11-15', time: '09:00', status: 'completed', symptoms: 'Child fever and cough', notes: 'Viral infection. Rest and hydration advised.', prescription: 'rx2' },
    { id: 'a5', doctorId: 'doc3', patientId: 'u1', date: '2024-10-05', time: '16:00', status: 'cancelled', symptoms: 'Lower back pain', notes: '', prescription: null }
  ],

  /* ---------- Prescriptions ---------- */
  prescriptions: [
    { id: 'rx1', doctorId: 'doc1', patientId: 'u1', date: '2024-12-20', medicines: [
      { name: 'Atorvastatin', dosage: '10mg', frequency: 'Once daily at bedtime', duration: '3 months', status: 'active' },
      { name: 'Aspirin', dosage: '75mg', frequency: 'Once daily after lunch', duration: '3 months', status: 'active' },
      { name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily morning', duration: '3 months', status: 'active' }
    ]},
    { id: 'rx2', doctorId: 'doc4', patientId: 'u1', date: '2024-11-15', medicines: [
      { name: 'Paracetamol', dosage: '500mg', frequency: 'Three times daily', duration: '5 days', status: 'completed' },
      { name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times daily', duration: '7 days', status: 'completed' }
    ]}
  ],

  /* ---------- Lab Results ---------- */
  labResults: [
    { id: 'lab1', patientId: 'u1', testName: 'Complete Blood Count (CBC)', date: '2025-01-10', status: 'normal', orderedBy: 'doc1', results: [
      { parameter: 'Hemoglobin', value: '14.2', unit: 'g/dL', range: '13.5-17.5', status: 'normal' },
      { parameter: 'WBC', value: '7,200', unit: '/µL', range: '4,500-11,000', status: 'normal' },
      { parameter: 'Platelets', value: '250,000', unit: '/µL', range: '150,000-400,000', status: 'normal' },
      { parameter: 'RBC', value: '5.1', unit: 'million/µL', range: '4.5-5.5', status: 'normal' }
    ]},
    { id: 'lab2', patientId: 'u1', testName: 'Lipid Panel', date: '2024-12-28', status: 'review', orderedBy: 'doc1', results: [
      { parameter: 'Total Cholesterol', value: '225', unit: 'mg/dL', range: '<200', status: 'high' },
      { parameter: 'LDL', value: '148', unit: 'mg/dL', range: '<100', status: 'high' },
      { parameter: 'HDL', value: '42', unit: 'mg/dL', range: '>40', status: 'normal' },
      { parameter: 'Triglycerides', value: '180', unit: 'mg/dL', range: '<150', status: 'high' }
    ]},
    { id: 'lab3', patientId: 'u1', testName: 'Blood Glucose (Fasting)', date: '2024-12-28', status: 'normal', orderedBy: 'doc1', results: [
      { parameter: 'Fasting Glucose', value: '95', unit: 'mg/dL', range: '70-100', status: 'normal' },
      { parameter: 'HbA1c', value: '5.4', unit: '%', range: '<5.7', status: 'normal' }
    ]}
  ],

  /* ---------- Vaccinations ---------- */
  vaccinations: [
    { id: 'v1', name: 'COVID-19 (Pfizer)', date: '2024-06-15', doctor: 'Dr. Nusrat Jahan', dose: '3rd (Booster)', nextDue: null, status: 'completed' },
    { id: 'v2', name: 'Influenza', date: '2024-10-01', doctor: 'Dr. Nusrat Jahan', dose: 'Annual', nextDue: '2025-10-01', status: 'completed' },
    { id: 'v3', name: 'Hepatitis B', date: '2023-03-20', doctor: 'Dr. Aminul Haque', dose: '3rd (Final)', nextDue: null, status: 'completed' },
    { id: 'v4', name: 'Tetanus (Td)', date: '2022-08-10', doctor: 'Dr. Kamal Uddin', dose: 'Booster', nextDue: '2032-08-10', status: 'completed' }
  ],

  /* ---------- Medicines (Pharmacy) ---------- */
  medicines: [
    { id: 'm1', name: 'Atorvastatin', generic: 'Atorvastatin Calcium', strength: '10mg', form: 'Tablet', category: 'cardiac', price: 5, priceUnit: 'tab', requiresRx: true, manufacturer: 'Square Pharma', description: 'Used to lower cholesterol and reduce the risk of heart disease.' },
    { id: 'm2', name: 'Amoxicillin', generic: 'Amoxicillin Trihydrate', strength: '500mg', form: 'Capsule', category: 'antibiotics', price: 8, priceUnit: 'cap', requiresRx: true, manufacturer: 'Beximco Pharma', description: 'A penicillin-type antibiotic used to treat bacterial infections.' },
    { id: 'm3', name: 'Omeprazole', generic: 'Omeprazole', strength: '20mg', form: 'Capsule', category: 'gastro', price: 4, priceUnit: 'cap', requiresRx: false, manufacturer: 'Incepta Pharma', description: 'Proton pump inhibitor used to reduce stomach acid production.' },
    { id: 'm4', name: 'Paracetamol', generic: 'Acetaminophen', strength: '500mg', form: 'Tablet', category: 'pain', price: 2, priceUnit: 'tab', requiresRx: false, manufacturer: 'Renata Ltd', description: 'Common pain reliever and fever reducer.' },
    { id: 'm5', name: 'Aspirin', generic: 'Acetylsalicylic Acid', strength: '75mg', form: 'Tablet', category: 'cardiac', price: 3, priceUnit: 'tab', requiresRx: false, manufacturer: 'ACI Ltd', description: 'Blood thinner used to prevent heart attacks and strokes.' },
    { id: 'm6', name: 'Amlodipine', generic: 'Amlodipine Besylate', strength: '5mg', form: 'Tablet', category: 'cardiac', price: 4, priceUnit: 'tab', requiresRx: true, manufacturer: 'Square Pharma', description: 'Calcium channel blocker used to treat high blood pressure.' },
    { id: 'm7', name: 'Metformin', generic: 'Metformin HCl', strength: '500mg', form: 'Tablet', category: 'diabetes', price: 3, priceUnit: 'tab', requiresRx: true, manufacturer: 'Eskayef', description: 'First-line medication for type 2 diabetes management.' },
    { id: 'm8', name: 'Cetirizine', generic: 'Cetirizine HCl', strength: '10mg', form: 'Tablet', category: 'allergy', price: 3, priceUnit: 'tab', requiresRx: false, manufacturer: 'Incepta Pharma', description: 'Antihistamine used to relieve allergy symptoms.' },
    { id: 'm9', name: 'Azithromycin', generic: 'Azithromycin Dihydrate', strength: '250mg', form: 'Tablet', category: 'antibiotics', price: 15, priceUnit: 'tab', requiresRx: true, manufacturer: 'Beximco Pharma', description: 'Macrolide antibiotic for respiratory and skin infections.' },
    { id: 'm10', name: 'Vitamin D3', generic: 'Cholecalciferol', strength: '1000IU', form: 'Capsule', category: 'vitamins', price: 6, priceUnit: 'cap', requiresRx: false, manufacturer: 'Renata Ltd', description: 'Vitamin D supplement for bone health and immune function.' },
    { id: 'm11', name: 'Ibuprofen', generic: 'Ibuprofen', strength: '400mg', form: 'Tablet', category: 'pain', price: 4, priceUnit: 'tab', requiresRx: false, manufacturer: 'ACI Ltd', description: 'NSAID used for pain relief and reducing inflammation.' },
    { id: 'm12', name: 'Calcium + D', generic: 'Calcium Carbonate + Vitamin D3', strength: '500mg + 200IU', form: 'Tablet', category: 'vitamins', price: 5, priceUnit: 'tab', requiresRx: false, manufacturer: 'Square Pharma', description: 'Calcium and vitamin D supplement for bone strength.' }
  ],

  /* ---------- Testimonials ---------- */
  testimonials: [
    { id: 't1', name: 'Hasib Uddin', text: 'MediCare saved my life after a heart attack. The emergency response and Dr. Haque\'s expertise made all the difference. Forever grateful!', rating: 5, image: 'https://ui-avatars.com/api/?name=Hasib+Uddin&background=E2E8F0&color=334155&size=64' },
    { id: 't2', name: 'Ritu Parvin', text: 'The pediatrics department is amazing. Dr. Jahan treats my children with such care and patience. Best hospital for kids!', rating: 5, image: 'https://ui-avatars.com/api/?name=Ritu+Parvin&background=E2E8F0&color=334155&size=64' },
    { id: 't3', name: 'Jahangir Alam', text: 'After struggling with knee pain for years, Dr. Uddin\'s surgery gave me a new life. Walking without pain is a blessing.', rating: 5, image: 'https://ui-avatars.com/api/?name=Jahangir+Alam&background=E2E8F0&color=334155&size=64' },
    { id: 't4', name: 'Monira Begum', text: 'Had LASIK with Dr. Akter and the experience was incredible. Professional staff, modern facilities, and perfect results.', rating: 5, image: 'https://ui-avatars.com/api/?name=Monira+Begum&background=E2E8F0&color=334155&size=64' }
  ],

  /* ---------- Health Tips ---------- */
  healthTips: [
    { id: 'ht1', title: '5 Simple Ways to Keep Your Heart Healthy', excerpt: 'Regular exercise, balanced diet, and stress management can significantly reduce cardiovascular risk.', readTime: '4 min', date: 'Jan 12, 2025', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop' },
    { id: 'ht2', title: 'Understanding Your Blood Test Results', excerpt: 'A comprehensive guide to reading CBC, lipid panels, and other common blood tests.', readTime: '6 min', date: 'Jan 8, 2025', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=250&fit=crop' },
    { id: 'ht3', title: 'Childhood Vaccination Schedule for Bangladesh', excerpt: 'Complete guide to EPI vaccinations and recommended additional vaccines for children.', readTime: '5 min', date: 'Jan 5, 2025', image: 'https://images.unsplash.com/photo-1632053002928-1919605ee6fb?w=400&h=250&fit=crop' }
  ],

  /* ---------- Admin Dashboard Data ---------- */
  adminStats: {
    todayAppointments: 45, appointmentChange: 12,
    activeDoctors: 128,
    monthlyRevenue: 4250000, revenueChange: 8,
    bedOccupancy: 72, totalBeds: 500, occupiedBeds: 360
  },

  weeklyAppointments: [
    { day: 'Sat', count: 38 }, { day: 'Sun', count: 52 }, { day: 'Mon', count: 45 },
    { day: 'Tue', count: 48 }, { day: 'Wed', count: 42 }, { day: 'Thu', count: 35 },
    { day: 'Fri', count: 28 }
  ],

  departmentLoad: [
    { name: 'Cardiology', patients: 85, color: '#DC2626' },
    { name: 'Orthopedics', patients: 62, color: '#0284C7' },
    { name: 'Pediatrics', patients: 55, color: '#059669' },
    { name: 'Neurology', patients: 40, color: '#7C3AED' },
    { name: 'Gynecology', patients: 48, color: '#EC4899' },
    { name: 'Others', patients: 35, color: '#64748B' }
  ],

  todaySchedule: [
    { patient: 'Hasib Uddin', doctorId: 'doc1', time: '09:00', status: 'completed' },
    { patient: 'Mithila Akter', doctorId: 'doc2', time: '09:30', status: 'completed' },
    { patient: 'Rakib Hassan', doctorId: 'doc1', time: '10:00', status: 'confirmed' },
    { patient: 'Sakib Ahmed', doctorId: 'doc3', time: '10:30', status: 'confirmed' },
    { patient: 'Farzana Alam', doctorId: 'doc4', time: '11:00', status: 'pending' },
    { patient: 'Tanvir Hossain', doctorId: 'doc2', time: '11:30', status: 'confirmed' },
    { patient: 'Rashida Khatun', doctorId: 'doc7', time: '14:00', status: 'confirmed' },
    { patient: 'Alamgir Khan', doctorId: 'doc5', time: '15:00', status: 'pending' }
  ],

  /* ---------- Time Slot Generation ---------- */
  generateTimeSlots(schedule, date) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(date);
    const dayName = dayNames[d.getDay()];
    const periods = schedule[dayName];
    if (!periods) return [];
    const slots = [];
    periods.forEach(p => {
      const [start, end] = p.split('-');
      let [sh, sm] = start.split(':').map(Number);
      const [eh] = end.split(':').map(Number);
      while (sh < eh) {
        slots.push(`${String(sh).padStart(2,'0')}:${String(sm).padStart(2,'0')}`);
        sm += 30; if (sm >= 60) { sm = 0; sh++; }
      }
    });
    return slots;
  }
};
