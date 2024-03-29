import React from 'react'
import Navbar from '../components/Navbar'
import Article from '../components/Article/Article'

export default function WhoWeAre() {
  return (
    <div className='whoweare'>
      {/* todo: change Navbar content if needed */}
      <Navbar />
      <Article forWhoWeAre={true} />




    </div>
  )
}
