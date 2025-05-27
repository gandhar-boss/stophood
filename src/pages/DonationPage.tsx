import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DonationForm from '../components/donation/DonationForm';
import { useDonation } from '../context/DonationContext';
import { HeartHandshake } from 'lucide-react';

const DonationPage: React.FC = () => {
  const location = useLocation();
  const { categories } = useDonation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    // Check if category is specified in URL
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setSelectedCategoryId(categoryParam);
    }
  }, [location]);
  
  // Find the selected category
  const selectedCategory = categories.find((cat) => cat.id === selectedCategoryId);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <HeartHandshake className="h-16 w-16 text-teal-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Your generosity helps us create real change. All donations are tax-deductible.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {selectedCategory && (
          <div className="mb-8 p-6 bg-teal-50 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Donating to: {selectedCategory.name}
            </h2>
            <p className="text-gray-600 mb-0">{selectedCategory.description}</p>
          </div>
        )}
        
        <DonationForm selectedCategoryId={selectedCategoryId} />
        
        <div className="mt-8 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Your Support Matters</h3>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base text-gray-700">
                  <strong>Transparency:</strong> We provide detailed tracking of all donations and how they're used.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base text-gray-700">
                  <strong>Impact:</strong> 90% of all donations go directly to the cause, with only 10% for operational costs.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base text-gray-700">
                  <strong>Tax Benefits:</strong> All donations are tax-deductible (Tax ID: 123-456-789).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;