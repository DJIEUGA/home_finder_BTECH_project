import { Listing } from '../types';

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Modern Studio Apartment Near Campus',
    description: 'Bright, spacious studio apartment located just 10 minutes from university campus. Perfect for students!',
    price: 950,
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    location: {
      address: '123 University Ave, Boston, MA',
      latitude: 42.3505,
      longitude: -71.1054
    },
    amenities: ['wifi', 'laundry', 'ac'],
    leaseType: 'long',
    isFurnished: true,
    bedroomCount: 0,
    bathroomCount: 1,
    squareFootage: 450,
    yearBuilt: 2015,
    distanceFromCampus: 0.7,
    safetyScore: 85,
    contactInfo: {
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '(617) 555-1234'
    }
  },
  {
    id: '2',
    title: 'Luxury 1BR in Downtown',
    description: 'Upscale 1-bedroom apartment in the heart of downtown. Walking distance to major corporate offices and amenities.',
    price: 1800,
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    location: {
      address: '50 Franklin St, Boston, MA',
      latitude: 42.3554,
      longitude: -71.0591
    },
    amenities: ['wifi', 'gym', 'laundry', 'parking', 'ac', 'dishwasher', 'security'],
    leaseType: 'long',
    isFurnished: false,
    bedroomCount: 1,
    bathroomCount: 1,
    squareFootage: 750,
    yearBuilt: 2018,
    distanceFromWork: 0.3,
    safetyScore: 92,
    contactInfo: {
      name: 'Michael Smith',
      email: 'msmith@example.com',
      phone: '(617) 555-5678'
    }
  },
  {
    id: '3',
    title: 'Cozy 2BR Apartment in Quiet Neighborhood',
    description: 'Comfortable 2-bedroom apartment in a peaceful residential area. Perfect for roommates or small families.',
    price: 1400,
    images: [
      'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    location: {
      address: '42 Maple St, Cambridge, MA',
      latitude: 42.3736,
      longitude: -71.1097
    },
    amenities: ['wifi', 'parking', 'laundry', 'pets', 'dishwasher'],
    leaseType: 'long',
    isFurnished: false,
    bedroomCount: 2,
    bathroomCount: 1,
    squareFootage: 900,
    yearBuilt: 2005,
    distanceFromCampus: 1.2,
    distanceFromWork: 2.5,
    safetyScore: 88,
    contactInfo: {
      name: 'Robert Johnson',
      email: 'rjohnson@example.com',
      phone: '(617) 555-9012'
    }
  },
  {
    id: '4',
    title: 'Short-term Furnished Studio',
    description: 'Fully furnished studio available for short-term leases. Ideal for visiting researchers or interns.',
    price: 1200,
    images: [
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    location: {
      address: '25 Tech Square, Cambridge, MA',
      latitude: 42.3629,
      longitude: -71.0916
    },
    amenities: ['wifi', 'ac', 'laundry', 'gym', 'security'],
    leaseType: 'short',
    isFurnished: true,
    bedroomCount: 0,
    bathroomCount: 1,
    squareFootage: 400,
    yearBuilt: 2010,
    distanceFromCampus: 0.5,
    distanceFromWork: 1.0,
    safetyScore: 90,
    contactInfo: {
      name: 'Sarah Wilson',
      email: 'swilson@example.com',
      phone: '(617) 555-3456'
    }
  },
  {
    id: '5',
    title: 'Spacious 3BR Apartment with Balcony',
    description: 'Large 3-bedroom apartment with a beautiful balcony overlooking the city. Perfect for families or roommates.',
    price: 2500,
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    location: {
      address: '75 Beacon Hill, Boston, MA',
      latitude: 42.3586,
      longitude: -71.0707
    },
    amenities: ['parking', 'laundry', 'balcony', 'ac', 'dishwasher', 'security', 'gym'],
    leaseType: 'long',
    isFurnished: false,
    bedroomCount: 3,
    bathroomCount: 2,
    squareFootage: 1500,
    yearBuilt: 2008,
    distanceFromWork: 1.5,
    safetyScore: 94,
    contactInfo: {
      name: 'David Brown',
      email: 'dbrown@example.com',
      phone: '(617) 555-7890'
    }
  },
  {
    id: '6',
    title: 'Budget-Friendly Studio for Students',
    description: 'Affordable studio apartment perfect for students on a budget. Close to campus and public transportation.',
    price: 850,
    images: [
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    location: {
      address: '30 Student Lane, Boston, MA',
      latitude: 42.3401,
      longitude: -71.1034
    },
    amenities: ['wifi', 'laundry'],
    leaseType: 'long',
    isFurnished: false,
    bedroomCount: 0,
    bathroomCount: 1,
    squareFootage: 350,
    yearBuilt: 2000,
    distanceFromCampus: 0.3,
    safetyScore: 82,
    contactInfo: {
      name: 'Lisa Chen',
      email: 'lchen@example.com',
      phone: '(617) 555-2345'
    }
  }
];

export const getListings = (filters?: {
  persona?: string;
  priceMax?: number;
  amenities?: string[];
}): Listing[] => {
  let filteredListings = [...MOCK_LISTINGS];
  
  if (filters) {
    if (filters.persona === 'student') {
      filteredListings = filteredListings.filter(listing => 
        listing.distanceFromCampus !== undefined && 
        (listing.price <= 1500 || filters.priceMax === undefined)
      );
    } else if (filters.persona === 'professional') {
      filteredListings = filteredListings.filter(listing => 
        listing.safetyScore >= 85 && 
        (listing.distanceFromWork !== undefined || listing.amenities.includes('parking'))
      );
    }
    
    if (filters.priceMax) {
      filteredListings = filteredListings.filter(listing => listing.price <= filters.priceMax!);
    }
    
    if (filters.amenities && filters.amenities.length > 0) {
      filteredListings = filteredListings.filter(listing => 
        filters.amenities!.every(amenity => listing.amenities.includes(amenity as any))
      );
    }
  }
  
  return filteredListings;
};