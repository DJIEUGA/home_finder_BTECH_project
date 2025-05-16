import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Shield, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About HomeFinder</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-neutral-700 mb-6">
              At HomeFinder, our mission is to simplify the home search process for students and professionals.
              We understand that finding the right home is more than just finding a place to live—it's about 
              finding a space that supports your lifestyle, goals, and well-being.
            </p>
            <p className="text-neutral-700 mb-6">
              We've built a platform that understands the unique needs of each user, whether you're a student 
              looking for affordable housing near campus or a professional seeking a comfortable space with a 
              reasonable commute to work.
            </p>
            <p className="text-neutral-700">
              Our team is committed to providing a transparent, user-friendly experience that makes finding 
              your next home as stress-free as possible.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose HomeFinder?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
              <p className="text-neutral-700">
                Our platform adapts to your specific needs as a student or professional, 
                showing you properties that match your lifestyle preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-neutral-700">
                We verify all listings to ensure they meet our quality standards and 
                provide accurate information about amenities and safety.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Saving Tools</h3>
              <p className="text-neutral-700">
                Our intuitive filters and search tools help you quickly find properties 
                that match your specific criteria and preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <Home size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Property Insights</h3>
              <p className="text-neutral-700">
                Detailed property information, including proximity to campus or work,
                safety scores, and comprehensive amenity lists.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary-500 text-white rounded-lg shadow-md p-8 text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-6">
            HomeFinder was created by a dedicated team of professionals who understand the challenges 
            of finding the right housing. Our team includes former students, real estate professionals,
            and tech experts committed to simplifying your home search experience.
          </p>
          <Button 
            variant="secondary" 
            className="bg-white text-primary-500 hover:bg-neutral-100"
          >
            Meet The Team
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-center mb-6">
              Have questions, feedback, or need assistance with your home search? 
              We're here to help! Reach out to our friendly support team.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input w-full"
                    placeholder="John Doe"
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
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input w-full"
                  placeholder="How can we help?"
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
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;