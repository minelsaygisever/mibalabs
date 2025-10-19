// src/sections/Contact.jsx

import React from 'react';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  
  const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL;

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-miba-purple to-miba-indigo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-shadow">
            Let's Work Together
          </h2>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            Whether you're looking to partner, invest, or collaborate — we're open to 
            meaningful conversations that create lasting impact.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form 
            action={FORM_ENDPOINT} 
            method="POST" 
            className="space-y-6"
          >
            {/* 1. İsim Alanı */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-purple-100 mb-2"
              >
                Your full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 
                           text-white placeholder-white/60 focus:outline-none 
                           focus:ring-2 focus:ring-white/80 transition-all"
                placeholder="Your full name"
              />
            </div>
            
            {/* 2. Email Alanı */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-purple-100 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 
                           text-white placeholder-white/60 focus:outline-none 
                           focus:ring-2 focus:ring-white/80 transition-all"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-purple-100 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 
                           text-white placeholder-white/60 focus:outline-none 
                           focus:ring-2 focus:ring-white/80 transition-all"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-white text-miba-purple-deep 
                           px-10 py-4 rounded-full text-lg font-bold
                           hover:bg-gray-200 transition-all duration-300 scale-hover"
              >
                <FiSend className="mr-3 -ml-1 w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}