import React from 'react'
import HomePage from '@/components/HomePages/HomeHero'
import FoodCategory from '@/components/HomePages/FoodCatagery'
import OurChefs from '@/components/HomePages/OurChefs'
// import WhyChouseUs from '@/components/HomePages/WhyCouseUs'
// import ChefsHero from '@/components/HomePages/ChefsHero'
// import ChefGrid from '@/components/HomePages/ChefGrid'

const Home = () => {
  return (
    <div>
      <HomePage />
      <FoodCategory />
      <OurChefs />
      {/* <WhyChouseUs /> */}
      {/* <ChefGrid /> */}
    </div>
  )
}

export default Home
