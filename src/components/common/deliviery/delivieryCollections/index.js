import React from 'react'
import './delivieryCollection.css'
import NextArrow from '../../carousel/nextArrow'
import PrevArrow from '../../carousel/prevArrow'
import Slider from 'react-slick'
import DeliveryItem from './deliveryItem'
const deliveryItems = [
    {
        id:1,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:3,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:4,
        title:"Bowls",
        cover:"https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png"
    },
    {
        id:5,
        title:"Panner",
        cover:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },



]


const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const DeliveryCollections = () => {

  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'>
            Eat what makes you happy
        </div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return <DeliveryItem item={item}/>
            })}
        </Slider>
   
      </div>
    </div>
  )
}

export default DeliveryCollections
