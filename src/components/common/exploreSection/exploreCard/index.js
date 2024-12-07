import React from 'react'
import './exploreCard.css'

const ExploreCard = ({data}) => {
    const name=data?.info?.name??"";
    const coverImage=data?.info?.image?.url; 
    const deliveryTime=data?.order?.deliveryTime;
    const rating=data?.info?.rating_text; 
    const approxPrice=data?.info?.cfo?.text;
    const offers=data?.bulkOffers ?? [];
    const cuisines=data?.info?.cuisine?.map((item)=>item.name).slice(0,3).join(", ");
    const buttonContainers=data?.bottonContainers;
    const goldOff=data?.gold?.text;
    const proOff=offers.length>1?offers[0].text:null;
    const discount=offers.length>1?offers[0].text:offers.length===1 ? offers[0].text : null;

  return (
    <div className='explore-card cur-po'>
    <div className='explore-card-cover'>
        <img src={coverImage} alt={name} className='explore-card-image'/>
      
    </div>
    </div>
  )
}

export default ExploreCard
