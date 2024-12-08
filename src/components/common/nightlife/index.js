import React from 'react'
import './index.css'
import Filter from '../filter'
import Collections from '../collections'
import { nightLifeData } from '../../../data/nightLife'
import ExploreSection from '../exploreSection'



const nightlifeFilters = [
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
    title:"Offers",
  },
  {
    id:4,
    title:"Pubs & Bars",
  },
]

  const collectionList=[
    {
      id:1,
      title:"Trending",
      cover: "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png",
      places: "12 places"
    },
    {
      id:2,
      title:"Best Bars",
      cover: "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810493.png",
      places: "12 places"
    },
    {
      id:3,
      title:"Best Pubs",
      cover:"https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171292.png",
      places: "12 places"
    },
      {
        id:4,
        title:"Best Clubs",
        cover:"https://b.zmtcdn.com/data/collections/2e8b954961d07f927802853d5944d67b_1709812883.png",
        places: "12 places"
      },
      {
        id:5,
        title:"Best Lounges",
        cover:"https://b.zmtcdn.com/data/collections/a5e6d123ac773de6d33250da4bb3b93f_1731309686.png",
        places: "12 places"
      }

  ]

  const nightlist = nightLifeData;


const Nightlife = () => {
  return (
    <div>
      <div className='max-width'>
        <Filter filtersList={nightlifeFilters}/>
      </div>
      <Collections list={collectionList}/>
      <ExploreSection list={nightlist} collectionName="Nightlife Restaurants in Delhi NCR"/>
    </div>
  )
}

export default Nightlife
