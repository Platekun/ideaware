import React, { Component } from 'react';
import uuid from 'uuid';
import CarouselSlide from '../CarouselSlide';
import Slider from 'react-slick';
import './Carousel.css';

const CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.renderSlides = this.renderSlides.bind(this);
  }

  renderSlides() {
    return [
      <div key={uuid()} >
        <CarouselSlide
          highlightedText="Sed do eiusmod"
          opaqueText="tempor incididunt"
          subtitle="Sed do eiusmod tempor incididunt"
          bgClassName="carousel__slide--bg1"
          pcClassName="carousel__computer-image--bg1"
        />
      </div>,
      <div key={uuid()} >
        <CarouselSlide
          highlightedText="Et dolore magna"
          opaqueText="aliqua ut enim ad"
          subtitle="Et dolore magna aliqua ut enim ad"
          bgClassName="carousel__slide--bg2"
          pcClassName="carousel__computer-image--bg2"
        />
      </div>,
      <div key={uuid()} >
        <CarouselSlide
          highlightedText="Sed Et dolore eiusmod"
          opaqueText="ut enim ad aliqua"
          subtitle="Sed do eiusmod tempor incididunt"
          bgClassName="carousel__slide--bg3"
          pcClassName="carousel__computer-image--bg1"
        />
      </div>
    ];
  }

  render() {
    const { renderSlides } = this;

    return (
      <section className="carousel">
        <Slider {...CAROUSEL_SETTINGS} >
          {renderSlides()}
        </Slider>
      </section>
    );
  }
}

export default Carousel;
