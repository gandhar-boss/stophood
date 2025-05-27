import React from 'react';
import { Testimonial } from '../../types';
import { formatDistanceToNow } from '../../utils/dateUtils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const roleColors = {
    donor: 'bg-blue-100 text-blue-800',
    recipient: 'bg-green-100 text-green-800'
  };
  
  const placeholderAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
  const avatar = testimonial.avatar || placeholderAvatar;
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="relative">
              <img
                src={avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
              />
              <span className="absolute -bottom-1 -right-1 inline-flex items-center justify-center p-1 bg-white rounded-full border border-gray-200">
                <Quote size={14} className="text-teal-500" />
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-medium text-gray-900 truncate">{testimonial.name}</h4>
            <p className="mt-1 text-sm text-gray-500">
              {formatDistanceToNow(new Date(testimonial.date))} ago
            </p>
          </div>
          <div className="ml-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${roleColors[testimonial.role]}`}>
              {testimonial.role === 'donor' ? 'Donor' : 'Recipient'}
            </span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">
            "{testimonial.message}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;