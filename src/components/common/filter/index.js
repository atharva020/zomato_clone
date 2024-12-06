import React from 'react'
import './filter.css'
import FilterItem from './filterItem'
const Filter = ({filtersList}) => {
  return (
    <div className='filters'>
        {filtersList && filtersList.map((filter)=>{
            return <FilterItem filter={filter} key={filter.id}/>
        })}
    </div>
  )
}

export default Filter
