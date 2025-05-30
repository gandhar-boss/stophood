import { Category, Donation, Testimonial } from '../types';
import { Heart, Droplets, Home, BookOpen, Utensils, PawPrint } from 'lucide-react';

export const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'Healthcare',
    description: 'Support medical treatments and healthcare services for those in need.',
    image: 'https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg',
    goal: 50000,
    color: 'text-red-500',
    icon: 'Heart',
  },
  {
    id: '2',
    name: 'Clean Water',
    description: 'Help provide clean water solutions to communities facing water scarcity.',
    image: 'https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg',
    goal: 30000,
    color: 'text-blue-500',
    icon: 'Droplets',
  },
  {
    id: '3',
    name: 'Housing',
    description: 'Support affordable housing initiatives for vulnerable populations.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    goal: 75000,
    color: 'text-yellow-500',
    icon: 'Home',
  },
  {
    id: '4',
    name: 'Education',
    description: 'Support educational programs and resources for underprivileged students.',
    image: 'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg',
    goal: 40000,
    color: 'text-green-500',
    icon: 'BookOpen',
  },
  {
    id: '5',
    name: 'Food Security',
    description: 'Help provide meals and sustainable food solutions to those experiencing hunger.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    goal: 25000,
    color: 'text-orange-500',
    icon: 'Utensils',
  },
  {
    id: '6',
    name: 'Animal Welfare',
    description: 'Support shelters and rescue organizations caring for animals in need.',
    image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg',
    goal: 20000,
    color: 'text-purple-500',
    icon: 'PawPrint',
  },
];

export const sampleDonations: Donation[] = [
  {
    id: '1',
    amount: 250,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    message: 'Happy to support this important cause!',
    anonymous: false,
    categoryId: '1',
    date: '2023-05-15T08:30:00Z',
  },
  {
    id: '2',
    amount: 100,
    name: 'Anonymous',
    email: 'anonymous@example.com',
    message: 'Keep up the good work',
    anonymous: true,
    categoryId: '2',
    date: '2023-05-14T15:45:00Z',
  },
  {
    id: '3',
    amount: 500,
    name: 'Maria Garcia',
    email: 'maria@example.com',
    message: 'This cause is close to my heart',
    anonymous: false,
    categoryId: '3',
    date: '2023-05-13T12:15:00Z',
  },
  {
    id: '4',
    amount: 75,
    name: 'Jamal Wilson',
    email: 'jamal@example.com',
    message: 'Education matters!',
    anonymous: false,
    categoryId: '4',
    date: '2023-05-12T09:20:00Z',
  },
  {
    id: '5',
    amount: 150,
    name: 'Anonymous',
    email: 'anonymous2@example.com',
    anonymous: true,
    categoryId: '1',
    date: '2023-05-11T14:10:00Z',
  },
  {
    id: '6',
    amount: 200,
    name: 'Elena Kim',
    email: 'elena@example.com',
    message: 'Everyone deserves clean water',
    anonymous: false,
    categoryId: '2',
    date: '2023-05-10T11:05:00Z',
  },
  {
    id: '7',
    amount: 300,
    name: 'David Smith',
    email: 'david@example.com',
    message: 'Hope this helps someone find a safe place to live',
    anonymous: false,
    categoryId: '3',
    date: '2023-05-09T16:30:00Z',
  },
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Brown',
    message: 'Donating through this platform was seamless and I appreciate the transparency in how funds are used. Will definitely donate again!',
    role: 'donor',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    date: '2023-05-08T10:15:00Z',
    categoryId: '1',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    message: 'The medical support I received thanks to donations changed my life. I\'m forever grateful to everyone who contributed.',
    role: 'recipient',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    date: '2023-05-07T14:25:00Z',
    categoryId: '1',
  },
  {
    id: '3',
    name: 'Roberto Martinez',
    message: 'Our community now has access to clean water thanks to these donations. The impact on our daily lives has been immeasurable.',
    role: 'recipient',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    date: '2023-05-06T09:40:00Z',
    categoryId: '2',
  },
  {
    id: '4',
    name: 'Linda Chen',
    message: 'I love that I can choose exactly where my donation goes and see the direct impact. The progress tracking feature is fantastic!',
    role: 'donor',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    date: '2023-05-05T16:55:00Z',
    categoryId: '4',
  },
  {
    id: '5',
    name: 'James Wilson',
    message: 'The education fund helped me pursue my dream of going to college. I\'m the first in my family to attend university.',
    role: 'recipient',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    date: '2023-05-04T11:30:00Z',
    categoryId: '4',
  },
];