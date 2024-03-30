import React from 'react'
import Navbar from '../components/Navbar';
import PrivacyContent from '../components/Article/PrivacyContent';


export default function Privacy() {
  return (
      <div className='privacy'>
          {/* todo: change Navbar content if needed */}
          <Navbar />
          <PrivacyContent />
      </div>
  )
}
