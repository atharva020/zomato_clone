import React from 'react'
import './topBrands.css'
import Slider from 'react-slick'
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
const brandList = [
    {
        id:1,
        title:"Subway",
        brandImage:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png"
    },  
    {
        id:2,
        title:"Meraki",
        brandImage:"https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png"
    },
    {
        id:3,
        title:"KFC",
        brandImage:"	https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726677983.png"
    },
    {
        id:4,
        title:"Domino's",
        brandImage:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1545285968.png"
    }
]

const settings = {
  
    infinite:false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
}
const TopBrands = () => {
  return (
    <div className='top-brands max-width '>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {brandList.map((brand)=>{
                return <div>
                    <div className='top-brands-item'>
                    <img src={brand.brandImage} alt={brand.title} className='top-brands-image' /> 
                    <div className='top-brands-title'>{brand.title}</div>
                </div>
            </div>
        })}
        </Slider>
      
    </div>
  )
}

export default TopBrands
