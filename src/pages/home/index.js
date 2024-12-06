import React from 'react'
import Header from '../../components/common/header'
import Option from '../../components/common/option'
import Footer from '../../components/common/footer'
import { useState } from 'react'
const HomePage = () => {
  const[activeTab,setActiveTab] = useState('Delivery')
  const getCorrectScreen = (tab) => {
    
    switch(tab){
      case 'Delivery':
        return <div>Delivery</div>
      case 'Dining':
        return <div>Dining</div>
      case 'Nightlife':
        return <div>Nightlife</div> 
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
