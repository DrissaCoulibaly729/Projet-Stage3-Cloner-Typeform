import React from 'react';

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-center text-lg mb-9">Rated 4.5 out of 600+ reviews on G2.com and trusted by</p>
      <div className="flex justify-center space-x-20">
        <img src="/svg/airbnb-logo.svg" alt="Review 1" className="w-24 h-auto" />
        <img src="/svg/mailchimp-logo.svg" alt="Review 2" className="w-24 h-auto" />
        <img src="/svg/hermes-logo.svg" alt="Review 2" className="w-24 h-auto" />
        <img src="/svg/hubspot-logo.svg" alt="Review 3" className="w-24 h-auto" />
        <img src="/svg/barrys-logo.svg" alt="Review 4" className="w-24 h-auto" />
      </div>
    </div>
  );
};

export default Reviews;
