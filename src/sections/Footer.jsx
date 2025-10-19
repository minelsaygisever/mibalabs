// src/sections/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-miba-dark-900 text-miba-slate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-miba-gray">
          © {new Date().getFullYear()} MibaLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}