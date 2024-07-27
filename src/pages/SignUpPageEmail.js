import React from 'react';
import LeftSection from '../components/Auth/LeftSection';
import RightSectionEmail from '../components/Auth/RightSectionEmail';

const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <LeftSection />
      <RightSectionEmail />
    </div>
  );
};

export default SignUpPage;
