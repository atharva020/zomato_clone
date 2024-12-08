import React from 'react'
import './index.css'
import Collections from '../collections'
const collectionsList = [
  {
    id:1,
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/ecec46ffb5bc20bebe0857c47f630fc5_1535354925.jpg?output-format=webp",
    places:"12 places"
  },
  {
    id:2,
    title:"Collections",
    cover:"https://b.zmtcdn.com/data/collections/cc6ea486370806c8c9b4704f0854e243_1539668755.jpg?output-format=webp", 
    places:"12 places"
  },
  {
    id:3,
    title:"Collections",
    cover:"https://b.zmtcdn.com/data/collections/2e5c5dc79d4b465797c8e425d814f42c_1582256432.jpg?output-format=webp",
    places:"12 places"
  }
]
const DiningOut = () => {
  return (
    <div>
      <Collections list={collectionsList} />
    </div>
  )
}

export default DiningOut
