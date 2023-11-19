import React from 'react'
import Navbar from '../../componants/navbar/Navbar';
import Header from '../../componants/header/Header';
import './home.css'
import Featured from '../../componants/featured/Featured';
import Property from '../../componants/propertyList/Property';
import FeaturedProperties from '../../componants/featuredProperties/FeaturedProperties';
import MailList from '../../componants/mailList/MailList';
import Footer from '../../componants/footer/Footer';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">browser by property type</h1>
        <Property />
        <h1 className="homeTitle">browser by Features</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>

    </div>
  )
}
export default Home;