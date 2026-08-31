// Clean footer with direct links and professional profile badges.

import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-30">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          I am currently looking for job opportunities in data science and machine learning. 
          Whether you have an offer or just want to ask a question, click the link!
        </p>
        <a 
          href="mailto:your.email@example.com" 
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 6.013-9.518-6.013h19.036zm-19.518 14v-11.817l10 6.32 10-6.32v11.817h-20z"/>
          </svg>
          <span>Say Hello</span>
        </a>
      </div>
    </footer>
  );
}

// return React.createElement()