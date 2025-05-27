import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDonation } from '../context/DonationContext';
import CategoryCard from '../components/donation/CategoryCard';
import { Search } from 'lucide-react';

const CategoriesPage: React.FC = () => {
  const { categories } = useDonation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check URL for category param
    const params = new URLSearchParams(location.search);
    const categoryId = params.get('id');
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    
    // Filter categories based on search and selected category
    filterCategories();
  }, [searchTerm, selectedCategory, categories, location]);

  const filterCategories = () => {
    let filtered = categories;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          category.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by selected category
    if (selectedCategory) {
      filtered = filtered.filter((category) => category.id === selectedCategory);
    }
    
    setFilteredCategories(filtered);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    window.history.pushState({}, '', '/categories');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Donation Categories</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Browse our categories and support the causes that matter to you the most.
        </p>
      </div>
      
      {/* Search and filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search categories..."
              className="pl-10 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          {(searchTerm || selectedCategory) && (
            <button
              onClick={clearFilters}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
      
      {/* Results info */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredCategories.length} of {categories.length} categories
        </p>
      </div>
      
      {/* Categories grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No categories found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
      
      {/* Information section */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Select Our Causes</h2>
        <p className="text-gray-600 mb-6">
          We carefully vet all organizations and causes to ensure your donations make the maximum impact. Our selection process includes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600">
              We only partner with organizations that provide complete financial transparency and regular impact reports.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Efficiency</h3>
            <p className="text-gray-600">
              Selected causes must demonstrate efficient use of funds with minimal overhead costs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Track Record</h3>
            <p className="text-gray-600">
              We evaluate each organization's history of impact and effectiveness in their area of focus.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Community Need</h3>
            <p className="text-gray-600">
              We prioritize causes that address critical needs and provide significant benefits to communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;