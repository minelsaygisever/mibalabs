// src/sections/WhatWeDo.jsx

import React from 'react';

import { FiCheck } from 'react-icons/fi';

import PurpleGem from '../assets/images/purple-gem.png';
import GreenGem from '../assets/images/green-gem.png';
import OrangeGem from '../assets/images/orange-gem.png';

const ServiceCard = ({ icon, title, description, features, blurClass }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 scale-hover relative overflow-hidden">
      
      <div 
        className={`absolute -top-10 -right-10 w-32 h-32 ${blurClass} blur-3xl opacity-50`} 
      />

      <div className="relative">
        <img src={icon} alt={`${title} icon`} className="w-24 h-24" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FiCheck className="text-miba-purple mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default function WhatWeDo() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with growth expertise to create mobile
            experiences that users love and businesses trust.
          </p>
        </div>
        
        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Mobile Apps */}
          <ServiceCard
            icon={PurpleGem}
            title="Mobile Apps"
            description="Native-first development with Swift & SwiftUI. We build apps that feel natural, perform flawlessly, and integrate seamlessly with iOS ecosystems."
            features={[
              'Native iOS Development',
              'SwiftUI & UIKit Expertise',
              'App Store Optimization',
            ]}
            blurClass="bg-miba-purple/30"
          />
          
          {/* Card 2: Growth & Optimization */}
          <ServiceCard
            icon={GreenGem}
            title="Growth & Optimization"
            description="CRO strategies backed by real-world testing. We optimize user journeys, increase conversions, and maximize product-market fit."
            features={[
              'A/B Testing & Analytics',
              'User Experience Research',
              'Conversion Rate Optimization',
            ]}
            blurClass="bg-green-500/40"
          />
          
          {/* Card3 3: Web Experiences */}
          <ServiceCard
            icon={OrangeGem}
            title="Web Experiences"
            description="Scalable, conversion-focused websites designed with performance and clarity in mind."
            features={[
              'Website Design & Development',
              'Landing Page Optimization',
              'Conversion-Focused UX',
            ]}
            blurClass="bg-orange-500/30"
          />

        </div>
      </div>
    </section>
  );
}