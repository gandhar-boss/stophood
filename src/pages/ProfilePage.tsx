import React, { useState } from 'react';
import { useDonation } from '../context/DonationContext';
import { formatDate } from '../utils/dateUtils';
import { Download, FileText, Filter } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { donations, categories } = useDonation();
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('all');
  
  // Sort donations by date (newest first)
  const sortedDonations = [...donations].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Apply filters
  const filteredDonations = sortedDonations.filter((donation) => {
    // Category filter
    const categoryMatch = !categoryFilter || donation.categoryId === categoryFilter;
    
    // Date filter
    let dateMatch = true;
    if (dateFilter !== 'all') {
      const donationDate = new Date(donation.date);
      const now = new Date();
      
      if (dateFilter === 'last30') {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(now.getDate() - 30);
        dateMatch = donationDate >= thirtyDaysAgo;
      } else if (dateFilter === 'last90') {
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(now.getDate() - 90);
        dateMatch = donationDate >= ninetyDaysAgo;
      } else if (dateFilter === 'lastYear') {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        dateMatch = donationDate >= oneYearAgo;
      }
    }
    
    return categoryMatch && dateMatch;
  });
  
  // Calculate total amount
  const totalDonated = filteredDonations.reduce((sum, donation) => sum + donation.amount, 0);
  
  // Group donations by category for the summary
  const donationsByCategory = filteredDonations.reduce((acc, donation) => {
    const { categoryId, amount } = donation;
    if (!acc[categoryId]) {
      acc[categoryId] = 0;
    }
    acc[categoryId] += amount;
    return acc;
  }, {} as Record<string, number>);
  
  // Mock function to generate a donation receipt
  const generateReceipt = (donationId: string) => {
    alert(`Generating receipt for donation ${donationId}...`);
    // In a real app, this would download a PDF or open a receipt page
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Donations</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Track your contributions and the impact you've made.
        </p>
      </div>
      
      {/* Donation Summary */}
      <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-teal-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Donation Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">${totalDonated.toLocaleString()}</div>
              <p className="text-gray-600">Total Amount Donated</p>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Donations by Category</h3>
                <div className="space-y-3">
                  {Object.entries(donationsByCategory).map(([categoryId, amount]) => {
                    const category = categories.find((c) => c.id === categoryId);
                    return (
                      <div key={categoryId} className="flex justify-between items-center">
                        <span className="text-gray-700">{category?.name || 'Unknown'}</span>
                        <span className="font-medium">${amount.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Your Impact</h3>
              <p className="text-gray-600 mb-4">
                Thank you for your generosity! Your donations have helped support:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{filteredDonations.length} individual contributions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{Object.keys(donationsByCategory).length} different causes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Made a meaningful difference in countless lives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Donation History */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Donation History</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <select
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
            
            <div>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              >
                <option value="all">All Time</option>
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="lastYear">Last Year</option>
              </select>
            </div>
          </div>
        </div>
        
        {filteredDonations.length > 0 ? (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {filteredDonations.map((donation) => {
                const category = categories.find((c) => c.id === donation.categoryId);
                return (
                  <li key={donation.id}>
                    <div className="px-4 py-5 sm:px-6 hover:bg-gray-50 transition-colors duration-150">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="min-w-0 flex-1 flex flex-col sm:flex-row sm:items-center">
                            <div>
                              <p className="text-lg font-medium text-teal-600 truncate">
                                ${donation.amount.toLocaleString()}
                              </p>
                              <p className="mt-1 text-sm text-gray-500 sm:mt-0">
                                {formatDate(new Date(donation.date))}
                              </p>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:ml-8">
                              <p className="text-sm font-medium text-gray-900">
                                Donated to: {category?.name || 'Unknown Category'}
                              </p>
                              {donation.message && (
                                <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                                  "{donation.message}"
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="ml-5 flex-shrink-0 flex space-x-2">
                          <button
                            onClick={() => generateReceipt(donation.id)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Receipt
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No donations found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              No donations match your current filters. Try adjusting your filters or make your first donation to get started.
            </p>
          </div>
        )}
      </div>
      
      {/* Tax Information */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Information</h2>
        <p className="text-gray-600 mb-6">
          All donations made through our platform are tax-deductible. You can download an annual tax receipt for your records.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Annual Tax Receipts</h3>
            <p className="text-gray-600 mb-4">
              Download a consolidated receipt for all your donations in a given year.
            </p>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                <Download className="h-5 w-5 mr-2" />
                2023 Tax Receipt
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                <Download className="h-5 w-5 mr-2" />
                2022 Tax Receipt
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Tax Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Tax ID Number:</span>
                <span className="font-medium">123-456-789</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Organization Type:</span>
                <span className="font-medium">501(c)(3) Non-Profit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax Deductible:</span>
                <span className="font-medium">100% Deductible</span>
              </div>
              <div className="pt-3 mt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Please consult with your tax advisor regarding specific tax benefits for your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;