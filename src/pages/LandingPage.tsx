import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, GraduationCap, Briefcase, Building, Heart, Shield, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

const LandingPage: React.FC = () => {
  const { setPersona, setFilters } = useApp();
  const navigate = useNavigate();
  
  const handleSearch = (location: string, price?: number) => {
    setFilters(prev => ({
      ...prev,
      location,
      priceMax: price
    }));
    navigate('/listings');
  };
  
  const handlePersonaSelect = (persona: 'student' | 'professional') => {
    setPersona(persona);
    navigate('/listings');
  };
  
  return (
    <>
      <section className="bg-primary-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Find Your Perfect Home, Tailored for Your Lifestyle
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 text-primary-100"
            >
              Whether you're a student or professional, we'll help you find the right place to call home.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SearchBar onSearch={handleSearch} />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Experience</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We customize your home search experience based on your unique needs.
            Select your profile to get tailored recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div 
            className="card p-6 border-2 border-transparent hover:border-primary-500 cursor-pointer transition-all"
            onClick={() => handlePersonaSelect('student')}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">I'm a Student</h3>
              <p className="text-neutral-600 mb-4">
                Find affordable housing near campus with student-friendly amenities and flexible lease terms.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary-500" />
                  <span>Campus proximity filters</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield size={16} className="text-primary-500" />
                  <span>Safety score indicators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building size={16} className="text-primary-500" />
                  <span>Roommate-friendly options</span>
                </li>
              </ul>
              <Button>Select Student Profile</Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="card p-6 border-2 border-transparent hover:border-primary-500 cursor-pointer transition-all"
            onClick={() => handlePersonaSelect('professional')}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">I'm a Professional</h3>
              <p className="text-neutral-600 mb-4">
                Discover premium housing options with commute-optimized locations and professional amenities.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary-500" />
                  <span>Work commute optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Home size={16} className="text-primary-500" />
                  <span>High-end amenities filter</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart size={16} className="text-primary-500" />
                  <span>Lifestyle-matched recommendations</span>
                </li>
              </ul>
              <Button>Select Professional Profile</Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How HomeFinder Works</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We've simplified the home finding process so you can focus on what matters - 
              finding your perfect place without the stress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mx-auto mb-4">
                <GraduationCap size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Select Your Profile</h3>
              <p className="text-neutral-600">
                Choose between student or professional to get personalized recommendations 
                tailored to your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mx-auto mb-4">
                <MapPin size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Set Your Preferences</h3>
              <p className="text-neutral-600">
                Filter by location, budget, amenities, and specific requirements to narrow down your options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mx-auto mb-4">
                <Heart size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Find & Save</h3>
              <p className="text-neutral-600">
                Browse personalized listings, save your favorites, and easily contact property managers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted By Thousands</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Join our growing community of satisfied students and professionals who found their ideal homes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Alex Thompson</h4>
                  <p className="text-sm text-neutral-500">{i === 1 ? 'Student' : 'Professional'}</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                {i === 1 
                  ? "HomeFinder made it so easy to find an apartment near my university. The filters helped me find exactly what I needed within my budget."
                  : i === 2 
                    ? "As a busy professional, I appreciated how quickly I could find quality listings near my workplace. The process was seamless!"
                    : "The persona-based search was game-changing. All the listings matched exactly what I was looking for as a graduate student."
                }
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" onClick={() => navigate('/listings')}>
            Start Your Home Search Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;