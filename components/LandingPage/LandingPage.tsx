import React from 'react'
import Header from './Header/Header'
import WhyChoose from './WhyChoose/WhyChoose'
import Properties from './ExploreProperties/Properties'
import BestProperties from './BestProperties/BestProperties'
import Different from './MakeDifferent/Different'
import Subscribe from './Subscribe/Subscribe'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-[1440px] w-11/12 mx-auto pt-14">
        <Header />
        <WhyChoose />
        <Properties />
        <BestProperties />
        <Different/>
        <Subscribe/>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage
