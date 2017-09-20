import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../presentational/Wrapper';

const CarouselSlide = (props) => (
  <div className={`carousel__slide ${props.bgClassName}`}>
    <Wrapper>
      <div className="carousel__slide-content">
        <h3 className="carousel__slide-title">{props.highlightedText} <span>{props.opaqueText}</span></h3>
        <p className="carousel__slide-subtitle">{props.subtitle}</p>
      </div>
    </Wrapper>
    <div className={`carousel__computer-image ${props.pcClassName}`}/>
    <div className="carousel__computer" />
  </div>
);

CarouselSlide.propTypes = {
  bgClassName: PropTypes.string,
  highlightedText: PropTypes.string.isRequired,
  opaqueText: PropTypes.string.isRequired,
  pcClassName: PropTypes.string,
  subtitle: PropTypes.string.isRequired
};

export default CarouselSlide;
