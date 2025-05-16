import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Listing, ListingFilter, UserPersona } from '../types';
import { getListings } from '../utils/data';

interface AppContextType {
  persona: UserPersona;
  setPersona: (persona: UserPersona) => void;
  listings: Listing[];
  savedListings: string[];
  setSavedListings: (ids: string[]) => void;
  filters: ListingFilter;
  setFilters: (filters: ListingFilter) => void;
  toggleSavedListing: (id: string) => void;
  isListingSaved: (id: string) => boolean;
  viewType: 'list' | 'map';
  setViewType: (type: 'list' | 'map') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check if persona is stored in localStorage
  const storedPersona = localStorage.getItem('userPersona') as UserPersona;
  
  const [persona, setPersona] = useState<UserPersona>(storedPersona || null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [savedListings, setSavedListings] = useState<string[]>([]);
  const [filters, setFilters] = useState<ListingFilter>({});
  const [viewType, setViewType] = useState<'list' | 'map'>('list');

  // Save persona to localStorage when it changes
  useEffect(() => {
    if (persona) {
      localStorage.setItem('userPersona', persona);
      setFilters(prev => ({ ...prev, persona }));
    }
  }, [persona]);

  // Fetch listings when filters change
  useEffect(() => {
    const filteredListings = getListings({
      persona: filters.persona as string,
      priceMax: filters.priceMax,
      amenities: filters.amenities as string[]
    });
    setListings(filteredListings);
  }, [filters]);

  // Load saved listings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedListings');
    if (saved) {
      setSavedListings(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when savedListings changes
  useEffect(() => {
    if (savedListings.length > 0) {
      localStorage.setItem('savedListings', JSON.stringify(savedListings));
    }
  }, [savedListings]);

  const toggleSavedListing = (id: string) => {
    setSavedListings(prev => {
      if (prev.includes(id)) {
        return prev.filter(listingId => listingId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isListingSaved = (id: string) => {
    return savedListings.includes(id);
  };

  return (
    <AppContext.Provider
      value={{
        persona,
        setPersona,
        listings,
        savedListings,
        setSavedListings,
        filters,
        setFilters,
        toggleSavedListing,
        isListingSaved,
        viewType,
        setViewType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};