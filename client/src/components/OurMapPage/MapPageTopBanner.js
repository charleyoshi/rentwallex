import React from 'react'
import mappage_banner from '../../assets/mappage_banner.jpg'

export default function MapPageTopBanner() {
    return (

        <div className='headlineBanner'>
            <img src={mappage_banner} alt="Map page banner" />
            <div className='mapPageTopBanner'>
                <div className='right'>
                    <span>Renters from across Canada are excited to try Rentwallex.</span>
                </div>
            </div>
            <br /><br />
        </div>

    )
}
