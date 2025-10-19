// src/sections/Testimonials.jsx

import React from 'react';
import { FaStar } from 'react-icons/fa'; 

const TestimonialCard = ({ initials, name, title, rating, quote, colorClass }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200/50 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center mb-5">
        <div 
          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center 
                      text-white font-bold text-xl ${colorClass}`}
        >
          {initials}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        {Array(rating).fill(0).map((_, index) => (
          <FaStar key={index} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed">
        "{quote}"
      </p>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      initials: 'S',
      name: 'Sarah Chen',
      title: 'Product Manager',
      rating: 5,
      quote: "MibaLabs transformed our mobile strategy completely. Their attention to user privacy and performance optimization helped us achieve a 300% increase in user retention.",
      colorClass: 'bg-miba-purple'
    },
    {
      initials: 'M',
      name: 'Marcus Rodriguez',
      title: 'Startup Founder',
      rating: 5,
      quote: "Working with Minel and Barış was incredible. They not only built our app beautifully but also helped us understand our users better through data-driven insights.",
      colorClass: 'bg-miba-indigo'
    },
    {
      initials: 'L',
      name: 'Lisa Thompson',
      title: 'App Store User',
      rating: 5,
      quote: "Currency & Savings by Miba is exactly what I needed. Clean, fast, and respects my privacy. It's rare to find apps that actually care about user experience this much.",
      colorClass: 'bg-miba-light' 
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50/80"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our users, partners, and clients about their experience working with MibaLabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
}