import React from 'react'
import './collections.css'
import Slider from 'react-slick'

import NextArrow from '../carousel/nextArrow'
import PrevArrow from '../carousel/prevArrow'

const settings = {
 
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collections = ({list}) => {
  return (
    <div className='collection-wrapper'>
      <div className='max-width collection'>
        <div className='collection-title'>
          Collections
        </div>
        <div className='collection-subtitle-row'>
          <div className='collection-subtitle-text'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
          </div>
          <div className='collection-location'>
              <div>All collections in Delhi NCR</div>
              <i className='fi fi-rr-caret-right absolute-center'></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item)=>(
            <div>
              <div className='collection-cover'>
                <img src={item.cover} alt={item.title} className='collection-image' />
                <div className='gradient-layer'></div>
                <div className='collection-card-title'>{item.title}</div>
                <div className='collection-card-subtitle'>
                  <div>{item.places} places</div>
                  <i className='fi fi-rr-caret-right absolute-center'></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
      
    </div>
  )
}

export default Collections;

