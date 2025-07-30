import React from 'react';

const Cookies = () => (
  <div className="container mx-auto p-8">
    {/* Centered Image */}
    <div className="flex justify-center mb-6">
      <img 
        src="https://ik.imagekit.io/dimanag/cars/cookies.jpg?updatedAt=1753868974214"
        alt="Cookies Banner"
        className="w-[300px] h-[300px] object-contain rounded-lg shadow-md"
      />
    </div>

    {/* Text Content */}
    <h1 className="text-3xl font-bold mb-4 text-center">Cookies Policy</h1>
    <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
      We use cookies to enhance your browsing experience. By continuing to use our site, you agree to our cookie policy.
      Cookies help us personalize content, provide social media features, and analyze our traffic.
      You can control how cookies are used through your browser settings.
    </p>
  </div>
);

export default Cookies;
