import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, GraduationCap, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';

const SignupPage: React.FC = () => {
  const { setPersona } = useApp();
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = React.useState<'student' | 'professional' | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPersona) {
      setPersona(selectedPersona);
    }
    // In a real app, we would handle registration here
    navigate('/listings');
  };
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mx-auto">
            <UserPlus size={24} />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-neutral-900">Create an account</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-500 hover:text-primary-600">
              Sign in
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input w-full mt-1"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="input w-full mt-1"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-neutral-500">
                Must be at least 8 characters with a number and special character.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPersona('student')}
                  className={`p-3 rounded-md border-2 transition-colors ${
                    selectedPersona === 'student' 
                      ? 'border-primary-500 bg-primary-50 text-primary-700' 
                      : 'border-neutral-300 hover:border-primary-300'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <GraduationCap size={24} className={selectedPersona === 'student' ? 'text-primary-500' : 'text-neutral-600'} />
                    <span className="mt-1 font-medium">Student</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPersona('professional')}
                  className={`p-3 rounded-md border-2 transition-colors ${
                    selectedPersona === 'professional' 
                      ? 'border-primary-500 bg-primary-50 text-primary-700' 
                      : 'border-neutral-300 hover:border-primary-300'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Briefcase size={24} className={selectedPersona === 'professional' ? 'text-primary-500' : 'text-neutral-600'} />
                    <span className="mt-1 font-medium">Professional</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-500 rounded border-neutral-300"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-neutral-700">
              I agree to the{' '}
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Privacy Policy
              </a>
            </label>
          </div>
          
          <Button type="submit" fullWidth disabled={!selectedPersona}>
            Create Account
          </Button>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">Or sign up with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full py-2 px-4 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
              >
                Google
              </button>
              <button
                type="button"
                className="w-full py-2 px-4 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
              >
                Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;