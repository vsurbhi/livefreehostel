// ============================================================
//  LIVE FREE — SITE DATA
// ============================================================
import social1 from "../assets/social1.webp"
import social2 from "../assets/social2.webp"
import social3 from "../assets/social3.webp"
import social4 from "../assets/social4.webp"
import social5 from "../assets/social5.webp"

export const FEATURES = [
  {
    id: 'Prime Locations',
    icon: 'MapPin',
    title: 'Prime Location',
    desc: 'Every Live Free property is strategically situated to offer breathtaking aesthetics and unmatched convenience for backpackers. Positioned steps away from major transport hubs, vibrant old-town markets, local cafés, and iconic spiritual centres, we are your perfect exploration launchpad. Step out to discover hidden gems, or return to recharge in style.',
  },
  {
    id:'comfort',
    icon:'PawPrint',
    title:'Inclusivity',
    desc:`At Live Free, everyone is welcome. Whether you are traveling with family, kids, as a young backpacker, or a solo explorer, our property suits every journey. Our multiple, diverse common areas naturally bring people together, making it incredibly easy to connect, share stories, and mingle with similar, like-minded groups throughout your stay.`
  },
  {
    id: 'travel',
    icon: 'Sunset',
    title: 'Built for Digital Nomads ',
    desc: 'We ensure your work never suffers while you travel. Our properties feature reliable, fast Wi-Fi across all communal spaces, alongside robust power backup systems. Access dedicated workspaces equipped with desks and multiple socket points across our seating areas—the perfect environment to network and collaborate with a thriving global creative community.',
  },
  {
    id: 'cafe',
    icon: 'Coffee',
    title: 'The Live Free Café',
    desc: 'Our Café is the cozy, high-energy heart of our hostel. Designed with shared tables and plush cushions, it’s where casual afternoon coffees turn into late-night travel plans with global friends. We serve 100% fresh, made-to-order dishes—from nutritious, home-style Indian comfort food to global backpacker staples—perfectly fueling your daily adventures on a budget.',
  },
  {
    id: 'events',
    icon: 'Sofa',
    title: 'Your Space, Your Vibe',
    desc:`Our expansive common areas adapt to your mood. Seek out a sunlit corner for focused deep-work, strum a guitar with creators, or gather for high-stakes card games. Packed with foosball, table tennis, and diverse board games, our lounges effortlessly provide the perfect social backdrop for every type of traveler.`,
  },
  {
    id: 'wifi',
    icon:'PartyPopper',
    title:'Unforgettable Hostel Events ',
    desc:`The fun never stops with our rotating calendar of community activities. Bond over vibrant in-house dinners, showcase your talent at open-mic acoustic nights, or dive into competitive trivia and board games. From morning yoga to sunset hikes, our curated gatherings ensure you leave with new friends and lifelong memories.`
  },
]

export const STATS = [
  { value: 200000 , suffix: '+', label: 'Guests Hosted', prefix: '' },
  { value: 10, suffix: '+', label: 'Years of Experience', prefix: '' },
  { value: 100, suffix: '+', label: 'Nationalities', prefix: '' },
  { value: 8.5, suffix: '+', label: 'Average Rating', prefix: '' },
]
import { ImOpt } from 'react-icons/im'
import rishikeshImg from '../assets/Live_Free-23(1).webp'

export const DESTINATIONS = [
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Your Spiritual & Adventure Hub',
    desc: 'Located in Tapovan near Laxman Jhula, our top-rated hostel offers a rooftop yoga space, live music, and hammocks—the perfect base camp for rafting and meeting backpackers.',
    path: '/rishikesh',
    img: rishikeshImg,
    color: '#e2f0dd',
    bookingUrl: 'https://book.livefreehostels.com/booking/book-rooms-livefreehostelrishikesh',
    hotelCode: 'livefreehostelrishikesh',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Soulful Vibe by the Ganges',
    desc: 'A five-minute walk from Assi Ghat, our Varanasi hub immerses you in spiritual culture. Enjoy Ganga Aarti, explore alleyways, and connect with global travelers.',
    path: '/varanasi',
    img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&q=85',
    color: '#fdf3ec',
    bookingUrl: 'https://book.livefreehostels.com/booking/book-rooms-livefreehostelvaranasi',
    hotelCode: 'livefreehostelvaranasi',
  },
  {
    id: 'dehradun',
    name: 'Dehradun',

    tagline: 'The Perfect Getaway Town',
    desc: 'Nestled in the valley, our Dehradun property is the perfect place to explore the city and a Mussoorie stopover. Featuring AC rooms, Wi-Fi, social zones, and quiet nooks, it unites all travelers.',
    path: '/dehradun',
    img: 'https://d2jqolc708g016.cloudfront.net/get_social_compressed/get+social/ec1769aa-d311-412a-97be-9d7bebdfca7f.webp+(1).jpg',
    color: '#fce4db',
    bookingUrl: 'https://book.livefreehostels.com/booking/book-rooms-livefreehosteldehradun',
    hotelCode: 'livefreehosteldehradun',
  },
]
export const ROOMS = [
  {
    id: 'private',
    theme: 'green',
    headline: 'Private Rooms',
    sub: 'Your own sanctuary — en‑suite, climate‑controlled, and designed to feel like home.',
    cta: 'Explore Rooms →',
  },
  {
    id: 'dorms',
    theme: 'dark',
    headline: 'Shared Dorms',
    sub: 'Thoughtfully designed pods with privacy curtains, personal lockers, and charging points.',
    cta: 'View Dorms →',
  },
  {
    id: 'experiences',
    theme: 'warm',
    headline: 'Experiences',
    sub: 'Yoga at dawn, river rafting, local food tours, and curated adventures every day.',
    cta: 'Join the Tribe →',
  },
]

export const GUIDELINES = [
  {
    icon: 'Moon',
    title: 'Quiet Hours',
    desc: 'Lights out at 11 PM. Common areas stay calm from 11 PM to 7 AM so everyone rests well.',
  },
  {
    icon: 'Users',
    title: 'Respect Community Space',
    desc: 'Shared lounges, kitchens, and terraces are for everyone. Leave them as beautiful as you found them.',
  },
  {
    icon: 'Smile',
    title: 'Friendly Hostel Culture',
    desc: 'Say hello, share a meal, swap stories. Kindness is the one policy we never compromise on.',
  },
  {
    icon: 'Sparkles',
    title: 'Cleanliness Expectations',
    desc: 'Keep your bunk and common areas tidy. Our team maintains high standards — please match them.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety First',
    desc: 'Secure your valuables in provided lockers. Guests‑only policy after 10 PM. Emergency help always nearby.',
  },
  {
    icon: 'Ban',
    title: 'No Smoking Indoors',
    desc: 'Smoking and vaping are restricted to designated outdoor zones to keep the air fresh for all.',
  },
]

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Absolutely stunning hostel! The service was impeccable and the community vibe is unmatched. Truly a 5‑star experience.',
    author: 'Sarah Johnson',
    country: 'Canada',
  },
  {
    stars: 5,
    text: 'Best hostel experience in India. The rooftop nights, friendly staff, and spotless spaces made my trip unforgettable.',
    author: 'Rajesh Kumar',
    country: 'India',
  },
  {
    stars: 5,
    text: 'I came for a weekend and stayed for two weeks. The community, the café, the views — everything is just perfect.',
    author: 'Mia Schulz',
    country: 'Germany',
  },
]

export const AWARDS = [
  {
    emoji: '🏆',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_11.webp',
    platform: "TripAdvisor Travellers' Choice",
    year: '2023',
    property: 'LiveFree Hostels · Rishikesh',
    theme: 'light',
  },
  {
    emoji: '⭐',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_12.webp',
    platform: 'Booking.com Review Award',
    year: '2023 — 8.5 / 10',
    property: 'LiveFree Hostels · Rishikesh',
    theme: 'blue',
  },
  {
    emoji: '⭐',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_13.webp',
    platform: 'Booking.com Review Award',
    year: '2023 — 8.7 / 10',
    property: 'LiveFree Hostels · Varanasi',
    theme: 'blue',
  },
  {
    emoji: '🌟',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_14.webp',
    platform: 'Hostelworld — Superb 9.2',
    year: 'Best Hostels India',
    property: 'LiveFree Hostels Network',
    theme: 'dark',
  },
  {
    emoji: '🌟',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_15.webp',
    platform: 'Hostelworld — Superb 9.2',
    year: 'Best Hostels India',
    property: 'LiveFree Hostels Network',
    theme: 'dark',
  },
   {
    emoji: '🌟',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_16.webp',
    platform: 'Hostelworld — Superb 9.2',
    year: 'Best Hostels India',
    property: 'LiveFree Hostels Network',
    theme: 'dark',
  },
   {
    emoji: '🌟',
    image: 'https://d2jqolc708g016.cloudfront.net/awards/award_17.webp',
    platform: 'Hostelworld — Superb 9.2',
    year: 'Best Hostels India',
    property: 'LiveFree Hostels Network',
    theme: 'dark',
  }
]

export const SOCIAL_IMGS = [
  { src: social1, postUrl: 'https://www.instagram.com/p/Dbx1nGNGYMN' },
  { src: social2, postUrl: 'https://www.instagram.com/p/Dbf2nnGmBUj' },
  { src: social3, postUrl: 'https://www.instagram.com/p/DRUZsPWjTfX' },
  { src: social4, postUrl: 'https://www.instagram.com/p/DRM_UqYEmNa' },
  { src: social5, postUrl: 'https://www.instagram.com/p/DTffX2NDUur' },
];

// ============================================================
//  CITY ROOM TYPES — Update prices & booking links below
// ============================================================

export const CITY_ROOMS = {
  rishikesh: [
    {
      id: 'female-dorm-4',
      name: '4 Bed Female Dorm',
      type: 'Dormitory',
      desc: 'A cozy, secure, and spacious shared sanctuary designed exclusively for female solo travellers seeking privacy and community.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi",
    "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air Conditioner", "Ensuite Bathroom",
    "Hot Water", "Hair Dryer", "Towel Rental", "Toilet", "Shower", "Toilet Paper",
    "Non-feather Pillows", "Linen", "Socket Near the Bed", "Bedside Lamp", "Work Desk"
  ],
      roomdesc: "2  Bunk Beds",
      images: ["https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/Bathroom.webp"
      ]
    },
    {
      id: 'dorm-4',
      name: '4 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A small, intimate mixed dorm that perfectly balances a social backpacker vibe with ample personal space.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi",
    "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air Conditioner", "Ensuite Bathroom",
    "Hot Water", "Hair Dryer", "Towel Rental", "Toilet", "Shower", "Toilet Paper",
    "Non-feather Pillows", "Linen", "Socket Near the Bed", "Bedside Lamp", "Work Desk"
  ],
      roomdesc: "2 Bunk Beds",
      images:["https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/main.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/bathroom.webp"
      ],
    },
     {
      id: 'dorm-6',
      name: '6 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A lively and budget-friendly shared room ideal for making friends and sharing stories with fellow globetrotters.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities:[
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi",
    "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air Conditioner", "Ensuite Bathroom",
    "Hot Water", "Hair Dryer", "Towel Rental", "Toilet", "Shower", "Toilet Paper",
    "Non-feather Pillows", "Linen", "Socket Near the Bed", "Bedside Lamp", "Work Desk"
  ],
      roomdesc: "3 Bunk Beds",
      images:["https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/main.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/bathroom.webp",
        
      ],
    },
    {
      id: 'DeluxePrivate',
      name: 'Deluxe Private Room',
      type: 'Private',
      desc: 'A premium, spacious well ventilated retreat featuring seating furniture &  extra comfort for ultimate relaxation.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Clothes Rack", "Linen",
    "Electric Kettle", "Tea/ Coffee Sachets", "Wi-fi", "Flat Screen TV", "Ceiling Fan",
    "Air Conditioner", "Ensuite Bathroom", "Toiletries", "Hair Dryer", "Hot Water",
    "Towels", "Toilet", "Shower", "Toilet Paper", "Non-feather Pillows", "Linen",
    "Socket Near the Bed", "Bedside Lamp", "Coffee Table Set"
  ],
      roomdesc:"1 King Size Bed ",
      images:["https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Deluxe+private+room/main.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Deluxe+private+room/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Deluxe+private+room/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Deluxe+private+room/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Deluxe+private+room/4.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Deluxe+private+room/bathroom.webp",

      ]
    },
    {
      id: 'private',
      name: 'Standard Private Room',
      type: 'Private',
      desc: 'A clean, peaceful, and comfortable private space offering the perfect quiet escape after a day of adventure.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Clothes Rack", "Linen",
    "Electric Kettle", "Tea/ Coffee Sachets", "Wi-fi", "Flat Screen TV", "Ceiling Fan",
    "Air Conditioner", "Ensuite Bathroom", "Toiletries", "Hair Dryer", "Hot Water",
    "Towels", "Toilet", "Shower", "Toilet Paper", "Non-feather Pillows", "Linen",
    "Socket Near the Bed", "Bedside Lamp", "Coffee Table Set"
  ],
      roomdesc:"1 Queen Size Bed",
      images:["https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Std+Private+Room/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Std+Private+Room/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Std+Private+Room/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Std+Private+Room/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Std+Private+Room/4.webp",
        "https://d2jqolc708g016.cloudfront.net/Rishikesh_compressed/Rishikesh/Std+Private+Room/bathroom.webp",
        
      ]
    }
  ],

  dehradun: [
    {
      id: 'dorm-8',
      name: '8 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A spacious, air-conditioned shared room offering the perfect blend of a lively community vibe and comfortable resting space.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi", "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air conditioner", "Shared Bathroom", "Hot water", "Hair dryer", "Towel Rental", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Linen", "Socket near the bed", "Bedside lamp"],
      roomdesc:"4 Bunk Beds",
      images:[
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/Main.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/1.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/2.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/3.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/4.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/Toilet.webp"
]
    },
    {
      id: 'dorm-6',
      name: '6 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A spacious, lively and budget-friendly shared room ideal for making friends and sharing stories with fellow globetrotters.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi", "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air conditioner", "Ensuite Bathroom", "Hot water", "Towel Rental", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Linen", "Socket near the bed", "Bedside lamp"],
      roomdesc:"3 Bunk Beds",
      images: [
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/Main.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/1.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/2.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/3.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/4.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/5.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+6+bed+pics/Toilet.webp"
]
    },
    {
      id: 'dorm-4',
      name: '4 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A premium, small-scale shared space offering extra comfort and quietness for close-knit groups or individual travellers.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi", "Bed Curtains", "Ceiling Fan", "Air conditioner", "Ensuite Bathroom", "Hot water", "Towel Rental", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Linen", "Socket near the bed", "Bedside lamp", "Work Desk"],
      roomdesc:"2 Bunk Beds",
      images:[
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/main.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/1.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/2.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/3.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/4.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/washroom.webp"
]
    },
    {
      id: 'female-dorm-4',
      name: '4 Bed Female Dorm',
      type: 'Dormitory',
      desc: 'A premium, small-scale shared space offering extra comfort and quietness for close-knit groups or individual travellers.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi", "Bed Curtains", "Ceiling Fan", "Air conditioner", "Ensuite Bathroom", "Hot water", "Hair Dryer", "Towel Rental", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Linen", "Socket near the bed", "Bedside lamp", "Work Desk"],
      roomdesc:"2 Bunk Beds",
      images:[
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+female+dorm+pics/Main.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+female+dorm+pics/1.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+female+dorm+pics/2.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+female+dorm+pics/3.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+female+dorm+pics/4.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+female+dorm+pics/Toilet.webp"
]
    },
    {
      id: 'deluxe-private',
      name: 'Deluxe Private Room',
      type: 'Private',
      desc: 'A  spacious, and beautifully furnished premium retreat with Balcony offering top-tier comfort and maximum room to unwind.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Clothes Rack", "Linen", "Electric Kettle", "Tea/ Coffee Sachets", "Wi-fi", "Flat Screen TV", "Ceiling Fan", "Air conditioner (Hot & Cold)", "Ensuite Bathroom", "Toiletries", "Hair Dryer", "Hot water", "Towels", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Socket near the bed", "Bedside lamp", "Patio Set"],
      roomdesc:"1 King Size Bed",
      images:[
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/Main.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/1.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/2.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/3.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/4.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/Balcony.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/Toilet.webp"
]
    },
    {
      id: 'family-private',
      name: 'Family Private Room',
      type: 'Family-Private',
      desc: 'A spacious, welcoming sanctuary equipped with a king bed and a extra bunk bed to comfortably host families or small groups.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Clothes Rack", "Linen", "Electric Kettle", "Tea/ Coffee Sachets", "Wi-fi", "Flat Screen TV", "Ceiling Fan", "Air conditioner", "Ensuite Bathroom", "Toiletries", "Hair Dryer", "Hot water", "Towels", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Socket near the bed", "Bedside lamp", "Work Desk", "Patio Set"],
      roomdesc:"1 King Size Bed & 1 Bunk Bed",
      images: [
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/Main.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/1.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/2.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/3.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/4.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/5.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/Balcony.webp",
    "https://d2jqolc708g016.cloudfront.net/Dehradun_compressed/Dehradun/Final+family+private+room/Toilet.webp"
]
    },
  ],

  varanasi: [
    {
      id: 'dorm-10',
      name: '10 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'Our largest, high-energy shared bunk room is well under your budget with a lively backpacker vibe.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
              "Dustbin","Daily Housekeeping","Non Smoking Room", "Linen","Lockers",
              "Wi-fi", "Bed Curtains","Ceiling Fan", "Bed Fan","Air conditioner",
              "Shared Bathroom","Hot water","Hair dryer","Towel Rental","Toilet",
              "Shower","Toilet paper","Non-feather pillows","Socket near the bed",
              "Bedside lamp"
            ],
      roomdesc:" 5 Bunk Beds",
      images:["https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/10-bed+Dorm/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/10-bed+Dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/10-bed+Dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/10-bed+Dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/10-bed+Dorm/4.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/10-bed+Dorm/5.webp",
      ]
    },
    {
      id: 'dorm-8',
      name: '8 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A spacious, air-conditioned shared space offering an excellent balance of social community and comfortable resting room.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
              "Dustbin","Daily Housekeeping","Non Smoking Room", "Linen","Lockers",
              "Wi-fi", "Bed Curtains","Ceiling Fan", "Bed Fan","Air conditioner",
              "Shared Bathroom","Hot water","Hair dryer","Towel Rental","Toilet",
              "Shower","Toilet paper","Non-feather pillows","Socket near the bed",
              "Bedside lamp"
            ],
      roomdesc:"4 Bunk Beds",
      images:["https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/8-bed+Dorm/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/8-bed+Dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/8-bed+Dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/8-bed+Dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/8-bed+Dorm/4.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/8-bed+Dorm/5.webp"
      ]
    },
    {
      id: 'dorm-6',
      name: '6 Bed Mix Dorm',
      type: 'Dormitory',
      desc: 'A cozy, more intimate shared setup perfectly tailored for small squads, digital nomads and solo explorers',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Linen", "Lockers", "Wi-fi", "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air conditioner", "Ensuite Bathroom", "Hot water", "Towel Rental", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Socket near the bed", "Bedside lamp"],
      roomdesc:"3 Bunk Beds",
      images:["https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Dorm/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Dorm/Bathroom.webp",
      ]
    },
    {
      id: 'female-dorm-6',
      name: '6 Bed Female Dorm',
      type: 'Dormitory',
      desc: 'A cozy, secure, and spacious shared sanctuary designed exclusively for female solo travellers seeking privacy and community.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: [
              "Dustbin","Daily Housekeeping","Non Smoking Room", "Linen","Lockers",
              "Wi-fi", "Bed Curtains","Ceiling Fan", "Bed Fan","Air conditioner",
              "Shared Bathroom","Hot water","Hair dryer","Towel Rental","Toilet",
              "Shower","Toilet paper","Non-feather pillows","Socket near the bed",
              "Bedside lamp"
            ],
      roomdesc:"3 Bunk Beds",
      images:["https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/4.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/Bathroom.webp",
      ]
    },
    {
      id: 'deluxe-private',
      name: 'Deluxe Private Room',
      type: 'Private',
      desc: 'A clean, peaceful, and comfortable private space offering the perfect quiet escape after a day of adventure.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ["Dustbin", "Daily Housekeeping", "Non Smoking Room", "Linen", "Lockers", "Wi-fi", "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air conditioner", "Ensuite Bathroom", "Hot water", "Towel Rental", "Toilet", "Shower", "Toilet paper", "Non-feather pillows", "Socket near the bed", "Bedside lamp"],
      roomdesc:"1 King Size Bed",
      images:["https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/Main.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/1.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/2.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/3.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/4.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/5.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/6.webp",
        "https://d2jqolc708g016.cloudfront.net/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/Bathroom.webp"
        
      ]
    },
  ],
}

// ============================================================
//  CITY ITINERARY — Update days & activities below
// ============================================================

export const CITY_ITINERARY = {
  rishikesh: [
    {
      day: 'Day 1 · Arrive & Explore',
      activities: [
        'Check-in at LiveFree Hostels',  // TODO: Update activities
        'Local market Exploration - Ram Jhula & Laxman Jhula.',
        'Sunset Ganga aarti at Triveni Ghat/ Parmarth Niketan.',
      ],
    },
    {
      day: 'Day 2 · Adventure Day',
      activities: [
        'Sunrise at Kunjapuri Temple.',          // TODO: Update activities
        'Cafe hopping in Tapovan.',
        'Spend evening at Ganga Ghat.',
      ],
    },
    {
      day: 'Day 3 · Culture & Chill',
      activities: [
        'Beatles Ashram visit.',          // TODO: Update activities
        'Trip to Vashisth Gufa.',
        'Live Music night at the hostel',
      ],
    },
  ],

  dehradun: [
    {
      day: 'Day 1 · Caves, Cafés & Local Vibes',
      activities: [
        'Dehradun Zoo (Malsi) - Peaceful woodland park to see deer, leopards, and native bird',   // TODO: Update activities
        'Robber’s Cave (Gucchupani) - stunning natural river cave gorge, Wade through knee-deep cold water inside the dark rock formations.',
        'Café lunch at Rajpur Road',
        'Sahastradhara – sulphur water springs and waterfalls'
      ],
    },
    {
      day: 'Day 2 ·  Day Trip to the Queen of Hills (Mussoorie & Landour)',
      activities: [
        " Rent a scooter or hop on a local bus right outside  hostel on Mussoorie Road. The winding mountain road takes you straight up into the clouds.",
        'Landour Exploration - Skip the crowded main town initially and head higher up to quiet',
        'Mussoorie Mall Road- Grab lunch overlooking the deep mountain valleys',
        " George Everest - Visit the historic estate of India's Surveyor General. Hike the short ridge line for an incredible, unobstructed 360-degree view of the snow-capped Himalayas."
      ],
    },
    {
      day: 'Day 3 · Architecture, Temples & Tibet (Heritage Loop)',
      activities: [
      "Forest Research Institute (FRI)- Visit this massive, jaw-dropping Greco-Roman colonial campus and explore the forestry museums.",
      "Tapkeshwar Mahadev Mandir- Head to this ancient Shiva temple built inside a natural river cave.",
      "Mindrolling Monastery - Explore one of India's largest Tibetan Buddhist centres. Marvel at the soaring, multi-story Great Stupa and its beautifully manicured gardens.",
      "Paltan Bazaar - Old heart of the city near the iconic Clock Tower. Gorge on local street treats like spicy Kandalee momos, bun-tikki, and sweet rusmalai."

      ],
    },
  ],

  varanasi: [
    {
      day: 'Day 1 · Ghats, Devotion & Street food',
      activities: [
        'Check-in at LiveFree Hostels',   // TODO: Update activities
        'Grab local Kachori Sabzi and Jalebi at Chachi Ki Kachori near BHU.',
        'Explore Sankat Mochan Temple & BHU.',
        'Ghat walking tour from Assi ghat to Dashashwamedh ghat.',
        'Evening Ganga Aarti at Dashashwamedh ghat.',
        'Walk to Kashi Chat Bhandar for Tamatar Chat & Palak Patta Chat.',
      ],
    },
    {
      day: 'Day 2 · Alleys, Temples & The Eternal Flame',
      activities: [
        'Subah-e-Banaras – Vedic Chants, Yoga and Classical Music Program at Assi Ghat.',              // TODO: Update activities
        'Sunrise boat tour.',
        'Kashi Vishwanath Temple.',
        'Old Lane Exploration surrounding the temple.',
        'Manikarnika Ghat.',
        'Back to Hostel and chill.'
      ],
    },
    {
      day: 'Day 3 · Peace Silk and Sunsets',
      activities: [
        'Sarnath Excursion.',         // TODO: Update activities
        'Silk weaving tour',
        'Ramnagar Fort – Explore fort and catch Sunset over ganga.',
        'End your trip with a traditional bati chokha meal for dinner.'
      ],
    },
  ],
}

// ============================================================
//  PROPERTY POLICY — Update per city below
//  Each city has an array of policy points.
//  Edit the text inside each string as needed.
// ============================================================

export const CITY_PROPERTY_POLICY = {
  rishikesh: [
    // TODO: Replace with actual property policies for Rishikesh
    'Guests must present a valid government-issued ID at check-in.',
    'Quiet hours are strictly observed from 11:00 PM to 7:00 AM.',
    'No outside alcohol is permitted on the premises.',
    'Smoking is only allowed in designated outdoor areas.',
    'Common areas must be kept clean — please wash your dishes after use.',
    'Visitors (non-guests) are not allowed inside dormitory areas.',
    'The hostel is not responsible for loss of valuables — use the provided lockers.',
    
  ],
  dehradun: [
    // TODO: Replace with actual property policies for Dehradun
    'Guests must present a valid government-issued ID at check-in.',
    'Quiet hours are strictly observed from 11:00 PM to 7:00 AM.',
    'No outside alcohol is permitted on the premises.',
    'Smoking is only allowed in designated outdoor areas.',
    'Common areas must be kept clean — please wash your dishes after use.',
    'Visitors (non-guests) are not allowed inside dormitory areas.',
    'The hostel is not responsible for loss of valuables — use the provided lockers.',
    
  ],
  varanasi: [
    // TODO: Replace with actual property policies for Varanasi
    'Guests must present a valid government-issued ID at check-in.',
    'Quiet hours are strictly observed from 11:00 PM to 7:00 AM.',
    'No outside alcohol is permitted on the premises.',
    'Smoking is only allowed in designated outdoor areas.',
    'Common areas must be kept clean — please wash your dishes after use.',
    'Visitors (non-guests) are not allowed inside dormitory areas.',
    'The hostel is not responsible for loss of valuables — use the provided lockers.',
    
  ],
}

// ============================================================
//  MUST READS — Helpful articles/tips shown on property page
//  Each city has an array of cards.
//  Edit title, desc, and link for each card.
//  'tag' is a small label shown on the card (e.g. 'Tips', 'Guide')
// ============================================================

export const CITY_MUST_READS = {
  rishikesh: [
    {
      // TODO: Replace with real article title
      title: 'Top 10 Things to Do in Rishikesh',
      // TODO: Replace with real description
      desc: 'From sunrise yoga to river rafting — here is your complete guide to experiencing the best of Rishikesh.',
      tag: 'Guide',                         // TODO: Update tag (e.g. 'Tips', 'Guide', 'Food', 'Adventure')
      img: 'https://d2jqolc708g016.cloudfront.net/organized_by_city/Rishikesh/one-of-the-thrilling-experiences-in-rishikesh-white-water-ra/one-of-the-thrilling-experiences-in-rishikesh-white-water-ra-1.webp', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Yoga in Rishikesh',
      // TODO: Replace with real description
      desc: 'There is a reason why Rishikesh is called the yoga capital of India. With like a bazillion courses and styles and ashrams to choose from, it can be quite...',
      tag: 'Yoga',                          // TODO: Update tag
      img: 'https://d2jqolc708g016.cloudfront.net/organized_by_city/Rishikesh/yoga-in-rishikesh/yoga-in-rishikesh-260.webp', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'River Rafting in Rishikesh: Everything You Need to Know',
      // TODO: Replace with real description
      desc: 'Safety tips, best operators, ideal season, and what to expect on the rapids.',
      tag: 'Adventure',                     // TODO: Update tag
      img: 'https://d2jqolc708g016.cloudfront.net/organized_by_city/Rishikesh/have-you-indulged-in-these-adventures-of-rishikesh/have-you-indulged-in-these-adventures-of-rishikesh-111.webp', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
  ],
  dehradun: [
    {
      // TODO: Replace with real article title
      title: "A Traveller's Guide to Dehradun",
      // TODO: Replace with real description
      desc: 'Explore colonial architecture, pine forests, and the gateway to the great Himalayas.',
      tag: 'Guide',                         // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Day Trip to Mussoorie from Dehradun',
      // TODO: Replace with real description
      desc: 'Everything you need for a perfect day trip to the Queen of Hills — timings, transport, must-stops.',
      tag: 'Day Trip',                      // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: "Robber's Cave & Sahastradhara: Nature Escapes Near Dehradun",
      // TODO: Replace with real description
      desc: 'Two iconic natural spots just a short ride from the hostel — perfect for a half-day adventure.',
      tag: 'Nature',                        // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
  ],
  varanasi: [
    {
      // TODO: Replace with real article title
      title: 'The Soul of Varanasi: A First-Timer\'s Guide',
      // TODO: Replace with real description
      desc: 'Ancient ghats, morning rituals, and the electric energy of the oldest living city on earth.',
      tag: 'Guide',                         // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Best Street Food in Varanasi',
      // TODO: Replace with real description
      desc: 'Kachori sabzi, banarasi paan, lassi, and more — the ultimate food walk guide.',
      tag: 'Food',                          // TODO: Update tag
      img: 'https://d2jqolc708g016.cloudfront.net/organized_by_city/Banaras+(Varanasi)/a-culinary-expedition-through-banaras-unveiling-the-street-f/a-culinary-expedition-through-banaras-unveiling-the-street-f-157.webp', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'A perfect stay by the Assi Ghat – Live Free Banaras',
      // TODO: Replace with real description
      desc: 'The sacred city of Banaras, known as Varanasi, is a place that beckons pilgrims and travelers from across the globe. It’s a city of spiritual awakening,...',
      tag: 'History',                       // TODO: Update tag
      img: 'https://d2jqolc708g016.cloudfront.net/organized_by_city/Banaras+(Varanasi)/a-perfect-stay-by-the-assi-ghat-live-free-banaras/a-perfect-stay-by-the-assi-ghat-live-free-banaras-151.webp', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
  ],
}