import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, MapPin, Wifi, Car, Home, DollarSign, Calendar, Bath, BedDouble, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { MOCK_LISTINGS } from '../utils/data';
import { Amenity } from '../types';
import Button from '../components/ui/Button';

const AmenityIcon = ({ amenity }: { amenity: Amenity }) => {
  switch (amenity) {
    case 'wifi':
      return <Wifi size={20} className="text-primary-500" />;
    case 'parking':
      return <Car size={20} className="text-primary-500" />;
    case 'furnished':
      return <Home size={20} className="text-primary-500" />;
    case 'laundry':
      return <span className="text-primary-500 text-xl font-bold">W</span>;
    case 'gym':
      return <span className="text-primary-500 text-xl font-bold">G</span>;
    case 'pets':
      return <span className="text-primary-500 text-xl font-bold">P</span>;
    case 'balcony':
      return <span className="text-primary-500 text-xl font-bold">B</span>;
    case 'ac':
      return <span className="text-primary-500 text-xl font-bold">A</span>;
    case 'dishwasher':
      return <span className="text-primary-500 text-xl font-bold">D</span>;
    case 'security':
      return <span className="text-primary-500 text-xl font-bold">S</span>;
    default:
      return null;
  }
};

const ListingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleSavedListing, isListingSaved } = useApp();
  const [listing, setListing] = useState(MOCK_LISTINGS.find(l => l.id === id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();
  
  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Listing not found</h2>
        <p className="mb-6">The listing you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/listings')}>
          Back to Listings
        </Button>
      </div>
    );
  }
  
  const saved = isListingSaved(listing.id);
  const amenityLabels: Record<Amenity, string> = {
    wifi: 'Wi-Fi Included',
    laundry: 'In-unit Laundry',
    gym: 'Gym Access',
    parking: 'Parking Available',
    pets: 'Pet Friendly',
    furnished: 'Furnished',
    balcony: 'Balcony/Patio',
    ac: 'Air Conditioning',
    dishwasher: 'Dishwasher',
    security: 'Security System'
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-neutral-700 hover:text-primary-500 mb-4"
      >
        <ArrowLeft size={18} className="mr-1" />
        <span>Back to listings</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-lg overflow-hidden mb-4">
            <motion.img 
              src={listing.images[selectedImageIndex]} 
              alt={listing.title}
              className="w-full h-[400px] object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={() => toggleSavedListing(listing.id)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-neutral-100 transition-colors"
              aria-label={saved ? "Remove from saved" : "Save listing"}
            >
              <Heart 
                size={24} 
                fill={saved ? "#EF4444" : "none"} 
                color={saved ? "#EF4444" : "#666666"} 
              />
            </button>
          </div>
          
          {listing.images.length > 1 && (
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {listing.images.map((img, index) => (
                <div
                  key={index}
                  className={`w-24 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${
                    selectedImageIndex === index 
                      ? 'border-2 border-primary-500' 
                      : 'border border-neutral-300 hover:border-primary-300'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
          
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{listing.title}</h1>
                <div className="flex items-center text-neutral-600 mt-1">
                  <MapPin size={18} className="mr-1" />
                  <span>{listing.location.address}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-500">${listing.price}/mo</div>
                <span className={`badge ${listing.leaseType === 'short' ? 'bg-warning-500' : 'bg-success-500'} text-white`}>
                  {listing.leaseType === 'short' ? 'Short-term' : 'Long-term'}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 py-4 border-y border-neutral-200 mb-6">
              <div className="flex items-center gap-2">
                <BedDouble size={20} className="text-neutral-500" />
                <div>
                  <div className="font-semibold">{listing.bedroomCount}</div>
                  <div className="text-sm text-neutral-500">Bedrooms</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Bath size={20} className="text-neutral-500" />
                <div>
                  <div className="font-semibold">{listing.bathroomCount}</div>
                  <div className="text-sm text-neutral-500">Bathrooms</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Home size={20} className="text-neutral-500" />
                <div>
                  <div className="font-semibold">{listing.squareFootage}</div>
                  <div className="text-sm text-neutral-500">sq ft</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-neutral-500" />
                <div>
                  <div className="font-semibold">{listing.yearBuilt}</div>
                  <div className="text-sm text-neutral-500">Year Built</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-neutral-700 mb-6">{listing.description}</p>
            
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {listing.amenities.map((amenity) => (
                <div 
                  key={amenity}
                  className="flex items-center gap-2 p-3 bg-neutral-50 rounded-md border border-neutral-200"
                >
                  <AmenityIcon amenity={amenity} />
                  <span>{amenityLabels[amenity]}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="bg-neutral-200 rounded-lg h-64 flex items-center justify-center mb-6">
              <div className="text-center text-neutral-700 p-4">
                <MapPin size={32} className="mx-auto mb-2 text-neutral-500" />
                <p>
                  Map view would display property location.
                  <br />
                  (Map integration would be implemented in a production environment)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Contact Landlord</h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Property Manager</h4>
              <p className="text-neutral-700">{listing.contactInfo.name}</p>
            </div>
            
            <form className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input w-full"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input w-full"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input w-full"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input w-full"
                  placeholder="Hi, I'm interested in this property..."
                  defaultValue={`Hi, I'm interested in the property at ${listing.location.address}. Can I schedule a viewing?`}
                ></textarea>
              </div>
              
              <Button fullWidth>
                Contact Landlord
              </Button>
            </form>
            
            <div className="text-center">
              <p className="text-sm text-neutral-500">
                or call directly: <a href={`tel:${listing.contactInfo.phone}`} className="text-primary-500 font-medium">{listing.contactInfo.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;