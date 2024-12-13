import React from 'react'
import HomePage from '@/components/HomePages/HomeHero'
import FoodCategory from '@/components/HomePages/FoodCatagery' 
import WhyChouseUs from '@/components/HomePages/WhyCouseUs'
import OurChefs from '@/components/HomePages/OurChefs'
// import ChefsHero from '@/components/HomePages/ChefsHero'
// import ChefGrid from '@/components/HomePages/ChefGrid'

const Home = () => {
  return (
    <div>
      <HomePage />
      <FoodCategory />
      <WhyChouseUs />
      <OurChefs />
      {/* <ChefGrid /> */}
    </div>
  )
}

export default Home
