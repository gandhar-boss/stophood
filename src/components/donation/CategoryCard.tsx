import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';
import { useDonation } from '../../context/DonationContext';
import { Heart, Droplets, Home, BookOpen, Utensils, PawPrint } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-6 w-6" />,
  Droplets: <Droplets className="h-6 w-6" />,
  Home: <Home className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  Utensils: <Utensils className="h-6 w-6" />,
  PawPrint: <PawPrint className="h-6 w-6" />,
};

interface CategoryCardProps {
  category: Category;
  featured?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, featured = false }) => {
  const { getTotalDonationsByCategory } = useDonation();
  const totalRaised = getTotalDonationsByCategory(category.id);
  const progressPercentage = Math.min(100, Math.round((totalRaised / category.goal) * 100));
  
  return (
    <div className={`card group transition-all duration-300 ${featured ? 'transform hover:-translate-y-2' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white">
            <div className={`p-2 rounded-full ${category.color.replace('text-', 'bg-').replace('-500', '-400')}`}>
              {iconMap[category.icon]}
            </div>
            <h3 className="ml-3 text-xl font-semibold text-white">{category.name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>
        
        <div className="mt-2 mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">${totalRaised.toLocaleString()} raised</span>
            <span className="text-gray-500">Goal: ${category.goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-teal-500 h-2 rounded-full progress-bar-animate relative"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="mt-1 text-xs text-right text-gray-500">{progressPercentage}% of goal</div>
        </div>
        
        <div className="mt-5 flex space-x-3">
          <Link
            to={`/donate?category=${category.id}`}
            className="flex-1 text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            Donate Now
          </Link>
          <Link
            to={`/categories?id=${category.id}`}
            className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;