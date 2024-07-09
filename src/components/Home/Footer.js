import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Product</h2>
            <ul>
              <li>Pricing</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Templates</h2>
            <ul>
              <li>Popular templates</li>
              <li>Recent templates</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Integrations</h2>
            <ul>
              <li>Popular integration apps</li>
              <li>More integration apps</li>
              <li>Popular app categories</li>
              <li>More app categories</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Help center</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li>FAQs</li>
              <li>Why Typeform</li>
              <li>Referral program</li>
              <li>Partners</li>
              <li>System status</li>
              <li>Developers / API</li>
              <li>About us</li>
              <li>Brand</li>
              <li>Careers</li>
              <li>Contact sales</li>
              <li>News</li>
              <li>Terms & conditions</li>
              <li>Typeform (es)</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <FaFacebook className="text-white text-2xl mx-2" />
          <FaTwitter className="text-white text-2xl mx-2" />
          <FaInstagram className="text-white text-2xl mx-2" />
          <FaYoutube className="text-white text-2xl mx-2" />
          <FaLinkedin className="text-white text-2xl mx-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
