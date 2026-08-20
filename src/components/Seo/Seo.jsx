import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://livefreehostels.com'
const DEFAULT_IMAGE = '/og-images/default.png'

const propertyData = {
  '/rishikesh': {
    name: 'Live Free Hostel Rishikesh',
    street: 'Laxman Jhula Rd, near Anand Dham, Tapovan',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    postalCode: '249192',
    image: '/og-images/rishikesh.jpeg', 
    lat:30.12788377667799,
    lng:78.32519370184724,
    numberOfRooms: 5,
  rooms: [
    { name: '4 Bed Female Dorm', roomdesc: '2 Bunk Beds', type: 'Dormitory' },
    { name: '4 Bed Mixed Dorm', roomdesc: '2 Bunk Beds', type: 'Dormitory' },
    { name: '6 Bed Mixed Dorm', roomdesc: '3 Bunk Beds', type: 'Dormitory' },
    { name: 'Deluxe Private Room', roomdesc: '1 King Size Bed', type: 'Private' },
    { name: 'Standard Private Room', roomdesc: '1 Queen Size Bed', type: 'Private' },
  ],
},
  '/varanasi': {
    name: 'Live Free Hostel Varanasi',
    street: 'Nagwa Rd, Dumraon Colony',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    postalCode: '221005',
    image: '/og-images/varanasi.jpeg',
    lat:25.285025265372795,
    lng:83.00700540847978,
    numberOfRooms: 5,
  rooms: [
    { name: '10 Bed Mixed Dorm', roomdesc: '5 Bunk Beds', type: 'Dormitory' },
    { name: '8 Bed Mixed Dorm', roomdesc: '4 Bunk Beds', type: 'Dormitory' },
    { name: '6 Bed Mix Dorm', roomdesc: '3 Bunk Beds', type: 'Dormitory' },
    { name: '6 Bed Female Dorm', roomdesc: '3 Bunk Beds', type: 'Dormitory' },
    { name: 'Deluxe Private Room', roomdesc: '1 King Size Bed', type: 'Private' },
  ],
  },
  '/dehradun': {
    name: 'Live Free Hostel Dehradun',
    street: '88, Village Sinola, Malsi, Mussoorie Road',
    city: 'Dehradun',
    state: 'Uttarakhand',
    postalCode: '248009',
    image: '/og-images/dehradun.jpeg',
    lat:30.385644143404622,
    lng:78.07310523876338,
    numberOfRooms: 6,
  rooms: [
    { name: '8 Bed Mixed Dorm', roomdesc: '4 Bunk Beds', type: 'Dormitory' },
    { name: '6 Bed Mixed Dorm', roomdesc: '3 Bunk Beds', type: 'Dormitory' },
    { name: '4 Bed Mixed Dorm', roomdesc: '2 Bunk Beds', type: 'Dormitory' },
    { name: '4 Bed Female Dorm', roomdesc: '2 Bunk Beds', type: 'Dormitory' },
    { name: 'Deluxe Private Room', roomdesc: '1 King Size Bed', type: 'Private' },
    { name: 'Family Private Room', roomdesc: '1 King Size Bed & 1 Bunk Bed', type: 'Family-Private' },
  ],
  },
}

export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
}) {
  const canonicalUrl = `${SITE_URL}${path}`
  const property = propertyData[path]
  const resolvedImage = image || property?.image || DEFAULT_IMAGE
  const fullImageUrl = resolvedImage.startsWith('http')
    ? resolvedImage
    : `${SITE_URL}${resolvedImage}`
  const breadcrumbName = title.split('|')[0].trim()

  // Build the list of schema objects that apply to this page
  const schemas = []

  if (path === '/') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LiveFree Hostels',
      url: SITE_URL,
      description: 'LiveFree Hostels - Stay Free. Live Bold. Premium hostels in Rishikesh, Varanasi & Dehradun.',
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LiveFree Hostels',
      url: SITE_URL,
      logo: `${SITE_URL}/og-images/default.png`,
      sameAs: [
        'https://www.instagram.com/livefreehostels',
        'https://www.facebook.com/livefreehostels',
        'https://www.linkedin.com/company/livefreehostels',
        'https://www.youtube.com/@livefreehostels',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919999020248',
        email: 'reservation@livefreehostels.com',
        contactType: 'customer service',
      },
    })
  }

  if (property) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Hostel',
      name: property.name,
      description,
      url: canonicalUrl,
      image: fullImageUrl,
      numberOfRooms: property.numberOfRooms,
      priceRange: '₹',
      checkinTime: '13:00',
      checkoutTime: '10:00',
      telephone: '+919999020248',
      email: 'reservation@livefreehostels.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: property.street,
        addressLocality: property.city,
        addressRegion: property.state,
        postalCode: property.postalCode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: property.lat,
        longitude: property.lng,
        },

        amenityFeature:[
      // PARKING
      { '@type': 'LocationFeatureSpecification', name: 'Parking (Limited Slots)', value: true },
      // MEDIA & GAMES
      { '@type': 'LocationFeatureSpecification', name: 'Sports Matches & Movie Screening', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Board Games', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Foosball Table', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Table Tennis', value: true },
      // SERVICES
      { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'CCTV', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Online/Mobile Check-in', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Luggage Storage', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Laundry Service', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Tours/Ticket Assistance', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Power Backup', value: true },
      // FOOD
      { '@type': 'LocationFeatureSpecification', name: 'In-house Cafe', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Freshly Brewed Coffee', value: true },
      // OTHERS
      { '@type': 'LocationFeatureSpecification', name: 'Common Hangout Areas', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Non-Smoking Rooms', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Outdoor Smoking Areas', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Card/UPI Payments Accepted', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Hot & Cold Water Dispensers', value: true },
    ],
      containsPlace: property.rooms.map(room => {
      const bedCountMatch = room.name.match(/^(\d+)\s*Bed/i)
      const occupancy = bedCountMatch ? parseInt(bedCountMatch[1], 10) : 2
      return {
        '@type': 'HotelRoom',
        name: room.name,
        bed: {
          '@type': 'BedDetails',
          typeOfBed: room.roomdesc,
        },
        occupancy: {
          '@type': 'QuantitativeValue',
          value: occupancy,
        },
      }
    }),


    })
  }

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      ...(path !== '/'
        ? [{ '@type': 'ListItem', position: 2, name: breadcrumbName, item: canonicalUrl }]
        : []),
    ],
  })

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="LiveFree Hostels" />
      <meta property="og:image" content={fullImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* All JSON-LD schemas combined into ONE script tag — avoids Helmet's script dedup */}
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  )
}