export type UserPersona = 'student' | 'professional' | null;

export type Amenity = 
  | 'wifi'
  | 'laundry'
  | 'gym'
  | 'parking'
  | 'pets'
  | 'furnished'
  | 'balcony'
  | 'ac'
  | 'dishwasher'
  | 'security';

export interface ListingFilter {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  leaseType?: 'short' | 'long' | 'any';
  amenities?: Amenity[];
  furnished?: boolean;
  distanceFromWork?: number;
  persona?: UserPersona;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  amenities: Amenity[];
  leaseType: 'short' | 'long';
  isFurnished: boolean;
  bedroomCount: number;
  bathroomCount: number;
  squareFootage: number;
  yearBuilt: number;
  distanceFromTransit?: number;
  distanceFromCampus?: number;
  distanceFromWork?: number;
  safetyScore: number;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface User {
  id: string;
  email: string;
  name?: string;
  persona: UserPersona;
  savedListings: string[];
}