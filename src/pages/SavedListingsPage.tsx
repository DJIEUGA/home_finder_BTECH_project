import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import ListingCard from '../components/ui/ListingCard';
import Button from '../components/ui/Button';

const SavedListingsPage: React.FC = () => {
  const { listings, savedListings } = useApp();
  const navigate = useNavigate();
  
  // Filter out the listings that are saved
  const savedListingsData = listings.filter(listing => 
    savedListings.includes(listing.id)
  );
  
  const handleListingClick = (id: string) => {
    navigate(`/listings/${id}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Saved Homes</h1>
      
      {savedListingsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {savedListingsData.map(listing => (
            <ListingCard 
              key={listing.id} 
              listing={listing} 
              onClick={() => handleListingClick(listing.id)}
            />
          ))}
        </div>
      ) : (
        <motion.div 
          className="flex flex-col items-center justify-center py-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mb-4">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">No saved listings yet</h3>
          <p className="text-neutral-600 mb-6 max-w-md">
            Start saving properties you're interested in by clicking the heart icon on any listing card.
          </p>
          <Button onClick={() => navigate('/listings')}>
            Browse Listings
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default SavedListingsPage;