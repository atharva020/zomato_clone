import React from 'react'
import Header from '../../components/common/header'
import Option from '../../components/common/option'
import Footer from '../../components/common/footer'
import { useState } from 'react'
import DiningOut from '../../components/common/diningOut'
import Nightlife from '../../components/common/nightlife'
import Delivery from '../../components/common/deliviery'
const HomePage = () => {
  const[activeTab,setActiveTab] = useState('Delivery')
  const getCorrectScreen = (tab) => {
    
    switch(tab){
      case 'Delivery':
        return <Delivery/>
      case 'Dining':
        return <DiningOut/>
      case 'Nightlife':
        return <Nightlife/>
      default:
        return <Delivery/>
    }
  }
  return (
    <div>
   <Header/>
   <Option activeTab={activeTab} setActiveTab={setActiveTab}/>
   {getCorrectScreen(activeTab)}
   <Footer/>
   </div>
  )
}

export default HomePage
