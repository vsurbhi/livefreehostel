import SEO from '../components/Seo/Seo'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, X, ChevronLeft, ChevronRight, ChevronDown, Check,
  Globe, ParkingCircle, ConciergeBell, UtensilsCrossed, BedDouble,
  Wifi, Wind, PawPrint, KeyRound, ImageOff, ExternalLink,
  Train, Car, Plane,
  Gamepad,
  ShieldPlus,
} from 'lucide-react'
import { DESTINATIONS, CITY_ROOMS, CITY_ITINERARY, CITY_PROPERTY_POLICY, CITY_MUST_READS } from '../data/siteData'
import styles from './DestinationPage.module.css'
import {Link, useNavigate} from "react-router-dom"
import blogPosts from '../data/blogPosts.json'


const GALLERY_FALLBACKS = [
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
]

// ── Room details shown inside the expandable "Room Details" panel ──
const ROOM_CAPACITY = {
  Dormitory: '1 Guest/Bed',
  Private: '2 Guest',
}

const ROOM_AMENITIES_BY_TYPE = {
  Dormitory: [
    'Bathroom', 'Curtains', 'Towels/Sheets (extra fee)', 'Bath or Shower', 'Toilet', 'Fan', 'Free Wi-Fi',
    'Hair dryer', 'Comfortable Beds', 'Tile/Marble floor', 'Lockers', 'Shower', 'Cleaning service',
    'Non-smoking rooms', 'Air Conditioner', 'Private entrance', 'Linen', 'Air conditioning',
  ],
  Private: [
    'Tile/Marble floor', 'In-Room Coffee / Tea', 'Non-smoking rooms', 'Cable TV', 'Wifi',
    'Bath or Shower', 'Toilet', 'Fan', 'Coffee Maker',
    'Wardrobe', 'Beds', 'Curtains', 'Air Conditioner', 'LCD TV', 'Bathroom', 'Shower', 'Cleaning service', 'Free Wi-Fi',
    'Towel', 'Hair dryer', 'Comfortable Beds', 'TV', 'Private entrance', 'Balcony', 'Linen', 'Air conditioning',
  ],
}


const CLD = 'https://res.cloudinary.com/dtksfqdju/image/upload'
const CLD_RISHIKESH = 'https://res.cloudinary.com/vdxhnvbh/image/upload'
// city-aware cloudinary helper — Rishikesh photos live on a different Cloudinary account
const cld = (id, city) => `${city === 'rishikesh' ? CLD_RISHIKESH : CLD}/${id}`

const CITY_META = {
  rishikesh: {
    tagline: 'Uttarakhand - Land of Spirituality and Adventure',
    address: 'Laxman Jhula Road.',
    about: [`Located in Tapovan, just 400 meters away from Lakshman Jhula, Live Free Hostel perfectly blends high-energy adventure with mindful relaxation. Our expansive rooftop terrace offers panoramic views of the rolling green Himalayan foothills and the sacred Ganga River, serving as an idyllic backdrop for morning sunbathing or peaceful rooftop yoga classes.
Throughout our vibrant and colorful multi-story property, active common areas invite travelers to bond over guitar sessions, shared board games, or competitive foosball and table tennis tournaments. Choose from spacious, bright dorms designed with individual privacy curtains and power outlets, or retreat to comfortable private rooms with ensuite bathrooms after a long day out.
As a preferred launchpad and trusted base camp for massive “India Hikes” trekking expeditions, our expertly trained team makes transitioning between work and play effortless. Whether you are sipping espresso at our ground-floor, in-house cafe or coordinating a white-water rafting trip from our travel desk, this hostel transforms your mountain escape into an immersive community experience.
`,`Rishikesh offers backpackers a perfect mix of soul-stirring adventure, vibrant cafe culture, and spiritual depth along the sacred Ganga River. Travelers can experience white-water rafting, hike to hidden waterfalls, go on a Rajaji safari, practice yoga & meditation at peaceful ashrams, and connect in lively local cafes.
`],
    checkIn: '13:00 until 23:59',
    checkOut: 'until 10:00',
    bed:"Extra bed – 700 Rs (Only 1 bed allowed in a room)",
    rule:"This is not a party hostel — silent hours after 11 PM are strictly observed.",
    highlights: ['Laxman Jhula – 400 mtrs', 'Sai Ghat – 600 mtrs', 'Ram Jhula – 2 Kms', 'Parmarth Niketan – 3 Kms', 'Beatles Aashram – 3.5 Kms', 'Triveni Ghat – 4.5 Kms','Kunjapuri Temple – 25 Kms','Neem Beach – 1.8 Kms','Neer Garh Waterfall – 4.5 Kms','Neelkanth Mahadev – 22 Kms','Shivpuri – 12 Kms','Vashisth Cave – 18 Kms'],
    video: 'sPQQLwdT1rQ',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.82505972936!2d78.3251937!3d30.127819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091644ee11e80d%3A0x9f80ed977d1916c6!2sLive%20Free%20Hostel%20Rishikesh!5e0!3m2!1sen!2sin!4v1779344624890!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 72 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Jolly Grant Airport (DED), then taxi to Live Free Rishikesh (~45 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Yog Nagri Railway Station, then a taxi or Auto to Tapovan (~20 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Delhi: NH334 via Haridwar or Take Delhi- Dehradun expressway. GPS: Live Free Hostel, Rishikesh (~ 4-6 Hrs)' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'Pets allowed', icon: PawPrint },
    ],
    characteristics: [
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      {label:"MEDIA & GAMES",icon:Gamepad,items:["Sports Matches & Movie Screening","Board Games","Foosball Table","Table Tennis"]},
      { label: 'SERVICES', icon: ConciergeBell, items: ['Limited hour reception', 'Daily Housekeeping', 'CCTV', 'Online/ Mobile check-in', 'Luggage storage', 'Laundry Service (Extra)','Tours/Ticket assistance','Power Backup'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'OTHERS', icon:ShieldPlus, items: ['Common Hangout Areas', 'Non-Smoking Rooms', 'Outdoor Smoking Areas', 'Card/UPI Payments Accepted','Hot & Cold Drinking Water Dispensers'] },
    ],
  },
  dehradun: {
    tagline: 'Uttarakhand · Gateway to Himalayas',
    address: 'Mussoorie Road.',
    about: [`Located in a peaceful, tree-lined valley just minutes from the city's key transit lines, Live Free Hostel Dehradun serves as the ultimate gateway town launchpad and a productive work sanctuary. The absolute heart of our property is our expansive rooftop terrace café—a vibrant, active common area with beautiful, sweeping views of the surrounding green hills and shifting mountain mist. It is the perfect scenic backdrop where travellers, trekkers and remote professionals naturally gather to connect over fresh food, acoustic guitar strumming, or casual sundowner chats over a cup of coffee. This multi-functional rooftop café space seamlessly blend work, play, and community. Digital nomads can settle into quiet seating corners with stable Wi-Fi and plenty of accessible socket points, while others challenge new friends to high-energy table tennis or foosball matches, board games and casual poker nights. Accommodation options cater to every traveller’s preference, featuring clean, spacious, air-conditioned mixed and female-only dorms equipped with personal privacy curtains and secure storage lockers, alongside premium private rooms for peaceful downtime.
As a preferred transit launchpad and trusted base camp for massive Indiahikes trekking expeditions, our expertly trained hospitality team is uniquely equipped to manage group logistics. Whether you are having a meal at the rooftop café with your travel squad, swapping trail stories under the open sky, or getting insider route tips from our 24/7 reception desk, this hostel transforms your valley stopover into an immersive community experience that feels just like home.
`,'Dehradun offers backpackers lush river caves, sulphur springs, and a vibrant café culture. Nestled in the Himalayan foothills, it provides easy access to mountain treks, historic colonial architecture, and serene Buddhist monasteries. It is the perfect hub for nature lovers, adventure seekers, and travellers exploring northern India.'],
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    rule:" This is not a party hostel — silent hours after 11 PM are strictly observed.",
    bed:"Extra bed – 700 Rs (Allowed in few rooms only)",
    highlights: ["Robbers Cave – 3.6 Kms", "Dehradun Zoo – 750 mtrs", "Tapkeshwar Mahadev Temple – 8.2 Kms", "Mindrolling Monastery – 20 Kms", "FRI Dehradun – 10  Kms", "Paltan Bazaar – 9 Kms","Sahastradhara – 11 Kms","Mussoorie – 19 Kms","George Everest– 27 Kms","Clock Tower – 8.8 Kms","Shikhar Falls – 7.6 Kms"],
    video: null,
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.7862564688057!2d78.07051957618397!3d30.385426802333587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d798eee5f1b5%3A0xb57a22052215b674!2sLive%20Free%20Hostel%20Dehradun!5e0!3m2!1sen!2sin!4v1779344677046!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 72 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Jolly Grant Airport (DED), then taxi to Live Free Dehradun (~60 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Dehradun Railway Station, then a taxi or Auto to Live Free Dehradun (~25 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Delhi: Take Delhi- Dehradun expressway. GPS: Live Free Hostel, Dehradun (~ 4 Hrs)' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'Pets allowed', icon: PawPrint },
    ],
    characteristics: [
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      {label:"MEDIA & GAMES",icon:Gamepad,items:["Sports Matches & Movie Screening","Board Games","Foosball Table","Table Tennis"]},
      { label: 'SERVICES', icon: ConciergeBell, items: ['Limited hour reception', 'Daily Housekeeping', 'CCTV', 'Online/ Mobile check-in', 'Luggage storage', 'Laundry Service (Extra)','Tours/Ticket assistance','Power Backup'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'OTHERS', icon:ShieldPlus, items: ['Common Hangout Areas', 'Non-Smoking Rooms', 'Outdoor Smoking Areas', 'Card/UPI Payments Accepted','Hot & Cold Drinking Water Dispensers'] },
    ],
  },
  varanasi: {
    tagline: 'Uttar Pradesh · City of Light',
    address: 'Near Assi Ghat.',
    about: [`Located in Nagwa just 500 metres away from the iconic Assi Ghat, Live Free Hostel Varanasi perfectly blends deep cultural immersion with contemporary backpacker comfort. Our expansive rooftop terrace offers serene views of the sacred Ganga River and its sprawling landscape, serving as an idyllic backdrop for morning tea or peaceful yoga sessions before diving into the high-energy streets.
Throughout our vibrant colourful multi-story property, active common areas like our central indoor lounge invite travellers to bond over acoustic guitar sessions, shared board games, or competitive table tennis matches. Our lively open-air courtyard café acts as the social heartbeat of the property, where digital nomads and solo explorers network over reliable Wi-Fi, sip fresh espresso, 
and enjoy pocket-friendly, home-style Indian comfort food. Choose from spacious, air-conditioned mixed or female-only dorms designed with sturdy metal bunk beds, individual privacy curtains, and multiple charging points, 
or retreat to comfortable private rooms with ensuite bathrooms after a long day of heritage exploration.
Whether you are swapping travel stories with fellow backpackers, or coordinating an authentic boat ride and sunset Ganga Aarti tour from our helpful reception desk, our dedicated local team treats you like family to discover the true spiritual soul of Varanasi.
`,
`Varanasi offers backpackers vibrant street food, unforgettable spiritual energy, and deep cultural immersion. You can witness mesmerizing Ganga Aarti rituals, explore ancient maze-like alleys, and enjoy serene sunrise boat rides.
 It is the ultimate destination for historic temples, ancient traditions, and connecting with fellow travellers along the sacred Ganges.`
],
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    rule:" This is not a party hostel — silent hours after 11 PM are strictly observed.",
    bed:"Extra bed – 700 Rs (Allowed in few rooms only)",
    highlights: ['Assi Ghat – 400 mtrs', 'Ram Nagar Fort – 3.4 Kms', 'Manikarnika Ghat – 3.3 Kms', 'Dashashwamedh Ghat – 2.5 Kms', 'Kashi Vishwanath Temple – 4  Kms', 'Sankat Mochan Temple – 1.5 Kms','Sarnath – 16 Kms','BHU – 2 Kms','Harishchandra Ghat– 2.2 Kms','Bangali Tola – 2.7 Kms','Godowlia – 3.7 Kms'],
    video: 'B7QUA2zZsQ8',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5776986113897!2d83.00443047605633!3d25.284787728146224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ba110bfd13%3A0x16133790c1ae2c19!2sLive%20Free%20Hostel%20Varanasi!5e0!3m2!1sen!2sin!4v1779344741618!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 72 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Lal Bahadur Shastri Airport (VNS), then taxi to Live Free Hostel Varanasi (~30 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Varanasi Junction, then auto/cab to Live Free Hostel (~20 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Lucknow: NH30. From Allahabad: NH19. GPS: Live Free Hostel Varanasi.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'Pets allowed', icon: PawPrint },
    ],
    characteristics: [
      { label: 'PARKING', icon: ParkingCircle, items: ['Offsite Free Parking Available'] },
      {label:"MEDIA & GAMES",icon:Gamepad,items:["Sports Matches & Movie Screening","Board Games","Table Tennis"]},
      { label: 'SERVICES', icon: ConciergeBell, items: ['Limited hour reception', 'Daily Housekeeping', 'CCTV', 'Online/ Mobile check-in', 'Luggage storage', 'Laundry Service (Extra)','Tours/Ticket assistance','Power Backup'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'OTHERS', icon:ShieldPlus, items: ['Common Hangout Areas', 'Non-Smoking Rooms', 'Outdoor Smoking Areas', 'Card/UPI Payments Accepted','Hot & Cold Drinking Water Dispensers'] },
    ],
  },
}

const CITY_PHOTOS = {
  varanasi: {
    'Main': [
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/1.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/2.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/3.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/4.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/5.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/7.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/8.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/9..jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/10.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/11..jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/12..jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/13.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/14.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/15.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/16.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/17.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/19.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/20.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/21.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/22.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Main/23.jpg',
],
    'Property': ['https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/1652357644808_image_6483441_t1ncgf.jpg', 
      'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/DSC09140_vjitra.jpg',
       'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/GOPR4866-01_cvdl7a.jpg', 
       'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/GOPR4897_gqv3az.jpg', 
       'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/IMG_20231126_175041_vsorfl.jpg',
        'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/IMG_20231126_175143_pabnyb.jpg', 
        'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/IMG_2680_dd2twv.jpg', 
        'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/Property/IMG_7282-Edit-01-01_hfzdxi.jpg'],
    'Common Area': ['https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/_6__0021_-_Copy_ebjgid.jpg',
       'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/_6__0053_vtwnvh.jpg', 
       'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/1653632535675-01_ql75el.jpg',
        'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/communal_dinner_ejkrjq.jpg', 
        'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/Holi_celebration_adpyxz.jpg',
         'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/IMG_20230218_113337_1_e4ucvi.jpg',
          'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/IMG_20231013_125201_jgit5d.jpg',
           'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/IMG_2680_c07en4.jpg', 
           'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/IMG_8959_djblsl.jpg',
            'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/Live_Music_vioifo.jpg', 
            'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/sandup_comedy_hydrbo.jpg',
             'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/common+area/Valentines_day_ibke4i.jpg'],
          
    'Reception': ['https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/recept/_6__0135_1_dbnwhs.jpg',
       'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/recept/_6__0154_zk9pq9.jpg',
        'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/recept/_6__0198_weykzc.jpg',
         'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/all_compressed/all/recept/main_zcjmir.jpg'],
    'Deluxe Private':["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/4.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/5.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/6.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/Deluxe+Private+Dorm/Bathroom.jpg"
        
      ],
    
    '10-bed Dorm': ["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/10-bed+Dorm/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/10-bed+Dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/10-bed+Dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/10-bed+Dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/10-bed+Dorm/4.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/10-bed+Dorm/5.jpg",
      ],
    '6-bed Dorm': ["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Dorm/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Dorm/Bathroom.jpg",
      ],
    '6-bed Female Dorm': ["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/4.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/6-bed+Female+Dorm/Bathroom.jpg",
      ],
    '8-bed Dorm': ["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/8-bed+Dorm/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/8-bed+Dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/8-bed+Dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/8-bed+Dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/8-bed+Dorm/4.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Varanasi_compressed/Varanasi/8-bed+Dorm/5.jpg"
      ],
  },
  dehradun: {
    "Main":[
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/1.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/2.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/3.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/4.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/5.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/6.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/7.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/8.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/9.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/10.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/11.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/12.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/13.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/14.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/15.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/16.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/17.jpg',
],
    '4 Bed Dorm': [
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/main.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/3.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/4.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+4+bed+dorm+pics/washroom.jpg"
],
    '6 Bed Dorm': [
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/Main.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/3.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/4.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/5.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+6+bed+pics/Toilet.jpg"
],
    '8 Bed Dorm': [
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/Main.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/3.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/4.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/final+8+bed+dorm+pics/Toilet.jpg"
],
'Female Dorm': [
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+female+dorm+pics/Main.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+female+dorm+pics/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+female+dorm+pics/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+female+dorm+pics/3.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+female+dorm+pics/4.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+female+dorm+pics/Toilet.jpg"
],
'Deluxe Private':[
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/Main.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/3.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/4.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/Balcony.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+deluxe+room+pics/Toilet.jpg"
],
 'Family Private':  [
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/Main.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/3.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/4.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/5.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/Balcony.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Final+family+private+room/Toilet.jpg"
],
    'Property': [
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/LFD9_1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/IMG_20251128_173843_00_091.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/1.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/9.jpg"
],
    'Cafe':[
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/11.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/2.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/17.jpg",
    "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Dehradun_compressed/Dehradun/Main+Pics/16.jpg"
],
    
   
    
  },
rishikesh: {
  'Main': [
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/1.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/2.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/3.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/4.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/5.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/6.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/7.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/8.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/9.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/10.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/11.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/12.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/13.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/14.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/15.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/16.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/17.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/18.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/19.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/DSC_0187.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/image_1db1cce8.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/image_4524e300.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG_20200323_171514.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG_6741.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG_6793.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG_6796.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG20220728221525.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR11.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR15.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR16.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR17.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR19.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR3.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR5.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR6.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR7.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR9.jpg',
  'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/WhatsApp+Image+2026-02-05+at+12.35.57.jpg',
],

  "4 Bed Female Dorm":["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+female+dorm/Bathroom.jpg"
      ],
  "4 Bed Mix Dorm":["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/4+bed+mixed+dorm/bathroom.jpg"
      ],
  "6 Bed Mix Dorm":["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/6+bed+mixed+dorm/bathroom.jpg",
        
      ],
  "Deluxe Private":["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Deluxe+private+room/main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Deluxe+private+room/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Deluxe+private+room/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Deluxe+private+room/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Deluxe+private+room/4.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Deluxe+private+room/bathroom.jpg",

      ],
  "Deluxe Standard":["https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Std+Private+Room/Main.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Std+Private+Room/1.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Std+Private+Room/2.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Std+Private+Room/3.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Std+Private+Room/4.jpg",
        "https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Std+Private+Room/bathroom.jpg",
        
      ],
  'Property': [
    'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/1.jpg',
     'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/3.jpg', 
     'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG_20200323_171514.jpg',
      'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/18.jpg',
    'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/image_4524e300.jpg',
     'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/10.jpg',
      'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/15.jpg',
      'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/14.jpg',
    'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/IMG20220728221525.jpg',
    'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/6.jpg',
    'https://livefreewebsite-surbhi-2026.s3.eu-north-1.amazonaws.com/Rishikesh_compressed/Rishikesh/Main+pictures/LFR11.jpg'
  ],
},
}


function LightBox({ images, index, onClose, photosByCategory = {}, allPhotos, city }) {
  const thumbContainerRef = useRef(null)
  const resolvedAllPhotos = allPhotos || images
  const categories = Object.keys(photosByCategory) // NEW — no more 'All' entry
  const showTabs = categories.length > 1

  // NEW — default to the first real category (or null for room mode, which has no categories)
  const [activeCategory, setActiveCategory] = useState(categories[0] || null)
  const [localIndex, setLocalIndex] = useState(0)

  const currentPhotos = (activeCategory && photosByCategory[activeCategory]) || resolvedAllPhotos

  // NEW — when the lightbox opens (or the clicked photo changes), figure out
  // which category that photo actually belongs to, and select it + its local index
  useEffect(() => {
    const clickedPhoto = resolvedAllPhotos[index]
    if (categories.length > 0 && clickedPhoto != null) {
      const matchedCategory = categories.find(cat => (photosByCategory[cat] || []).includes(clickedPhoto))
      if (matchedCategory) {
        setActiveCategory(matchedCategory)
        setLocalIndex(photosByCategory[matchedCategory].indexOf(clickedPhoto))
        return
      }
    }
    // fallback: room mode / no category match — just use the flat list + index as-is
    setActiveCategory(null)
    setLocalIndex(index)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, allPhotos])

  useEffect(() => { setLocalIndex(0) }, [activeCategory])

  useEffect(() => {
    if (thumbContainerRef.current) {
      const activeThumb = thumbContainerRef.current.children[localIndex]
      if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [localIndex])

  const goPrev = () => setLocalIndex(i => (i - 1 + currentPhotos.length) % currentPhotos.length)
  const goNext = () => setLocalIndex(i => (i + 1) % currentPhotos.length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPhotos.length])

  const resolveImg = (id) =>
    typeof id === 'string' && (id.startsWith('http') || id.startsWith('/') || id.startsWith('data:'))
      ? id
      : cld(id, city)

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        style={{ background: '#111', borderRadius: 16, maxWidth: '90vw', maxHeight: '90vh', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* TOP BAR — category tabs (only in gallery mode) + close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#1a1a1a', overflowX: 'auto', flexShrink: 0, scrollbarWidth: 'none' }}>
          {showTabs && categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '6px 14px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: 'none', whiteSpace: 'nowrap', flexShrink: 0, background: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.1)', color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.6)', transition: 'all 0.2s' }}>
              {cat} ({(photosByCategory[cat] || []).length})
            </button>
          ))}
          <button onClick={onClose} style={{ marginLeft: 'auto', flexShrink: 0, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={16} />
          </button>
        </div>

        {/* MAIN IMAGE */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px', position: 'relative', minHeight: 0 }}>
          <button className={styles.lightboxNavBtn} onClick={e => { e.stopPropagation(); goPrev() }} style={{ position: 'absolute', left: 8, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <ChevronLeft size={22} />
          </button>
          <img src={resolveImg(currentPhotos[localIndex])} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }} />
          <button className={styles.lightboxNavBtn} onClick={e => { e.stopPropagation(); goNext() }} style={{ position: 'absolute', right: 8, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <ChevronRight size={22} />
          </button>
          <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.6)', padding: '2px 12px', borderRadius: 20, color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 500 }}>
            {localIndex + 1} / {currentPhotos.length}
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        <div ref={thumbContainerRef} style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '10px 16px', display: 'flex', gap: 8, scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent', flexShrink: 0, height: 100, background: 'rgba(0,0,0,0.3)' }} onClick={e => e.stopPropagation()}>
          {currentPhotos.map((id, i) => (
            <div key={i} className={styles.lightboxThumb} onClick={() => setLocalIndex(i)} style={{ flex: '0 0 auto', width: 80, height: 80, borderRadius: 6, overflow: 'hidden', border: i === localIndex ? '3px solid var(--primary)' : '3px solid transparent', transition: 'all 0.2s', cursor: 'pointer', transform: i === localIndex ? 'scale(1.05)' : 'scale(1)' }}>
              <img src={resolveImg(id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function GallerySection({ photosByCategory, allPhotos, onOpenLightbox }) {
  // Only the city's primary / main gallery category populates the grid — rest is available via "See all photos"
  const mainCategoryKey = Object.keys(photosByCategory).find((key) => key.toLowerCase().includes('main'))
  const mainPhotos = (mainCategoryKey && photosByCategory[mainCategoryKey]) || allPhotos.slice(0, 5)
  const hasPhotos = allPhotos.length > 0

  return (
    <div className={styles.galleryWrap}>
      {hasPhotos ? (
        <div style={{ position: 'relative' }}>
          <div className={styles.galleryGrid}>
            <div
              className={styles.galleryMainBox}
              onClick={() => onOpenLightbox(allPhotos, allPhotos.indexOf(mainPhotos[0]))}
            >
              <img
                src={encodeURI(mainPhotos[0])}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className={styles.gallerySub}>
              {[1, 2, 3, 4].map(i => {
                const photo = mainPhotos[i]
                const imgSrc = photo ? encodeURI(photo) : GALLERY_FALLBACKS[i - 1]
                return (
                  <div
                    key={i}
                    className={styles.galleryImgBox}
                    onClick={() => onOpenLightbox(allPhotos, photo ? allPhotos.indexOf(photo) : 0)}
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={e => { e.currentTarget.src = GALLERY_FALLBACKS[i - 1] }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <button
            className={styles.seeAllBtn}
            onClick={() => onOpenLightbox(allPhotos, 0)}
            style={{
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(0, 0, 0, 0)', borderRadius: 8, padding: '10px 22px',
              cursor: 'pointer', color: '#1a1a1a', fontWeight: 700, fontSize: '0.82rem',
              letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0)'
            }}
          >
            <span>📷</span> See all photos ({allPhotos.length})
          </button>
        </div>
      ) : (
        <div className={styles.galleryEmpty}>
          <ImageOff size={36} style={{ color: 'var(--primary)' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)' }}>
            Photos Coming Soon
          </p>
        </div>
      )}
    </div>
  )
}

// ── Hostel Name + Address + About ──
function HeroInfoSection({ dest, meta }) {
   const navigate = useNavigate();
  return (
    <section style={{ padding: '44px 0 32px', background: '#fff' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 10, lineHeight: 1.15 }}>
          Live Free Hostel,{dest.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, color: '#888', fontSize: '0.92rem' }}>
          <MapPin size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>{meta.address}</span>
        </div>
        <p style={{ fontSize: '0.96rem', color: '#555', lineHeight: 1.9, width: '100%', marginBottom: 28 }}>{meta.about[0]}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#travel-itinerary" onClick={e => { e.preventDefault(); document.getElementById('travel-itinerary')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, background: 'var(--primary)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >View Travel Itinerary →</a>
           <Link to={`/blogs?city=${dest.id}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, border: '1.5px solid rgba(0,0,0,0.15)', color: 'var(--text)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', background: '#fff', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
          >Read Our Blogs →</Link>
        </div>
      </div>
    </section>
  )
}

// ── Good to Know ──
function GoodToKnowSection({ meta }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ padding: '0 0 44px', background: '#ffffff' }}>
      <div className="container">
        <div style={{ border: '1.5px solid #e8e8e8', borderRadius: 16, overflow: 'hidden' }}>
          <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', background: 'linear-gradient(135deg, #fffaf7, #fff9f6)', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 10 }}><span>ℹ️</span> Good to Know</span>
            <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.25s', color: 'var(--primary)', flexShrink: 0 }} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
                <div style={{ padding: '28px 28px 32px', borderTop: '1px solid #f0f0f0' }} className={styles.goodToKnowGrid}>
                  <div style={{ padding: '0 32px 0 0' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-in</span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkIn}</span>
                  </div>
                  <div className={styles.goodToKnowDivider} style={{ height: 48, background: '#eee' }} />
                  <div style={{ padding: '0 0 0 32px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-out</span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkOut}</span>
                  </div>
                    <ul style={{ marginTop: 10, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
                    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.6 }}>
                      
                     {meta.bed}
                    </li>
                    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.6 }}>
                      
                     {meta.rule}
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// ── Select Room ──
function SelectRoomSection({ rooms, onOpenLightbox, dest }) {
  const [showAllRooms, setShowAllRooms] = useState(false)
  const [imgIndex, setImgIndex] = useState({})
  const [detailsOpen, setDetailsOpen] = useState({})

  const FALLBACK_IMGS = [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  ]

  const AMENITY_ICONS = {
    'WiFi': '📶', 'AC': '❄️', 'Personal Locker': '🔒', 'Common Bathroom': '🚿',
    'En-suite Bathroom': '🛁', 'Double Bed': '🛏️', 'King Bed': '🛏️',
    'Privacy Curtain': '🪟', 'Mountain View': '🏔️', 'Female Only': '👩',
    'Charging Points': '🔌', 'Housekeeping': '🧹', 'Hot Water': '🚿',
  }

  const displayedRooms = showAllRooms ? rooms : rooms.slice(0, 3)
  const origPrice = (price) => Math.round(price / 0.80)
  const cityBookingUrl = dest?.bookingUrl

  return (
     <section id="select-room" style={{ padding: '40px 0 56px', background: '#fff', borderTop: '1px solid #efefef' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 28, color: '#c0c0c0', textAlign: 'center' }}>SELECT ROOM</h2>
         <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {displayedRooms.map((room, roomIdx) => {
            const roomPhotos = Array.isArray(room.images) ? room.images : [];
            const currentImgIdx = imgIndex[room.id] || 0
            const displayImg = roomPhotos.length > 0
              ? roomPhotos[currentImgIdx % roomPhotos.length]
              : FALLBACK_IMGS[roomIdx % FALLBACK_IMGS.length]

            const isSoldOut = room.soldOut || false
            const availText = room.availability || '2 BEDS AVAILABLE'
            const orig = origPrice(room.price)

            return (
             <div key={room.id} className={styles.roomCard}>
                <div
                  className={styles.roomImageWrap}
                  onClick={() => roomPhotos.length > 0 && onOpenLightbox(roomPhotos, currentImgIdx)}  // 👈 opens popup with THIS room's images
                >
                  <img src={displayImg} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {roomPhotos.length > 1 && (
                    <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
                      {roomPhotos.map((_, i) => (
                        <button key={i} onClick={e => { e.stopPropagation(); setImgIndex(prev => ({ ...prev, [room.id]: i })) }}
                          style={{ width: 6, height: 6, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: i === currentImgIdx ? '#fff' : 'rgba(255,255,255,0.45)', transition: 'background 0.2s' }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.roomBody}>
                  <div className={styles.roomHeadRow}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', lineHeight: 1.3, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.3px' }}>{room.name}</h3>
                      <div style={{ width: 36, height: 2, background: 'var(--primary)', marginBottom: 8 }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: '#888', marginBottom: 4 }}>
                        
                      </div>
                      <p style={{ color: '#999', fontSize: '0.82rem', lineHeight: 1.5 }}>{room.desc}</p>
                    </div>
                    {/* Temporarily hidden room pricing & availability UI */}
                    {/* <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', marginBottom: 2 }}>
                       
                        <span style={{ fontSize: '0.82rem', color: '#bbb', textDecoration: 'line-through' }}>₹{orig.toLocaleString()}</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>₹{room.price.toLocaleString()}</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#bbb', textAlign: 'right' }}>1 night</div>
                      {isSoldOut
                        ? <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e85c3a', marginTop: 6, textAlign: 'right', letterSpacing: '0.5px' }}>SOLD OUT</div>
                        : <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2d9b5a', marginTop: 6, textAlign: 'right' }}>{availText}</div>
                      }
                    </div> */}
                  </div>
  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, gap: 12 }}>
                    <button
                      type="button"
                      onClick={() => setDetailsOpen(prev => ({ ...prev, [room.id]: !prev[room.id] }))}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)' }}
                    >
                      Room Details
                      <ChevronDown size={15} style={{ color: 'var(--primary)', transform: detailsOpen[room.id] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                    {!isSoldOut && (
                      <a href={cityBookingUrl || room.bookingUrl} target="_blank" rel="noreferrer"
                        style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '11px 28px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.3px', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1a1a1a'}
                      >Book Now</a>
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {detailsOpen[room.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ gridColumn: '1 / -1', overflow: 'hidden', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}
                    >
                      <div style={{ padding: '24px 28px 28px' }}>
                        <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4 }}>Room Description</h4>
                        <p style={{ fontSize: '0.88rem', color: '#777', marginBottom: 20 }}>{room.roomdesc}</p>

                        <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4 }}>Room Capacity</h4>
                        <p style={{ fontSize: '0.88rem', color: '#777', marginBottom: 20 }}>{ROOM_CAPACITY[room.type] || ROOM_CAPACITY.Dormitory}</p>


                        <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 12 }}>Hotel Amenities</h4>
                        <div className={styles.roomDetailsGrid}>
                          {(room.amenities).map(item => (
                            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.86rem', color: '#444' }}>
                              <Check size={14} style={{ color: '#2d9b5a', flexShrink: 0 }} /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
        {rooms.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={() => setShowAllRooms(!showAllRooms)} className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
              {showAllRooms ? 'Show Less ↑' : `Show All ${rooms.length} Rooms +`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Features ──
function FeaturesSection({ meta }) {
  
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontWeight: 800, fontSize: '0.78rem', letterSpacing: '3.5px', textTransform: 'uppercase', color: '#aaa' }}>FEATURES / CONVENIENCES</span>
          {/* <span style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '1.2rem', fontWeight: 300, flexShrink: 0, transition: 'all 0.25s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span> */}
        </button>
        <AnimatePresence>
          
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 24 }}>
                {meta.features.map(f => {
                  const Icon = f.icon
                  return (
                    <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.87rem', color: 'var(--text)', fontWeight: 500, border: '1px solid #e8e8e8', borderRadius: 8, padding: '9px 16px', background: '#fff' }}>
                      <Icon size={15} style={{ color: '#888', flexShrink: 0 }} /> {f.label}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          
        </AnimatePresence>
      </div>
    </section>
  )
}

// ── Characteristics ──
function CharacteristicsSection({ meta }) {
  return (
    <section style={{ padding: '48px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <div className={styles.charGrid}>
          {meta.characteristics.map(cat => {
            const Icon = cat.icon
            return (
              <div key={cat.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Icon size={17} style={{ color: '#555', flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>{cat.label}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ccc', flexShrink: 0, marginTop: 7 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── How to Reach Us ──
function ReachUsSection({ meta, dest }) {
  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: 12, color: 'var(--text)' }}>How to Reach Us</h2>
        <p style={{ color: '#999', fontSize: '0.92rem', marginBottom: 36 }}>Live Free Hostel, {dest.name} — and the best spots nearby.</p>
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', marginBottom: 40, background: '#000' }}>
          <div className={styles.mapFrameWrap}>
            <iframe src={meta.mapSrc} width="100%" height="100%" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Live Free ${dest.name}`} />
          </div>
          <div className={styles.mapInfoCard} style={{ background: 'rgba(26,26,26,0.92)', backdropFilter: 'blur(4px)', borderRadius: 14, padding: '24px 26px', color: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <MapPin size={18} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: '1rem' }}>Live Free Hostel</span>
            </div> */}
            {/* <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 20 }}>{meta.address}</p> */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8,height:150, }}>
              {meta.highlights.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)',}}>
                  <span style={{ color: 'var(--primary-light)', flexShrink: 0 }}>📍</span> {h}
                </div>
              ))}
            </div>
            {/* <div style={{ marginTop: 20, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>Nearby attractions shown on map →</div> */}
          </div>
        </div>
        <div className={styles.directionsGrid}>
          {Object.values(meta.directions).map(({ label, icon: Icon, content }) => (
            <div key={label} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: 12, padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} style={{ color: 'var(--primary)' }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)' }}>{label}</span>
              </div>
              <p style={{ fontSize: '0.87rem', color: '#777', lineHeight: 1.7 }}>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Travel Itinerary ──
function ItinerarySection({ itinerary, dest, meta }) {
  
  return (
    <section id="travel-itinerary" style={{ padding: '64px 0', background: '#fdf6f0' }}>
      <div className={`container ${styles.itineraryGrid}`}>
        <div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80" alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ marginTop: 20, padding: '24px 28px', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, margin: 0 }}>{ meta.about[1]}</p>
            {/* <button type="button" onClick={() => setExpanded(v => !v)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, padding: '10px 18px', borderRadius: 999, background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: '#fff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', boxShadow: '0 10px 24px rgba(232,93,58,0.22)', transition: 'transform 0.22s ease, box-shadow 0.22s ease', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(232,93,58,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(232,93,58,0.22)' }}
            >{expanded ? 'Show Less' : 'Read More'}</button> */}
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--text)' }}>Travel </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--primary)', fontStyle: 'italic' }}>Itinerary</span>
          </div>
          <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: 28 }}>Wake up to fresh mornings, friendly faces, and an energy that is unique to the cities we call home.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {itinerary.map((day, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '3px solid var(--primary)' }}
              >
                <h4 style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 12, color: 'var(--text)' }}>{day.day}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {day.activities.map((a, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '0.87rem', color: '#777' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />{a}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Accordion ──
function AccordionSection({ title, children, bg = '#fff' }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ background: bg, borderTop: '1px solid #eee' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{title}</span>
          <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'var(--primary)', flexShrink: 0 }} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
              <div style={{ paddingBottom: 24 }}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CancellationSection({ meta }) {
  return (
    <AccordionSection title="Cancellation Policy">
      <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.8 }}>{meta.cancellationPolicy}</p>
    </AccordionSection>
  )
}

function PropertyPolicySection({ city }) {
  const policies = CITY_PROPERTY_POLICY?.[city] || []
  if (!policies.length) return null
  return (
    <AccordionSection title="Property Policy">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {policies.map((p, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: 8 }} />{p}
          </li>
        ))}
      </ul>
    </AccordionSection>
  )
}

function MustReadsSection({ city, dest }) {
  const MotionLink = motion(Link);
  // Real blog posts for this city, newest-first order as stored, capped to 3
  const reads = blogPosts.filter(p => p.city === city).slice(0, 3)
  if (!reads.length) return null
  return (
    <section style={{ padding: '56px 0 64px', background: '#fafafa', borderTop: '1px solid #eee' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: 32, color: 'var(--text)' }}>MUST READS</h2>
        <div className={styles.mustReadsGrid}>
          {reads.map((post, i) => (
            <MotionLink key={post.slug} to={`/blog/${post.slug}?city=${city}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: true }}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', borderRadius: 14, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #eee', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.11)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)' }}
            >
              {post.cover && (
                <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <img src={post.cover} alt={post.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              )}
              <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 10, lineHeight: 1.45, flex: 1 }}>{post.title}</h3>
                <p style={{ fontSize: '0.84rem', color: '#999', lineHeight: 1.65, marginBottom: 16 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                  Read more <ExternalLink size={12} />
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
 
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to={`/blogs?city=${city}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 30px', borderRadius: 8, background: 'var(--primary)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Read Our Blogs →</Link>
        </div>
      </div>
    </section>
  )
}

 

// ── MAIN PAGE ──
export default function DestinationPage({ city }) {
  const dest = DESTINATIONS.find(d => d.id === city)
  const meta = CITY_META[city]
  const rooms = CITY_ROOMS?.[city] || []
  const itinerary = CITY_ITINERARY?.[city] || []
  const photosByCategory = CITY_PHOTOS[city] || {}
  const allPhotos = Object.values(photosByCategory).flat()

  const [lightboxPhotos, setLightboxPhotos] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [lightboxMode, setLightboxMode] = useState('gallery')   // NEW — 'gallery' | 'room'

  const openLightbox = (photos, i) => {
    setLightboxPhotos(photos)
    setLightboxIndex(i)
    setLightboxMode('gallery')       // NEW — gallery clicks use full category tabs
  }

  const openRoomLightbox = (photos, i) => {   // NEW — separate opener for rooms
    setLightboxPhotos(photos)
    setLightboxIndex(i)
    setLightboxMode('room')
  }

  const closeLightbox = () => setLightboxIndex(null)

  if (!dest || !meta) return null
  
  const seoContent = {
  rishikesh: {
    title: 'LiveFree Hostel Rishikesh | Near Laxman Jhula',
    description: 'Stay 400m from Laxman Jhula with Ganga & Himalaya views. Rooftop yoga, in-house cafe, and India Hikes basecamp — dorms and private rooms.',
  },
  varanasi: {
    title: 'LiveFree Hostel Varanasi | Near Ganga Ghats',
    description: 'A backpacker hostel steps from the ghats of Varanasi — dorms and private rooms, community spaces, and easy access to Ganga Aarti.',
  },
  dehradun: {
    title: 'LiveFree Hostel Dehradun | Gateway to the Hills',
    description: 'Comfortable dorms and private rooms in Dehradun — a relaxed basecamp for hill travel, with community spaces and local trip support.',
  },
}[city]


  return (
    <div key={city}>
    <SEO title={seoContent.title}
        description={seoContent.description}
        path={`/${city}`} 
    />

      <GallerySection photosByCategory={photosByCategory} allPhotos={allPhotos} onOpenLightbox={openLightbox}  city={city} />
      <HeroInfoSection dest={dest} meta={meta} />
      <GoodToKnowSection meta={meta} />
      <SelectRoomSection rooms={rooms} onOpenLightbox={openRoomLightbox} dest={dest} />   {/* 👈 uses room opener */}
      <FeaturesSection meta={meta} />
      <CharacteristicsSection meta={meta} />
      <ReachUsSection meta={meta} dest={dest} />
      {itinerary.length > 0 && <ItinerarySection itinerary={itinerary} dest={dest} meta={meta} />}
      <CancellationSection meta={meta} />
      {/* <PropertyPolicySection city={city} /> */}
      <MustReadsSection city={city} />
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightBox
            images={lightboxPhotos}
            index={lightboxIndex}
            onClose={closeLightbox}
            city={city}
            // NEW — only pass gallery context in gallery mode; room mode gets neither, so LightBox falls back to just `images`
            {...(lightboxMode === 'gallery' ? { photosByCategory, allPhotos } : {})}
          />
        )}
      </AnimatePresence>
    </div>
  )
}