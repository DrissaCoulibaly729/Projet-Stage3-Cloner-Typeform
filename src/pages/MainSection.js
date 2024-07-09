import React from 'react';
import CardImgGD from '../components/Home/CardImgGD';
import Header from '../components/Home/Header';
import Reviews from '../components/Home/Reviews';
import CardImgDG from '../components/Home/CardImgDG';
import CardImg from '../components/Home/CardImg';
import Card from '../components/Home/Card';
import CardEnPourcentage from '../components/Home/CardEnPourcentage';
import Footer from '../components/Home/Footer';

const MainSection = () => {
  return (

    <div>
    <Header />
    <main className='mt-28'>
      <CardImgGD />
      <Reviews/>
      <CardImgDG/>
      <CardImg/>
      <Card/>
      <CardEnPourcentage/>
      <Footer/>
    </main>
  </div>
  );
};

export default MainSection;
