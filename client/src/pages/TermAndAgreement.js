import React from 'react'
import Navbar from '../components/Navbar';
import TermAndAgreementContent from '../components/Article/TermAndAgreementContent';


export default function TermAndAgreement() {
  return (
      <div className='termandagreement'>
          {/* todo: change Navbar content if needed */}
          <Navbar />
          <TermAndAgreementContent/>
      </div>
  )
}