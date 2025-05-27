import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDonation } from '../context/DonationContext';
import CategoryCard from '../components/donation/CategoryCard';
import TestimonialCard from '../components/testimonial/TestimonialCard';
import { ArrowRight, HandHeart, Award, BarChart3, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const { categories, testimonials, donations } = useDonation();
  const navigate = useNavigate();
  
  // Get featured categories (first 3)
  const featuredCategories = categories.slice(0, 3);
  
  // Get total amount raised across all donations
  const totalRaised = donations.reduce((sum, donation) => sum + donation.amount, 0);
  
  // Get recent testimonials (first 3)
  const recentTestimonials = [...testimonials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-80"></div>
          <img 
            src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Make a <span className="text-yellow-400">Difference</span> Today
          </h1>
          <p className="text-xl max-w-3xl mb-10 text-gray-100 animate-slide-in">
            Track your impact and see how your donations are changing lives across different causes. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link 
              to="/donate" 
              className="px-8 py-4 bg-white text-teal-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-teal-900 transition-colors duration-300"
            >
              Donate Now
            </Link>
            <Link 
              to="/categories" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-800 transition-colors duration-300"
            >
              Explore Causes
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-teal-50 rounded-xl shadow-sm">
              <HandHeart className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">${totalRaised.toLocaleString()}</h3>
              <p className="text-gray-600 mt-2">Total Donations Raised</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-sm">
              <Award className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{categories.length}</h3>
              <p className="text-gray-600 mt-2">Supported Causes</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-amber-50 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{donations.length}</h3>
              <p className="text-gray-600 mt-2">Generous Donors</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Causes</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Your donations help support these important causes and make a real difference in people's lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} featured={true} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/categories" 
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
            >
              View all causes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Making a difference is easy with our transparent donation process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose a Cause</h3>
              <p className="text-gray-600">
                Browse through our categories and find a cause that resonates with you and aligns with your values.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Make a Donation</h3>
              <p className="text-gray-600">
                Donate any amount you're comfortable with. Every contribution, no matter how small, makes an impact.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Impact</h3>
              <p className="text-gray-600">
                Follow the progress of the causes you've supported and see the real-world difference you're making.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Hear from donors and recipients about how donations have made a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {recentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
            >
              Read more stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="max-w-3xl mx-auto text-xl text-teal-100 mb-8">
            Your donation today can help change someone's tomorrow. Every contribution, big or small, matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/donate')}
              className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate('/testimonials')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-700 transition-colors duration-300"
            >
              Share Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;