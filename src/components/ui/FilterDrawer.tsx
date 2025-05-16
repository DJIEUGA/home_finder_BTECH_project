import React, { useState } from 'react';
import { X, SlidersHorizontal as SliderHorizontal, Check } from 'lucide-react';
import { Amenity, ListingFilter } from '../../types';
import Button from './Button';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: ListingFilter;
  onApplyFilters: (filters: ListingFilter) => void;
  persona: 'student' | 'professional' | null;
}

const amenitiesList: { value: Amenity; label: string }[] = [
  { value: 'wifi', label: 'Wi-Fi' },
  { value: 'laundry', label: 'Laundry' },
  { value: 'gym', label: 'Gym' },
  { value: 'parking', label: 'Parking' },
  { value: 'pets', label: 'Pet Friendly' },
  { value: 'furnished', label: 'Furnished' },
  { value: 'balcony', label: 'Balcony' },
  { value: 'ac', label: 'Air Conditioning' },
  { value: 'dishwasher', label: 'Dishwasher' },
  { value: 'security', label: 'Security System' },
];

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  persona,
}) => {
  const [localFilters, setLocalFilters] = useState<ListingFilter>(filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      
      if (name === 'amenities') {
        const amenity = value as Amenity;
        setLocalFilters(prev => {
          const currentAmenities = prev.amenities || [];
          if (checked) {
            return { ...prev, amenities: [...currentAmenities, amenity] };
          } else {
            return { ...prev, amenities: currentAmenities.filter(a => a !== amenity) };
          }
        });
      } else {
        setLocalFilters(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === 'range') {
      setLocalFilters(prev => ({ ...prev, [name]: parseInt(value) }));
    } else {
      setLocalFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters: ListingFilter = { persona: filters.persona };
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`absolute right-0 top-0 bottom-0 w-full md:max-w-md bg-white transition-transform duration-300 shadow-xl overflow-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
          <h3 className="text-xl font-bold">Filters</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-neutral-100">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Price Range</h4>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">$0</span>
                <span className="text-sm">${localFilters.priceMax || 3000}+</span>
              </div>
              <input
                type="range"
                name="priceMax"
                min="500"
                max="3000"
                step="100"
                value={localFilters.priceMax || 3000}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Lease Type</h4>
            <select
              name="leaseType"
              value={localFilters.leaseType || 'any'}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="any">Any</option>
              <option value="short">Short-term</option>
              <option value="long">Long-term</option>
            </select>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Furnished</h4>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="furnished"
                name="furnished"
                checked={localFilters.furnished || false}
                onChange={handleChange}
                className="h-4 w-4 text-primary-500 rounded border-neutral-300"
              />
              <label htmlFor="furnished" className="text-neutral-700">Only show furnished properties</label>
            </div>
          </div>
          
          {persona === 'student' && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Distance from Campus</h4>
              <div className="flex justify-between items-center">
                <span>Max distance: {localFilters.distanceFromWork || 5} miles</span>
                <input 
                  type="range" 
                  name="distanceFromWork" 
                  min="0.5" 
                  max="10" 
                  step="0.5" 
                  value={localFilters.distanceFromWork || 5}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
          )}
          
          {persona === 'professional' && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Distance from Work</h4>
              <div className="flex justify-between items-center">
                <span>Max distance: {localFilters.distanceFromWork || 5} miles</span>
                <input 
                  type="range" 
                  name="distanceFromWork" 
                  min="0.5" 
                  max="10" 
                  step="0.5" 
                  value={localFilters.distanceFromWork || 5}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Amenities</h4>
            <div className="grid grid-cols-2 gap-2">
              {amenitiesList.map((amenity) => (
                <div key={amenity.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`amenity-${amenity.value}`}
                    name="amenities"
                    value={amenity.value}
                    checked={(localFilters.amenities || []).includes(amenity.value)}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-500 rounded border-neutral-300"
                  />
                  <label htmlFor={`amenity-${amenity.value}`} className="text-neutral-700">
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-white border-t p-4 flex gap-3">
          <Button variant="ghost" onClick={handleReset} className="flex-1">
            Reset
          </Button>
          <Button onClick={handleApply} className="flex-1">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;