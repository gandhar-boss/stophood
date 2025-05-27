import React, { useState } from 'react';
import { useDonation } from '../context/DonationContext';
import TestimonialCard from '../components/testimonial/TestimonialCard';
import TestimonialForm from '../components/testimonial/TestimonialForm';

const TestimonialsPage: React.FC = () => {
  const { testimonials, categories } = useDonation();
  const [filter, setFilter] = useState<'all' | 'donor' | 'recipient'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  
  // Filter testimonials based on selection
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const roleMatch = filter === 'all' || testimonial.role === filter;
    const categoryMatch = !categoryFilter || testimonial.categoryId === categoryFilter;
    return roleMatch && categoryMatch;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Testimonials & Stories</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Hear from our donors and recipients about the impact of donations.
        </p>
      </div>
      
      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div>
          <label htmlFor="roleFilter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Role
          </label>
          <select
            id="roleFilter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'donor' | 'recipient')}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          >
            <option value="all">All Testimonials</option>
            <option value="donor">Donors</option>
            <option value="recipient">Recipients</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        
        {filteredTestimonials.length === 0 && (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No testimonials found</h3>
            <p className="text-gray-600">
              Try adjusting your filters, or be the first to share your experience!
            </p>
          </div>
        )}
      </div>
      
      {/* Share your story section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h2>
            <p className="text-gray-600 mb-4">
              Whether you're a donor or recipient, your story matters. Share your experience to inspire others and show the real impact of donations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Help us show the real impact of donations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Inspire others to give or seek assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Build a community of giving and gratitude</span>
              </li>
            </ul>
          </div>
          
          <div>
            <TestimonialForm />
          </div>
        </div>
      </div>
      
      {/* Featured testimonials */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 mb-8">
          <div className="flex items-start">
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              alt="Featured Testimonial"
              className="h-16 w-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Michael Thompson</h3>
              <p className="text-gray-500 text-sm mb-3">Healthcare Program Recipient</p>
              <p className="text-gray-700 italic">
                "The support I received through the healthcare program literally saved my life. After my diagnosis, I couldn't afford the treatments I needed. The donations covered my medical expenses and allowed me to focus on recovery instead of financial stress. Today, I'm cancer-free and eternally grateful to everyone who contributed."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-start">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
              alt="Featured Testimonial"
              className="h-16 w-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Emma Rodriguez</h3>
              <p className="text-gray-500 text-sm mb-3">Monthly Donor, Education Program</p>
              <p className="text-gray-700 italic">
                "I've been donating monthly to the education program for over two years now. What keeps me coming back is the transparency—I can see exactly how my donations are helping students. The progress reports and personal stories from students make me feel connected to the cause. It's incredible to see young people get opportunities they wouldn't have had otherwise."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;