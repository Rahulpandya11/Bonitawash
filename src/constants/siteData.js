export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Car Wash', path: '/services' },
    { label: 'Detailing', path: '/detailing' },
    { label: 'Gift Cards & Membership', path: '/gift-cards' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
];

export const QUICK_STATS = [
    { value: '18+', label: 'Years of Trusted Service' },
    { value: '447+', label: '5-Star Customer Reviews' },
    { value: '20K+', label: 'Vehicles Detailed' },
    { value: '100%', label: 'Hand-Finished Quality' }
];

export const SERVICE_PACKAGES = [
    {
        title: 'EXPRESS HAND WASH',
        price: '$64.95',
        features: [
            'Full Service car Wash',
            'Liquid carnauba Wax (applied by hand)',
            'Air Freshener',
            'Tire Dressing',
            'Wheel Bright'
        ]
    },
    {
        title: 'SPECIAL EXTERIOR CERAMIC',
        price: '$45.95',
        features: [
            'Full service wash',
            'Ceramic spray protectant',
            'Enhanced shine & protection',
            'Wheel Bright',
            'Complete exterior dressing',
            'Air freshener'
        ]
    },
    {
        title: 'EXTERIOR SUPREME',
        price: '$43.95',
        features: [
            'Full service wash',
            'Blue coral express wax',
            'Black magic for tires & windows',
            'Pink clear coat conditioner',
            'Rainbow polish',
            'Poly sealant',
            'Wheel Bright',
            'Air freshener'
        ]
    },
    {
        title: '100% HAND WASH',
        price: '$49.95',
        features: [
            'Full service Hand wash',
            'Vacuum Interior',
            'Clean Windows in/out',
            'Air freshener',
            'Wheel bright',
            'Exterior Dressing',
            'Van, SUV, pickup truck +$5.00'
        ]
    },
    {
        title: 'VIP WASH',
        price: '$31.95',
        features: [
            'Full service',
            'Works wash',
            'Tri Foam Polish Conditioner',
            'Wheel bright',
            'RNX graphene'
        ]
    },
    {
        title: 'WORKS WASH',
        price: '$28.95',
        features: [
            'Full Service',
            'Victorian Wash',
            'Red Polish Conditioner',
            'Tire Dressing'
        ]
    },
    {
        title: 'VICTORIAN WASH',
        price: '$26.95',
        features: [
            'Full service',
            'Foam Bath',
            'Pre soak 1',
            'Lustra wax',
            'Air Freshener'
        ]
    },
    {
        title: 'HAND WASH & WAX',
        price: '$79.95',
        features: ['Detail hand wax', 'Detail of hand wash']
    },
    {
        title: 'EXTERIOR WASH ONLY',
        price: '$18.95',
        features: ['Wash + Hand dry', 'No tire dressing']
    }
];

export const PRICE_DISCLAIMER = '* Prices may vary depending on the type, size, or condition of the vehicle. Final price is confirmed on-site.';

export const WALK_IN_NOTE = 'No appointment needed for car washes. Walk in anytime during business hours and you get the same price listed here.';

export const RAIN_GUARANTEE = {
    title: '24-Hour Rain Guarantee',
    description: 'If it rains within 24 hours of your wash, bring your car back and we will take care of the exterior again at no charge.'
};

export const WEEKDAY_DEALS = {
    title: 'Weekday Deals',
    days: 'Monday - Friday',
    deals: [
        { name: 'Regular Wash', price: '$22.95' },
        { name: 'Special Exterior Ceramic Spray Wax', originalPrice: '$45.95', price: '$40.95' },
        { name: '100% Hand Wash', originalPrice: '$49.95', price: '$41.95' },
        { name: 'Exterior Wash Only', price: '$18.95', note: 'No tire dressing' }
    ]
};

export const DETAIL_A_LA_CARTE = [
    { name: 'Ceramic Coating (Ceramic Pro)', price: 'Free Quote' },
    { name: 'Clay, Buff & Wax', price: '$225' },
    { name: 'Interior Shampoo', price: '$220' },
    { name: 'Clay Wax', price: '$160' },
    { name: 'Carpets Shampoo', price: '$150' },
    { name: 'Seats Shampoo', price: '$150' },
    { name: 'Leather Clean & Condition', price: '$125' },
    { name: 'Carnauba Paste Wax', price: '$125' },
    { name: 'Door Panels', price: '$100' },
    { name: 'Head Lamps Restoration', price: '$65', note: 'Complimentary with complete detail package' },
    { name: 'Pet Hair Removal', price: 'Free Quote', note: 'Starting from $250' }
];

// Month is 1-12; windows repeat every year. A window whose end is before its start wraps over New Year.
export const SEASONAL_PROMOS = [
    {
        id: 'halloween',
        start: { month: 10, day: 20 },
        end: { month: 10, day: 31 },
        emoji: '🎃',
        eyebrow: 'Halloween Special | Oct 26 - Oct 31',
        title: '10% Off All Car Washes',
        description: 'Show the cashier that you follow us on Instagram and get 10% off any car wash, applied at the end of billing.',
        secondary: 'Detail offer: 20% off our Ultra 375 detail (most expensive package). Limited to 3 cars per day, so book ahead.',
        ctaText: 'Book Ultra Detail',
        ctaPackage: 'Ultra 375'
    },
    {
        id: 'winter-membership',
        start: { month: 11, day: 1 },
        end: { month: 2, day: 29 },
        eyebrow: 'Winter Membership',
        title: 'Keep Your Car Clean All Winter',
        description: 'Sign up for a car wash membership and wash as often as you need through the rainy season. Ask our cashier on your next visit or contact us to sign up.',
        ctaText: 'View Memberships',
        ctaPath: '/gift-cards#membership'
    }
];

export const MEMBERSHIP = {
    eyebrow: 'Winter Membership',
    title: 'Winter Car Wash Membership',
    subtitle: 'Rain, mud and road grime all season long? A membership keeps your car clean all winter long.',
    benefits: [
        'Keep your car clean all season',
        'Every wash comes with our 24-hour rain guarantee',
        'No appointment needed, just drive in',
        'Sign up at the register in minutes'
    ],
    howToJoin: 'Ask our cashier on your next visit, or call us to sign up.'
};

export const PREMIUM_WASH_TITLES = ['HAND WASH & WAX', 'EXPRESS HAND WASH', '100% HAND WASH', 'SPECIAL EXTERIOR CERAMIC'];

export const DIAMOND_BAR = {
    title: 'Now Serving Diamond Bar',
    subtitle: 'Just off the 57 Freeway, a short drive from Diamond Bar. Premium hand washes, full details and Ceramic Pro coating, with walk-ins welcome for every wash.',
    path: '/detailing'
};

export const A_LA_CARTE_SERVICES = [
    { name: 'Ceramic Spray Protectant', price: '$25' },
    { name: 'Rainbow Polish', price: '$5' },
    { name: 'Pink Clearcoat Conditioner', price: '$3' },
    { name: 'Poly Sealant', price: '$2' },
    { name: 'Air Freshener', price: '$1.50' },
    { name: 'Tire Dressing', price: '$2.50' },
    { name: 'Wheel Bright', price: '$5' },
    { name: 'Interior Dressing', price: '$12' },
    { name: 'Exterior Dressing', price: '$12' },
    { name: 'Complete Int/Ext Dressing', price: '$22' }
];

export const GIFT_CARDS = [
    { name: 'Gift Card - $50', price: '$50', description: 'Perfect for a quick wash package' },
    { name: 'Gift Card - $100', price: '$100', description: 'Great for multiple washes or detailing' },
    { name: 'Gift Card - $150', price: '$150', description: 'Ideal for premium detailing services' },
    { name: 'Gift Card - Custom Amount', price: 'Custom', description: 'Choose your own amount' }
];

export const MULTI_WASH_PACKAGES = [
    { name: '3 Victorian Washes', originalPrice: '$80.85', price: '$74.95', savings: '$5.90' },
    { name: '5 Victorian Washes', originalPrice: '$134.75', price: '$124.95', savings: '$9.80' },
    { name: '3 Works Washes', originalPrice: '$86.85', price: '$79.95', savings: '$6.90' },
    { name: '5 Works Washes', originalPrice: '$144.75', price: '$134.95', savings: '$9.80' },
    { name: '3 VIP Washes', originalPrice: '$95.85', price: '$89.95', savings: '$5.90' },
    { name: '5 VIP Washes', originalPrice: '$159.75', price: '$149.95', savings: '$9.80' }
];

export const DETAILING_PACKAGES = [
    { name: 'Ultra 375', price: '$375', description: 'Ultimate detailing package' },
    { name: 'Luxury 325', price: '$325', description: 'Premium detailing service' },
    { name: 'Super 275', price: '$275', description: 'Complete detailing package' }
];

export const DETAILING_PLANS = [
    {
        serviceKey: 'ULTRA_DETAIL',
        features: [
            '100% Hand Wash',
            'Wheel Polish',
            'Clay Treatment',
            'Exterior Polish',
            'Carnauba Paste Wax',
            'Rims Polished',
            'Interior Shampoo',
            'Trunk Shampoo',
            'Main Shampoo',
            'Scotch Guard',
            'Polish Headlamps',
            'Leather Treatment'
        ],
        featured: false
    },
    {
        serviceKey: 'LUXURY_DETAIL',
        features: [
            'Regular Wash',
            'Clay Treatment',
            'Exterior Polish',
            'Carnauba Paste Wax',
            'Interior Shampoo',
            'Trunk Shampoo',
            'Mats Shampoo',
            'Wheel Bright',
            'Complete Dressing'
        ],
        featured: true
    },
    {
        serviceKey: 'SUPER_DETAIL',
        features: [
            'Regular Wash',
            'Wheel Bright',
            'Complete Dressing',
            'Liquid Carnauba Wax',
            'Interior Shampoo',
            'Trunk Shampoo',
            'Mats Shampoo'
        ],
        featured: false
    }
];

export const GALLERY_IMAGES = [
    {
        src: '/images/20250122-DSC04917-2-Enhanced-NR.jpg',
        caption: 'After Exterior'
    },
    {
        src: '/images/washing-the-suv-car.jpg',
        caption: 'Wash Process'
    },
    {
        src: '/images/20250225-DSC04950-Enhanced-NR.jpg',
        caption: 'Interior Deep Clean'
    },
    {
        src: '/images/20250225-DSC04921-Enhanced-NR.jpg',
        caption: 'Hand Wax Application'
    },
    {
        src: '/images/multistore.jpg',
        caption: 'Multi Store'
    },
    {
        src: '/images/after-shampoo.jpg',
        caption: 'After Shampoo'
    },
    {
        src: '/images/dent-removal.jpg',
        caption: 'Detailing'
    },
    {
        src: '/images/20250225-DSC04946-Enhanced-NR.jpg',
        caption: 'Leather Work'
    }
];

export const CONTACT_DETAILS = {
    address: '555 W Bonita Ave, San Dimas, CA 91773, United States',
    phoneDisplay: '(909) 592-9666',
    phoneDial: '9095929666',
    email: 'bonitacarwash27x7@gmail.com',
    schedule: 'Mon - Sat: 8:00 AM - 6:00 PM | Sunday: 8:00 AM - 5:00 PM'
};

export const HOME_ADDONS = [
    {
        title: 'Free Add-On Check',
        description: 'We inspect paint, trim, and interior touch points before every package.'
    },
    {
        title: 'Ceramic Boost',
        description: 'Optional ceramic spray layer for longer shine and easier maintenance.'
    },
    {
        title: 'Priority Pickup Slots',
        description: 'Choose high-demand time windows instantly through our booking form.'
    }
];

export const GOOGLE_PROFILE_REVIEWS = [
    {
        name: 'Lalo G.',
        stars: 5,
        text: 'Lalo always greet me with a smile and with respect. The service here is top notch and my car always looks magnificent.',
        link: 'https://share.google/GywTiX2meFbm0Rh9R'
    },
    {
        name: 'Juan M.',
        stars: 5,
        text: 'Excellent customer care. The manager Juan really takes care of his customers. Highly recommend for any detailing needs.',
        link: 'https://share.google/GywTiX2meFbm0Rh9R'
    },
    {
        name: 'Nivea S.',
        stars: 5,
        text: 'Warm and friendly attitude at the front register. Great experience every time I come here for over 30 years.',
        link: 'https://share.google/GywTiX2meFbm0Rh9R'
    },
    {
        name: 'Mary',
        stars: 5,
        text: 'Lalo was so kind and helpful. He gave me a great experience, gave recommendations to me & handled my car with care. Great customer service',
        link: 'https://share.google/hcwwyxfF4o1U45SGh'
    },
    {
        name: 'Karen Lucas',
        stars: 5,
        text: 'After a month on the road, this white PHEV was a dingy gray shadow of its best self shellacked in various kinds of bug guts along the nose and grill. Luckily Bonita Car Wash is right off the 57 Fwy and it was so easy to pop in and get the sullied vehicle clean in no time. There is a great indoor area to wait and watch your vehicle getting cleaned. The guys hand-cleaning the interior and waxing the exterior do an impeccable job. Such a fan!',
        link: 'https://share.google/LgJStddQ1g6lmhYgO'
    },
    {
        name: 'Christi Velasco',
        stars: 5,
        text: 'I have been coming to San Dimas car wash for a few years now and have been happy there. But recently, I had an issue with my car and was pretty upset. A shout out to Raj who graciously got back in touch with me and handled my issue to my satisfaction. That service is something that will keep me coming back!',
        link: 'https://share.google/0He2GIC4RPSMQVXte'
    },
    {
        name: 'Dr. Keith Marshall',
        stars: 5,
        text: 'This car wash or should I say car "care" facility is by far the best. People care about their customers. There are quite a few people I could talk about but a few stand out. So thank you to all the car care specialists and a big shout out to "Nivea". She handles the register and assures customers are taken care of. Her attitude is warm and friendly all the time. She does not take one moment or one person for granted. I appreciate her and the other staff.',
        link: 'https://share.google/6V6cQtpzIUQi5rrQy'
    },
    {
        name: 'Mudra Vyas',
        stars: 5,
        text: 'I love bonita car wash! I try and come once a week to get my car washed, the service is always amazing! The guys outside always work hard to make sure my car is clean. I also see the manager Juan making sure that every customer is taken care of.',
        link: 'https://share.google/u8xDp1LbqEmJOEXvN'
    }
];
