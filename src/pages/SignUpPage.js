import React from 'react';
import LeftSection from '../components/Auth/LeftSection';
import RightSection from '../components/Auth/RightSection';

const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default SignUpPage;
