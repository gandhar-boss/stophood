import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Category, Donation, Testimonial } from '../types';
import { sampleCategories, sampleDonations, sampleTestimonials } from '../data/sampleData';

interface DonationContextType {
  categories: Category[];
  donations: Donation[];
  testimonials: Testimonial[];
  addDonation: (donation: Omit<Donation, 'id' | 'date'>) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'date'>) => void;
  getTotalDonationsByCategory: (categoryId: string) => number;
  getRecentDonations: (limit?: number) => Donation[];
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};

interface DonationProviderProps {
  children: ReactNode;
}

export const DonationProvider: React.FC<DonationProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(sampleCategories);
  const [donations, setDonations] = useState<Donation[]>(sampleDonations);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(sampleTestimonials);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedCategories = localStorage.getItem('categories');
    const storedDonations = localStorage.getItem('donations');
    const storedTestimonials = localStorage.getItem('testimonials');

    if (storedCategories) setCategories(JSON.parse(storedCategories));
    if (storedDonations) setDonations(JSON.parse(storedDonations));
    if (storedTestimonials) setTestimonials(JSON.parse(storedTestimonials));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('donations', JSON.stringify(donations));
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [categories, donations, testimonials]);

  const addDonation = (donation: Omit<Donation, 'id' | 'date'>) => {
    const newDonation: Donation = {
      ...donation,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    setDonations((prev) => [newDonation, ...prev]);
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'date'>) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    setTestimonials((prev) => [newTestimonial, ...prev]);
  };

  const getTotalDonationsByCategory = (categoryId: string): number => {
    return donations
      .filter((donation) => donation.categoryId === categoryId)
      .reduce((total, donation) => total + donation.amount, 0);
  };

  const getRecentDonations = (limit = 5): Donation[] => {
    return [...donations]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  return (
    <DonationContext.Provider
      value={{
        categories,
        donations,
        testimonials,
        addDonation,
        addTestimonial,
        getTotalDonationsByCategory,
        getRecentDonations,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};