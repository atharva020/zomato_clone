import React from 'react'
import './index.css'
import Filter from '../filter'
import DeliveryCollections from './delivieryCollections'
import TopBrands from './topBrands'
const Delivery = () => {

  const deliveryFilters = [
    {
      id:1,
      icon:<i className='fi fi-rr-settings-sliders absolute-center'/>,
      title:"Filters",
    },
    {
      id:2,
      
      title:"Rating 4.0+",
    },
    {
      id:3,
      title:"Safe and Hygienic",
    },
    {
      id:4,
      title:"Cuisines",
    },
    {
      id:5,
      title:"Delivery Time",
    },
    {
      id:6,
      title:"Great Offers",
    },
    

  ]
   
  return (
    <div >
      <div className='max-width'>
        <Filter filtersList={deliveryFilters}/>
        <DeliveryCollections/>
        <TopBrands/>
      </div>
    </div>
  )
}

export default Delivery
