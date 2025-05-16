import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, MapIcon, List, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import ListingCard from '../components/ui/ListingCard';
import FilterDrawer from '../components/ui/FilterDrawer';

const ListingsPage: React.FC = () => {
  const { listings, filters, setFilters, persona, viewType, setViewType } = useApp();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (location: string, price?: number) => {
    setFilters(prev => ({
      ...prev,
      location,
      priceMax: price
    }));
  };
  
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const handleViewToggle = () => {
    setViewType(viewType === 'list' ? 'map' : 'list');
  };
  
  const handleListingClick = (id: string) => {
    navigate(`/listings/${id}`);
  };
  
  return (
    <>
      <section className="bg-primary-500 text-white py-6">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {persona === 'student' 
                ? 'Student-Friendly Homes' 
                : persona === 'professional' 
                  ? 'Professional Living Spaces'
                  : 'Find Your Perfect Home'
              }
            </h1>
            <div className="mb-4">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <p className="text-neutral-600">
              {listings.length} homes available
              {filters.location ? ` in ${filters.location}` : ''}
              {filters.priceMax ? ` under $${filters.priceMax}` : ''}
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button 
              variant="ghost" 
              onClick={handleFilterToggle}
              className="flex items-center gap-2 flex-1 sm:flex-none justify-center"
            >
              <Filter size={18} />
              <span>Filters</span>
            </Button>
            
            <div className="flex border rounded-md overflow-hidden">
              <button 
                className={`px-3 py-1.5 flex items-center ${viewType === 'list' ? 'bg-primary-500 text-white' : 'bg-white text-neutral-700'}`}
                onClick={() => setViewType('list')}
              >
                <List size={18} />
              </button>
              <button 
                className={`px-3 py-1.5 flex items-center ${viewType === 'map' ? 'bg-primary-500 text-white' : 'bg-white text-neutral-700'}`}
                onClick={() => setViewType('map')}
              >
                <MapIcon size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {viewType === 'list' ? (
          <div>
            {listings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {listings.map(listing => (
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
                  <Home size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">No listings found</h3>
                <p className="text-neutral-600 mb-6 max-w-md">
                  We couldn't find any listings matching your current filters. Try adjusting your search criteria.
                </p>
                <Button variant="secondary" onClick={handleFilterToggle}>
                  Adjust Filters
                </Button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <div className="text-center text-neutral-700 p-4">
              <MapIcon size={48} className="mx-auto mb-2 text-neutral-500" />
              <h3 className="text-xl font-semibold mb-2">Map View</h3>
              <p>
                The map view would display property locations with interactive pins.
                <br />
                (Map integration would be implemented in a production environment)
              </p>
            </div>
          </div>
        )}
      </section>
      
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={handleFilterToggle}
        filters={filters}
        onApplyFilters={setFilters}
        persona={persona}
      />
    </>
  );
};

export default ListingsPage;