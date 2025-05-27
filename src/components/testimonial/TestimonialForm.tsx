import React, { useState } from 'react';
import { useDonation } from '../../context/DonationContext';
import { TestimonialFormData } from '../../types';
import { CheckCircle } from 'lucide-react';

const TestimonialForm: React.FC = () => {
  const { categories, addTestimonial } = useDonation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    message: '',
    role: 'donor',
    categoryId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate server delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Add testimonial to context
      addTestimonial(formData);
      
      // Show success message
      setIsSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          message: '',
          role: 'donor',
          categoryId: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center animate-fade-in">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thank You for Your Feedback!</h2>
        <p className="text-gray-600 mb-6">
          Your testimonial has been submitted successfully and will appear on our site shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Experience</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="label">I am a</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="donor"
                name="role"
                value="donor"
                checked={formData.role === 'donor'}
                onChange={handleChange}
                className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
              />
              <label htmlFor="donor" className="ml-2 text-gray-700">
                Donor
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="recipient"
                name="role"
                value="recipient"
                checked={formData.role === 'recipient'}
                onChange={handleChange}
                className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
              />
              <label htmlFor="recipient" className="ml-2 text-gray-700">
                Recipient
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="categoryId" className="label">
            Related Category (Optional)
          </label>
          <select
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="input"
          >
            <option value="">-- Select a category --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="label">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input h-32 resize-none"
            placeholder="Share your experience..."
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Testimonial'
          )}
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;