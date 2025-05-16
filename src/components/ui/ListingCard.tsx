import React from 'react';
import { Heart, Wifi, Car, CheckCircle, Home } from 'lucide-react';
import { Listing, Amenity } from '../../types';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';

interface ListingCardProps {
  listing: Listing;
  onClick: () => void;
}

const AmenityIcon = ({ amenity }: { amenity: Amenity }) => {
  switch (amenity) {
    case 'wifi':
      return <Wifi size={16} className="text-primary-500" />;
    case 'parking':
      return <Car size={16} className="text-primary-500" />;
    case 'furnished':
      return <Home size={16} className="text-primary-500" />;
    default:
      return <CheckCircle size={16} className="text-primary-500" />;
  }
};

const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  const { toggleSavedListing, isListingSaved } = useApp();
  const saved = isListingSaved(listing.id);
  
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSavedListing(listing.id);
  };
  
  // Display only the first 3 amenities
  const displayedAmenities = listing.amenities.slice(0, 3);
  
  return (
    <motion.div 
      className="card cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={listing.images[0]} 
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleSaveClick}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-neutral-100 transition-colors"
          aria-label={saved ? "Remove from saved" : "Save listing"}
        >
          <Heart 
            size={20} 
            fill={saved ? "#EF4444" : "none"} 
            color={saved ? "#EF4444" : "#666666"} 
          />
        </button>
        
        <div className="absolute bottom-2 left-2">
          <span className={`badge ${listing.leaseType === 'short' ? 'bg-warning-500' : 'bg-success-500'} text-white`}>
            {listing.leaseType === 'short' ? 'Short-term' : 'Long-term'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
          <p className="font-bold text-lg">${listing.price}/mo</p>
        </div>
        
        <p className="text-sm text-neutral-500 mb-3">{listing.location.address}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span>{listing.bedroomCount} {listing.bedroomCount === 1 ? 'bed' : 'beds'}</span>
            <span>•</span>
            <span>{listing.bathroomCount} {listing.bathroomCount === 1 ? 'bath' : 'baths'}</span>
            <span>•</span>
            <span>{listing.squareFootage} sq ft</span>
          </div>
        </div>
        
        <div className="flex gap-3 mt-3">
          {displayedAmenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-1">
              <AmenityIcon amenity={amenity} />
              <span className="text-xs capitalize">{amenity}</span>
            </div>
          ))}
          {listing.amenities.length > 3 && (
            <span className="text-xs text-neutral-500">+{listing.amenities.length - 3} more</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;