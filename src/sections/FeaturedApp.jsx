// src/sections/FeaturedApp.jsx

import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FiShield, FiGlobe, FiSmartphone } from 'react-icons/fi';

import AppIcon from '../assets/images/converter-savings-appicon.png';
import AppScreen1 from '../assets/images/cs-app-1.png';
import AppScreen2 from '../assets/images/cs-app-2.png';
import AppScreen3 from '../assets/images/cs-app-3.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  </div>
);

export default function FeaturedApp() {
    const appScreens = [AppScreen1, AppScreen2, AppScreen3];
  return (
    <section id="apps" className="py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
        
          <div className="lg:col-start-2 lg:row-start-1">
            {/* Title and Icon */}
            <div className="flex items-center">
              <img 
                src={AppIcon} 
                alt="Currency & Savings by Miba app icon" 
                className="w-20 h-20 rounded-[22px] shadow-lg mr-5" 
              />
              <div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Currency & Savings by Miba
                </h2>
              </div>
            </div>
          </div>
          
          <div className="w-full h-auto lg:h-[520px] flex items-center justify-center 
                          lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative w-full max-w-lg h-full flex items-center justify-center">
              
              {/* Left Blob */}
              <div
                className="absolute z-0 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2
                           w-[400px] h-[400px] 
                           bg-miba-purple/20 rounded-full blur-3xl"
              />
              {/* Right Blob */}
              <div
                className="absolute z-0 top-1/2 right-0 translate-x-1/2 -translate-y-1/2
                           w-[400px] h-[400px] 
                           bg-miba-indigo/15 rounded-full blur-3xl" 
              />
              <div className="relative z-10 w-full h-full rounded-[4rem] 
                          bg-white 
                          border border-white border-opacity-60 
                          shadow-lg shadow-gray-200/50 
                          flex items-center justify-center">

                {/* SWIPER */}
                <Swiper
                  modules={[EffectCoverflow, Autoplay]}
                  effect="coverflow"
                  coverflowEffect={{
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  spaceBetween={-30}
                  loop={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: false,
                  }}
                  allowTouchMove={false} 
                  grabCursor={false}
                  className="w-full max-w-lg cursor-default" 
                >
                  {[...appScreens, ...appScreens].map((screen, index) => (
                    <SwiperSlide 
                      key={index} 
                      className="w-72" 
                    >
                      <img 
                        src={screen} 
                        alt={`App screenshot ${index + 1}`} 
                        draggable="false" 
                        className="w-full h-auto rounded-3xl select-none"
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:col-start-2 lg:row-start-2">
            {/* Descrption */}
            <p className="text-lg text-gray-600 leading-relaxed">
              A privacy-first currency converter and savings tracker, live on 
              the App Store in 40+ languages. Built with native Swift and 
              designed for seamless daily use.
            </p>

            {/* Features */}
            <div className="space-y-5">
              <FeatureItem
                icon={<FiShield className="text-miba-purple w-6 h-6" />}
                title="Privacy First"
                subtitle="No data collection or tracking"
              />
              <FeatureItem
                icon={<FiGlobe className="text-miba-purple w-6 h-6" />}
                title="40+ Languages"
                subtitle="Localized for global users"
              />
              <FeatureItem
                icon={<FiSmartphone className="text-miba-purple w-6 h-6" />}
                title="Native iOS"
                subtitle="Built with Swift & SwiftUI"
              />
            </div>

            {/* Download Button */}
            <a
              href="https://apps.apple.com/tr/app/currency-savings-by-miba/id6748993709" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-700 transition-all duration-300 scale-hover"
            >
              <FaApple className="text-2xl mr-3" />
              Download on App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}