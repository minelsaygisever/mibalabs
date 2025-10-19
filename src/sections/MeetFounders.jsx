// src/sections/MeetFounders.jsx

import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

import MinelImg from '../assets/images/minel.png';
import BarisImg from '../assets/images/baris.png';

const FounderCard = ({
  image,
  name,
  title,
  titleStyle,
  description,
  links,
}) => {
  return (
    <div 
      className={`bg-white rounded-3xl p-8 border border-gray-200/50
                  shadow-xl transition-all duration-300 transform hover:scale-[1.02] 
                  relative overflow-hidden`}
    >
      <div className="relative w-32 h-32 mx-auto mb-6 z-10">
        <div className="absolute inset-0 transform scale-x-[1.3] scale-y-[0.6] blur-3xl"> 
          
          <div
              className={`absolute inset-0 rounded-full opacity-80 animate-glow will-change-transform ${ 
              name.includes("Minel")
                  ? "bg-gradient-to-br from-miba-purple/60 via-purple-500/50 to-indigo-400/50"
                  : "bg-gradient-to-br from-green-400/60 via-emerald-400/50 to-teal-400/50"
              }`}
          />
          <div
              className={`absolute inset-0 rounded-full opacity-70 animate-glow will-change-transform ${
              name.includes("Minel")
                  ? "bg-gradient-to-tr from-purple-500/60 to-indigo-400/60"
                  : "bg-gradient-to-tr from-green-400/60 to-emerald-300/60"
              }`}
              style={{ animationDelay: '3s' }} 
          />
        </div>

        
        <div className="absolute inset-0 bg-white opacity-40 rounded-full shadow-lg" />

        <img
            src={image}
            alt={name}
            className="relative w-full h-full rounded-full object-cover border-2 border-white shadow-l"
        />
        </div>

      <div className="text-center relative z-10">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <h4 className={`text-md ${titleStyle} text-center mb-4`}>
          {title}
        </h4>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex justify-center items-center space-x-5 pt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-800 transition-colors"
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function MeetFounders() {
  const founders = [
    {
      image: MinelImg,
      name: "Minel Saygısever Akgün",
      title: "Software Engineer",
      titleStyle: "font-medium text-gray-700", 
      description: "Expert in building high-performance mobile and web applications using Python, Java, React, AWS, and iOS technologies, with a focus on clean architecture, scalability, maintainability, and refined user experience.",
      links: [
        { icon: <FaGlobe className="w-6 h-6" />, url: "https://www.minelsaygisever.com/", ariaLabel: "Minel's Website" } ,
        { icon: <FaLinkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/minelsaygisever/", ariaLabel: "Minel's LinkedIn" },
        { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/minelsaygisever", ariaLabel: "Minel's GitHub" }
      ],
      colorBlurClass: "bg-miba-purple/30",
      shapeClass: "organic-shape-1" 
    },
    {
      image: BarisImg,
      name: "Barış Akgün",
      title: "CRO & Product Strategist",
      titleStyle: "font-semibold text-gray-800",
      description: "Expert in conversion rate optimization and product strategy with a data-driven approach to growth. Combines user psychology with analytical insights to maximize product success and user engagement across digital platforms.",
      links: [
        { icon: <FaGlobe className="w-6 h-6" />, url: "https://www.bariskgn.com/", ariaLabel: "Barış's Website" },
        { icon: <FaLinkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/bariskgn/", ariaLabel: "Barış's LinkedIn" },
      ],
      colorBlurClass: "bg-green-500/30",
      shapeClass: "organic-shape-2" 
    }
  ];

  return (
    <section id="founders" className="py-24 bg-white"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet the Founders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two passionate professionals combining technical expertise with strategic 
            insight to build scalable, impactful digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>

      </div>
    </section>
  );
}