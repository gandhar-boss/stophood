export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  goal: number;
  color: string;
  icon: string;
}

export interface Donation {
  id: string;
  amount: number;
  name: string;
  email: string;
  message?: string;
  anonymous: boolean;
  categoryId: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  role: 'donor' | 'recipient';
  avatar?: string;
  date: string;
  categoryId?: string;
}

export interface DonationFormData {
  amount: number;
  name: string;
  email: string;
  message: string;
  anonymous: boolean;
  categoryId: string;
}

export interface TestimonialFormData {
  name: string;
  message: string;
  role: 'donor' | 'recipient';
  categoryId?: string;
}