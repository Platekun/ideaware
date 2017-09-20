import React from 'react';
import Header from '../presentational/Header';
import Carousel from '../Carousel';
import Explanation from '../presentational/Explanation';
import VideoCatalog from '../VideoCatalog';
import Footer from '../presentational/Footer';

const HomePage = () => (
  <div>
    <Header />
    <main>
      <Carousel />
      <Explanation />
      <VideoCatalog />
    </main>
    <Footer />
  </div>
);

export default HomePage;
