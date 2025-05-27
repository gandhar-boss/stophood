import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDonation } from '../../context/DonationContext';
import { DonationFormData } from '../../types';
import { CreditCard, CheckCircle } from 'lucide-react';

const DonationForm: React.FC<{ selectedCategoryId?: string }> = ({ selectedCategoryId }) => {
  const navigate = useNavigate();
  const { categories, addDonation } = useDonation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 50,
    name: '',
    email: '',
    message: '',
    anonymous: false,
    categoryId: selectedCategoryId || (categories.length > 0 ? categories[0].id : ''),
  });

  const predefinedAmounts = [10, 25, 50, 100, 250];

  const handleAmountClick = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else if (name === 'amount') {
      const amount = parseFloat(value) || 0;
      setFormData((prev) => ({ ...prev, [name]: amount }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulating a payment process
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Add donation to context
      addDonation(formData);
      
      setIsSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          amount: 50,
          name: '',
          email: '',
          message: '',
          anonymous: false,
          categoryId: selectedCategoryId || (categories.length > 0 ? categories[0].id : ''),
        });
        
        // Navigate to thank you page or profile
        navigate('/profile');
      }, 2000);
    } catch (error) {
      console.error('Error processing donation:', error);
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thank You for Your Donation!</h2>
        <p className="text-gray-600 mb-6">
          Your generous contribution will make a real difference. A confirmation has been sent to your email.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Make a Donation</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="label">Select Donation Category</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            className="input"
            required
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <label className="label">Donation Amount</label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                  formData.amount === amount
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleAmountClick(amount)}
              >
                ${amount}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              min="1"
              step="1"
              className="input pl-8"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="label">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input"
            required={!formData.anonymous}
          />
        </div>
        
        <div className="mb-6">
          <label className="label">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            We'll send a receipt to this email
          </p>
        </div>
        
        <div className="mb-6">
          <label className="label">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="input h-24 resize-none"
            placeholder="Share why you're donating..."
          ></textarea>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleInputChange}
              className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="anonymous" className="ml-2 text-gray-700">
              Make this donation anonymous
            </label>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                  <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-5 w-5" />
                Complete Donation
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;